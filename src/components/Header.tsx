import React, { useState } from 'react';
import { Menu, MessageSquare, Sparkles, Compass, User, Terminal } from 'lucide-react';

interface HeaderProps {
  onContactClick: () => void;
  onWorkClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onContactClick, onWorkClick }) => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const navLinks = [
    { name: 'Works', action: onWorkClick, icon: <Sparkles size={16} />, sub: 'Top secret 🤫' },
    { name: 'About', id: 'about', icon: <User size={16} />, sub: 'The Origin Story 📖' },
    { name: 'Pricing', id: 'pricing', icon: <Compass size={16} />, sub: 'Friendly budget 💸' },
    { name: 'Services', id: 'services', icon: <Terminal size={16} />, sub: 'What I do 🧪' },
  ];

  const scrollToSection = (id?: string, action?: () => void) => {
    if (action) return action();
    if (!id) return;

    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">

      <div className="flex items-center justify-between bg-white border-4 border-[#111] shadow-[6px_6px_0px_#111] rounded-2xl px-6 py-4">

        {/* LOGO */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="bg-indigo-600 text-white border-2 border-black font-black text-lg px-4 py-1.5 rounded-xl -rotate-2 shadow-[2px_2px_0px_#111] hover:rotate-0 transition">
            JAYAPREM.V
          </div>
          <span className="hidden md:block text-xs font-bold text-slate-500 uppercase bg-slate-100 px-2 py-1 rounded border">
            UI/UX ⚡ DEV
          </span>
        </div>

        {/* NAV */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link, i) => (
            <div key={i} className="relative">
              <button
                onClick={() => scrollToSection(link.id, link.action)}
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
                className="flex items-center gap-1.5 font-black text-[#111] hover:text-indigo-600 text-sm uppercase transition"
              >
                {link.icon}
                {link.name}
              </button>

              {/* LIGHT HOVER TOOLTIP */}
              {hoveredLink === link.name && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-[#84cc16] border-2 border-black px-2 py-1 rounded-lg text-[10px] font-bold whitespace-nowrap shadow-[2px_2px_0px_#111]">
                  {link.sub}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={onContactClick}
            className="hidden sm:flex items-center gap-2 bg-[#84cc16] text-black font-black px-4 py-2 rounded-xl text-sm border-2 border-black shadow-[3px_3px_0px_#111] hover:translate-y-[-2px] transition"
          >
            <MessageSquare size={16} />
            LET'S TALK 🚀
          </button>

          {/* MOBILE */}
          <button className="flex md:hidden bg-neutral-100 border border-black/20 p-2 rounded-xl">
            <Menu size={20} />
          </button>
        </div>

      </div>
    </header>
  );
};