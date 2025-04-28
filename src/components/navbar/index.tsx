import { Clapperboard } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex w-full bg-muted/40 px-4 py-2 items-center">
      <div className="flex-1/3">
        <Clapperboard className="h-8 w-8 text-destructive font-bold" />
      </div>
      <div className="flex flex-2/3 space-x-3 justify-end">
        <Button className="bg-neutral-700 text-white cursor-pointer hover:bg-neutral-600/90 font-medium">
          <Link href="/login">Sign in</Link>
        </Button>
        <Button className="bg-secondary text-white cursor-pointer hover:bg-secondary/80 font-medium">
          <Link href="/register">Get started</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
