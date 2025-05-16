import { BookOpen, Clapperboard, Search } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { getSupabaseUser } from "@/utils/supabase/auth/getSupabaseUser";
import { LogOutBtn } from "../log-out-btn";

const Navbar = async () => {
  const { user } = await getSupabaseUser();

  return (
    <nav className="flex w-full items-center justify-between bg-muted/40 px-4 py-2">
      <div className="flex items-center">
        <Clapperboard className="h-8 w-8 text-destructive" />
      </div>

      <div className="flex items-center gap-3">
        {user ? (
          <>
            <Link
              href="/search"
              className="p-2 rounded-full cursor-pointer bg-secondary text-white hover:bg-secondary/80"
            >
              <Search className="h-5 w-5" />
            </Link>
            <Link
              href="/lists?type=Anime"
              className="p-2 rounded-full cursor-pointer bg-secondary text-white hover:bg-secondary/80"
            >
              <BookOpen className="h-5 w-5" />
            </Link>
            <LogOutBtn
              className="bg-secondary cursor-pointer text-white font-medium hover:bg-secondary/80"
              label="Sign out"
            />
          </>
        ) : (
          <>
            <Link href="/login">
              <Button className="bg-neutral-700 text-white hover:bg-neutral-600/90">
                Sign in
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-secondary text-white hover:bg-secondary/80">
                Get started
              </Button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
