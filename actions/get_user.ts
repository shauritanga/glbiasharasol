"use server";
import { db } from "@/lib/db";

export const getUsers = async (chosenBusiness: String, club: String) => {
  try {
    const users = await db.user.findMany({
      where: {
        club: {
          contains: club.toString(),
          mode: "insensitive",
        },
        ...(chosenBusiness != null
          ? {
              business: {
                equals: chosenBusiness.toString(),
                mode: "insensitive",
              },
            }
          : {}),
      },
    });

    return users; // Return users to the client component
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        id: id,
      },
    });
    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export async function getAllUsers(business: string) {
  try {
    const users = await db.user.findMany({
      where: {
        business: business,
      },
      select: {
        id: true,
        name: true,
        email: true,
        profession: true,
        business: true,
      },
    });
    return users;
  } catch (error) {
    console.error("Failed to fetch users:", error);
    return [];
  } finally {
    await db.$disconnect();
  }
}
