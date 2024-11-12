import { db } from "@/lib/db";
import { auth } from "@/auth";
import { Boxes, Ellipsis, Image, SquarePen, X } from "lucide-react";

export default async function AgriculturalPage() {
  const session = await auth();
  const response = await db.user.findMany({
    where: {
      profession: {
        equals: "business_analyst",
      },
    },
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      profession: true,
      region: true,
      district: true,
      business: true,
      ward: true,
      village: true,
      club: true,
    },
  });

  return (
    <div className="flex p-4">
      <div className="flex flex-col gap-4 w-1/4 min-h-screen p-2">
        <div className="rounded shadow-md bg-slate-300">
          <div className=" bg-red-500 w-full h-[80px]"></div>
          <div className=" ml-1 absolute top-28 left-10 h-20 w-20 bg-cyan-200 rounded-full"></div>
          <div className="mt-10 ml-3">
            <h1 className="text-lg">{session?.user.name}</h1>
            <p>{session?.user.email}</p>
          </div>
        </div>
        <div className="h-20 w-full bg-green-500 rounded"></div>
        <div className="bg-cyan-300 w-full h-20 rounded"></div>
        <div className="bg-cyan-600 w-full h-20 rounded"></div>
      </div>
      <div className="flex flex-col w-2/4 min-h-screen p-3">
        <div className="flex flex-col gap-4 bg-white border rounded px-6 py-4 mb-10">
          <div className="flex gap-4">
            <div className="rounded-full h-12 w-14 bg-red-500"></div>
            <input
              type="text"
              className="w-full border rounded-full placeholder:text-black px-6"
              placeholder="Start a post"
            />
          </div>
          <div className="flex justify-between">
            <span className="flex gap-2 p-2 items-center hover:bg-gray-100 hover:p-2 rounded hover:cursor-pointer">
              <Image />
              Media
            </span>
            <span className="flex gap-2 p-2 items-center hover:bg-gray-100 hover:p-2 rounded hover:cursor-pointer">
              <Boxes />
              Contribute
            </span>
            <span className="flex gap-2 p-2 items-center hover:bg-gray-100 hover:p-2 rounded hover:cursor-pointer">
              <SquarePen />
              Write article
            </span>
          </div>
        </div>
        {["James", "Hussein"].map((post) => (
          <div className="flex flex-col justify-between border mb-8 rounded p-2">
            <div className="w-full flex justify-between">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-green-500"></div>
                <div className="flex flex-col">
                  <p>Athanas Shauritanga</p>
                  <p className="text-gray-500">Software developer</p>
                  <p className="text-gray-400">1 day</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Ellipsis />
                <X />
              </div>
            </div>
            <hr />
            <div className="w-full h-[80vh]"></div>
          </div>
        ))}
      </div>
      <div className="w-1/4 min-h-screen p-3">
        <div className="border rounded p-2">
          <h4 className="text-gray-500">People having profession like yours</h4>
          <hr className="m-1" />
          {response?.map((person) => (
            <div className="flex gap-3 mb-4 p-2">
              <div className="w-10 h-10 bg-cyan-500 rounded-full"></div>
              <div className="flex flex-col">
                <h5>{person.name}</h5>
                <p className="text-gray-400">
                  {person.profession === "business_analyst"
                    ? "Business Analyst"
                    : ""}
                </p>
                <p className="text-gray-400">{person.phone}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
