import { Post } from "@prisma/client";
import Image from "next/image";

interface PostProps {
  post: Post;
}

export default function ProjectPost({ post }: PostProps) {
  return (
    <>
      <div className="flex flex-col rounded border w-1/2  p-2 mb-5">
        <h4>{post.title}</h4>
        <hr className="m-2" />
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
        <p>{post.description}</p>
      </div>
    </>
  );
}
