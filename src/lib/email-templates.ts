export function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function row(label: string, value: string) {
  if (!value) return "";
  return `<tr><td style="padding:6px 12px 6px 0;color:#6e695f;vertical-align:top">${label}</td><td style="padding:6px 0">${escapeHtml(value)}</td></tr>`;
}

export function wrap(title: string, rows: string) {
  return `<div style="font-family:Arial,Helvetica,sans-serif;color:#12120f;line-height:1.6;max-width:640px">
    <h2 style="margin:0 0 16px;font-size:20px">${escapeHtml(title)}</h2>
    <table style="border-collapse:collapse;font-size:14px">${rows}</table>
  </div>`;
}

export type OrderLine = { name: string; qty: number; amountCents: number };

export function orderEmailHtml(input: {
  title: string;
  orderId?: string;
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  notes?: string | null;
  lines: OrderLine[];
  totalCents: number;
  paymentNote?: string;
}) {
  const orderLines = input.lines
    .map(
      (line) =>
        `<tr><td style="padding:4px 12px 4px 0">${escapeHtml(line.name)}</td><td style="padding:4px 12px 4px 0">${line.qty} kpl</td><td style="padding:4px 0">${(line.amountCents / 100).toFixed(2).replace(".", ",")} €</td></tr>`,
    )
    .join("");

  const total = `${(input.totalCents / 100).toFixed(2).replace(".", ",")} €`;

  return wrap(
    input.title,
    [
      row("Tilausnumero", input.orderId ?? ""),
      row("Nimi", input.name ?? ""),
      row("Sähköposti", input.email ?? ""),
      row("Puhelin", input.phone ?? ""),
      row("Lisätiedot", input.notes ?? ""),
      input.paymentNote ? row("Maksu", input.paymentNote) : "",
    ].join("") +
      `<tr><td colspan="2" style="padding:18px 0 6px"><strong>Tilauksen sisältö</strong></td></tr>${orderLines}<tr><td colspan="2" style="padding-top:12px"><strong>Yhteensä ${total}</strong></td></tr>`,
  );
}
