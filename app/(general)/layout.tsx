import { Navbar } from '@/components';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center p-24">{children}</div>
    </>
  );
}
