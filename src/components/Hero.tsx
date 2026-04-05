import React from 'react';
import { ArrowDown, CheckCircle, Smartphone, Globe, Sparkles, Star } from 'lucide-react';

const styles = `
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-up {
  animation: fadeUp 0.6s ease forwards;
}

.fade-delay-1 { animation-delay: 0.1s; }
.fade-delay-2 { animation-delay: 0.2s; }
.fade-delay-3 { animation-delay: 0.3s; }
`;

interface HeroProps {
  onWorkClick: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onWorkClick, onContactClick }) => {
  return (
    <>
      <style>{styles}</style>

      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-4 md:px-8 overflow-hidden bg-white">

        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.1] pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        {/* SHAPES */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[30%] left-[10%] text-yellow-400 opacity-50">
            <Star size={50} fill="currentColor" className="stroke-[#111]" />
          </div>
          <div className="absolute bottom-[20%] right-[15%] text-purple-400 opacity-50 rotate-45">
            <Star size={35} fill="currentColor" className="stroke-[#111]" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

          {/* LEFT */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">

            <div className="inline-flex self-center lg:self-start items-center gap-2 bg-[#84cc16] border-2 border-black text-black px-4 py-1.5 rounded-xl text-xs font-black uppercase mb-6 shadow-[3px_3px_0px_#111] fade-up">
              <Sparkles size={14} />
              TOP RATED FREELANCER ⚡
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#111] leading-[1.1] mb-6 fade-up fade-delay-1">
              I design cool <br className="hidden md:block" />
              <span className="text-indigo-600 underline decoration-wavy">
                websites
              </span>{" "}
              & build apps 🚀
            </h1>

            <p className="text-base md:text-lg text-[#444] font-medium max-w-2xl mb-8 fade-up fade-delay-2">
              I design and develop modern websites and mobile apps that grow your business online with performance and clean UI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start fade-up fade-delay-3">
              <button
                onClick={onWorkClick}
                className="px-8 py-4 bg-[#4F46E5] text-white font-black rounded-2xl border-4 border-black shadow-[6px_6px_0px_#111] hover:translate-y-[-3px] hover:shadow-[8px_8px_0px_#111] transition"
              >
                EXPLORE MY WORK 😎
              </button>

              <button
                onClick={onContactClick}
                className="px-8 py-4 bg-white text-black font-black rounded-2xl border-4 border-black shadow-[6px_6px_0px_#111] hover:translate-y-[-3px] hover:shadow-[8px_8px_0px_#111] transition"
              >
                GET FREE DEMO 🎁
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 justify-center lg:justify-start text-sm font-bold text-neutral-600 fade-up fade-delay-3">
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-lime-500" />
                Fully Custom Code
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-lime-500" />
                Fast Delivery
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-lime-500" />
                Result Driven
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-5 relative flex items-center justify-center h-[400px]">

            <div className="absolute top-10 left-10 w-44 bg-white border-4 border-black shadow-[5px_5px_0px_#111] rounded-2xl p-4 rotate-[-6deg] hover:translate-y-[-6px] hover:scale-[1.03] transition">
              <Smartphone />
              <h4 className="font-black text-sm mt-2">Mobile Apps</h4>
            </div>

            <div className="absolute bottom-10 right-10 w-44 bg-white border-4 border-black shadow-[5px_5px_0px_#111] rounded-2xl p-4 rotate-[6deg] hover:translate-y-[-6px] hover:scale-[1.03] transition">
              <Globe />
              <h4 className="font-black text-sm mt-2">Web Design</h4>
            </div>
<div className="w-96 h-96 rounded-full border-4 border-black shadow-[6px_6px_0px_#111] overflow-hidden hover:scale-[1.05] transition">
  <img 
    src="/jp.png" 
    alt="Jayaprem" 
    className="w-full h-full object-cover"
  />
</div>
          </div>
        </div>

        {/* SCROLL */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center fade-up fade-delay-3">
          <span className="text-xs font-bold">Scroll</span>
          <ArrowDown />
        </div>

      </section>
    </>
  );
};