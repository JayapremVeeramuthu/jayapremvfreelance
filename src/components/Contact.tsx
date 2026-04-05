import React, { useState } from 'react';
import { Send, Mail, MapPin, Smile, Phone, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    budget: '15k-30k'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Hi Jayaprem 👋

Name: ${formData.name}
Email: ${formData.email}
Budget: ${formData.budget}

Project:
${formData.project}

Let's discuss 🚀`;

    const whatsappUrl = `https://wa.me/917094282939?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', project: '', budget: '15k-30k' });
    }, 3000);
  };

  return (
    <section
  id="contact"
  className="py-24 px-4 md:px-8 bg-white"
  style={{
    backgroundImage: `
      linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)
    `,
    backgroundSize: "40px 40px"
  }}
>

      {/* HEADER */}
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <div className="bg-[#111] text-white border-4 border-black p-10 rounded-[36px] shadow-[8px_8px_0px_#84cc16]">

          <span className="text-xs font-black bg-[#4F46E5] border-2 border-black px-4 py-1 rounded-xl shadow-[2px_2px_0px_#111] uppercase mb-4 inline-block">
            FINAL STEP ⚔️
          </span>

          <h2 className="text-4xl md:text-5xl font-black mb-3">
            LET’S BUILD SOMETHING CRAZY 🚀
          </h2>

          <p className="font-bold text-slate-300 text-sm">
            💬 "Your competitors won’t like this 😏"
          </p>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        {/* LEFT SIDE */}
        <div className="lg:col-span-4 grid sm:grid-cols-2 lg:grid-cols-1 gap-6">

          {/* EMAIL */}
          <div className="border-4 border-black p-6 rounded-3xl shadow-[6px_6px_0px_#000] bg-white flex flex-col justify-between h-full hover:translate-y-[-4px] transition">
            <Mail />
            <div>
              <h4 className="font-black text-sm mt-2">EMAIL</h4>
              <a href="mailto:jpremv2131@gmail.com" className="font-bold text-xs text-indigo-600 hover:underline">
                jpremv2131@gmail.com
              </a>
            </div>
          </div>

          {/* PHONE */}
          <div className="border-4 border-black p-6 rounded-3xl shadow-[6px_6px_0px_#000] bg-white flex flex-col justify-between h-full hover:translate-y-[-4px] transition">
            <Phone />
            <div>
              <h4 className="font-black text-sm mt-2">PHONE / WHATSAPP</h4>
              <a href="https://wa.me/917094282939" target="_blank" rel="noreferrer" className="font-bold text-xs text-green-600 hover:underline">
                +91 70942 82939
              </a>
            </div>
          </div>

          {/* LOCATION */}
          <div className="border-4 border-black p-6 rounded-3xl shadow-[6px_6px_0px_#000] bg-white flex flex-col justify-between h-full hover:translate-y-[-4px] transition">
            <MapPin />
            <div>
              <h4 className="font-black text-sm mt-2">LOCATION</h4>
              <p className="font-bold text-xs">Tiruppur, Tamil Nadu 🇮🇳</p>
            </div>
          </div>

          {/* CTA BOX */}
          <div className="bg-[#84cc16] border-4 border-black p-6 rounded-3xl shadow-[6px_6px_0px_#000] text-center flex items-center justify-center h-full hover:translate-y-[-4px] transition">
            <div>
              <Smile className="mx-auto mb-2" />
              <p className="font-black text-xs">FREE STRATEGY CALL 😎</p>
            </div>
          </div>

        </div>

        {/* FORM SIDE */}
        <div className="lg:col-span-8">
          <div className="bg-white border-4 border-black p-8 rounded-[32px] shadow-[10px_10px_0px_#000]">

            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle size={50} className="mx-auto text-green-500 mb-4" />
                <h3 className="font-black text-xl">MESSAGE RECEIVED 🎉</h3>
                <p className="text-sm font-bold text-neutral-500">Reply within 24 hours!</p>
              </div>
            ) : (

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* NAME + EMAIL */}
                <div className="grid md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="border-2 border-slate-200 rounded-xl px-4 py-3 font-bold focus:border-indigo-600 outline-none"
                  />

                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    className="border-2 border-slate-200 rounded-xl px-4 py-3 font-bold focus:border-indigo-600 outline-none"
                  />
                </div>

                {/* BUDGET */}
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 font-bold"
                >
                  <option value="4k-15k">₹4K–15K</option>
                  <option value="15k-30k">₹15K–30K</option>
                  <option value="30k-60k">₹30K–60K</option>
                  <option value="60k+">₹60K+</option>
                </select>

                {/* TEXTAREA */}
                <textarea
                  name="project"
                  required
                  value={formData.project}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project..."
                  rows={4}
                  className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 font-bold resize-none"
                />

                {/* BUTTON */}
                <button
                  type="submit"
                  className="
                    w-full 
                    bg-[#111] text-white 
                    border-2 border-black 
                    py-4 rounded-xl 
                    font-black 
                    flex items-center justify-center gap-2 
                    shadow-[5px_5px_0px_#84cc16] 
                    hover:translate-y-[-3px] 
                    hover:shadow-[8px_8px_0px_#84cc16]
                    transition
                  "
                >
                  LAUNCH PROJECT 🚀 <Send size={18} />
                </button>

              </form>
            )}

          </div>
        </div>

      </div>

      {/* FOOTER */}
      <div className="mt-20 text-center text-xs font-bold text-neutral-400">
        © 2026 Jayaprem V — Built for impact 🚀
      </div>

    </section>
  );
};