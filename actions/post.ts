"use server";

import { auth } from "@/auth";
import { db } from "@/lib/db";
import { Post } from "@prisma/client";

export async function getPosts(): Promise<Post[]> {
  const session = await auth();
  const posts = await db.post.findMany({
    where: {
      userId: session?.user?.id,
    },
  });
  return posts;
}
