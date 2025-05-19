import { Sidebar, MobileHeader } from "@/components/sidebar";

export default function PrivateLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen">
      {/* Desktop */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <MobileHeader />
      </div>

      {/*Page*/}
      <main className="px-4 py-6 md:ml-[20%] max-w-screen mx-auto">
        {children}
      </main>
    </div>
  );
}
