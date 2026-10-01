import React from 'react';
import { ArrowUpRight, MapPin, Globe, Download } from 'lucide-react';
import profileImage from '../assets/images/FatimaJaveed.jpeg';
import { RESUME_DOCUMENT } from '../data/portfolioData';
import { SparkleIcon, SunburstIcon, HandDrawnHeart } from './DecorativeElements';

interface HeroProps {
  onViewWorkClick: () => void;
  onAboutClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewWorkClick }) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Soft Ambient Accents */}
      <div className="absolute top-12 left-1/4 w-72 h-72 bg-[#F5A58C]/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-36 right-10 w-96 h-96 bg-[#F8C96B]/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Editorial Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Eyebrow greeting */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="font-serif italic text-2xl sm:text-3xl text-[#064F50] font-normal tracking-wide">
                Hello, I'm
              </span>
              <SparkleIcon size={18} color="#F5A58C" className="animate-pulse-soft" />
            </div>

            {/* Giant Editorial Serif Headline: Fatima Javeed */}
            <h1 className="font-serif text-[#064F50] text-6xl sm:text-7xl md:text-8xl lg:text-[92px] leading-[0.95] tracking-tight font-normal mb-3">
              <span className="block">Fatima</span>
              <span className="block">Javeed</span>
            </h1>

            {/* Handwritten Script Descriptor in Coral */}
            <div className="relative mb-5 -mt-1 sm:-mt-2">
              <p className="font-caveat text-2xl sm:text-3xl lg:text-[34px] text-[#F5A58C] font-semibold tracking-wide transform -rotate-1 select-none leading-snug">
                Senior SEO Copywriter, Content Strategist &amp; Social Media Manager
              </p>
            </div>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#173E3D]/85 max-w-lg leading-relaxed mb-6 font-sans">
              I write content that ranks on Google and gets people to act. From clinics to SaaS brands, I've helped 25+ businesses reach Page 1 across the USA, UK, UAE, Australia and Canada.
            </p>

            {/* Pills / Metadata Tags */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-8">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF4EC] border border-[#064F50]/20 text-[#064F50] text-xs font-semibold shadow-2xs">
                <MapPin className="w-3.5 h-3.5 text-[#064F50]" />
                Islamabad, Pakistan
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF4EC] border border-[#064F50]/20 text-[#064F50] text-xs font-semibold shadow-2xs">
                <Globe className="w-3.5 h-3.5 text-[#064F50]" />
                Global Clients (US, UK, UAE, AU)
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="mailto:fatimajaved1329@gmail.com"
                className="px-8 py-4 rounded-full bg-[#064F50] hover:bg-[#0B6865] text-[#FFF4EC] font-sans font-bold text-base transition-all duration-300 hover:scale-105 shadow-[0_10px_25px_rgba(6,79,80,0.25)] flex items-center gap-2 group cursor-pointer"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <button
                onClick={onViewWorkClick}
                className="px-7 py-4 rounded-full border-2 border-[#064F50] hover:bg-[#064F50] text-[#064F50] hover:text-[#FFF4EC] font-sans font-bold text-base transition-all duration-300 hover:scale-105 cursor-pointer shadow-2xs"
              >
                Explore Selected Work
              </button>

              {/* Download Resume CTA */}
              <a
                href={RESUME_DOCUMENT.url}
                download={RESUME_DOCUMENT.fileName}
                aria-label={`Download Resume as ${RESUME_DOCUMENT.fileName}`}
                title={`Download Resume (${RESUME_DOCUMENT.fileType}, ${RESUME_DOCUMENT.fileSize})`}
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-4 sm:px-7 rounded-full bg-[#F5A58C] hover:bg-[#E2886D] text-[#064F50] font-sans font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_25px_rgba(226,136,109,0.35)] shadow-[0_8px_20px_rgba(245,165,140,0.3)] cursor-pointer"
              >
                <span className="w-8 h-8 rounded-full bg-[#064F50]/10 group-hover:bg-[#064F50]/15 flex items-center justify-center shrink-0 transition-colors duration-300">
                  <Download className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
                </span>
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Editorial Arch Portrait Section */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            {/* The Central Visual Composition Container */}
            <div className="relative w-[300px] h-[390px] sm:w-[350px] sm:h-[455px] md:w-[390px] md:h-[505px] flex items-center justify-center">
              
              {/* 1. Golden Yellow Backdrop Arch */}
              <div className="absolute inset-0 w-full h-full bg-[#F8C96B] rounded-t-[170px] rounded-b-[48px] shadow-[0_15px_35px_rgba(248,201,107,0.35)] transform -rotate-1 transition-transform duration-500 hover:rotate-0" />

              {/* 2. Top-left Hand-drawn Sunburst */}
              <div className="absolute -top-6 -left-6 z-20 pointer-events-none">
                <SunburstIcon size={44} color="#064F50" />
              </div>

              {/* 3. Golden 4-point sparkle */}
              <div className="absolute top-16 -left-8 z-20 pointer-events-none">
                <SparkleIcon size={24} color="#F8C96B" />
              </div>

              {/* 4. Coral Accent Dot */}
              <div className="absolute top-36 -right-3 w-4 h-4 rounded-full bg-[#F5A58C] z-20 shadow-xs" />

              {/* 5. Circular Availability Badge (Top Right, overlapping portrait) */}
              <div className="absolute -top-4 -right-2 sm:-right-6 z-30 group">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#FFF4EC] border-2 border-[#064F50] p-1.5 shadow-[0_6px_20px_rgba(6,79,80,0.12)] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full animate-spin-slow group-hover:[animation-duration:10s]"
                  >
                    <path
                      id="availabilityCirclePath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="none"
                    />
                    <text className="text-[9.5px] uppercase font-sans font-extrabold tracking-[0.24em] fill-[#064F50]">
                      <textPath href="#availabilityCirclePath" startOffset="0%">
                        • AVAILABLE FOR SELECT PROJECTS •
                      </textPath>
                    </text>
                  </svg>

                  {/* Inner smile sticker */}
                  <div className="absolute inset-0 m-auto w-10 h-10 rounded-full bg-[#FFF4EC] flex items-center justify-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#064F50"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                    >
                      <circle cx="9" cy="9.5" r="1.2" fill="#064F50" />
                      <circle cx="15" cy="9.5" r="1.2" fill="#064F50" />
                      <path d="M8 14.5C9.5 17 14.5 17 16 14.5" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* 6. Main Portrait Image with Organic Arch Clipping */}
              <div className="relative z-10 w-[88%] h-[92%] overflow-hidden rounded-t-[150px] rounded-b-[40px] shadow-[0_20px_40px_rgba(6,79,80,0.18)] border-4 border-[#FFF4EC] bg-white">
                <img
                  src={profileImage}
                  alt="Fatima Javeed - Senior SEO Copywriter, Content Strategist & Social Media Manager"
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
              </div>

              {/* 7. Floating Handwritten Note in Deep Teal (Overlapping lower portrait) */}
              <div className="absolute -bottom-8 -left-4 sm:-left-8 z-30 max-w-[260px] sm:max-w-[285px] bg-[#064F50] text-[#FFF4EC] px-5 py-4 rounded-2xl shadow-[0_12px_30px_rgba(6,79,80,0.35)] transform -rotate-3 hover:rotate-0 transition-transform duration-300 border border-[#FFF4EC]/20">
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <p className="font-serif text-lg sm:text-xl font-normal leading-snug text-[#FFF4EC]">
                    Words that rank. Stories that sell.
                  </p>
                  <HandDrawnHeart size={22} color="#F5A58C" className="shrink-0 mt-0.5 transform rotate-12" />
                </div>
                <p className="font-caveat text-lg sm:text-xl text-[#F5A58C] font-semibold leading-tight">
                  Search-smart content, human at heart.
                </p>
                <div className="mt-2 w-12 h-1 bg-[#F5A58C] rounded-full" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
