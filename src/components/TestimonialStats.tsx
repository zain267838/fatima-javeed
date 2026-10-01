import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { TESTIMONIALS, STATISTICS } from '../data/portfolioData';
import { SparkleIcon } from './DecorativeElements';

export const TestimonialStats: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = TESTIMONIALS.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Optional subtle auto-rotation when not hovered
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const currentTestimonial = TESTIMONIALS[currentIndex];

  // Client initials for beautiful branded monograms
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <section id="testimonials" className="py-12 md:py-20 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Large Rounded Golden Yellow Panel */}
        <div
          className="bg-[#F8C96B] rounded-[28px] sm:rounded-[36px] md:rounded-[44px] p-7 sm:p-10 md:p-14 text-[#064F50] shadow-[0_20px_40px_rgba(248,201,107,0.35)] relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Subtle decorative background sparkles */}
          <div className="absolute top-4 right-1/3 opacity-30 pointer-events-none">
            <SparkleIcon size={32} color="#064F50" />
          </div>
          <div className="absolute bottom-6 right-10 opacity-20 pointer-events-none">
            <SparkleIcon size={24} color="#064F50" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* LEFT: Testimonial Carousel (approx 58% width on desktop) */}
            <div className="lg:col-span-7 flex flex-col justify-between min-h-[300px] sm:min-h-[320px]">
              
              {/* Carousel Top Bar: Header label + Prev/Next Navigation Controls */}
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#064F50]/15">
                <div className="flex items-center gap-2">
                  <Quote className="w-4 h-4 text-[#064F50]" />
                  <span className="text-xs uppercase tracking-widest font-bold text-[#064F50]/80">
                    Client Endorsements ({currentIndex + 1} / {total})
                  </span>
                </div>

                {/* Navigation Arrows */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevSlide}
                    className="w-9 h-9 rounded-full bg-[#064F50] text-[#FFF4EC] hover:bg-[#0B6865] flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-xs cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#064F50]"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-9 h-9 rounded-full bg-[#064F50] text-[#FFF4EC] hover:bg-[#0B6865] flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-xs cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#064F50]"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Active Testimonial Card Content with smooth key transition */}
              <div
                key={currentIndex}
                className="flex-1 flex flex-col justify-between animate-in fade-in slide-in-from-right-4 duration-300"
              >
                {/* 5-Star Rating Indicator */}
                <div className="flex items-center gap-1 mb-3 text-[#064F50]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-[#064F50]" />
                  ))}
                  <span className="text-xs font-semibold ml-2 text-[#064F50]/80 tracking-wide">
                    Verified Feedback
                  </span>
                </div>

                {/* Quote Text */}
                <div className="relative mb-6">
                  <p className="font-sans text-lg sm:text-xl md:text-2xl text-[#064F50] font-medium leading-relaxed">
                    "{currentTestimonial.quote}"
                  </p>
                </div>

                {/* Author Information */}
                <div className="flex items-center gap-3.5 pt-2">
                  {/* Monogram Avatar with Initials */}
                  <div className="w-12 h-12 rounded-full bg-[#064F50] text-[#FFF4EC] flex items-center justify-center font-serif text-base font-bold shadow-xs shrink-0 border-2 border-[#FFF4EC]/40">
                    {getInitials(currentTestimonial.author)}
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-base sm:text-lg text-[#064F50] leading-tight">
                      {currentTestimonial.author}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#064F50]/85 font-medium">
                      {currentTestimonial.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Dots Indicator */}
              <div className="flex items-center gap-2 pt-6 mt-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === idx
                        ? 'w-8 bg-[#064F50]'
                        : 'w-2.5 bg-[#064F50]/30 hover:bg-[#064F50]/60'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

            </div>

            {/* RIGHT: Three Large Verified Statistics with Divider */}
            <div className="lg:col-span-5 grid grid-cols-3 gap-2 sm:gap-4 pt-6 lg:pt-0 border-t lg:border-t-0 lg:border-l border-[#064F50]/15 lg:pl-10">
              {STATISTICS.map((stat, idx) => (
                <div key={idx} className="flex flex-col text-left">
                  <div className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#064F50] tracking-tight leading-none mb-2">
                    {stat.value}
                  </div>
                  <div className="font-sans font-medium text-xs sm:text-sm text-[#064F50]/90 leading-tight">
                    {stat.label}
                  </div>
                  {stat.sublabel && (
                    <div className="text-[11px] text-[#064F50]/65 hidden sm:block mt-1">
                      {stat.sublabel}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
