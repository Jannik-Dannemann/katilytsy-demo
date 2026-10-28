"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { PRODUCTS } from "@/lib/content";
import { row, wrap } from "@/lib/email-templates";
import { getStripe, STRIPE_PRICE_IDS } from "@/lib/stripe";
import { sendNotification } from "@/lib/email";
import type { FormState } from "@/lib/form";

function text(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function submitContact(
  _previous: FormState,
  formData: FormData,
): Promise<FormState> {
  const name = text(formData, "name");
  const email = text(formData, "email");
  const phone = text(formData, "phone");
  const company = text(formData, "company");
  const message = text(formData, "message");
  const source = text(formData, "source") || "Yhteydenotto";
  const consent = text(formData, "consent");

  if (!name || !email || !message) {
    return {
      status: "error",
      message: "Täytä nimi, sähköposti ja viesti.",
    };
  }

  if (!isEmail(email)) {
    return { status: "error", message: "Tarkista sähköpostiosoite." };
  }

  if (consent !== "on") {
    return {
      status: "error",
      message: "Hyväksy tietojesi käsittely, jotta voin vastata viestiisi.",
    };
  }

  const html = wrap(
    `${source} – uusi viesti`,
    [
      row("Nimi", name),
      row("Sähköposti", email),
      row("Puhelin", phone),
      row("Yritys", company),
      row("Viesti", message),
      row("Lähde", source),
    ].join(""),
  );

  const result = await sendNotification({
    subject: `${source}: ${name}`,
    html,
    replyTo: email,
  });

  if (!result.ok) {
    return {
      status: "error",
      message:
        "Viestin lähettäminen ei juuri nyt onnistunut. Lähetä sähköpostia osoitteeseen kati@katilytsy.fi.",
    };
  }

  return {
    status: "success",
    message: "Kiitos viestistä! Kati palaa asiaan mahdollisimman pian.",
  };
}

export async function subscribeNewsletter(
  _previous: FormState,
  formData: FormData,
): Promise<FormState> {
  const email = text(formData, "email");
  const consent = text(formData, "consent");

  if (!isEmail(email)) {
    return { status: "error", message: "Tarkista sähköpostiosoite." };
  }

  if (consent !== "on") {
    return { status: "error", message: "Hyväksy tietojesi käsittely jatkaaksesi." };
  }

  const result = await sendNotification({
    subject: "Uusi uutiskirjeen tilaaja",
    html: wrap("Uusi uutiskirjeen tilaaja", row("Sähköposti", email)),
    replyTo: email,
  });

  if (!result.ok) {
    return {
      status: "error",
      message:
        "Liittyminen ei juuri nyt onnistunut. Lähetä sähköpostia osoitteeseen kati@katilytsy.fi.",
    };
  }

  return {
    status: "success",
    message:
      "Tervetuloa mukaan! Kati lähettää sinulle välipalaoppaan ja vahvistusviestin sähköpostitse.",
  };
}

export async function startStripeCheckout(
  _previous: FormState,
  formData: FormData,
): Promise<FormState> {
  const consent = text(formData, "consent");
  const notes = text(formData, "notes");
  const rawItems = text(formData, "items");

  if (consent !== "on") {
    return { status: "error", message: "Hyväksy tietojen käsittely jatkaaksesi." };
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(rawItems);
  } catch {
    return { status: "error", message: "Ostoskori ei ole enää voimassa. Päivitä sivu." };
  }

  if (!Array.isArray(parsed)) {
    return { status: "error", message: "Ostoskori ei ole enää voimassa. Päivitä sivu." };
  }

  const lines = parsed
    .map((line) => {
      if (!line || typeof line !== "object") return null;
      const id = "id" in line ? String(line.id) : "";
      const qty = "qty" in line ? Number(line.qty) : 0;
      const product = PRODUCTS.find((item) => item.id === id);
      if (!product || !Number.isFinite(qty) || qty < 1) return null;
      return { product, qty: Math.min(99, Math.floor(qty)) };
    })
    .filter((line): line is { product: (typeof PRODUCTS)[number]; qty: number } => Boolean(line));

  if (lines.length === 0) {
    return { status: "error", message: "Ostoskori on tyhjä." };
  }

  const unmapped = lines.filter((line) => !STRIPE_PRICE_IDS[line.product.id]);
  if (unmapped.length > 0) {
    return {
      status: "error",
      message: "Yhtä tai useampaa tuotetta ei ole yhdistetty maksamiseen. Ota yhteyttä myyjään.",
    };
  }

  const stripe = getStripe();
  const headerList = await headers();
  const proto = headerList.get("x-forwarded-proto") ?? "http";
  const host = headerList.get("host") ?? "localhost:3000";
  const origin = `${proto}://${host}`;
  const orderId = crypto.randomUUID();

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: lines.map((line) => ({
      price: STRIPE_PRICE_IDS[line.product.id],
      quantity: line.qty,
    })),
    client_reference_id: orderId,
    phone_number_collection: { enabled: true },
    metadata: {
      order_id: orderId,
      notes: notes.slice(0, 400),
    },
    success_url: `${origin}/verkkokauppa/kiitos?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/verkkokauppa/kassa`,
  });

  if (!session.url) {
    return {
      status: "error",
      message: "Maksun aloittaminen ei onnistunut. Yritä hetken kuluttua uudelleen.",
    };
  }

  redirect(session.url);
}
