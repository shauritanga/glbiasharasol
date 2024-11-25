"use server";
import { auth } from "@/auth";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export default async function addPost(formData: FormData) {
  const session = await auth();

  console.log(session?.user.id);

  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const media = formData.get("media") as File;

  if (!title || !description || !media) {
    return { error: "Missing required fields" };
  }

  try {
    const mediaBuffer = await media.arrayBuffer();
    const post = await db.post.create({
      data: {
        title,
        description,
        mediaType: media.type,
        mediaName: media.name,
        mediaData: Buffer.from(mediaBuffer),
        userId: session?.user.id!,
      },
    });

    revalidatePath("/posts");
    return { message: "Post created successfully", id: post.id };
  } catch (error) {
    console.error("Error creating post:", error);
    return { error: "Error creating post" };
  } finally {
    await db.$disconnect();
  }
}
