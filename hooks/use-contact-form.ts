'use client';

import { useCallback, useRef, useState } from 'react';
import { submitContactForm } from '@/lib/contact/submit-contact-form';
import type { ContactPayload } from '@/lib/contact/types';

export type ContactFormStatus = 'idle' | 'loading' | 'success' | 'error';

type UseContactFormOptions = {
  buildPayload: () => Omit<ContactPayload, 'sourcePage' | 'formLoadedAt'>;
  onSuccess?: () => void;
};

export function useContactForm({ buildPayload, onSuccess }: UseContactFormOptions) {
  const [status, setStatus] = useState<ContactFormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const formLoadedAt = useRef(Date.now());

  const reset = useCallback(() => {
    setStatus('idle');
    setErrorMessage(null);
    formLoadedAt.current = Date.now();
  }, []);

  const submit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (status === 'loading') return;

      setErrorMessage(null);

      const payload: ContactPayload = {
        ...buildPayload(),
        sourcePage:
          typeof window !== 'undefined' ? window.location.pathname : undefined,
        formLoadedAt: formLoadedAt.current,
      };

      setStatus('loading');

      const result = await submitContactForm(payload);

      if (result.ok) {
        setStatus('success');
        onSuccess?.();
        return;
      }

      setStatus('error');
      setErrorMessage(result.error);
    },
    [buildPayload, onSuccess, status],
  );

  return {
    status,
    errorMessage,
    submit,
    reset,
    isSubmitting: status === 'loading',
    isSuccess: status === 'success',
    isError: status === 'error',
  };
}
