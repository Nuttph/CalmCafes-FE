"use client";

import React from "react";

export default function Philosophy() {
  return (
    <section id="story" className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto reveal">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Story Text */}
        <div className="order-2 md:order-1 space-y-6">
          <span className="text-primary font-label-md tracking-widest uppercase block">
            Our Philosophy
          </span>
          <h2 className="font-headline-md text-headline-md text-on-surface">
            Crafted with Intention
          </h2>
          <p className="text-on-surface-variant font-body-md leading-relaxed">
            At CalmCafes, we believe that the best things in life are simple and unhurried. Every bean we roast and every pastry we bake is a tribute to the ritual of the morning.
          </p>
          <p className="text-on-surface-variant font-body-md leading-relaxed">
            We partner with local farmers who share our commitment to organic practices and ethical sourcing, ensuring that every sip supports both the earth and the soul.
          </p>
          <div className="pt-2">
            <a
              className="inline-flex items-center text-primary font-label-md border-b border-primary/30 pb-1 hover:border-primary transition-all duration-300 group"
              href="#sourcing"
            >
              Learn more about our sourcing
              <span className="material-symbols-outlined ml-2 text-[18px] transition-transform duration-300 group-hover:translate-x-1">
                arrow_forward
              </span>
            </a>
          </div>
        </div>

        {/* Story Image */}
        <div className="order-1 md:order-2 relative">
          <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-[0px_40px_80px_-20px_rgba(83,100,64,0.15)] transition-transform duration-500 hover:scale-[1.02]">
            <img
              alt="Cozy Cafe Corner"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYStdmi1AOrtpgyqY1QYcpvP9Z4s5rIjDC_jrKxWuDbtk1tQ4lZ9AZO34ZEjuPz87LtmTPwNp7pywFLf5R_vA2puvoitAk2ABGB4cBQf4IHia9BhkOTYC0vpfx4_95nEx_9Pgv_6wDST4Zk7u3iOj4tvl8KGeTeLaVO2uLOK88gNrMbY_mMNA2EH8C7DHU-mYAmDXZYtof0dKaLfHPaKeubamnAdfRMMSCWqTZ2ONqX-ckD6M7ib_jHnR3uE69gWxRFMCLgHKvbRiH"
            />
          </div>
          {/* Decorative Tonal Layer Background */}
          <div className="absolute -bottom-6 -left-6 hidden lg:block w-48 h-48 bg-primary-fixed rounded-xl -z-10 opacity-30 shadow-inner" />
        </div>
      </div>
    </section>
  );
}
