import React from 'react';
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { WORK_EXPERIENCE } from '../data/portfolioData';
import { SparkleIcon } from './DecorativeElements';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-14 md:py-20 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <SparkleIcon size={20} color="#F5A58C" />
              <span className="text-xs uppercase tracking-widest font-semibold text-[#0B6865]">
                Work History &amp; Track Record
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#064F50] font-normal tracking-tight">
              Professional Experience
            </h2>
          </div>
          <p className="text-sm text-[#173E3D]/75 max-w-md font-sans">
            6 years of leading semantic SEO, Google E-E-A-T healthcare content, and high-impact SaaS copywriting across global agencies and institutes.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WORK_EXPERIENCE.map((exp) => (
            <div
              key={exp.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#064F50]/12 shadow-xs hover:shadow-md hover:border-[#064F50]/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#064F50]/70 mb-3">
                  <span className="inline-flex items-center gap-1 font-semibold text-[#064F50] bg-[#064F50]/5 px-2.5 py-1 rounded-full">
                    <Calendar className="w-3 h-3 text-[#0B6865]" />
                    {exp.period}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-[#064F50] mb-1 font-normal">
                  {exp.company}
                </h3>
                <div className="text-xs uppercase tracking-wider font-semibold text-[#F5A58C] mb-3">
                  {exp.role}
                </div>

                <div className="flex items-center gap-1 text-xs text-[#173E3D]/65 mb-4">
                  <MapPin className="w-3 h-3 text-[#0B6865]" />
                  <span>{exp.location}</span>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-[#173E3D]/80 leading-relaxed font-sans mb-4">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0B6865] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
