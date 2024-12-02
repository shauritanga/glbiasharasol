"use server";

import { db } from "@/lib/db";
import { Post } from "@prisma/client";

export async function getPostsByUserId(id: string): Promise<Post[]> {
  const posts = await db.post.findMany({
    where: {
      userId: id,
    },
  });
  return posts;
}

export async function getPosts(): Promise<Post[]> {
  const posts = await db.post.findMany();
  return posts;
}
