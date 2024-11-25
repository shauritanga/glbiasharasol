import { notFound } from "next/navigation";
import { db } from "./db";

export default async function getPost(id: string) {
  const posts = await db.post.findMany({
    where: { userId: id },
  });

  if (!posts) {
    notFound();
  }

  return posts;
}
