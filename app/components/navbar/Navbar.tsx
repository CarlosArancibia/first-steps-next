import Link from 'next/link';
import { HomeFillIcon } from '@primer/octicons-react';
import { ActiveLink } from '../active-link/ActiveLink';

const navItems = [
  { path: '/about', text: 'About' },
  { path: '/pricing', text: 'Pricing' },
  { path: '/contact', text: 'Contact' },
];

export const Navbar = () => {
  return (
    <header className="flex p-5 bg-slate-800 m-2 rounded-lg justify-between">
      <Link href={'/'} className="flex items-center gap-2">
        <HomeFillIcon />
        <span>Home</span>
      </Link>
      <nav className="flex gap-4">
        {navItems.map((navLink) => (
          <ActiveLink key={navLink.path} {...navLink} />
        ))}
      </nav>
    </header>
  );
};
