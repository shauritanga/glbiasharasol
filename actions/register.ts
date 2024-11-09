"use server";

import { db } from "@/lib/db";
import bcrypt from "bcryptjs";

export async function registerUser(formData: FormData) {
  const fields = Object.fromEntries(formData.entries());

  const { name, email, club, password, profession, phone, ward,district, region, village} = fields;

  try {
    const existingUser = await db.user.findFirst({
      where: {
        email: email as string,
      },
    });
    if (existingUser) {
      return { success: false, message: "User with that email already exits!" };
    }

    const hash = await bcrypt.hash(password.toString(), 10);

    await db.user.create({
      data: {
        email: email.toString(),
        password: hash,
        club: club.toString(),
        name: name.toString(),
        profession:profession.toString(),
        region:region.toString(),
        ward:ward.toString(),
        district:district.toString(),
        village:village.toString(),
        phone:phone.toString(),
        
      },
    });

    return { success: true, message: "Signup successful!" };
  } catch (error: any) {
    return { success: true, message: error.message };
  }
}
