"use client";

import React from "react";

export default function VisitUs() {
  return (
    <section id="location" className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto reveal">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter bg-white p-8 md:p-12 rounded-2xl border border-outline-variant/20 shadow-sm items-center">
        {/* Info Area */}
        <div className="space-y-8">
          <h2 className="font-headline-md text-headline-md text-on-surface">
            Visit Us
          </h2>

          <div className="space-y-6">
            {/* Location */}
            <div className="flex items-start">
              <span className="material-symbols-outlined text-primary mr-4 mt-1 text-[24px]">
                location_on
              </span>
              <div>
                <h4 className="font-label-md text-label-md text-on-surface uppercase mb-1">
                  Our Location
                </h4>
                <p className="text-on-surface-variant font-body-md">
                  124 Serenity Way, Green Hills
                  <br />
                  Portland, OR 97201
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start">
              <span className="material-symbols-outlined text-primary mr-4 mt-1 text-[24px]">
                schedule
              </span>
              <div>
                <h4 className="font-label-md text-label-md text-on-surface uppercase mb-1">
                  Opening Hours
                </h4>
                <ul className="text-on-surface-variant font-body-md space-y-1">
                  <li className="flex justify-between w-64">
                    <span>Mon - Fri:</span> <span>7:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between w-64">
                    <span>Sat - Sun:</span> <span>8:00 AM - 7:00 PM</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact */}
            <div className="flex items-start">
              <span className="material-symbols-outlined text-primary mr-4 mt-1 text-[24px]">
                mail
              </span>
              <div>
                <h4 className="font-label-md text-label-md text-on-surface uppercase mb-1">
                  Get in Touch
                </h4>
                <p className="text-on-surface-variant font-body-md">
                  hello@calmcafes.cafe
                  <br />
                  (503) 555-0123
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Area */}
        <div className="h-[400px] bg-surface-container rounded-xl overflow-hidden grayscale relative border border-outline-variant/30 group">
          <img
            alt="Map of Portland Area"
            className="w-full h-full object-cover opacity-85 transition-all duration-700 group-hover:scale-105 group-hover:opacity-95"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4-Upl0kEw-35sdJaEMQz7UR_Jt0Y0LDm9H65C0SG5Q4bR6uYV7KAxy_U1oA1jhe8RS7oARnbzmpKVSTFcj_Vw_ek_KsfZSKMTG3vhjch97LZ9SD51XLYscDrfLxoYAwOiMFnttF1OjCn13gJBFNn-U2x56yXJ0WjBgCHVDtp60q5oDu35He-g8mEKK2EfcEQxgEk2iYuoVcgsAgU-sDWKBpkIU3aKB-GrysV0MR_t0SPc2yMamd2Z8b0p1_cWPUm3hjtnTy6I_peQ"
          />
          <div className="absolute inset-0 bg-primary-fixed/5 pointer-events-none group-hover:opacity-0 transition-opacity duration-500" />
        </div>
      </div>
    </section>
  );
}
