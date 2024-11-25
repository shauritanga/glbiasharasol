"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import addPost from "@/actions/add_post";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

interface PostFormProps {
  onSuccess: () => void;
}

export default function PostForm({ onSuccess }: PostFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const result = await addPost(formData);

    setIsSubmitting(false);

    if (result.message) {
      onSuccess();
      router.refresh();
    } else {
      // Handle error
      console.error(result.error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Title
        </label>
        <Input id="title" name="title" required />
      </div>
      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <Textarea id="description" name="description" required />
      </div>
      <div>
        <label
          htmlFor="media"
          className="block text-sm font-medium text-gray-700"
        >
          Image or Video
        </label>
        <Input
          id="media"
          name="media"
          type="file"
          accept="image/*,video/*"
          required
        />
      </div>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Creating..." : "Create Project"}
      </Button>
    </form>
  );
}
