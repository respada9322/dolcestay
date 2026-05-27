export type LegalSection = {
  title: string;
  paragraphs: string[];
  listItems?: string[];
  paragraphsAfterList?: string[];
};

export function getLegalSectionId(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
