import { Resend } from 'resend';
import type { ContactPayload } from './types';
import {
  buildConfirmationEmailHtml,
  buildConfirmationEmailText,
  buildInternalEmailHtml,
  buildInternalEmailText,
  getInternalEmailSubject,
} from './email-templates';

function getResendConfig() {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.RESEND_TO_EMAIL;

  if (!apiKey || !from || !to) {
    return null;
  }

  return { apiKey, from, to };
}

export async function sendContactEmails(
  data: ContactPayload,
): Promise<{ ok: true } | { ok: false }> {
  const config = getResendConfig();
  if (!config) {
    console.error('[contact] Missing RESEND_API_KEY, RESEND_FROM_EMAIL, or RESEND_TO_EMAIL');
    return { ok: false };
  }

  const resend = new Resend(config.apiKey);
  const subject = getInternalEmailSubject(data.formType);

  const internalResult = await resend.emails.send({
    from: config.from,
    to: [config.to],
    replyTo: data.email,
    subject,
    html: buildInternalEmailHtml(data),
    text: buildInternalEmailText(data),
  });

  if (internalResult.error) {
    console.error('[contact] Resend internal email error:', internalResult.error);
    return { ok: false };
  }

  const confirmationResult = await resend.emails.send({
    from: config.from,
    to: [data.email],
    replyTo: config.to,
    subject: 'Recebemos o seu contacto — DolceStay',
    html: buildConfirmationEmailHtml(data.name),
    text: buildConfirmationEmailText(data.name),
  });

  if (confirmationResult.error) {
    console.error('[contact] Resend confirmation email error:', confirmationResult.error);
    // Internal email already sent — still treat as success for the user
  }

  return { ok: true };
}
