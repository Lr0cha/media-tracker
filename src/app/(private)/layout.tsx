import Sidebar from "@/components/sidebar";

export default function PrivateLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {/* Desktop */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <Sidebar.MobileHeader />
      </div>

      {/*Page*/}
      <main className="min-h-screen p-4 md:ml-[20%] max-w-6xl mx-auto">
        {children}
      </main>
    </>
  );
}
