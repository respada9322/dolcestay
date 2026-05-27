'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

function scrollToHashElement(behavior: ScrollBehavior = 'smooth') {
  const hash = window.location.hash;
  if (!hash) return;

  const id = decodeURIComponent(hash.slice(1));
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior, block: 'start' });
  }
}

/**
 * Scrolls to the URL hash when landing on the homepage (including cross-page `/#section` links).
 */
export function HashScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== '/') return;

    const run = () => scrollToHashElement('smooth');
    run();

    const timer = window.setTimeout(run, 150);
    window.addEventListener('hashchange', run);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('hashchange', run);
    };
  }, [pathname]);

  return null;
}
