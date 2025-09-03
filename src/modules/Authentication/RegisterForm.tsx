import { useId } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router";
import Logo from "@/assets/icons/Logo";

export default function RegisterPage() {
  const id = useId();

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gray-100 dark:bg-zinc-900">
      {/* Left side (Travel Image) */}
      <div className="hidden md:block">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80"
          alt="Travel adventure"
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
              Create a new account
            </h1>
            <p className="text-sm text-muted-foreground">
              Start your travel journey with us today!
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            <div className="space-y-4">
              {/* Full Name */}
              <div className="grid gap-2">
                <Label className="text-white">Full Name</Label>
                <Input
                  id={`${id}-name`}
                  type="text"
                  placeholder="John Doe"
                  required
                />
              </div>

              {/* Email */}
              <div className="grid gap-2">
                <Label className="text-white">Email Address</Label>
                <Input
                  id={`${id}-email`}
                  type="email"
                  placeholder="john@example.com"
                  required
                />
              </div>

              {/* Password */}
              <div className="grid gap-2">
                <Label className="text-white">Password</Label>
                <Input type="password" placeholder="********" required />
              </div>

              {/* Confirm Password */}
              <div className="grid gap-2">
                <Label className="text-white">Confirm Password</Label>
                <Input
                  id={`${id}-confirm`}
                  type="password"
                  placeholder="********"
                  required
                />
              </div>
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-center gap-2 text-sm">
              <Checkbox required />
              <Label className="text-muted-foreground font-normal">
                I agree to the{" "}
                <Link to="/terms" className="underline underline-offset-4">
                  terms and conditions
                </Link>
              </Label>
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full">
              Register
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
            Register with Google
          </Button>

          {/* Login link */}
          <div className="text-center text-sm text-white">
            Already have an account?{" "}
            <Link
              to="/login"
              className="underline underline-offset-4 hover:text-primary"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
