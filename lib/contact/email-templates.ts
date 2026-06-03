import type { ContactPayload } from './types';
import { escapeHtml, formatOptionalRow } from './sanitize';

const FORM_TYPE_LABELS: Record<ContactPayload['formType'], string> = {
  contact: 'Contacto geral',
  'owner-lead': 'Pedido de proprietário',
  booking: 'Pedido de reserva',
  'property-evaluation': 'Pedido de avaliação de imóvel',
  general: 'Contacto geral',
};

export function getInternalEmailSubject(formType: ContactPayload['formType']): string {
  switch (formType) {
    case 'property-evaluation':
      return 'Novo pedido de avaliação de imóvel — DolceStay';
    case 'owner-lead':
      return 'Novo pedido de proprietário — DolceStay';
    case 'booking':
      return 'Novo pedido de reserva — DolceStay';
    default:
      return 'Novo contacto recebido no website DolceStay';
  }
}

function buildFieldRows(data: ContactPayload): string {
  const sentAt = new Date().toLocaleString('pt-PT', {
    timeZone: 'Europe/Lisbon',
    dateStyle: 'full',
    timeStyle: 'short',
  });

  return [
    formatOptionalRow('Tipo de formulário', FORM_TYPE_LABELS[data.formType]),
    formatOptionalRow('Página de origem', data.sourcePage),
    formatOptionalRow('Nome', data.name),
    formatOptionalRow('Email', data.email),
    formatOptionalRow('Telefone', data.phone),
    formatOptionalRow('Tipo de contacto', data.contactType),
    formatOptionalRow('Localização do imóvel', data.propertyLocation),
    formatOptionalRow('Tipo de imóvel', data.propertyType),
    formatOptionalRow('Quartos', data.bedrooms),
    data.message?.trim()
      ? `<tr><td colspan="2" style="padding:12px;"><p style="margin:0 0 8px;font-weight:600;color:#1F4E5F;">Mensagem</p><p style="margin:0;color:#374151;white-space:pre-wrap;">${escapeHtml(data.message.trim())}</p></td></tr>`
      : '',
    formatOptionalRow('Data e hora', sentAt),
  ].join('');
}

export function buildInternalEmailHtml(data: ContactPayload): string {
  return `<!DOCTYPE html>
<html lang="pt">
<head><meta charset="utf-8"/></head>
<body style="margin:0;padding:0;background:#F8FAF8;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F8FAF8;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width:560px;background:#ffffff;border-radius:12px;border:1px solid #E5E7EB;overflow:hidden;">
          <tr>
            <td style="background:#1F4E5F;padding:24px 28px;">
              <h1 style="margin:0;font-size:22px;color:#ffffff;font-weight:700;">DolceStay</h1>
              <p style="margin:8px 0 0;font-size:14px;color:#CFE8D2;">Novo pedido no website</p>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 0 20px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                ${buildFieldRows(data)}
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function buildInternalEmailText(data: ContactPayload): string {
  const lines = [
    'DolceStay — Novo pedido no website',
    '',
    `Tipo: ${FORM_TYPE_LABELS[data.formType]}`,
    data.sourcePage ? `Página: ${data.sourcePage}` : '',
    `Nome: ${data.name}`,
    `Email: ${data.email}`,
    data.phone ? `Telefone: ${data.phone}` : '',
    data.contactType ? `Tipo de contacto: ${data.contactType}` : '',
    data.propertyLocation ? `Localização: ${data.propertyLocation}` : '',
    data.propertyType ? `Tipo de imóvel: ${data.propertyType}` : '',
    data.bedrooms ? `Quartos: ${data.bedrooms}` : '',
    data.message ? `\nMensagem:\n${data.message}` : '',
    `\nEnviado: ${new Date().toLocaleString('pt-PT', { timeZone: 'Europe/Lisbon' })}`,
  ].filter(Boolean);

  return lines.join('\n');
}

export function buildConfirmationEmailHtml(name: string): string {
  const safeName = escapeHtml(name.trim());
  return `<!DOCTYPE html>
<html lang="pt">
<head><meta charset="utf-8"/></head>
<body style="margin:0;padding:0;background:#F8FAF8;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F8FAF8;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width:520px;background:#ffffff;border-radius:12px;border:1px solid #E5E7EB;padding:28px;">
          <tr>
            <td>
              <h1 style="margin:0 0 16px;font-size:20px;color:#1F4E5F;">DolceStay</h1>
              <p style="margin:0 0 12px;color:#374151;font-size:16px;line-height:1.6;">Olá ${safeName},</p>
              <p style="margin:0;color:#374151;font-size:16px;line-height:1.6;">Recebemos a sua mensagem e entraremos em contacto consigo em breve.</p>
              <p style="margin:24px 0 0;color:#6B7280;font-size:14px;">Com os melhores cumprimentos,<br/>Equipa DolceStay</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function buildConfirmationEmailText(name: string): string {
  return `Olá ${name.trim()},

Recebemos a sua mensagem e entraremos em contacto consigo em breve.

Com os melhores cumprimentos,
Equipa DolceStay`;
}
