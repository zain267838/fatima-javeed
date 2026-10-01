import React from 'react';
import { Monitor, PenTool, Smile, Layers, CheckCircle2 } from 'lucide-react';
import fatimaAboutAvatarImg from '../assets/images/fatima_about_avatar_1790759593063.jpg';
import { SERVICES, CLIENT_BRANDS } from '../data/portfolioData';
import { SparkleIcon, CrownIcon, SmileBadge } from './DecorativeElements';

export const AboutServices: React.FC = () => {
  const getServiceIcon = (iconName: string) => {
    const iconClass = "w-6 h-6 text-[#FFF4EC]";
    switch (iconName) {
      case 'monitor':
        return <Monitor className={iconClass} />;
      case 'pen-tool':
        return <PenTool className={iconClass} />;
      case 'smile':
        return <Smile className={iconClass} />;
      case 'pencil':
        return <Layers className={iconClass} />;
      default:
        return <Monitor className={iconClass} />;
    }
  };

  return (
    <section id="about" className="py-16 md:py-24 scroll-mt-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT: Illustrated 3D Character Composition */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-square flex items-center justify-center">
              
              {/* Teal Organic Circle Backdrop */}
              <div className="absolute inset-2 rounded-full bg-[#064F50] shadow-[0_16px_36px_rgba(6,79,80,0.18)]" />

              {/* Hand-Drawn Golden Crown */}
              <div className="absolute -top-6 left-2 sm:-left-2 z-20 transform -rotate-12 animate-float pointer-events-none">
                <CrownIcon size={46} color="#F8C96B" />
              </div>

              {/* Coral Smile Badge */}
              <div className="absolute -bottom-2 -left-3 sm:-left-5 z-20 shadow-md">
                <SmileBadge size={52} bgColor="#F5A58C" strokeColor="#064F50" />
              </div>

              {/* Mint Accent Pebble */}
              <div className="absolute top-2 -right-3 w-8 h-8 rounded-full bg-[#B9E5DE] z-0 opacity-80" />

              {/* Character Avatar Image with Rounded Cutout */}
              <div className="relative z-10 w-[84%] h-[84%] rounded-full overflow-hidden border-4 border-[#FFF4EC] shadow-inner bg-[#064F50]">
                <img
                  src={fatimaAboutAvatarImg}
                  alt="Fatima Javeed illustrated character avatar"
                  className="w-full h-full object-cover object-center transform scale-105 hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>

              {/* Hand-drawn Coral Sparkle */}
              <div className="absolute top-1/2 -right-5 z-20 pointer-events-none transform -translate-y-1/2">
                <SparkleIcon size={26} color="#F5A58C" />
              </div>

            </div>
          </div>

          {/* RIGHT: Capabilities & What I Do */}
          <div id="services" className="lg:col-span-7 flex flex-col items-start scroll-mt-28">
            
            {/* Heading with Coral Sparkle */}
            <div className="flex items-center gap-3 mb-3">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#064F50] font-normal tracking-tight">
                What I Do
              </h2>
              <SparkleIcon size={24} color="#F5A58C" className="animate-pulse-soft" />
            </div>

            <p className="text-base sm:text-lg text-[#173E3D]/85 mb-8 max-w-xl font-sans leading-relaxed">
              I specialize in semantic, conversion-optimized content aligned with the latest Google updates and E-E-A-T criteria. From keyword research and topic clusters to published, Page 1 ranking articles, I help brands achieve visibility that converts.
            </p>

            {/* 4 Capabilities Grid (2x2) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7 w-full mb-10">
              {SERVICES.map((service) => (
                <div
                  key={service.id}
                  className="group flex items-start gap-4 p-4 rounded-2xl transition-all duration-200 hover:bg-[#FFF4EC] hover:shadow-xs border border-transparent hover:border-[#064F50]/10"
                >
                  {/* Rounded Teal Icon Container */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#064F50] group-hover:bg-[#0B6865] flex items-center justify-center shrink-0 shadow-sm transition-all duration-200 group-hover:scale-105">
                    {getServiceIcon(service.iconName)}
                  </div>

                  {/* Service Text */}
                  <div className="flex flex-col">
                    <h3 className="font-sans font-bold text-lg sm:text-xl text-[#064F50] mb-1">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#173E3D]/80 leading-relaxed font-sans mb-2">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {service.tags.slice(0, 2).map((tag, idx) => (
                        <span key={idx} className="text-[11px] px-2 py-0.5 rounded-md bg-[#064F50]/5 text-[#0B6865] font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Client Roster / Notable Brands */}
            <div className="w-full pt-6 border-t border-[#064F50]/15">
              <span className="block text-xs font-semibold uppercase tracking-wider text-[#0B6865] mb-3">
                Trusted By 20+ Global Brands Across 5 International Markets:
              </span>
              <div className="flex flex-wrap gap-2">
                {CLIENT_BRANDS.slice(0, 10).map((brand, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#064F50]/15 text-xs text-[#064F50] font-medium shadow-xs"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#F5A58C]" />
                    <span>{brand}</span>
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
