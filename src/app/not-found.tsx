import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-center px-4">
      <h1 className="text-6xl font-bold text-secondary mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">
        Page <span className="text-destructive">not</span> found
      </h2>
      <p className="text-muted-foreground mb-6 max-w-md">
        Sorry, we couldn’t find the page you were looking for.
      </p>
      <Button asChild variant="secondary" className="px-6 py-2 text-white">
        <Link href="/">Go back home</Link>
      </Button>
    </div>
  );
}
