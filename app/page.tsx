import React from "react";
import TestimonialSection from "@/components/testimonial/testimonial";
import FeatureSection from "@/components/features/features";
import HeroSection from "@/components/hero/hero";

export default async function Home() {
  try {
  } catch (error) {
    console.log(error);
  }

  return (
    <>
      <HeroSection />
      <FeatureSection />
      <TestimonialSection />
    </>
  );
}
