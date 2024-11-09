"use client";

import { Button } from "./ui/button";

export default function Programmes() {
  return (
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
      ].map((program, index) => (
        <div
          key={index}
          className="flex flex-col rounded shadow-md bg-white w-full h-max p-4"
        >
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
  );
}
