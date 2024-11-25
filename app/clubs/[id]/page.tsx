import { getAllUsers } from "@/data/user";
import Opportunity from "@/components/opportunity";
import { VideoSlider } from "@/components/video_slider";
import ClubFeed from "@/components/club_feed";
import Image from "next/image";
import { Post, Video } from "@/lib/types";

const images = [
  "/kairuki.jpeg",
  "/ivf.jpeg",
  "/ivf2.jpeg",
  "/mwinyi.jpg",
  "/mwinyi2.jpeg",
];

async function getVideos(): Promise<Video[]> {
  // In a real application, you would fetch this data from an API or database
  // For this example, we'll return mock data
  return [
    {
      id: 1,
      src: "/videos/smart.mp4",
      title: "Big Buck Bunny",
      link: "/video/1",
    },
    {
      id: 2,
      src: "/videos/ivf.mp4",
      title: "Elephant Dream",
      link: "/video/2",
    },
  ];
}

let posts: Post[] = [
  {
    id: "1",
    title: "First Post",
    content: "This is the first post content.",
    author: "John Doe",
    image: "/stn.jpeg",
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Second Post",
    content: "This is the second post content.",
    author: "Jane Smith",
    image: "/mwinyi.jpg",
    createdAt: new Date().toISOString(),
  },
];

export async function getPosts(): Promise<Post[]> {
  // Simulate a delay to mimic a database call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return posts;
}

export default async function FootballClubPage({
  searchParams,
}: {
  searchParams: { name: string };
}) {
  const videos = await getVideos();
  const posts = await getPosts();
  const fans = await getAllUsers();

  // const clubFans = fans.filter((fan) =>
  //   fan.club
  //     ?.toLocaleLowerCase()
  //     .includes(searchParams.name.toLocaleLowerCase())
  // );

  return (
    <div className="w-full min-h-screen grid grid-flow-col grid-cols-12">
      <div className="col-span-3 p-2">
        <div className="flex items-center gap-4">
          <Image src={"/chelsea.png"} alt="logo" width={45} height={45} />
          <h3>Chelsea FC</h3>
        </div>

        <p>London, UK</p>
      </div>
      <div className="col-span-6 bg m-3">
        <ClubFeed posts={posts} />
      </div>
      <div className="col-span-3 p-2">
        <Opportunity />
        <div className="flex flex-col p-2">
          <h5 className="text-gray-800 mb-2">Health care</h5>
        </div>

        <div className="h-[230px] border rounded shadow-md pb-3">
          <VideoSlider videos={videos} />
        </div>
      </div>
    </div>
  );
}
