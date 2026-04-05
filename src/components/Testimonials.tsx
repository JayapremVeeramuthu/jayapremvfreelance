import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Quote, ArrowLeft, ArrowRight, Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const feedbacks = [
    {
      name: "ASPEDU Team",
      role: "Education Book Platform",
      feedback:
        "Working with Jayaprem was a smooth experience. The platform he built for us is really helpful for students and performs flawlessly. We are happy with the overall outcome and support.",
      rating: 4.7,
      avatar:
        "https://ui-avatars.com/api/?name=ASPEDU&background=84cc16&color=000",
    },
    {
      name: "Dr. DeepaSenthil",
      role: "DS Dental Clinic",
      feedback:
        "We’ve seen great results after launching our new website. Patient inquiries increased and everything feels more professional now. Really satisfied with the service and support.",
      rating: 5,
      avatar:
        "https://ui-avatars.com/api/?name=DS&background=4F46E5&color=fff",
    },
    {
      name: "Pangeos Global",
      role: "Business Clothing Brand",
      feedback:
        "We’re really happy to share this experience. The website and system built for us helped streamline our business and improve our online presence significantly.",
      rating: 4.8,
      avatar:
        "https://ui-avatars.com/api/?name=PG&background=111&color=fff",
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % feedbacks.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + feedbacks.length) % feedbacks.length);
  };

  const current = feedbacks[activeIndex];

  // ⭐ rating fix
  const fullStars = Math.floor(current.rating);
  const hasHalf = current.rating % 1 !== 0;

  return (
    <section
      id="testimonials"
      className="py-24 px-4 md:px-8 relative z-10 bg-neutral-50/50 border-y border-black/10"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-black text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full border border-indigo-200">
            Reviews
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#111] mt-3">
            What clients say
          </h2>
          <p className="text-neutral-500 font-bold mt-2">
            Honest feedback from real clients.
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative">

          {/* Card */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white border-2 border-black rounded-3xl p-8 md:p-12 shadow-[8px_8px_0px_rgba(0,0,0,1)] relative"
          >
            {/* Quote icon */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-lime-400 rounded-full border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              <Quote size={20} className="text-black" />
            </div>

            {/* ⭐ Stars */}
            <div className="flex gap-1 mb-6 text-amber-500">
              {[...Array(fullStars)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
              {hasHalf && (
                <Star size={18} fill="currentColor" className="opacity-50" />
              )}
            </div>

            {/* Feedback */}
            <p className="text-lg md:text-xl text-[#111] font-medium leading-relaxed mb-8 italic">
              "{current.feedback}"
            </p>

            {/* User */}
            <div className="flex items-center gap-4 pt-6 border-t border-dashed border-neutral-200">
              <img
                src={current.avatar}
                alt={current.name}
                className="w-14 h-14 rounded-full border border-black/20 object-cover shadow-sm"
              />
              <div>
                <h4 className="font-black text-neutral-900 text-base">
                  {current.name}
                </h4>
                <p className="text-xs font-bold text-neutral-400 uppercase tracking-wide mt-0.5">
                  {current.role}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="p-3 bg-white border border-black rounded-xl shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
            >
              <ArrowLeft size={20} />
            </button>

            <span className="text-sm font-black text-neutral-400">
              0{activeIndex + 1} / 0{feedbacks.length}
            </span>

            <button
              onClick={handleNext}
              className="p-3 bg-white border border-black rounded-xl shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
            >
              <ArrowRight size={20} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};