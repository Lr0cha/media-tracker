"use client";

import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import Link from "next/link";
import { Clapperboard } from "lucide-react";

import { login } from "@/lib/actions/auth/login";
import {
  LoginFormData,
  LoginFormSchema,
} from "@/lib/validators/login-validators";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginPage() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<LoginFormData>({
    resolver: zodResolver(LoginFormSchema),
  });

  function onSubmit(data: LoginFormData) {
    startTransition(async () => {
      const result = await login(data);

      if (result?.error) {
        //optional chaining
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
          <Clapperboard className="w-8 h-8 sm:w-13 sm:h-13 text-destructive hover:scale-125 transition" />
        </Link>
      </div>

      <Card className="w-full max-w-md p-6 bg-card relative">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex flex-col gap-0.5">
              <Input placeholder="Your email" {...form.register("email")} />
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
                {...form.register("password")}
              />
              {form.formState.errors.password && (
                <p className="text-red-500 text-sm">
                  {form.formState.errors.password.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-secondary cursor-pointer hover:bg-primary/90"
              disabled={isPending}
            >
              {isPending ? "..." : "Login"}
            </Button>
          </form>

          <p className="text-sm text-center text-muted-foreground">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="ml-2 text-destructive hover:underline font-medium"
            >
              Sign up.
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
