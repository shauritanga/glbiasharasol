import React, { Suspense } from "react";
import { CreatePostButton } from "@/components/create_post_button";
import { getPosts } from "@/actions/post";
import { PostFeed } from "@/components/post_feed";

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Post Feed</h1>
      <CreatePostButton />
      <Suspense fallback={<div>Loading posts...</div>}>
        <div className="mt-6">
          <PostFeed posts={posts} />
        </div>
      </Suspense>
    </main>
  );
}
