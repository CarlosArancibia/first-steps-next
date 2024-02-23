import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Page',
  description: 'About description',
};

export default function AboutPage() {
  return (
    <>
      <h1 className="text-6xl">AboutPage</h1>
    </>
  );
}
