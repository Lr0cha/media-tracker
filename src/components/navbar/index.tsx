import { BookOpen, Clapperboard, Search } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { signOut } from "@/lib/actions/sign-out";

async function Navbar() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <nav className="flex w-full items-center justify-between bg-muted/40 px-4 py-2">
      <div className="flex items-center">
        <Clapperboard className="h-8 w-8 text-destructive" />
      </div>

      <div className="flex items-center gap-3">
        {user !== null ? (
          <form action={signOut} className="flex items-center gap-3">
            <Link
              href="/search"
              className="p-2 rounded-full bg-secondary text-white hover:bg-secondary/80"
            >
              <Search className="h-5 w-5" />
            </Link>
            <Link
              href="/medias"
              className="p-2 rounded-full bg-secondary text-white hover:bg-secondary/80"
            >
              <BookOpen className="h-5 w-5" />
            </Link>
            <Button
              type="submit"
              className="bg-secondary cursor-pointer text-white font-medium hover:bg-secondary/80"
            >
              Sign Out
            </Button>
          </form>
        ) : (
          <>
            <Link href="/login">
              <Button className="bg-neutral-700 cursor-pointer text-white font-medium hover:bg-neutral-600/90">
                Sign in
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-secondary cursor-pointer text-white font-medium hover:bg-secondary/80">
                Get started
              </Button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
