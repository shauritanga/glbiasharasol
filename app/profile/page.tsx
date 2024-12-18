import React, { Suspense } from "react";
import { CreatePostButton } from "@/components/create_post_button";
import { getPostsByUserId } from "@/actions/post";
import { PostFeed } from "@/components/post_feed";
import { auth } from "@/auth";
import { getUserById } from "@/actions/get_user";

export default async function Content() {
  const session = await auth();
  const user = await getUserById(session?.user.id!);
  const posts = await getPostsByUserId(session?.user.id!);

  function profession(profession: string): string {
    switch (profession) {
      case "software_engineer":
        return "Software developer";
    }
    return "unknown";
  }

  return (
    <main className="container mx-auto p-4">
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <p>{user?.name}</p>
          <p>{profession(user?.profession!)}</p>
          <p>{user?.email}</p>
          <p>{user?.village}</p>
        </div>
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
