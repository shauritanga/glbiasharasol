"use client";
import React from "react";
import { Button } from "../ui/button";

interface Slide {
  image: string;
  description: string;
}

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const slides: Slide[] = [
    { image: "/1.jpg", description: "Discover new opportunities" },
    {
      image: "/2.jpg",
      description: "Connect with like-minded individuals",
    },
    { image: "/3.jpg", description: "Grow your skills and network" },
    { image: "/4.jpg", description: "Explore diverse industries" },
    { image: "/5.jpg", description: "Shape your future" },
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[90vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
              {slide.description}
            </h1>
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 left-4 right-4 flex justify-between">
        <Button
          variant="outline"
          onClick={() =>
            setCurrentSlide(
              (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
            )
          }
        >
          Previous
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
          }
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
