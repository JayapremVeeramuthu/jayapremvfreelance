import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight, X, Heart, Sparkles } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  beforeImg: string;
  afterImg: string;
  color: string;
  accentColor: string;
  problem: string;
  solution: string;
  results: string[];
}

export const Works: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  const projects: Project[] = [
    {
      id: 1,
      title: "Clomora E-Commerce",
      category: "Fashion Retail",
      description: "Complete redesign and custom frontend for a premium fashion brand, resulting in 45% more sales.",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
      beforeImg: "https://images.unsplash.com/photo-1532453288672-3a27e9be4efd?auto=format&fit=crop&w=400&q=80",
      afterImg: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=400&q=80",
      color: "bg-[#FFF9EE]",
      accentColor: "text-[#D97706]",
      problem: "The previous site was slow, mobile unresponsive, and had an extremely high checkout abandonment rate (72%). Customers found it hard to filter apparel sizes.",
      solution: "Implemented a blazing-fast React frontend with a slide-out cart, persistent wishlist, and an intelligent size-finder algorithm that boosts buyer confidence.",
      results: [
        "🔥 45% increase in conversion rate",
        "🚀 Under 1.5s page load time",
        "📱 100% responsive redesign optimized for Instagram shoppers"
      ]
    },
    {
      id: 2,
      title: "SmileCare Dental Clinic",
      category: "Healthcare UI/UX",
      description: "Patient booking experience and doctor portal optimized for appointment conversions.",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
      beforeImg: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=400&q=80",
      afterImg: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=400&q=80",
      color: "bg-[#F0FDFA]",
      accentColor: "text-[#0D9488]",
      problem: "Patients found it frustrating to book online due to complex multi-step forms. The clinic was losing thousands in unconfirmed appointments.",
      solution: "Designed a 3-step 'Express Booking' flow that matches patient availability with doctors instantly, complete with automated WhatsApp reminders.",
      results: [
        "🔥 60% boost in online bookings",
        "📉 35% reduction in appointment no-shows",
        "⭐ 4.9/5 patient satisfaction score for the booking portal"
      ]
    },
    {
      id: 3,
      title: "EduPulse Platform",
      category: "EdTech Dashboard",
      description: "Gamified learning management system designed to keep students engaged and learning.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
      beforeImg: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=400&q=80",
      afterImg: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=400&q=80",
      color: "bg-[#F5F3FF]",
      accentColor: "text-[#6D28D9]",
      problem: "Online course completion rates were dropping under 12%. Students found the dashboard boring and lacked incentive to finish modules.",
      solution: "Integrated gamification modules, streak counters, interactive quizzes, and visual progress mapping to make the platform fun and competitive.",
      results: [
        "🔥 Course completion jumped from 12% to 48%",
        "📈 80% higher student retention",
        "🏆 Awarded 'Best EdTech UX' at Regional Design Summit"
      ]
    },
    {
      id: 4,
      title: "Vogue Muse",
      category: "Creative Portfolio",
      description: "Immersive landing page for a boutique creative agency featuring ultra-smooth parallax.",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
      beforeImg: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=80",
      afterImg: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=400&q=80",
      color: "bg-[#FDF2F8]",
      accentColor: "text-[#DB2777]",
      problem: "The client wanted a portfolio website that stood out from standard agency templates. They needed a high-end fashion experience.",
      solution: "Built a highly optimized, scroll-driven interactive portfolio utilizing WebGL overlays, smooth scrolling, and mouse-based parallax tilt features.",
      results: [
        "🌟 Received 'Site of the Day' on CSS platforms",
        "🚀 Doubled inbound project inquiries within 30 days",
        "💎 Positioned agency as a premium, high-ticket provider"
      ]
    }
  ];

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <section id="works" className="py-24 px-4 md:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center lg:text-left">
          <span className="text-xs uppercase tracking-widest font-black text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full border border-indigo-200">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#111] mt-3">Featured Case Studies</h2>
          <p className="text-neutral-500 font-bold mt-2">Scroll to explore my stacked parallax project cards.</p>
        </div>

        {/* Stacked Cards */}
        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`sticky top-24 rounded-3xl border border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] ${project.color} p-6 md:p-10 flex flex-col lg:flex-row gap-8 items-center cursor-pointer`}
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image Panel */}
              <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden border border-black/20 shadow-md relative group h-64 sm:h-80 md:h-96">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white text-black font-black px-6 py-3 rounded-full border border-black flex items-center gap-2 shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                    View Case Study <ArrowRight size={18} />
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm border border-black/20 px-3 py-1 rounded-xl text-xs font-bold text-black shadow-sm">
                  ⭐ Project #0{index + 1}
                </div>
              </div>

              {/* Project Content Panel */}
              <div className="w-full lg:w-1/2 flex flex-col justify-between h-full">
                <div>
                  <span className={`text-xs font-black tracking-widest uppercase ${project.accentColor}`}>
                    {project.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black text-[#111] mt-2 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-neutral-600 font-medium leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <button className="bg-[#111] text-white font-black px-6 py-3 rounded-xl flex items-center gap-2 border border-black shadow-[4px_4px_0px_rgba(132,204,22,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                    Explore Case Study <ExternalLink size={18} />
                  </button>
                  <div className="text-neutral-400 font-bold text-xs flex items-center gap-1">
                    <Heart size={14} className="text-red-500 fill-red-500" /> Interaction Design
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-white border-2 border-black shadow-[10px_10px_0px_rgba(0,0,0,1)] rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto pointer-events-auto flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-black/10 flex items-center justify-between bg-neutral-50 sticky top-0 z-20">
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-indigo-600">Project Breakdown</span>
                  <h3 className="text-xl md:text-2xl font-black text-black mt-1">{selectedProject.title}</h3>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-2 bg-white border border-black/20 rounded-xl hover:bg-neutral-100 shadow-sm"
                >
                  <X size={20} className="text-neutral-700" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-8 space-y-8">
                {/* Before vs After Slider Section */}
                <div>
                  <h4 className="font-black text-lg text-black mb-4 flex items-center gap-2">
                    <Sparkles size={20} className="text-indigo-600" /> Interactive Before vs After
                  </h4>
                  <p className="text-sm text-neutral-500 mb-4 font-medium">Use the slider below to compare the previous and current design.</p>
                  
                  <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden border border-black/20 shadow-md select-none">
                    {/* After Image */}
                    <img 
                      src={selectedProject.afterImg} 
                      alt="After" 
                      className="absolute inset-0 w-full h-full object-cover" 
                    />

                    {/* Before Image (Clipped) */}
                    <div 
                      className="absolute inset-0 overflow-hidden"
                      style={{ width: `${sliderPosition}%` }}
                    >
                      <img 
                        src={selectedProject.beforeImg} 
                        alt="Before" 
                        className="absolute inset-0 w-full h-full object-cover max-w-none" 
                        style={{ width: '100vw', height: '100%' }}
                      />
                    </div>

                    {/* Custom Slider Bar */}
                    <div 
                      className="absolute inset-y-0 w-1 bg-white border-x border-black/20 z-10"
                      style={{ left: `${sliderPosition}%` }}
                    >
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-indigo-600 border border-black rounded-full flex items-center justify-center text-white text-xs font-black shadow-lg">
                        ↔
                      </div>
                    </div>

                    {/* Standard Slider Input */}
                    <input 
                      type="range" 
                      min="0" 
                      max="100" 
                      value={sliderPosition}
                      onChange={handleSliderChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                    />
                  </div>
                </div>

                {/* Problem & Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-5 rounded-2xl border border-red-200">
                    <h5 className="font-black text-red-700 text-sm uppercase tracking-wide mb-2">🔴 The Problem</h5>
                    <p className="text-sm text-red-900 leading-relaxed font-medium">{selectedProject.problem}</p>
                  </div>
                  <div className="bg-green-50 p-5 rounded-2xl border border-green-200">
                    <h5 className="font-black text-green-700 text-sm uppercase tracking-wide mb-2">🟢 The Solution</h5>
                    <p className="text-sm text-green-900 leading-relaxed font-medium">{selectedProject.solution}</p>
                  </div>
                </div>

                {/* Growth Results */}
                <div className="bg-indigo-50 border border-indigo-100 p-6 rounded-2xl">
                  <h5 className="font-black text-indigo-700 text-sm uppercase tracking-wide mb-4">📈 Growth Results</h5>
                  <div className="flex flex-col gap-3 font-bold text-indigo-900">
                    {selectedProject.results.map((result, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm md:text-base">
                        {result}
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
