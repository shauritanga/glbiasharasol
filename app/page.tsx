"use client";
import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import { Menu, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import FeatureSection from "./components/features";

const images = [
  { src: "/1.jpg", text: "Welcome to our amazing tourist sites in Zanzibar" },
  { src: "/2.jpg", text: "Discover the coolest place to rest" },
  { src: "/3.jpg", text: "Quality heath services from KAIRUKI hospital" },
  { src: "/4.jpg" },
];

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO",
    comment:
      "When I want to hire, Glbiasharasol has by back. There are great people in here, we just happened to know each other through footbal clubs",
    avatar: "/avatar1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Designer",
    comment:
      "I can't imagine working without this tool now. I am now able to sell by products worldwide",
    avatar: "/avatar2.jpg",
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Developer",
    comment:
      "Meeting with people doing the same thing and able to start conversation on the internet was tough, but GLbiashara made it simple",
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
    comment:
      "Entertainging and doing business with peple worldwide is real revolution!",
    avatar: "/avatar5.jpg",
  },
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
                    Clubs
                  </a>
                  <a
                    href="#"
                    className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Entrepreneur
                  </a>
                  <a
                    href="#"
                    className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Technologies
                  </a>
                  <a
                    href="#"
                    className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Health
                  </a>
                  <a
                    href="#"
                    className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Financial
                  </a>
                  <a
                    href="#"
                    className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Tourism
                  </a>
                  <a
                    href="#"
                    className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Talents
                  </a>
                  <a
                    href="#"
                    className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    CVs
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
                className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Clubs
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Entrepreneur
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Technologies
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Health
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Financial
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Tourism
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Talents
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                CVs
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
        <div className="relative h-[90vh] overflow-hidden">
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
        <FeatureSection />

        {/* Testimonials Section */}
        <div className="bg-gray-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
              People&apos;s overview on GLbiasharasol
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

      <footer className="bg-gray-800 text-white pt-12 pb-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div>
              <h4 className="font-bold mb-4">PRODUCT</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="#">Recruiting talents</Link>
                </li>
                <li>
                  <Link href="#">Link people worldwide</Link>
                </li>
                <li>
                  <Link href="#">Automate & hire</Link>
                </li>
                <li>
                  <Link href="#">Onboard & manage</Link>
                </li>
                <li>
                  <Link href="#">Reduce time to hire</Link>
                </li>
                <li>
                  <Link href="#">Improve DEI</Link>
                </li>
                <li>
                  <Link href="#">Ensure compliance</Link>
                </li>
                <li>
                  <Link href="#">All features</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">PLATFORM</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="#">Meeting people you share interest</Link>
                </li>
                <li>
                  <Link href="#">Why Glbiasharasol</Link>
                </li>
                <li>
                  <Link href="#">Post a job for free</Link>
                </li>
                <li>
                  <Link href="#">Help center</Link>
                </li>
                <li>
                  <Link href="#">Partners & integrations</Link>
                </li>
                <li>
                  <Link href="#">Become a partner</Link>
                </li>
                <li>
                  <Link href="#">Security</Link>
                </li>
                <li>
                  <Link href="#">Real-time customer satisfaction</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">EMPLOYER RESOURCES</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="#">Job descriptions</Link>
                </li>
                <li>
                  <Link href="#">Applicant tracking</Link>
                </li>
                <li>
                  <Link href="#">Interview questions</Link>
                </li>
                <li>
                  <Link href="#">Hiring resources</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">JOBSEEKER RESOURCES</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="#">Search for jobs</Link>
                </li>
                <li>
                  <Link href="#">Career center</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">GLBIASHARASOL</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="#">Work with us</Link>
                </li>
                <li>
                  <Link href="#">Backstage</Link>
                </li>
                <li>
                  <Link href="#">Press</Link>
                </li>
                <li>
                  <Link href="#">Contact us</Link>
                </li>
                <li>
                  <Link href="#">About</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              &copy; Glbiasharasol Limited 2024-2024
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-instagram"></i>
              </a>
            </div>

            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#">
                <Image
                  src="/apple-store.png"
                  alt="Download on the App Store"
                  width={150}
                  height={40}
                />
              </Link>
              <Link href="#">
                <Image
                  src="/google-play.png"
                  alt="Get it on Google Play"
                  width={150}
                  height={40}
                />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
