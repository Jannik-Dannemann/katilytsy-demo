import { NextResponse, type NextRequest } from "next/server";
import Stripe from "stripe";
import { sendNotification } from "@/lib/email";
import { orderEmailHtml } from "@/lib/email-templates";
import { getStripe } from "@/lib/stripe";

export async function POST(request: NextRequest) {
  let stripe: Stripe;
  try {
    stripe = getStripe();
  } catch {
    return new NextResponse("Stripe is not configured.", { status: 500 });
  }

  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  const signature = request.headers.get("stripe-signature");

  if (!secret || !signature) {
    return new NextResponse("Missing webhook secret or signature.", { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(await request.text(), signature, secret);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return new NextResponse(`Webhook signature error: ${message}`, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const summary = event.data.object as Stripe.Checkout.Session;
    const session = await stripe.checkout.sessions.retrieve(summary.id, {
      expand: ["line_items", "customer_details"],
    });

    const rawLines =
      session.line_items && typeof session.line_items === "object"
        ? session.line_items.data ?? []
        : [];

    const lines = rawLines.map((line) => ({
      name: line.description ?? "Tuntematon tuote",
      qty: line.quantity ?? 1,
      amountCents: line.amount_total ?? 0,
    }));

    const customer = session.customer_details;
    const email = customer?.email ?? session.customer_email ?? null;
    const total = session.amount_total ?? 0;
    const orderId = session.client_reference_id ?? session.metadata?.order_id;

    const html = orderEmailHtml({
      title: "Uusi verkkokauppatilaus (maksettu Stripeillä)",
      orderId,
      name: customer?.name,
      email,
      phone: customer?.phone,
      notes: session.metadata?.notes,
      lines,
      totalCents: total,
      paymentNote: "Stripe Checkout – maksu vahvistettu",
    });

    await sendNotification({
      subject: `Maksettu tilaus: ${customer?.name ?? email ?? "tuntematon"} (${(total / 100).toFixed(2).replace(".", ",")} €)`,
      html,
      replyTo: email ?? undefined,
    });
  }

  return NextResponse.json({ received: true });
}
