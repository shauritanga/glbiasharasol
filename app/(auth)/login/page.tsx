"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToastProvider, ToastViewport } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";
import { signInUser } from "@/actions/signin";

export default function SignupForm() {
  const { toast } = useToast();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setIsLoading(true);
    const result = await signInUser(formData);
    setIsLoading(false);

    if (result.success) {
      toast({
        title: "Success",
        description: result.message,
        className: "bg-green-500 text-white",
      });
      // Redirect to dashboard or home page after successful signup
      router.replace("/");
    } else {
      toast({
        title: "Error",
        description: result.message,
        variant: "destructive",
      });
    }
  }

  return (
    <ToastProvider>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <form
          action={handleSubmit}
          className="w-full max-w-md space-y-4 bg-white p-8 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Enter your email address"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" required />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
        </form>

        {/* Custom positioned ToastViewport */}
        <ToastViewport className="fixed bottom-0 right-0 flex flex-col p-4 gap-2 w-full max-w-md" />
      </div>
    </ToastProvider>
  );
}
