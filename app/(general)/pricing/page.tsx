import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Pricing description',
};

export default function PricingPage() {
  return (
    <>
      <div className="text-6xl">PricingPage</div>
    </>
  );
}
