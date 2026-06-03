"use client";

import React, { useState } from "react";

interface MenuItem {
  id: number;
  name: string;
  price: string;
  desc: string;
  image: string;
  isNew?: boolean;
}

export default function FeaturedDelights() {
  const [addedItem, setAddedItem] = useState<string | null>(null);

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Signature Matcha Latte",
      price: "$7.50",
      desc: "Ceremonial grade Uji matcha whisked with oat milk and a hint of lavender honey.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuALKe7HC8PLr8XK5P9j-2CmYfQRE5J1XtGg_3Bd61_t2TkpcRdgiVlBF3G8HgRxrMO6UqMuv7BKUEJJrZ1I96J_TRmjD2MjM0TRPcjpVKp4d3ixxTqoycLNaCcVdHyTg5tT3ZMI18vjV_iL8GPOqVKhuF7dlLdYUcd6OnlXdpQu9ErSv-f3rTNZhHVxEhYoDXMQtmCkQDIiO3NvzGn0NpgxYjtbk1E6cjvUohMOTp-Nibb6uhWY_6N7Dgf9kmRqu2WHJWyS1Ae4v89W",
      isNew: true,
    },
    {
      id: 2,
      name: "Handcrafted Pastries",
      price: "from $5.00",
      desc: "Baked fresh every morning using traditional French techniques and local organic butter.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuxfOZ55JhTmwkYR4Z6BW6_HuB_-yB07Kzcqo3IbKi-Fq_bGrbmw2xkZMmgPGrixyXz5_4y_y8SscQAPA1MK4_8S3WjaMQ55KP1DWJVFz41FvEDxpdGJWNM0ff04-6ynQUjTg6N81nf_--hxp_y8WQNDutOV8D_mDP3TDFFsWPRSgcESgzUeRYgvW2_4i28G8AWMl82gSaSWKCnSnjvIq5L4zjBTh9UQsDOVpb1uT5kRPn89K5cGEom0I_Niwmz8OAm41joVE_LUOx",
    },
    {
      id: 3,
      name: "Organic Brew",
      price: "$6.00",
      desc: "Ethically sourced single-origin beans, precision-brewed for a clean and complex profile.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKEp-eatOPeVGbz-70wXnCUXTK97qV-U4q78kcsqPzt4zlSAYTEUFWD9rJZGFd5N45j11aGkdq9Pv-VRE9p8bPnNl0j-sA1Jqv2ZEcKwPEFqyRjTNmLj9EMpP8-6JrBjzfxBcWt9Roq85hAMc_dWFDX3AkNxFf807i6wuAXGsh-WYWydU2LkwEqawNLtUXDqrfdR2wTGDePYskNC1f20T9Yscq8mFht3Mw8lsw-MaWoodqsdKt3XW3NZLRhYrioQx33KR-zBvVwv0Y",
    },
  ];

  const handleAddItem = (name: string) => {
    setAddedItem(name);
    setTimeout(() => {
      setAddedItem(null);
    }, 2000);
  };

  return (
    <section id="menu" className="py-section-gap bg-surface-container-low reveal relative">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-headline-md text-headline-md text-on-surface">
            Featured Delights
          </h2>
          <p className="text-on-surface-variant font-body-md">
            Handpicked favorites from our seasonal menu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0px_40px_80px_-20px_rgba(83,100,64,0.12)] border border-outline-variant/10"
            >
              <div className="h-80 overflow-hidden relative">
                <img
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={item.image}
                />
                {item.isNew && (
                  <div className="absolute top-4 right-4 bg-primary text-on-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    New
                  </div>
                )}
              </div>

              <div className="p-8 flex flex-col justify-between h-[calc(100%-20rem)] min-h-[220px]">
                <div className="space-y-2">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    {item.name}
                  </h3>
                  <p className="text-on-surface-variant font-body-md line-clamp-3">
                    {item.desc}
                  </p>
                </div>

                <div className="flex justify-between items-center pt-6 mt-auto">
                  <span className="font-body-md text-primary font-bold">
                    {item.price}
                  </span>
                  <button
                    onClick={() => handleAddItem(item.name)}
                    className="p-2 rounded-full border border-outline-variant text-on-surface-variant hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 active:scale-95"
                    aria-label={`Add ${item.name} to order`}
                  >
                    <span className="material-symbols-outlined block text-[20px]">
                      add
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Adding Toast Notification */}
      {addedItem && (
        <div className="fixed bottom-8 right-8 z-50 bg-inverse-surface text-inverse-on-surface px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-[fade-in-up_0.3s_ease-out]">
          <span className="material-symbols-outlined text-primary-fixed">check_circle</span>
          <span className="font-body-md">{addedItem} added to order</span>
        </div>
      )}

      <style jsx global>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
