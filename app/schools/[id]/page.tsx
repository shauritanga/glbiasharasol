import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import Image from "next/image";
import ParentsComponent from "@/components/parent";
import Programmes from "@/components/programs";
import Articles from "@/components/articles";
import { Parents } from "@/lib/types";

export default async function SchoolDetailPage() {
  const response: Parents = await db.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      profession: true,
      region: true,
      district: true,
      ward: true,
      village: true,
      club: true,
    },
  });

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-slate-50">
      <Image
        src={"/kairuki.jpeg"}
        alt="Kairuki image"
        width={709}
        height={500}
        className="w-full h-[70vh]"
      />
      <h1 className="p-8 font-bold text-xl">Our Programmes</h1>
      <Programmes />
      <h1 className="p-8 font-bold text-xl">
        Educational articles and tutorials
      </h1>
      <Articles />
      <ParentsComponent parents={response} />
    </div>
  );
}
