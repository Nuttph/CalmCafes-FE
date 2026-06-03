"use client";

import React, { useState, useEffect } from "react";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 shadow-[0px_30px_60px_-15px_rgba(83,100,64,0.08)] py-4"
            : "bg-background/80 backdrop-blur-md py-6"
        }`}
      >
        <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <a href="#" className="font-headline-sm text-headline-sm text-primary font-semibold tracking-tight hover:opacity-85 transition-opacity">
            CalmCafes
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-12 items-center">
            <a
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors border-b border-transparent hover:border-primary/30 pb-1"
              href="#story"
            >
              Our Story
            </a>
            <a
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors border-b border-transparent hover:border-primary/30 pb-1"
              href="#menu"
            >
              Menu
            </a>
            <a
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors border-b border-transparent hover:border-primary/30 pb-1"
              href="#location"
            >
              Location
            </a>
            <button
              onClick={onOpenBooking}
              className="bg-primary text-on-primary px-8 py-3 rounded-full font-label-md text-label-md cursor-pointer transition-all duration-200 active:scale-95 hover:opacity-90 shadow-md hover:shadow-lg"
            >
              Book Table
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-primary p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-[28px]">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-background border-b border-outline-variant/30 transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-64 opacity-100 py-6" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-5 px-margin-mobile">
            <a
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
              href="#story"
            >
              Our Story
            </a>
            <a
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
              href="#menu"
            >
              Menu
            </a>
            <a
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
              href="#location"
            >
              Location
            </a>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="bg-primary text-on-primary w-full py-3 rounded-full font-label-md text-label-md transition-transform duration-200 active:scale-95"
            >
              Book Table
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
