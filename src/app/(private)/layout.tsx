import Sidebar from "@/components/sidebar";

export default function PrivateLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <Sidebar />
      {children}
    </div>
  );
}
