import React, { Suspense } from "react";
import { CreatePostButton } from "@/components/create_post_button";
import { getPosts } from "@/actions/post";
import { PostFeed } from "@/components/post_feed";

export default async function Content() {
  const posts = await getPosts();

  return (
    <main className="container mx-auto p-4">
      <div className="grid grid-cols-12">
        <div className="col-span-3"></div>
        <div className="flex flex-col col-span-6">
          <h1 className="text-3xl font-bold mb-6">Post Feed</h1>
          <Suspense fallback={<div>Loading posts...</div>}>
            <div className="mt-6">
              <PostFeed posts={posts} />
            </div>
          </Suspense>
          <CreatePostButton />
        </div>
        <div className="col-span-3"></div>
      </div>
    </main>
  );
}
