"use server";

import { Post } from "@/lib/types";

// This is a mock database. In a real application, you'd use a proper database.
let posts: Post[] = [
  {
    id: "1",
    title: "First Post",
    content: "This is the first post content.",
    author: "John Doe",
    image: "/",
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Second Post",
    content: "This is the second post content.",
    author: "Jane Smith",
    image: "/",
    createdAt: new Date().toISOString(),
  },
];

export async function getPosts(): Promise<Post[]> {
  // Simulate a delay to mimic a database call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return posts;
}

export async function createPost(
  title: string,
  content: string,
  author: string,
  image: string
): Promise<Post> {
  const newPost: Post = {
    id: (posts.length + 1).toString(),
    title,
    content,
    image,
    author,
    createdAt: new Date().toISOString(),
  };
  posts.push(newPost);
  return newPost;
}
