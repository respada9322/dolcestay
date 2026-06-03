import type { ContactPayload, ContactApiResponse } from './types';

export async function submitContactForm(
  payload: ContactPayload,
): Promise<ContactApiResponse> {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  let body: ContactApiResponse;
  try {
    body = (await response.json()) as ContactApiResponse;
  } catch {
    return {
      ok: false,
      error: 'Não foi possível enviar a mensagem. Tente novamente ou contacte-nos diretamente.',
    };
  }

  if (!response.ok && body.ok === false) {
    return body;
  }

  if (!response.ok) {
    return {
      ok: false,
      error: 'Não foi possível enviar a mensagem. Tente novamente ou contacte-nos diretamente.',
    };
  }

  return body;
}
