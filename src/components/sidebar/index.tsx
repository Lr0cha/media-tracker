import { PanelBottom, Search, BookOpen, Tv, Clapperboard } from "lucide-react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetTitle,
  SheetContent,
  SheetDescription,
  SheetClose,
} from "../ui/sheet";
import Link from "next/link";
import { LogOutBtn } from "../log-out-btn";

const navItems = [
  { icon: Search, label: "Search" },
  { icon: Tv, label: "Animes" },
  { icon: BookOpen, label: "Mangas" },
];

const SidebarContent = ({ isMobile = false }: { isMobile?: boolean }) => {
  return (
    <div className="flex w-full flex-col font-medium gap-6 text-lg px-2 py-3">
      <Link
        href="/"
        className="flex w-10 h-10 bg-secondary items-center justify-center rounded-full text-accent-foreground"
        prefetch={false}
      >
        <Clapperboard className="h-5 w-5 transition-all" />
      </Link>

      <div className="flex flex-col gap-4 items-center">
        {navItems.map(({ icon: Icon, label }) => {
          const isSearch = label === "Search";
          const content = (
            <div className="flex items-center justify-center gap-2 w-full">
              <Icon className="h-5 w-5" />
              <span>{label}</span>
            </div>
          );

          const link = isSearch ? (
            <Link href="/search">{content}</Link>
          ) : (
            <Link href={`/lists?type=${label.substring(0, 5)}`}>
              <div className="flex items-center gap-2">
                <Icon className="h-5 w-5" />
                <span>{label}</span>
              </div>
            </Link>
          );

          const button = (
            <Button
              asChild
              key={label}
              variant="outline"
              className="flex cursor-pointer w-3/4 items-center justify-center gap-2 bg-transparent text-accent-foreground text-sm 2xl:text-lg 2xl:h-12"
            >
              {link}
            </Button>
          );

          return isMobile ? (
            <SheetClose asChild key={label}>
              {button}
            </SheetClose>
          ) : (
            button
          );
        })}
      </div>

      <div className="absolute bottom-10 right-5 2xl:right-10">
        <LogOutBtn
          variant="ghost"
          className="h-12 w-12 hover:scale-110 hover:text-destructive active:scale-95 duration-200"
        />
      </div>
    </div>
  );
};

export function MobileHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center px-4 border-b gap-4 bg-background w-full">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <PanelBottom className="h-5 w-5" />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xl">
          <SheetTitle className="sr-only">Sidebar</SheetTitle>
          <SheetDescription>{undefined}</SheetDescription>
          {/* isMobile True */}
          <SidebarContent isMobile />
        </SheetContent>
      </Sheet>
      <h2 className="text-lg font-semibold">Menu</h2>
    </header>
  );
}

export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 w-1/5 border-r bg-muted/40 hidden sm:flex">
      <SidebarContent />
    </aside>
  );
}
