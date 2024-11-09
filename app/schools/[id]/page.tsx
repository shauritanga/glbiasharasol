"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function SchoolDetailPage() {
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
      <div className="w-full grid grid-cols-2 gap-12 px-48 py-10 ">
        {[
          {
            title: "Medical Doctor",
            description:
              "We offer a degree in medical doctor that are competent tyo compete with the global market",
          },
          {
            title: "Master degree",
            description:
              "We offer a degree in medical doctor that are competent tyo compete with the global market",
          },
          {
            title: "Nusrsing",
            description:
              "We offer a degree in medical doctor that are competent tyo compete with the global market",
          },
          {
            title: "Social Work",
            description:
              "We offer a degree in medical doctor that are competent tyo compete with the global market",
          },
        ].map((program) => (
          <div className="flex flex-col rounded shadow-md bg-white w-full h-max p-4">
            <h4 className="font-bold mb-2">{program.title}</h4>
            <p className="text-gray-400">{program.description}</p>
            <Button
              onClick={() => window.open("https://www.hkmu.ac.tz/", "_blank")}
              variant="link"
            >
              Learn more
            </Button>
          </div>
        ))}
      </div>

      <h1 className="p-8 font-bold text-xl">
        Educational articles and tutorials
      </h1>
      <div className="w-full grid grid-cols-2 gap-12 px-48 py-10 ">
        {[
          {
            title: "How to perform liver sugery",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu ",
          },
          {
            title: "University student managed to implant artificial eye ",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu ",
          },
          {
            title: "List of special operation practice at Kairuki university",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu ",
          },
        ].map((education) => (
          <div className="flex flex-col shadow-md rounded w-full bg-white p-4">
            <h4 className="font-bold mb-2">{education.title}</h4>
            <p className="text-gray-400">{education.description}</p>
            <Button
              onClick={() => window.open("https://www.hkmu.ac.tz/", "_blank")}
              variant="link"
              className="self-end text-sky-500"
            >
              Read more
            </Button>
          </div>
        ))}
      </div>

      <div className="bg-white w-full h-max mb-8 flex flex-col p-8 items-center">
        <h4 className="mb-4">Parents and our sponsors</h4>
        <div className="flex w-full justify-evenly">
          <input
            type="text"
            placeholder="seacrh here..."
            className="w-[320zpx] border rounded px-2 focus:border-sky-500 outline-none"
          />
          <Button variant="link">See All</Button>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {[
            {
              name: "Athanas Shauritanga",
              profession: "software engineer",
              location: "Kawe",
            },
            {
              name: "Mugisha Kairuki",
              profession: "Hotel Manager",
              location: "Upanga",
            },
            {
              name: "Doreen Masaki",
              profession: "Electrical engineer",
              location: "Kigamboni",
            },
            {
              name: "Doreen Masaki",
              profession: "Electrical engineer",
              location: "Kigamboni",
            },
            {
              name: "Doreen Masaki",
              profession: "Electrical engineer",
              location: "Kigamboni",
            },
            {
              name: "Doreen Masaki",
              profession: "Electrical engineer",
              location: "Kigamboni",
            },
            {
              name: "Doreen Masaki",
              profession: "Electrical engineer",
              location: "Kigamboni",
            },
            {
              name: "Doreen Masaki",
              profession: "Electrical engineer",
              location: "Kigamboni",
            },
            {
              name: "Doreen Masaki",
              profession: "Electrical engineer",
              location: "Kigamboni",
            },
            {
              name: "Doreen Masaki",
              profession: "Electrical engineer",
              location: "Kigamboni",
            },
            {
              name: "Doreen Masaki",
              profession: "Electrical engineer",
              location: "Kigamboni",
            },
            {
              name: "Doreen Masaki",
              profession: "Electrical engineer",
              location: "Kigamboni",
            },
          ].map((parent) => (
            <div className="flex cursor-pointer gap-4 my-8 p-4 hover:shadow-sm hover:bg-slate-100">
              <div className="w-12 h-12 rounded-full bg-slate-400"></div>
              <div className="flex  flex-col">
                <span>{parent.name}</span>
                <span className="text-gray-400">{parent.profession}</span>
                <span className="text-gray-400">{parent.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
