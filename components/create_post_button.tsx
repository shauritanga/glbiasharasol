"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { CreatePostModal } from "./create_post_modal";
import addPost from "@/actions/add_post";

export function CreatePostButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleCreatePost = async (formData: FormData) => {
    await addPost(formData);
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
