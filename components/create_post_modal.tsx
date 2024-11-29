"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreatePost: (formData: FormData) => Promise<void>;
}

export function CreatePostModal({
  isOpen,
  onClose,
  onCreatePost,
}: CreatePostModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.currentTarget);
    await onCreatePost(formData);
    setIsSubmitting(true);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Post</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input id="title" name="title" required />
            </div>
            <div>
              <Label htmlFor="description">description</Label>
              <Textarea id="description" name="description" required />
            </div>
            <div>
              <Label htmlFor="media">Media</Label>
              <Input
                type="file"
                accept="image/*, video/*"
                id="media"
                name="media"
                required
              />
            </div>
          </div>
          <DialogFooter className="mt-4">
            <Button type="submit">
              {isSubmitting ? "Creating..." : "Create Post"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
