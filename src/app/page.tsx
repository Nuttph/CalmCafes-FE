"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import FeaturedDelights from "@/components/FeaturedDelights";
import VisitUs from "@/components/VisitUs";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    // Intersection Observer for scroll reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />
      
      <main className="flex-1 flex flex-col">
        <Hero onOpenBooking={() => setIsBookingOpen(true)} />
        <Philosophy />
        <FeaturedDelights />
        <VisitUs />
      </main>

      <Footer />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
}

