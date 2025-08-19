import Navbar from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative flex flex-col items-center w-full min-h-screen  text-neutral-900 dark:text-neutral-100 dark:bg-neutral-950">
      <Navbar />
      {children}
    </main>
  );
}
