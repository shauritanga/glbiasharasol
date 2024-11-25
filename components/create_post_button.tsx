"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { createPost } from "@/actions/post";
import { useRouter } from "next/navigation";
import { CreatePostModal } from "./create_post_modal";

export function CreatePostButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleCreatePost = async (
    title: string,
    content: string,
    author: string,
    image: string
  ) => {
    await createPost(title, content, author, image);
    router.refresh(); // This will trigger a re-fetch of the posts
  };

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)}>Create New Post</Button>
      <CreatePostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreatePost={handleCreatePost}
      />
    </>
  );
}
