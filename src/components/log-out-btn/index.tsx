"use client";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { useTransition } from "react";
import { signOut } from "@/lib/actions/auth/sign-out";
import { LogOut } from "lucide-react";

interface LogOutBtnProps {
  className?: string;
  label?: string;
  variant?:
    | "default"
    | "ghost"
    | "link"
    | "destructive"
    | "outline"
    | "secondary"
    | "danger";
}

export const LogOutBtn = ({
  className,
  label,
  variant = "default",
}: LogOutBtnProps) => {
  const [isPending, startTransition] = useTransition();

  function handleSignOut() {
    startTransition(async () => {
      const result = await signOut();

      if (result?.error) {
        toast.error(result.error, { duration: 1500 });
      }
    });
  }

  return (
    <div>
      <Button
        onClick={handleSignOut}
        disabled={isPending}
        className={className}
        variant={variant}
      >
        {label ? label : <LogOut className="size-10 xl:size-12 2xl:size-20" />}
      </Button>
    </div>
  );
};
