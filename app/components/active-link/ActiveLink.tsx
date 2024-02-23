'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  path: string;
  text: string;
}

export const ActiveLink = ({ path, text }: Props) => {
  const pathName = usePathname();

  return (
    <Link className={`${pathName === path ? 'underline' : ''}`} href={path}>
      {text}
    </Link>
  );
};
