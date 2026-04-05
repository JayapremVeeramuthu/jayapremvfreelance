// import { Cursor } from './components/Cursor';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Works } from './components/Works';
import { Pricing } from './components/Pricing';
import { About } from './components/About';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';

export default function App() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWork = () => {
    const workSection = document.getElementById('works');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative font-sans text-neutral-900 bg-[#fafafa] selection:bg-lime-300 selection:text-black">
      {/* Background Interactive Grid & Parallax Blobs */}
      

      {/* Custom Sticker Cursor */}
      {/* <Cursor /> */}

      {/* Navigation Header */}
      <Header onContactClick={scrollToContact} onWorkClick={scrollToWork} />

      <main className="relative z-10 max-w-[1400px] mx-auto">
        {/* Fullscreen Hero Section */}
        <Hero onWorkClick={scrollToWork} onContactClick={scrollToContact} />

        {/* Stacked Parallax Works Section */}
        <Works />

        {/* About Personality Section */}
        <About />

        {/* Pricing / Services Packages */}
        <Pricing onContactClick={scrollToContact} />

        {/* Core Services Grid */}
        <Services />

        {/* Client Testimonials Sticker Panel */}
        <Testimonials />

        {/* Full Contact Form and Direct Connections */}
        <Contact />
      </main>
    </div>
  );
}
