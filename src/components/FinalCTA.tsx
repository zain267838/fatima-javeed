import React, { useState } from 'react';
import { Mail, Globe, MapPin, ArrowUpRight, Copy, Check, Linkedin, Send } from 'lucide-react';
import { SparkleIcon, HandDrawnUnderline } from './DecorativeElements';

export const FinalCTA: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('fatimajaved1329@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="bg-[#064F50] text-[#FFF4EC] pt-20 pb-16 md:pt-28 md:pb-20 relative overflow-hidden scroll-mt-24">
      {/* Decorative background glow */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#0B6865]/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#F5A58C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Massive Editorial Headline */}
        <div className="mb-16 md:mb-24 max-w-3xl">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#F8C96B]">
              Open To New Roles &amp; Freelance Engagements
            </span>
            <SparkleIcon size={20} color="#F8C96B" />
          </div>

          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[84px] leading-[1.02] tracking-tight font-normal text-[#FFF4EC]">
            <span className="block">Let's create</span>
            <span className="inline-block mr-3">something</span>
            {/* Highlighted with coral handwritten script + hand-drawn underline */}
            <span className="relative inline-block">
              <span className="font-caveat text-6xl sm:text-7xl md:text-8xl lg:text-[96px] text-[#F5A58C] font-semibold tracking-normal inline-block transform -rotate-2">
                rank-worthy!
              </span>
              <span className="absolute -bottom-2 sm:-bottom-3 left-0 w-full">
                <HandDrawnUnderline color="#F5A58C" />
              </span>
            </span>
          </h2>
        </div>

        {/* 3-Column Layout: Get In Touch, Follow Along, Have a Project? */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pt-10 border-t border-[#FFF4EC]/15">
          
          {/* Column 1: Get in Touch (4 cols) */}
          <div className="md:col-span-4 flex flex-col">
            <h3 className="font-sans font-bold text-sm uppercase tracking-wider text-[#F8C96B] mb-5">
              Get In Touch
            </h3>
            <ul className="space-y-3.5 text-sm sm:text-base font-sans">
              <li className="flex items-center gap-3 text-[#FFF4EC]/90 group">
                <div className="w-8 h-8 rounded-full bg-[#FFF4EC]/10 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#F5A58C]" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-2 hover:text-[#F5A58C] transition-colors cursor-pointer text-left"
                  title="Click to copy email"
                >
                  <span>fatimajaved1329@gmail.com</span>
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-[#F8C96B]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
                  )}
                </button>
              </li>

              <li className="flex items-center gap-3 text-[#FFF4EC]/90">
                <div className="w-8 h-8 rounded-full bg-[#FFF4EC]/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#F5A58C]" />
                </div>
                <span>Lahore, Pakistan (Remote Worldwide)</span>
              </li>

              <li className="flex items-center gap-3 text-[#FFF4EC]/90">
                <div className="w-8 h-8 rounded-full bg-[#FFF4EC]/10 flex items-center justify-center shrink-0">
                  <Globe className="w-4 h-4 text-[#F5A58C]" />
                </div>
                <span>Response Time: Within 24 hours</span>
              </li>
            </ul>
          </div>

          {/* Column 2: Connect On LinkedIn (4 cols) */}
          <div className="md:col-span-4 flex flex-col">
            <h3 className="font-sans font-bold text-sm uppercase tracking-wider text-[#F8C96B] mb-5">
              Professional Network
            </h3>
            <div className="flex items-center gap-3">
              {/* LinkedIn Button with exact updated link */}
              <a
                href="https://www.linkedin.com/in/fatima-javeed-/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#FFF4EC]/25 hover:border-[#F5A58C] bg-[#FFF4EC]/5 hover:bg-[#F5A58C] text-[#FFF4EC] hover:text-[#064F50] font-sans font-semibold text-sm transition-all duration-200 hover:scale-105"
                aria-label="Fatima Javeed LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
                <span>View LinkedIn Profile</span>
              </a>

              {/* Direct Email Link */}
              <a
                href="mailto:fatimajaved1329@gmail.com"
                className="w-12 h-12 rounded-full border border-[#FFF4EC]/25 hover:border-[#F5A58C] bg-[#FFF4EC]/5 hover:bg-[#F5A58C] text-[#FFF4EC] hover:text-[#064F50] flex items-center justify-center transition-all duration-200 hover:scale-105"
                title="Send email to fatimajaved1329@gmail.com"
                aria-label="Direct Email"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-[#FFF4EC]/60 mt-4 font-sans leading-relaxed">
              Available for full-time Senior SEO Copywriter roles, content strategy consulting, and high-impact freelance projects.
            </p>
          </div>

          {/* Column 3: Have a Project In Mind? (4 cols) */}
          <div className="md:col-span-4 flex flex-col justify-between p-6 rounded-2xl bg-[#043839]/60 border border-[#FFF4EC]/15">
            <div>
              <h3 className="font-serif text-2xl text-[#FFF4EC] mb-2 font-normal">
                Ready to rank higher?
              </h3>
              <p className="text-sm text-[#FFF4EC]/75 mb-6 font-sans leading-relaxed">
                Whether you need a full topic cluster strategy, medical copy, or SaaS content, let's talk.
              </p>
            </div>
            {/* Direct mailto link as requested */}
            <a
              href="mailto:fatimajaved1329@gmail.com"
              className="inline-flex items-center justify-center gap-2 bg-[#F5A58C] hover:bg-[#E2886D] text-[#064F50] font-sans font-semibold text-base py-3 px-6 rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-sm hover:shadow-md cursor-pointer w-full sm:w-auto"
            >
              <span>I'm Available — Let's Talk</span>
              <ArrowUpRight className="w-4 h-4 text-[#064F50]" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
