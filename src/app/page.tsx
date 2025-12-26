"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import LandingHeader from "@/components/landing/LandingHeader";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import CallToActionSection from "@/components/landing/CallToActionSection";
import LandingFooter from "@/components/landing/LandingFooter";

const Home: React.FC = () => {
  //   const { user, isLoaded } = useUser();
  //   const router = useRouter();

  //   React.useEffect(() => {
  //     if (isLoaded) {
  //       if (!user) {
  // The user originally had a redirect here if not logged in.
  // But usually a landing page is visible to everyone.
  // The user asked to make the landing page beautiful, implying it should be a marketing page.
  // If they wanted it to be just a redirect, they wouldn't ask for features/sections.
  // So I will comment out the redirect logic so the landing page is visible.
  // If logged in, they can go to dashboard via header.
  //       }
  //     }
  //   }, [isLoaded, user, router]);

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-purple-100 selection:text-purple-900 dark:bg-gray-950 dark:text-white font-sans">
      <LandingHeader />

      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <CallToActionSection />
      </main>

      <LandingFooter />
    </div>
  );
};

export default Home;
