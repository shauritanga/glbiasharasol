"use client";
import { DialogForm } from "../dialog";
import { Post } from "@prisma/client";
import ProjectPost from "./project_post";

interface PostProps {
  posts: Post[];
}

export default function ProjectList({ posts }: PostProps) {
  return (
    <>
      <div className="w-full h-max">
        <h3 className="p-2">My Projects</h3>
        {posts.map((post) => (
          <ProjectPost post={post} />
        ))}
      </div>
      <DialogForm />
    </>
  );
}
