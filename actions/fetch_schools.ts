"use server";
import { db } from "@/lib/db";

// Fetch schools on the server side using Prisma ORM
export async function fetchSchools() {
  try {
    const schools = await db.school.findMany();
    return schools;
  } catch (error) {
    console.error("Error fetching schools:", error);
    return [];
  }
}

export async function fetchSchoolById(schoolId: String) {
  try {
    const school = await db.school.findUnique({
      where: {
        id: schoolId.toString(),
      },
      include: {
        students: true,
      },
    });
    return school;
  } catch (error) {
    console.error("Error fetching schools:", error);
    return null;
  }
}
