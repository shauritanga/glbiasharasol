"use server";

import { db } from "@/lib/db";
import bcrypt from "bcryptjs";

export async function registerUser(formData: FormData, kind:String) {

  console.log(formData);
  const fields = Object.fromEntries(formData.entries());
  if(kind ==="student"){

  const {institution,level, name, email, club, password, phone, ward,district, region, village} = fields;

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
       data:{
       business:"",
       profession:"",
       password:hash,
       name:name.toString(),
       district:district.toString(),
       region:region.toString(),
       ward:ward.toString(),
       email:email.toString(),
       phone:phone.toString(),
       education_level:level.toString(),
       institute:institution.toString(),
       village:village.toString(),
       club:club.toString(),
       }
      })

    return { success: true, message: "Signup successful!" };
  } catch (error: any) {
    return { success: true, message: error.message };
  }
}
const {name, email, club, password, profession, phone, ward,district, region, village, business} = fields;

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
     data:{
      business:business.toString(),
      institute:"",
      name:name.toString(),
      email:email.toString(),
      password:hash,
      club:club.toString(),
      education_level:"",
      region:region.toString(),
      district:district.toString(),
      ward:ward.toString(),
      village:village.toString(),
      phone:phone.toString(),
      profession:profession.toString(),
     }
    });
  

 

  return { success: true, message: "Signup successful!" };
} catch (error: any) {
  return { success: true, message: error.message };
}

}
