"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";

import { auth } from "@/auth";
import { useState } from "react";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("Work");
  const session = useSession();
  return (
    <div className="min-h-screen bg-background mb-10">
      {/* Banner */}
      <div className="relative h-60 bg-gradient-to-r from-blue-500 to-purple-600">
        <img
          src="/placeholder.svg?height=192&width=1920"
          alt="Profile Banner"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Avatar */}
        <Avatar className="absolute -top-16 left-4 w-32 h-32 border-4 border-background">
          <AvatarImage
            src="/placeholder.svg?height=128&width=128"
            alt="User Avatar"
          />
          <AvatarFallback>AS</AvatarFallback>
        </Avatar>

        {/* User Info */}
        <div className="pt-20 pb-4">
          <h1 className="text-2xl font-bold">{session.data?.user.name}</h1>
          <p className="text-muted-foreground">{session?.data?.user.email}</p>
        </div>
      </div>
      <div className="container mx-auto  flex gap-11">
        <div className="w-1/4 flex flex-col gap-5">
          <Button className="bg-blue-500 hover:bg-sky-500  rounded-full w-full">
            Edit Profile Info
          </Button>
          <Button className="bg-blue-500 hover:bg-sky-500  rounded-full w-full">
            Edit Availability
          </Button>
        </div>
        <div className="w-3/4">
          <div className="flex gap-5 ">
            <span
              onClick={() => setActiveTab("Work")}
              className={`${
                activeTab === "Work" ? "border-b-2 border-b-blue-500" : ""
              } cursor-pointer hover:border-b-2`}
            >
              Work
            </span>
            <span
              onClick={() => setActiveTab("CV")}
              className={`${
                activeTab === "CV" ? "border-b-2 border-b-blue-500" : ""
              } cursor-pointer hover:border-b-2`}
            >
              CV
            </span>
            <span
              onClick={() => setActiveTab("Services")}
              className={`${
                activeTab === "Services" ? "border-b-2 border-b-blue-500" : ""
              } pb-3 cursor-pointer hover:border-b-2`}
            >
              Services
            </span>
            <span
              onClick={() => setActiveTab("Projects")}
              className={`${
                activeTab === "Projects" ? "border-b-2 border-b-blue-500" : ""
              } cursor-pointer hover:border-b-2`}
            >
              Projects
            </span>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}
