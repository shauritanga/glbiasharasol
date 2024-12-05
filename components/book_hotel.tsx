"use client";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import PostForm from "./post_form";
import { Hotel } from "lucide-react";
import BookHotelForm from "./book_hotel_form";

export function BookHotelDialog() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <span className="bg-white flex items-center p-2 gap-1 rounded cursor-pointer">
          <Hotel className="h-4 w-4" />
          Book hotel
        </span>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <BookHotelForm onSuccess={() => setIsOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
