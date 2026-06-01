export type LegalSection = {
  /** Stable anchor id across languages (preferred over slugging the title). */
  id?: string;
  title: string;
  paragraphs: string[];
  listItems?: string[];
  paragraphsAfterList?: string[];
};

export function getLegalSectionId(sectionOrTitle: LegalSection | string): string {
  if (typeof sectionOrTitle === 'object' && sectionOrTitle.id) {
    return sectionOrTitle.id;
  }
  const title = typeof sectionOrTitle === 'string' ? sectionOrTitle : sectionOrTitle.title;
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
