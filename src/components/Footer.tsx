"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant/30 mt-auto">
      <div className="max-w-container-max mx-auto py-gutter px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-headline-sm text-headline-sm text-on-surface">
          CalmCafes
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <a
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
            href="#instagram"
          >
            Instagram
          </a>
          <a
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
            href="#facebook"
          >
            Facebook
          </a>
          <a
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
            href="#privacy"
          >
            Privacy Policy
          </a>
          <a
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
            href="#contact"
          >
            Contact
          </a>
        </div>
        <div className="font-body-md text-body-md text-secondary text-center md:text-right">
          © 2026 CalmCafes. Crafted for slow living.
        </div>
      </div>
    </footer>
  );
}
