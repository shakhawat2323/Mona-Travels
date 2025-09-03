import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router";
import Logo from "@/assets/icons/Logo";
import Password from "@/components/ui/password";
import { useRegisterMutation } from "@/redux/features/auth/auth.api";
import { toast } from "sonner";

const formSchema = z
  .object({
    name: z.string().min(4, { error: "Full name is required." }),
    email: z.email({ error: "Invalid email address." }),
    password: z
      .string()
      .min(8, { error: "Password must be at least 6 characters." }),
    confirmPassword: z.string().min(8, { error: "Confirm your password." }),
    terms: z.boolean().refine((val) => val === true, {
      error: "You must accept the terms and conditions.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export default function RegisterPage() {
  const [register] = useRegisterMutation();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      Password: data.password,
    };
    try {
      const result = await register(userInfo).unwrap();
      console.log(result);
      toast.success("User Created Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gray-100 dark:bg-zinc-900">
      {/* Left side (Travel Image) */}
      <div className="hidden md:block">
        <img
          src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1000&q=80"
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

          {/* ✅ Form with React Hook Form + Zod */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Full Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Email Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="john@example.com"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Password</FormLabel>
                    <FormControl>
                      <Password {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Confirm Password */}
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">
                      Confirm Password
                    </FormLabel>
                    <FormControl>
                      <Password {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Terms & Conditions */}
              <FormField
                control={form.control}
                name="terms"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-2 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="leading-none">
                      <FormLabel className="text-muted-foreground font-normal">
                        I agree to the{" "}
                        <Link
                          to="/terms"
                          className="underline underline-offset-4"
                        >
                          terms and conditions
                        </Link>
                      </FormLabel>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button type="submit" className="w-full">
                Register
              </Button>
            </form>
          </Form>

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
