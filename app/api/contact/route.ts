import { NextResponse } from 'next/server';
import { parseContactPayload } from '@/lib/contact/validation';
import { getClientIp, isRateLimited } from '@/lib/contact/rate-limit';
import { sendContactEmails } from '@/lib/contact/send-emails';
import type { ContactApiResponse } from '@/lib/contact/types';

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json<ContactApiResponse>(
      { ok: false, error: 'Pedido inválido.' },
      { status: 400 },
    );
  }

  const parsed = parseContactPayload(body);
  if (!parsed.success) {
    return NextResponse.json<ContactApiResponse>(
      { ok: false, error: parsed.error },
      { status: 400 },
    );
  }

  const clientIp = getClientIp(request);
  if (isRateLimited(clientIp)) {
    return NextResponse.json<ContactApiResponse>(
      {
        ok: false,
        error: 'Demasiados pedidos. Aguarde alguns minutos e tente novamente.',
      },
      { status: 429 },
    );
  }

  const sent = await sendContactEmails(parsed.data);
  if (!sent.ok) {
    return NextResponse.json<ContactApiResponse>(
      {
        ok: false,
        error:
          'Não foi possível enviar a mensagem. Tente novamente ou contacte-nos diretamente.',
      },
      { status: 503 },
    );
  }

  return NextResponse.json<ContactApiResponse>({ ok: true });
}
