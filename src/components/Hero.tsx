"use client";

import React from "react";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          alt="Minimal Cafe Interior"
          className="w-full h-full object-cover scale-105 animate-[subtle-zoom_20s_ease-out_infinite]"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTs0-Qky55w44sAOGdnjbWcVabi77_OX1qu8CM9T7J5otxBIK_RSdcK5o6oj7x7t6QflYG99okNCenCe5Yv5RuP6a7CE4ABvHqT22Y3Ci-rNvd6TLLQAv1D-3tr2nUoUif08eULt2n8UgXDJ9vS8tFaEIzINvrrqD67sQJD4TpqYh5lPn4K4IPUNm-1C3OX5SzxjrQQefqRC98ktmEl5GLSp4qHQB5czn1ytgfwdcQiYw6fVft70G7LwSFv46PDNZr3IPIvYlKGkF-"
        />
        <div className="absolute inset-0 bg-inverse-surface/30 backdrop-brightness-[0.85]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-margin-mobile max-w-4xl mt-16">
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-8 drop-shadow-md tracking-tight leading-none">
          Your Daily Moment of Calm
        </h1>
        <p className="font-body-lg text-body-lg text-white/90 mb-10 max-w-2xl mx-auto drop-shadow-sm leading-relaxed">
          Escape the noise and rediscover the art of slow living in our sanctuary of specialty coffee and mindful design.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#menu"
            className="w-full sm:w-auto bg-primary text-on-primary px-10 py-4 rounded-full font-label-md text-label-md transition-all duration-300 hover:scale-105 shadow-xl text-center"
          >
            View Menu
          </a>
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full font-label-md text-label-md transition-all duration-300 hover:bg-white/20"
          >
            Book a Table
          </button>
        </div>
      </div>

      {/* CSS Animation for Zoom */}
      <style jsx global>{`
        @keyframes subtle-zoom {
          0% { transform: scale(1.05); }
          50% { transform: scale(1.10); }
          100% { transform: scale(1.05); }
        }
      `}</style>
    </section>
  );
}
