/** Escape user input for safe inclusion in HTML email bodies. */
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function formatOptionalRow(
  label: string,
  value: string | undefined,
): string {
  if (!value?.trim()) return '';
  return `<tr><td style="padding:8px 12px;font-weight:600;color:#1F4E5F;width:38%;vertical-align:top;">${escapeHtml(label)}</td><td style="padding:8px 12px;color:#374151;">${escapeHtml(value.trim())}</td></tr>`;
}
