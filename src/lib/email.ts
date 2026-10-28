type SendNotificationInput = {
  subject: string;
  html: string;
  replyTo?: string;
};

export async function sendNotification({
  subject,
  html,
  replyTo,
}: SendNotificationInput): Promise<{ ok: boolean; simulated?: boolean }> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL ?? "kati@katilytsy.fi";
  const from = process.env.RESEND_FROM ?? "Kati Lytsy <noreply@katilytsy.fi>";

  if (!apiKey) {
    console.info(`[email] RESEND_API_KEY puuttuu. Viestiä ei lähetetty: ${subject}`);
    return { ok: true, simulated: true };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject,
        html,
        ...(replyTo ? { reply_to: replyTo } : {}),
      }),
    });

    if (!response.ok) {
      console.error("[email] Resend error", response.status, await response.text());
      return { ok: false };
    }

    return { ok: true };
  } catch (error) {
    console.error("[email] Failed to send", error);
    return { ok: false };
  }
}
