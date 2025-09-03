import { useId } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router";
import Logo from "@/assets/icons/Logo";

export default function LoginPage() {
  const id = useId();

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gray-100 dark:bg-zinc-900">
      {/* Left side (Image) */}
      <div className="hidden md:block">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80"
          alt="Travel"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right side (Form) */}
      <div className="flex flex-col justify-center px-6 sm:px-10 py-12 bg-white dark:bg-zinc-950 shadow-lg">
        <div className="mx-auto w-full max-w-md space-y-8">
          {/* Header */}
          <div className="flex justify-center">
            <Logo />
          </div>
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold tracking-tight text-white">
              Login to your account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email and password to access your account.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor={`${id}-email`}>Email</Label>
                <Input
                  id={`${id}-email`}
                  type="email"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor={`${id}-password`}>Password</Label>
                <Input
                  id={`${id}-password`}
                  type="password"
                  placeholder="********"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <Checkbox id={`${id}-remember`} />
                <Label
                  htmlFor={`${id}-remember`}
                  className="text-muted-foreground font-normal"
                >
                  Remember me
                </Label>
              </div>
              <Link
                to="/forgot-password"
                className="underline underline-offset-4 hover:text-primary"
              >
                Forgot password?
              </Link>
            </div>

            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>

          {/* Divider */}
          <div className="relative text-center text-sm">
            <span className="bg-white dark:bg-zinc-950 px-2 text-muted-foreground relative z-10">
              Or continue with
            </span>
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
          </div>

          {/* Google login */}
          <Button type="button" variant="outline" className="w-full">
            Login with Google
          </Button>

          {/* Register link */}
          <div className="text-center text-sm text-white">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="underline underline-offset-4 hover:text-primary"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
