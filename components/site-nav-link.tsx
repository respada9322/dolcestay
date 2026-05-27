'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ComponentProps } from 'react';
import { routes } from '@/lib/navigation';

type SiteNavLinkProps = ComponentProps<typeof Link>;

/**
 * Next.js Link that scrolls smoothly to homepage sections when already on `/`.
 */
export function SiteNavLink({
  href,
  onClick,
  ...props
}: SiteNavLinkProps) {
  const pathname = usePathname();
  const hrefString = typeof href === 'string' ? href : href.toString();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented) return;

    if (pathname === routes.home && hrefString.startsWith('/#')) {
      const id = decodeURIComponent(hrefString.slice(2));
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.pushState(null, '', hrefString);
      }
    }
  };

  return <Link href={href} onClick={handleClick} {...props} />;
}
