import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Clapperboard } from "lucide-react";
import Link from "next/link";

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="mb-8">
        <Clapperboard className=" w-8 h-8 sm:w-13 sm:h-13 text-destructive" />
      </div>

      <Card className="w-full max-w-md p-6 bg-card relative">
        <CardHeader>
          <CardTitle className="text-2xl">Sign up</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <Input placeholder="Username" type="username" />
          <Input placeholder="Email address" type="email" />
          <Input placeholder="Password" type="newPassword" />
          <Input placeholder="Confirm password" type="confirmPassword" />

          <Button className="w-full bg-secondary cursor-pointer hover:bg-primary/90">
            Sign up
          </Button>

          <p className="text-sm text-center text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/"
              className="ml-2 text-destructive hover:underline font-medium"
            >
              Sign in.
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
