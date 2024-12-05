"use client";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Hotel } from "lucide-react";
import BookAirForm from "./book_air_form";

export function BookAirDialog() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <span className="bg-white flex items-center p-2 gap-1 rounded cursor-pointer">
          <Hotel className="h-4 w-4" />
          Book Airplane
        </span>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <BookAirForm onSuccess={() => setIsOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
