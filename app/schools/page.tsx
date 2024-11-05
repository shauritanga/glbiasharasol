import Link from "next/link";

export default function SchoolsPage() {
  return (
    <div className="min-h-screen container mx-auto mt-4">
      <div className="flex justify-between mb-2">
        <p>200 Schools use this systems</p>
        <input
          type="text"
          placeholder="Search school"
          className="border rounded p-2"
        />
      </div>

      <video className="w-full overflow-auto border" controls>
        <source src="/videos/" type="video/mp4" />
        <source src="movie.ogg" type="video/ogg" />
        Your browser does not support the video tag.
      </video>
      <p className="m-2">Schools</p>
      <div className="grid grid-cols-4 gap-4 p-2">
        {[
          "Mikocheni",
          "Mwananyamala",
          "Baobab",
          "Feza",
          "Olympio",
          "Kairuki",
          "Diamond",
          "Ukwamani",
        ].map((element) => (
          <Link href={`schools/${element}`}>
            <div className="w-full h-[150px] bg-slate-200 rounded p-2">
              <p>{element}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
