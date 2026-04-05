import React from 'react';
import { Check, Sparkles, Flame, Zap, Smile } from 'lucide-react';

interface PricingProps {
  onContactClick: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onContactClick }) => {

const tiers = [
  {
    title: 'WEB APP',
    price: '₹15k – ₹50k',
    sub: '💬 Best for growing brands',
    icon: <Flame size={20} />,
    popular: false,
    features: ['Full Stack Dev', 'Database Integration', 'Auth System', 'Dashboard UI', 'Admin Panel'],
  },
  {
    title: 'WEBSITE',
    price: '₹4k – ₹15k',
    sub: '💬 Perfect for small businesses',
    icon: <Smile size={20} />,
    popular: true,
    features: ['Custom Design', 'Mobile Responsive', 'SEO Ready', 'Fast Performance', 'Contact Form'],
  },
  {
    title: 'E-COMMERCE',
    price: '₹15k – ₹60k',
    sub: '💬 For serious scaling 🚀',
    icon: <Zap size={20} />,
    popular: false,
    features: ['Payments Integration', 'Cart System', 'Order Tracking', 'Coupons', 'Product Filters'],
  },
];

  return (
    <section id="pricing" className="bg-white py-24 px-4 md:px-8 border-b-4 border-black">

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#84cc16] border-2 border-black px-4 py-1 rounded-xl text-xs font-black shadow-[4px_4px_0px_#000] mb-4">
            NO HIDDEN SECRETS 💸
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-[#111]">
            Let’s talk budget 😌
          </h2>

          <p className="mt-3 text-slate-500 font-bold">
            Choose your weapon and dominate online 🚀
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`
                relative 
                border-[4px] border-black 
                outline outline-[3px] outline-black/20
                rounded-[28px] p-8 
                shadow-[8px_8px_0px_#000] 
                flex flex-col justify-between 
                transition duration-200 
                hover:translate-y-[-6px] 
                hover:shadow-[12px_12px_0px_#000]
                ${tier.popular ? 'bg-[#84cc16] scale-[1.03]' : 'bg-white'}
              `}
            >

              {/* POPULAR TAG */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-rose-500 text-white border-2 border-black px-3 py-1 rounded-lg text-xs font-black shadow-[3px_3px_0px_#000] flex items-center gap-1">
                  <Sparkles size={12} />
                  MOST POPULAR
                </div>
              )}

              <div>

                {/* ICON + TITLE */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 border-2 border-black rounded-xl bg-white shadow-[2px_2px_0px_#000]">
                    {tier.icon}
                  </div>
                  <h3 className="text-xl font-black">{tier.title}</h3>
                </div>

                <p className="text-sm font-bold text-slate-700 mb-6">{tier.sub}</p>

                {/* PRICE */}
                <div className="bg-white border-[3px] border-black p-4 rounded-xl shadow-[5px_5px_0px_#000] inline-block mb-8">
                  <p className="text-2xl font-black">{tier.price}</p>
                </div>

                {/* FEATURES */}
                <div className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 border-2 border-black rounded-md flex items-center justify-center bg-white shadow-[2px_2px_0px_#000]">
                        <Check size={12} className="stroke-[3]" />
                      </div>
                      <span className="text-sm font-bold">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={onContactClick}
                className="
                  w-full 
                  bg-[#111] text-white 
                  border-[3px] border-black 
                  py-4 rounded-xl 
                  font-black 
                  shadow-[5px_5px_0px_#84cc16] 
                  transition 
                  hover:translate-y-[-3px] 
                  hover:shadow-[8px_8px_0px_#84cc16]
                  hover:bg-[#4F46E5]
                "
              >
                LET'S BUILD 🚀
              </button>

            </div>
          ))}

        </div>

        {/* BOTTOM */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-yellow-100 border-[3px] border-black px-6 py-4 rounded-xl shadow-[4px_4px_0px_#000]">
            <p className="text-sm font-black">
              ⚠️ Confused? No problem — get a FREE strategy call 😎
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};