import { getAllUsers } from "@/data/user";
import Opportunity from "@/components/opportunity";
import { VideoSlider } from "@/components/video_slider";
import ClubFeed from "@/components/club_feed";
import Image from "next/image";
import { Video } from "@/lib/types";
import FullHeightSlider from "@/components/slider";
import { getPosts } from "@/actions/post";

const images = [
  "/kili.jpeg",
  "/z1.jpg",
  "/z2.jpg",
  "/loyal.jpeg",
  "/z3.jpg",
  "/z4.jpg",
  "/z5.jpeg",
  "/z6.jpeg",
  "/air.jpeg",
  "/air2.jpeg",
  "/air3.jpeg",
];

const nbcs = [
  "/nbc.png",
  "/nbcmechi.jpeg",
  "/tumapesa.jpeg",
  "/atm.jpeg",
  "/wafugaji.jpeg",
];

async function getVideos(): Promise<Video[]> {
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

export default async function FootballClubPage({
  searchParams,
}: {
  searchParams: { name: string };
}) {
  const videos = await getVideos();
  const posts = await getPosts();
  const fans = await getAllUsers();

  const { name } = searchParams;

  return (
    <div className="w-full min-h-screen grid grid-flow-col grid-cols-12">
      <div className="col-span-3 p-2">
        <div className="flex items-center gap-4">
          <Image src={"/chelsea.png"} alt="logo" width={45} height={45} />
          <h3>{name}</h3>
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
        {name.toLowerCase().includes("simba") ? (
          <>
            {" "}
            <div className="flex flex-col p-2 mt-9">
              <h5 className="text-gray-800 mb-2">NBC official sponsor</h5>
            </div>
            <div className="h-[230px] border rounded shadow-md pb-3">
              <FullHeightSlider linkTo={true} images={nbcs} />
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col p-2 mt-9">
              <h5 className="text-gray-800 mb-2">Tourism & Tourist sites</h5>
            </div>
            <div className="h-[230px] border rounded shadow-md pb-3">
              <FullHeightSlider linkTo={false} images={images} />
            </div>
          </>
        )}
        <div className="flex flex-col p-2 mt-9">
          <h5 className="text-gray-800 mb-2">Sports & Talents</h5>
        </div>
        <div className="h-[230px] border rounded shadow-md pb-3">
          <VideoSlider videos={videos} />
        </div>
      </div>
    </div>
  );
}
