"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Parents } from "@/lib/types";

export default function ParentsComponent({ parents }: { parents: Parents }) {
  return (
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
        {parents.map((parent, index) => (
          <Link key={index} href="/profile">
            <div className="flex cursor-pointer gap-4 my-8 p-4 hover:shadow-sm hover:bg-slate-100">
              <div className="w-12 h-12 rounded-full bg-slate-400"></div>
              <div className="flex  flex-col">
                <span>{parent.name}</span>
                <span className="text-gray-400">{` ${
                  parent.profession &&
                  parent.profession?.split("")["0"].toUpperCase()
                }${parent.profession?.slice(1)}`}</span>
                <span className="text-gray-400">{`${parent.region
                  .split("")
                  ["0"].toUpperCase()}${parent.region.slice(1)}`}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
