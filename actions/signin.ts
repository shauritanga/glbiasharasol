"use server";

import { signIn } from "@/auth";

export async function signInUser(formData: FormData) {
  const fields = Object.fromEntries(formData.entries());

  const { email, password } = fields;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/",
    });
    return { success: true, message: "Login successful!" };
  } catch (error: any) {
    return { success: true, message: error.message };
  }
}
