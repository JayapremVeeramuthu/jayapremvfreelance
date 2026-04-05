import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Code, Layout, ShoppingBag, ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      title: "UI/UX Design",
      desc: "Creating intuitive wireframes, interactive prototypes, and conversion-optimized user flows before writing a single line of code.",
      icon: <Compass size={32} />,
      color: "from-pink-500 to-rose-500",
      bg: "bg-pink-50",
      accent: "border-pink-500/30 text-pink-600"
    },
    {
      title: "Website Development",
      desc: "Highly functional web apps built with Next.js, React, and Vite. Blazing-fast loading speeds and highly secure codebases.",
      icon: <Code size={32} />,
      color: "from-indigo-500 to-blue-500",
      bg: "bg-indigo-50",
      accent: "border-indigo-500/30 text-indigo-600"
    },
    {
      title: "Landing Pages",
      desc: "High-ticket sales funnels and promotional landing pages crafted to captivate audiences and trigger direct action.",
      icon: <Layout size={32} />,
      color: "from-green-500 to-emerald-500",
      bg: "bg-green-50",
      accent: "border-green-500/30 text-green-600"
    },
    {
      title: "Ecommerce Solutions",
      desc: "Complete storefront setup with easy product management, shopping carts, secure payments, and custom invoices.",
      icon: <ShoppingBag size={32} />,
      color: "from-amber-500 to-orange-500",
      bg: "bg-amber-50",
      accent: "border-amber-500/30 text-amber-600"
    }
  ];

  return (
    <section id="services" className="py-24 px-4 md:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-black text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full border border-indigo-200">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#111] mt-3">What I offer</h2>
          <p className="text-neutral-500 font-bold mt-2">Custom end-to-end design & development designed to solve real business hurdles.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`border-2 border-black rounded-3xl p-8 bg-white shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-none transition-all flex flex-col justify-between`}
            >
              <div>
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-black/20 ${service.bg} ${service.accent}`}>
                  {service.icon}
                </div>

                <h3 className="text-2xl font-black text-[#111] mb-3">{service.title}</h3>
                <p className="text-neutral-500 font-medium leading-relaxed text-sm md:text-base">
                  {service.desc}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-widest text-neutral-400">0{idx + 1} / SERVICE</span>
                <span className="text-indigo-600 font-black text-sm flex items-center gap-1 cursor-pointer">
                  Learn more <ArrowRight size={16} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
