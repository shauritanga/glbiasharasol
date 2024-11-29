"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function FullHeightSlider({
  images,
  linkTo = false,
}: {
  images: String[];
  linkTo: Boolean;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          {linkTo ? (
            <Link href={"https://www.nbc.co.tz/en/personal/"}>
              <Image
                src={src.toString()}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
                priority={index === 0}
              />
            </Link>
          ) : (
            <Image
              src={src.toString()}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="cover"
              priority={index === 0}
            />
          )}

          {/* <Image
            src={src}
            alt={`Slide ${index + 1}`}
            layout="fill"
            objectFit="cover"
            priority={index === 0}
          /> */}
        </div>
      ))}
    </div>
  );
}
