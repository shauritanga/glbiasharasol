import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import {
  CalendarDays,
  Home,
  Mail,
  MessageSquare,
  Settings,
  User,
} from "lucide-react";
import Link from "next/link";
import { auth } from "@/auth";

export default async function ProfilePage() {
  const session = await auth();
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
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>

        {/* User Info */}
        <div className="pt-20 pb-4">
          <h1 className="text-2xl font-bold">{session?.user?.name}</h1>
          <p className="text-muted-foreground">{session?.user.email}</p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Left Sidebar */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>About</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Home className="w-4 h-4" />
                  <span>Lives in Dar es salaam, Tanzania</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>{session?.user.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CalendarDays className="w-4 h-4" />
                  <span>Joined January 2023</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Middle Section - Scrollable Posts */}
          <Card className="col-span-1 md:col-span-2">
            <CardHeader>
              <CardTitle>Posts</CardTitle>
            </CardHeader>
            <ScrollArea className="h-[calc(100vh-300px)]">
              <CardContent>
                {[...Array(10)].map((_, index) => (
                  <div key={index} className="mb-6">
                    <h3 className="text-lg font-semibold mb-2">
                      Post Title {index + 1}
                    </h3>
                    <p className="text-muted-foreground mb-2">
                      This is a sample post content. It can be a long paragraph
                      discussing various topics, sharing updates, or expressing
                      thoughts.
                    </p>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <CalendarDays className="w-4 h-4" />
                      <span>Posted on May {index + 1}, 2023</span>
                    </div>
                    {index < 9 && <Separator className="mt-4" />}
                  </div>
                ))}
              </CardContent>
            </ScrollArea>
          </Card>

          {/* Right Sidebar */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Links</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  asChild
                >
                  <Link href="/profile">
                    <User className="mr-2 h-4 w-4" /> Profile
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  asChild
                >
                  <Link href="/messages">
                    <MessageSquare className="mr-2 h-4 w-4" /> Messages
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  asChild
                >
                  <Link href="/settings">
                    <Settings className="mr-2 h-4 w-4" /> Settings
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
