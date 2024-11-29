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

export const getUserByPhoneNumber = async (phone: string) => {
  try {
    const parent = await db.user.findFirst({
      where: {
        phone: phone,
      },
    });
    return parent;
  } catch (error) {
    console.log(error);
    return null;
  }
};
