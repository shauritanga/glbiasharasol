"use client";

import React from "react";
import { Post } from "@/lib/types";

interface PostFeedProps {
  posts: Post[];
}

import { Feed } from "./feed";

export default function ClubFeed({ posts }: PostFeedProps) {
  return posts.map((post) => <Feed post={post} />);
}
