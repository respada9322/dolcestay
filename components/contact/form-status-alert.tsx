'use client';

import { AlertCircle } from 'lucide-react';

type FormStatusAlertProps = {
  message: string;
};

export function FormStatusAlert({ message }: FormStatusAlertProps) {
  return (
    <div
      role="alert"
      className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
    >
      <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />
      <p>{message}</p>
    </div>
  );
}
