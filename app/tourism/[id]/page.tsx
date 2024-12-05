import { BookAirDialog } from "@/components/book_airplane/book_air";
import { BookHotelDialog } from "@/components/book_hotel";
import FullHeightSlider from "@/components/slider";
import { Airplay, Hotel, HousePlus, Plane } from "lucide-react";

const images = ["/z1.jpg", "/z2.jpg", "/z3.jpg", "/z4.jpg", "/z1.jpg"];
export default function TouristSite() {
  return (
    <div className="min-h-screen">
      <div
        style={{
          backgroundImage: `url("/z1.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
        className="h-[90vh] p-4"
      >
        <div className="m-auto w-max gap-4 flex h-8 p-4 items-center justify-between">
          {/* <span className="bg-white flex items-center p-2 gap-1 rounded cursor-pointer">
            <Hotel className="h-4 w-4" />
            Book hotel
          </span> */}
          <BookHotelDialog />
          <BookAirDialog />
          <span className="bg-white flex items-center p-2 gap-1 rounded cursor-pointer">
            <HousePlus className="h-4 w-4" />
            Book Appartment
          </span>
        </div>
        <div className=" self-center m-56 flex justify-center items-center">
          <h5 className="bg-neutral-800/5 p-4 text-4xl text-white">
            Zanzibar the luxury high land in Africa
          </h5>
        </div>
      </div>
      {/* <FullHeightSlider linkTo={false} images={images} /> */}

      <h1 className="text-center p-4">Amazing Places in Zanzibar </h1>
      <div className="grid grid-cols-2 w-2/3 mx-auto gap-4 p-4">
        <div className="col-span-1 rounded h-96 shadow-sm hover:shadow-md hover:cursor-pointer">
          <img src="/z3.jpg" className="h-2/3 w-full" />
        </div>
        <div className="col-span-1 rounded h-96 shadow-sm hover:shadow-md hover:cursor-pointer">
          <img src="/jozani.jpeg" className="h-2/3 w-full" />
        </div>
        <div className="col-span-1 rounded h-96 shadow-sm hover:shadow-md hover:cursor-pointer">
          <img src="/nakupenda.jpg" className="h-2/3 w-full" />
        </div>
        <div className="col-span-1 rounded h-96 shadow-sm hover:shadow-md hover:cursor-pointer">
          <img src="/mnemba.jpeg" className="h-2/3 w-full" />
        </div>
        <div className="col-span-1 rounded h-60"></div>
        <div className="col-span-1 rounded h-60"></div>
      </div>
    </div>
  );
}
