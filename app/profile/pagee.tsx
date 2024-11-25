"use client";
import { auth } from "@/auth";
import Project from "@/components/projects/page";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import getPost from "@/lib/get_user_posts";

export default async function ProfilePage() {
  const session = await auth();
  const posts = await getPost(session?.user.id!);

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
          <h1 className="text-2xl font-bold">{session?.user?.name}</h1>
          <p className="text-muted-foreground">{session?.user?.email}</p>
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
          <Project posts={posts} />
        </div>
      </div>
    </div>
  );
}
