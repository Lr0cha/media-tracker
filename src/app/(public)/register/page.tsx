"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Clapperboard } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import {
  SignUpFormData,
  SignUpFormSchema,
} from "@/lib/validators/sign-up-validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { signup } from "@/lib/actions/auth/sign-up";
import { useTransition } from "react";
import { toast } from "sonner";

export default function SingUpPage() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<SignUpFormData>({
    resolver: zodResolver(SignUpFormSchema),
  });

  function onSubmit(data: SignUpFormData) {
    startTransition(async () => {
      const result = await signup(data);

      if (result?.error) {
        toast.error(result.error, {
          duration: 1500,
        });
      }
    });
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="mb-8">
        <Link href="/">
          <Clapperboard className=" w-8 h-8 sm:w-13 sm:h-13 text-destructive hover:scale-125 transition" />
        </Link>
      </div>

      <Card className="w-full max-w-md p-6 bg-card relative">
        <CardHeader>
          <CardTitle className="text-2xl">Sign up</CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex flex-col gap-0.5">
              <Input
                placeholder="Email address"
                type="email"
                {...form.register("email")}
              />
              {form.formState.errors.email && (
                <p className="text-red-500 text-sm">
                  {form.formState.errors.email.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-0.5">
              <Input
                placeholder="Password"
                type="password"
                {...form.register("newPassword")}
              />
              {form.formState.errors.newPassword && (
                <p className="text-red-500 text-sm">
                  {form.formState.errors.newPassword.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-0.5">
              <Input
                placeholder="Confirm password"
                type="password"
                {...form.register("confirmPassword")}
              />
              {form.formState.errors.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {form.formState.errors.confirmPassword.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isPending}
              className="w-full bg-secondary hover:bg-primary/90"
            >
              {isPending ? "..." : "Sing up"}
            </Button>
          </form>

          <p className="text-sm text-center text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/login"
              className="ml-2 text-destructive hover:underline font-medium"
            >
              Sign in.
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
