"use client";

import { Post } from "@prisma/client";
import Image from "next/image";
import React from "react";

interface PostFeedProps {
  posts: Post[];
}

export function PostFeed({ posts }: PostFeedProps) {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <div key={post.id} className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
          <p className="text-gray-600 mb-4">{post.description}</p>
          <div className="text-sm text-gray-500">
            {post.mediaType.startsWith("image/") ? (
              <Image
                src={`data:${post.mediaType};base64,${Buffer.from(
                  post.mediaData
                ).toString("base64")}`}
                alt={post.title}
                width={400}
                height={300}
                className="rounded-lg object-cover"
              />
            ) : post.mediaType.startsWith("video/") ? (
              <video
                src={`data:${post.mediaType};base64,${Buffer.from(
                  post.mediaData
                ).toString("base64")}`}
                controls
                className="w-full rounded-lg"
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <p>Unsupported media type: {post.mediaType}</p>
            )}
            <span>{new Date(post.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
