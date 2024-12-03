"use client";

import React from "react";

interface PostFeedProps {
  posts: Post[];
}

import { Feed } from "./feed";
import { Post } from "@/lib/types";

export default function ClubFeed({ posts }: PostFeedProps) {
  return posts.map((post) => <Feed post={post} />);
}
