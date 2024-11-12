"use server";

import { signIn } from "@/auth";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";

export async function signInUser(formData: FormData) {
  const fields = Object.fromEntries(formData.entries());

  const { email, password } = fields;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/",
    });
    return { success: true, message: "Signup successful!" };
  } catch (error: any) {
    console.log(error.message)
    return { success: true, message: error.message };
  }
}
