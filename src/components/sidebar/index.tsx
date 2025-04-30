import {
  PanelBottom,
  Search,
  BookOpen,
  Tv,
  Clapperboard,
  LogOut,
} from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetTrigger, SheetTitle, SheetContent } from "../ui/sheet";
import Link from "next/link";

const navItems = [
  { icon: Search, label: "Search" },
  { icon: Tv, label: "Animes" },
  { icon: BookOpen, label: "Mangas" },
];

const SidebarContent = () => (
  <div className="flex w-full flex-col font-medium gap-6 text-lg px-2 py-3">
    <Link
      href="#"
      className="flex w-10 h-10 bg-secondary items-center justify-center rounded-full text-accent-foreground"
      prefetch={false}
    >
      <Clapperboard className="h-5 w-5 transition-all" />
    </Link>

    <div className="flex flex-col gap-4 items-center">
      {navItems.map(({ icon: Icon, label }) => (
        <Button
          key={label}
          variant="outline"
          className="flex w-3/4 items-center justify-center gap-2 bg-transparent text-accent-foreground"
        >
          <Icon className="h-5 w-5" />
          {label === "Search" ? (
            <Link href="/search">{label}</Link>
          ) : (
            <span>{label}</span>
          )}
        </Button>
      ))}
    </div>

    <div className="absolute bottom-10 right-5">
      <button>
        <LogOut className="h-10 w-10 cursor-pointer hover:scale-105 hover:text-destructive active:scale-95 duration-200" />
      </button>
    </div>
  </div>
);

const Sidebar = () => {
  return (
    <div className="flex w-full items-center bg-muted/40">
      {/* Desktop */}
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-1/5 border-r bg-muted/40 sm:flex">
        <SidebarContent />
      </aside>

      {/* Mobile */}
      <div className="sm:hidden flex items-center">
        <header className="sticky top-0 z-30 flex h-14 items-center px-4 border-b gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline">
                <PanelBottom className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xl">
              <SheetTitle className="sr-only">Sidebar</SheetTitle>
              <SidebarContent />
            </SheetContent>
          </Sheet>
          <h2 className="text-lg font-semibold">Menu</h2>
        </header>
      </div>
    </div>
  );
};

export default Sidebar;
