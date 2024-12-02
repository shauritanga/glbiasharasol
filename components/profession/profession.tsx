"use client";

import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { getAllUsers } from "@/actions/get_user";
import Link from "next/link";

type User = {
  name: string | null;
  id: string;
  email: string | null;
  profession: string | null;
  business: string | null;
};

const professions: String[] = [];

export default function UserSelector() {
  const [selectedField, setSelectedField] = useState<string>("");
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      const fetchedUsers = await getAllUsers(selectedField);
      setIsLoading(false);
      setSelectedUsers(fetchedUsers);
    };
    fetchUsers();
  }, [selectedField]);

  const handleSelectUser = (business: string) => {
    setSelectedField(business);
  };

  return (
    <div className="space-y-4">
      <Select onValueChange={handleSelectUser}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a user" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="agriculture">Agriculture</SelectItem>
          <SelectItem value="bee">Bee Keeping</SelectItem>
          <SelectItem value="general">General</SelectItem>
          <SelectItem value="cv">CV, Employment or Talents</SelectItem>
          <SelectItem value="manufacturing">Manufacturing</SelectItem>
          <SelectItem value="foods">Foods & Beverage</SelectItem>
          <SelectItem value="radio">Radio & TVs</SelectItem>
          <SelectItem value="tourism">Tourism</SelectItem>
          <SelectItem value="communication">
            Communication & Networks
          </SelectItem>
          <SelectItem value="eduction">REducation Provision</SelectItem>
          <SelectItem value="health">Health Services</SelectItem>
        </SelectContent>
      </Select>

      <Card>
        <CardContent>
          <div className="space-y-4 pt-2">
            {isLoading
              ? "loading..."
              : selectedUsers.map((user) => (
                  <div key={user.id} className="flex items-center space-x-4">
                    <Link href={`/profile/${user.id}`} className="flex gap-2">
                      <Avatar>
                        <AvatarFallback>
                          {user.name?.slice(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium leading-none">
                          {user.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {user.email}
                        </p>
                      </div>
                    </Link>
                  </div>
                ))}
            {isLoading
              ? ""
              : selectedUsers.length === 0 && (
                  <p className="text-sm text-muted-foreground">
                    No users selected
                  </p>
                )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
