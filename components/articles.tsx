"use client";

import { Button } from "./ui/button";

export default function Articles() {
  return (
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
      ].map((education, index) => (
        <div
          key={index}
          className="flex flex-col shadow-md rounded w-full bg-white p-4"
        >
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
  );
}
