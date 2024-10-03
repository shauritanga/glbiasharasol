import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDays, MapPin, Trophy, Users } from "lucide-react";
import { getAllUsers } from "@/data/user";

export default async function FootballClubPage({
  searchParams,
}: {
  searchParams: { name: string };
}) {
  console.log(searchParams);
  const fans = await getAllUsers();

  const clubFans = fans.filter((fan) =>
    fan.club
      ?.toLocaleLowerCase()
      .includes(searchParams.name.toLocaleLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4 mt-24">
      <div className="container mx-auto">
        {/* Club Header */}
        <div className="mb-6 flex flex-col items-center justify-between space-y-4 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white md:flex-row md:space-y-0">
          <div className="flex items-center space-x-4">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src="/placeholder.svg?height=96&width=96"
                alt="Club Logo"
              />
              <AvatarFallback>FC</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold">{searchParams.name}</h1>
              <p className="text-blue-200">Est. 2023</p>
            </div>
          </div>
          {/* <Button
            variant={isFan ? "secondary" : "default"}
            size="lg"
            onClick={() => setIsFan(!isFan)}
          >
            {isFan ? "Unfollow" : "Become a Fan"}
          </Button> */}
        </div>

        {/* Main Content */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Left Sidebar */}
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Club Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>Shadcn Stadium, Digital City</span>
              </div>
              <div className="flex items-center space-x-2">
                <Trophy className="h-4 w-4 text-muted-foreground" />
                <span>5x League Champions</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span>50,000+ Fans</span>
              </div>
            </CardContent>
          </Card>

          {/* Middle Section - Scrollable Posts */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Latest Updates</CardTitle>
            </CardHeader>
            <ScrollArea className="h-[calc(100vh-300px)]">
              <CardContent>
                {[...Array(10)].map((_, index) => (
                  <div key={index} className="mb-6">
                    <div className="flex items-center space-x-2">
                      <Avatar>
                        <AvatarImage
                          src={`/placeholder.svg?height=40&width=40&text=FC`}
                          alt="FC"
                        />
                        <AvatarFallback>FC</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">FC Shadcn United</h3>
                        <p className="text-sm text-muted-foreground">
                          <CalendarDays className="mr-1 inline-block h-3 w-3" />
                          Posted on May {index + 1}, 2023
                        </p>
                      </div>
                    </div>
                    <p className="mt-2">
                      Exciting news! Our team just secured a fantastic victory
                      in yesterday&apos;s match. The final score was 3-1, with
                      outstanding performances from our strikers. We&apos;re now
                      looking forward to the upcoming fixtures. Keep supporting
                      us!
                    </p>
                    {index < 9 && <Separator className="mt-4" />}
                  </div>
                ))}
              </CardContent>
            </ScrollArea>
          </Card>
        </div>

        {/* Fans Section */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Our Fans</CardTitle>
            <CardDescription>
              Join our community of passionate supporters
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6">
              {clubFans?.map((fan, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-2"
                >
                  <Avatar>
                    <AvatarImage src={""} alt={fan?.name ?? ""} />
                    <AvatarFallback>{fan.name?.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">{fan.name}</span>
                </div>
              ))}
            </div>
            {/* {!showAllFans && (
              <Button
                variant="outline"
                className="mt-4 w-full"
                onClick={() => setShowAllFans(true)}
              >
                See More Fans
              </Button>
            )} */}
          </CardContent>
        </Card>

        {/* Additional Sections */}
        <Tabs defaultValue="fixtures" className="mt-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="fixtures">Fixtures</TabsTrigger>
            <TabsTrigger value="squad">Squad</TabsTrigger>
            <TabsTrigger value="tickets">Tickets</TabsTrigger>
          </TabsList>
          <TabsContent value="fixtures">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Matches</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center justify-between">
                    <span>FC Shadcn United vs. React Rovers</span>
                    <span className="text-muted-foreground">May 15, 2023</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>TypeScript Town vs. FC Shadcn United</span>
                    <span className="text-muted-foreground">May 22, 2023</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>FC Shadcn United vs. Next.js Nationals</span>
                    <span className="text-muted-foreground">May 29, 2023</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="squad">
            <Card>
              <CardHeader>
                <CardTitle>Team Squad</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {["Goalkeeper", "Defender", "Midfielder", "Forward"].map(
                    (position) => (
                      <div key={position} className="space-y-2">
                        <h4 className="font-semibold">{position}s</h4>
                        <ul className="list-inside list-disc space-y-1">
                          <li>Player Name 1</li>
                          <li>Player Name 2</li>
                          <li>Player Name 3</li>
                        </ul>
                      </div>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="tickets">
            <Card>
              <CardHeader>
                <CardTitle>Match Tickets</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Secure your spot at our upcoming home games!
                </p>
                <Button>Purchase Tickets</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
