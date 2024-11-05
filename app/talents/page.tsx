import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TalentPage() {
  return (
    <div className="container bg-slate-100 flex mx-auto min-h-screenss">
      <div className="w-1/4 h-screen m-8">
        <div className="bg-white py-1 px-3">
          <h6 className="bg-gray-400">Health Institutions</h6>
          <Link href="health/kairuki">
            <p className="text-sm ml-2">Kairuki hospital</p>
          </Link>
        </div>
      </div>
      <div className="w-3/4 overflow-x-scroll bg-slate-100">
        {[{ name: "Michocheni", videoUrl: "mikocheni.mp4" }].map((element) => (
          <div className="flex flex-col bg-white shadow-md rounded m-8 p-2">
            <p className="px-2 bg-slate-100">{element.name}</p>
            <video controls>
              <source src="/videos/mikocheni.mp4" type="video/mp4" />
              <source src="movie.ogg" type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
      <div className="w-1/4 h-screen m-8 ">
        <form className="flex flex-col space-y-4 p-8  bg-white rounded shadow-md">
          <h1>Register for Talent</h1>
          <input
            type="text"
            className="border rounded px-2 py-1"
            placeholder="Full name"
          />
          <input
            type="text"
            className="border rounded px-2 py-1"
            placeholder="Your school"
          />
          <select className="rounded px-2 py-1 ">
            <option value="" selected disabled>
              Talent
            </option>
            <option value="football">Sports</option>
            <option value="football">Academic</option>
          </select>
          <input type="text" className="border rounded px-2" />
          <input type="text" className="border rounded px-2" />
          <Button>Create Account</Button>
        </form>
      </div>
    </div>
  );
}
