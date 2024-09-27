"use client";
import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import { Menu, X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/1.jpg", text: "Welcome to our amazing tourist sites in Zanzibar" },
  { src: "/2.jpg", text: "Discover the coolest place to rest" },
];

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO",
    comment: "This product has revolutionized our business operations.",
    avatar: "/avatar1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Designer",
    comment: `I can&apos;t imagine working without this tool now.`,
    avatar: "/avatar2.jpg",
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Developer",
    comment: "The efficiency gains are truly remarkable.",
    avatar: "/avatar3.jpg",
  },
  {
    id: 4,
    name: "Sarah Brown",
    role: "Marketing Manager",
    comment: "Our teams productivity has skyrocketed thanks to this product.",
    avatar: "/avatar4.jpg",
  },
  {
    id: 5,
    name: "Alex Lee",
    role: "Entrepreneur",
    comment: "A game-changer for startups. Highly recommended!",
    avatar: "/avatar5.jpg",
  },
];

const productFeatures = [
  {
    id: "feature1",
    title: "Easy Integration",
    description: "Seamlessly integrate with your existing tools and workflows.",
    icon: "🔗",
  },
  {
    id: "feature2",
    title: "Advanced Analytics",
    description: "Gain deep insights with our powerful analytics dashboard.",
    icon: "📊",
  },
  {
    id: "feature3",
    title: "Secure & Reliable",
    description: "Bank-level security ensures your data is always protected.",
    icon: "🔒",
  },
  {
    id: "feature4",
    title: "24/7 Support",
    description: "Our dedicated team is always ready to assist you.",
    icon: "🆘",
  },
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(productFeatures[0].id);
  const testimonialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scroll = (direction: "left" | "right") => {
    if (testimonialRef.current) {
      const { current } = testimonialRef;
      const scrollAmount =
        direction === "left" ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="bg-white shadow-md fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="h-8 w-8" src="/logo.svg" alt="Logo" />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-center space-x-4">
                  <Link
                    href="/"
                    className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </Link>
                  <a
                    href="#"
                    className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <Link
                  href="/signin"
                  className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="bg-blue-500 text-white hover:bg-blue-600 px-3 py-2 rounded-md text-sm font-medium ml-2"
                >
                  Sign Up
                </Link>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </Link>
              <a
                href="#"
                className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </a>
              <Link
                href="/signin"
                className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        <div className="relative h-[80vh] overflow-hidden">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${image.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h1 className="text-white text-4xl md:text-6xl font-bold text-center px-4">
                  {image.text}
                </h1>
              </div>
            </div>
          ))}
        </div>

        {/* Product Feature Showcase */}
        <div className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
              Our Product Features
            </h2>
            <div className="flex flex-col md:flex-row">
              {/* Tabs */}
              <div className="md:w-1/3 mb-6 md:mb-0">
                {productFeatures.map((feature) => (
                  <button
                    key={feature.id}
                    onClick={() => setActiveFeature(feature.id)}
                    className={`block w-full text-left px-4 py-2 mb-2 rounded ${
                      activeFeature === feature.id
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {feature.icon} {feature.title}
                  </button>
                ))}
              </div>
              {/* Feature Description */}
              <div className="md:w-2/3 md:pl-8">
                {productFeatures.map((feature) => (
                  <div
                    key={feature.id}
                    className={`transition-opacity duration-300 ${
                      activeFeature === feature.id
                        ? "opacity-100"
                        : "opacity-0 hidden"
                    }`}
                  >
                    <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-gray-600 text-lg">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
              What Our Customers Say
            </h2>
            <div className="relative">
              <div
                ref={testimonialRef}
                className="flex overflow-x-auto space-x-6 scrollbar-hide scroll-smooth"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="flex-none w-80 bg-white rounded-lg shadow-md p-6"
                  >
                    <div className="flex items-center mb-4">
                      <img
                        className="h-12 w-12 rounded-full mr-4"
                        src={testimonial.avatar}
                        alt={testimonial.name}
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-300">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-800">
                      &ldquo;{testimonial.comment}&rdquo;
                    </p>
                  </div>
                ))}
              </div>
              <button
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
              >
                <ChevronLeft className="h-6 w-6 text-gray-600" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
              >
                <ChevronRight className="h-6 w-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center">
            &copy; 2024 Your Company. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
