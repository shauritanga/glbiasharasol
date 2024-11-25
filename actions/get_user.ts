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
                contains: chosenBusiness.toString(), // Apply filter condition
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
