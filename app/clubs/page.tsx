"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Trophy, Users } from "lucide-react";
import Link from "next/link";
import { VideoSlider } from "@/components/video_slider";

const clubs = [
  {
    id: 1,
    name: "FC Barcelona",
    country: "Spain",
    fans: "99M+",
    trophies: 96,
    image: "/placeholder.svg?height=200&width=300&text=FC+Barcelona",
  },
  {
    id: 2,
    name: "Manchester United",
    country: "England",
    fans: "75M+",
    trophies: 66,
    image: "/placeholder.svg?height=200&width=300&text=Manchester+United",
  },

  {
    id: 5,
    name: "Chelsea",
    country: "England",
    fans: "65M+",
    trophies: 67,
    image: "/placeholder.svg?height=200&width=300&text=Liverpool+FC",
  },

  {
    id: 9,
    name: "Yanga",
    country: "Tanzania",
    fans: "450M+",
    trophies: 70,
    image: "/placeholder.svg?height=200&width=300&text=Juventus",
  },
  {
    id: 10,
    name: "Simba",
    country: "Tanzania",
    fans: "40M+",
    trophies: 49,
    image: "/placeholder.svg?height=200&width=300&text=AC+Milan",
  },
];

export default function FootballClubsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCountry, setFilterCountry] = useState("");

  const filteredClubs = clubs.filter(
    (club) =>
      club.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterCountry === "" || club.country === filterCountry)
  );
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto">
        <h1 className="mb-8 text-center text-4xl font-bold">Football Clubs</h1>

        <div className="mb-6 flex flex-col gap-4 sm:flex-row">
          <Input
            placeholder="Search clubs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow"
          />
          <Select onValueChange={setFilterCountry} value={filterCountry}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Filter by country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value=" ">All Countries</SelectItem>
              <SelectItem value="England">England</SelectItem>
              <SelectItem value="Spain">Spain</SelectItem>
              <SelectItem value="Germany">Germany</SelectItem>
              <SelectItem value="Italy">Italy</SelectItem>
              <SelectItem value="France">France</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredClubs.map((club) => (
            <Card key={club.id} className="overflow-hidden">
              <CardHeader className="p-0">
                <img
                  src={club.image}
                  alt={club.name}
                  className="h-48 w-full object-cover"
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="mb-2">{club.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{club.country}</p>
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex items-center">
                    <Users className="mr-1 h-4 w-4" />
                    <span className="text-sm">{club.fans}</span>
                  </div>
                  <div className="flex items-center">
                    <Trophy className="mr-1 h-4 w-4" />
                    <span className="text-sm">{club.trophies}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link href={`/clubs/${club.id}?name=${club.name}`}>
                  <Button className="w-full">View Club</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredClubs.length === 0 && (
          <p className="mt-8 text-center text-lg text-muted-foreground">
            No clubs found matching your search criteria.
          </p>
        )}
      </div>
    </div>
  );
}
