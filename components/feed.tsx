import { Post } from "@/lib/types";
import { MoreHorizontal } from "lucide-react";
import Image from "next/image";

interface PostProps {
  post: Post;
}

export function Feed({ post }: PostProps) {
  return (
    <div className="flex flex-col border py-2 m-2 rounded shadow-md">
      <div className="flex p-2 justify-between">
        <h5>{post.title}</h5>
        <MoreHorizontal />
      </div>
      <div className="w-full h-[400px]">
        <Image
          src={post.image}
          width={600}
          height={400}
          objectFit="cover"
          alt="Staium"
          className="w-full"
        />
      </div>
    </div>
  );
}
