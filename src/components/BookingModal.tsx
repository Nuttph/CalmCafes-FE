"use client";

import React, { useState } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "2",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", date: "", time: "", guests: "2" });
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-inverse-surface/40 backdrop-blur-sm transition-opacity duration-300"
        onClick={resetForm}
      />

      {/* Modal Content */}
      <div className="relative bg-background w-full max-w-md p-8 rounded-xl shadow-[0px_30px_60px_-15px_rgba(83,100,64,0.15)] border border-outline-variant/30 z-10 transform transition-all duration-300 scale-100 max-h-[90vh] overflow-y-auto">
        <button
          onClick={resetForm}
          className="absolute top-4 right-4 text-on-surface-variant hover:text-primary transition-colors"
          aria-label="Close dialog"
        >
          <span className="material-symbols-outlined text-[24px]">close</span>
        </button>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                Book a Table
              </h3>
              <p className="text-on-surface-variant text-caption">
                Reserve your daily moment of calm
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="booking-name" className="block text-label-md font-label-md text-on-surface-variant uppercase mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="booking-name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-outline-variant py-2 focus:outline-none focus:border-primary text-body-md transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="booking-email" className="block text-label-md font-label-md text-on-surface-variant uppercase mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="booking-email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-outline-variant py-2 focus:outline-none focus:border-primary text-body-md transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="booking-date" className="block text-label-md font-label-md text-on-surface-variant uppercase mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    id="booking-date"
                    required
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-outline-variant py-2 focus:outline-none focus:border-primary text-body-md transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="booking-time" className="block text-label-md font-label-md text-on-surface-variant uppercase mb-1">
                    Time
                  </label>
                  <input
                    type="time"
                    id="booking-time"
                    required
                    value={formData.time}
                    onChange={(e) =>
                      setFormData({ ...formData, time: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-outline-variant py-2 focus:outline-none focus:border-primary text-body-md transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="booking-guests" className="block text-label-md font-label-md text-on-surface-variant uppercase mb-1">
                  Number of Guests
                </label>
                <select
                  id="booking-guests"
                  value={formData.guests}
                  onChange={(e) =>
                    setFormData({ ...formData, guests: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-outline-variant py-2 focus:outline-none focus:border-primary text-body-md transition-colors"
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People</option>
                  <option value="5">5+ People</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-on-primary py-3 rounded-full font-label-md text-label-md transition-all duration-300 hover:opacity-90 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin inline-block w-4 h-4 border-2 border-on-primary border-t-transparent rounded-full" />
                  Processing...
                </>
              ) : (
                "Confirm Reservation"
              )}
            </button>
          </form>
        ) : (
          <div className="text-center py-8 space-y-4">
            <span className="material-symbols-outlined text-[64px] text-primary animate-bounce">
              check_circle
            </span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">
              Reservation Confirmed!
            </h3>
            <p className="text-on-surface-variant text-body-md max-w-xs mx-auto">
              Thank you, {formData.name}. We have reserved a table for {formData.guests} guests on {formData.date} at {formData.time}.
            </p>
            <button
              onClick={resetForm}
              className="bg-primary text-on-primary px-8 py-2.5 rounded-full font-label-md text-label-md transition-opacity hover:opacity-90 mt-4"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
