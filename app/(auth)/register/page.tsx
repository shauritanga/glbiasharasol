"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToastProvider, ToastViewport } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";
import { registerUser } from "@/actions/register";

export default function SignupForm() {
  const { toast } = useToast();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [option, setOption] = useState("student");

  async function handleSubmit(formData: FormData) {
    setIsLoading(true);
    const result = await registerUser(formData);
    setIsLoading(false);

    if (result.success) {
      toast({
        title: "Success",
        description: result.message,
        className: "bg-green-500 text-white",
      });
      // Redirect to dashboard or home page after successful signup
      router.push("/login");
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
      <div className="flex flex-col items-center min-h-screen bg-red-100">
        <form
          action={handleSubmit}
          className="w-[50vw] space-y-4 bg-white p-8 rounded-lg shadow-md m-8"
        >
          <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
          <div className="flex w-full">
            <Button
              onClick={() => setOption("student")}
              variant="link"
              className={`w-full ${
                option === "student" ? "bg-blue-600 text-white" : ""
              }`}
            >
              Student
            </Button>
            <Button
              onClick={() => setOption("other")}
              variant="link"
              className={`w-full ${
                option === "other" ? "bg-blue-600 text-white" : ""
              }`}
            >
              Other
            </Button>
          </div>

          {option === "student" ? (
            <>
              <div className="w-full flex gap-4">
                <div className="space-y-2 w-full">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="w-full"
                  />
                </div>
                <div className="space-y-2 w-full">
                  <Label htmlFor="school">Education institution</Label>
                  <Input
                    id="school"
                    name="school"
                    type="text"
                    required
                    placeholder="Enter your school"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="w-full flex gap-4">
                <div className="space-y-2 w-full">
                  <Label htmlFor="level">Level</Label>
                  <Input
                    id="level"
                    name="level"
                    type="text"
                    required
                    placeholder="Enter your class level"
                    className="w-full"
                  />
                </div>
                <div className="space-y-2 w-full">
                  <Label htmlFor="email">Parent email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email address"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="w-full flex gap-4">
                <div className="space-y-2 w-full">
                  <Label htmlFor="region">Region</Label>
                  <Input
                    id="region"
                    name="region"
                    type="text"
                    required
                    placeholder="Enter your region"
                  />
                </div>
                <div className="space-y-2 w-full">
                  <Label htmlFor="district">District</Label>
                  <Input
                    id="district"
                    name="district"
                    type="text"
                    required
                    placeholder="Enter your district"
                  />
                </div>
              </div>
              <div className="w-full flex gap-4">
                <div className="space-y-2 w-full">
                  <Label htmlFor="ward">Ward</Label>
                  <Input
                    id="ward"
                    name="ward"
                    type="text"
                    required
                    placeholder="Enter your ward"
                  />
                </div>
                <div className="space-y-2 w-full">
                  <Label htmlFor="village">Street/Village</Label>
                  <Input
                    id="village"
                    name="village"
                    type="text"
                    required
                    placeholder="Enter your street"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="club">Football club</Label>
                <Input
                  id="club"
                  name="club"
                  type="text"
                  required
                  placeholder="Enter your football club"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" required />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Signing up..." : "Sign Up"}
              </Button>
            </>
          ) : (
            <>
              <div className="w-full flex gap-4">
                <div className="space-y-2 w-full">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="w-full"
                  />
                </div>
                <div className="space-y-2 w-full">
                  <Label htmlFor="profession">Profession</Label>
                  <Input
                    id="profession"
                    name="profession"
                    type="text"
                    required
                    placeholder="Enter your profession"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="w-full flex gap-4">
                <div className="space-y-2 w-full">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="text"
                    required
                    placeholder="Enter your phone"
                    className="w-full"
                  />
                </div>
                <div className="space-y-2 w-full">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email address"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="w-full flex gap-4">
                <div className="space-y-2 w-full">
                  <Label htmlFor="region">Region</Label>
                  <Input
                    id="region"
                    name="region"
                    type="text"
                    required
                    placeholder="Enter your region"
                  />
                </div>
                <div className="space-y-2 w-full">
                  <Label htmlFor="district">District</Label>
                  <Input
                    id="district"
                    name="district"
                    type="text"
                    required
                    placeholder="Enter your district"
                  />
                </div>
              </div>
              <div className="w-full flex gap-4">
                <div className="space-y-2 w-full">
                  <Label htmlFor="ward">Ward</Label>
                  <Input
                    id="ward"
                    name="ward"
                    type="text"
                    required
                    placeholder="Enter your ward"
                  />
                </div>
                <div className="space-y-2 w-full">
                  <Label htmlFor="village">Street/Village</Label>
                  <Input
                    id="village"
                    name="village"
                    type="texts"
                    required
                    placeholder="Enter your street"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="club">Football club</Label>
                <Input
                  id="club"
                  name="club"
                  type="text"
                  required
                  placeholder="Enter your football club"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" required />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Signing up..." : "Sign Up"}
              </Button>
            </>
          )}
        </form>

        {/* Custom positioned ToastViewport */}
        <ToastViewport className="fixed bottom-0 right-0 flex flex-col p-4 gap-2 w-full max-w-md" />
      </div>
    </ToastProvider>
  );
}
