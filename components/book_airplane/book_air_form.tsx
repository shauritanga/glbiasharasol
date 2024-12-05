"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface PostFormProps {
  onSuccess: () => void;
}

export default function BookAirForm({ onSuccess }: PostFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);

    // const result = await addPost(formData);
    const delay = (ms: any) =>
      new Promise((resolve) => setTimeout(resolve, ms));
    await delay(1000); /// waiting 1 second.

    setIsSubmitting(false);

    // if (result.message) {
    //   onSuccess();
    //   router.refresh();
    // } else {
    //   // Handle error
    //   console.error(result.error);
    // }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Ariving Date
        </label>
        <Input id="arive" type="date" name="arive" required />
      </div> */}
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Departure Date
        </label>
        <Input id="depart" type="date" name="depart" required />
      </div>
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Departure Time
        </label>
        <Input id="depart" type="time" name="depart" required />
      </div>

      <div>
        <label
          htmlFor="hotel"
          className="block text-sm font-medium text-gray-700"
        >
          Plane
        </label>
        <select name="hotel" className="w-full p-2">
          <option value="" disabled selected>
            Choose best plane
          </option>
          <option value="ethiopia">Ethiopia Airline</option>
          <option value="atcl">Air Tanzania</option>
        </select>
      </div>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Booking..." : "Book Now"}
      </Button>
    </form>
  );
}
