import React from 'react';
import { Download, FileText, ExternalLink, CheckCircle2 } from 'lucide-react';
import { RESUME_DOCUMENT } from '../data/portfolioData';
import { SparkleIcon, HandDrawnUnderline } from './DecorativeElements';

const RESUME_PREVIEW_LINES: { width: string; tone: 'strong' | 'soft' }[] = [
  { width: 'w-11/12', tone: 'strong' },
  { width: 'w-9/12', tone: 'strong' },
  { width: 'w-4/5', tone: 'soft' },
  { width: 'w-10/12', tone: 'soft' },
  { width: 'w-3/5', tone: 'soft' },
];

export const ResumeSection: React.FC = () => {
  const { url, fileName, displayName, fileType, fileSize, updated, headline, summary, highlights } =
    RESUME_DOCUMENT;

  const downloadLabel = `Download Resume as ${fileName}`;

  return (
    <section
      id="resume"
      aria-labelledby="resume-heading"
      className="py-16 md:py-24 scroll-mt-24 relative overflow-hidden"
    >
      {/* Background Soft Ambient Accents */}
      <div className="absolute top-20 right-1/4 w-80 h-80 bg-[#B9E5DE]/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#F5A58C]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Heading */}
        <div className="max-w-2xl mb-10 md:mb-14">
          <div className="flex items-center gap-2 mb-2">
            <SparkleIcon size={20} color="#F5A58C" />
            <span className="text-xs uppercase tracking-widest font-semibold text-[#0B6865]">
              Professional Credentials
            </span>
          </div>

          <h2
            id="resume-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#064F50] font-normal tracking-tight"
          >
            Resume
          </h2>

          <div className="mt-1 w-24" aria-hidden="true">
            <HandDrawnUnderline color="#F5A58C" />
          </div>

          <p className="mt-4 text-base sm:text-lg text-[#173E3D]/85 max-w-xl leading-relaxed font-sans">
            {summary}
          </p>
        </div>

        {/* Resume Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden bg-white border border-[#064F50]/12 shadow-md">
          {/* LEFT: Stylized Resume Preview Sheet */}
          <div className="lg:col-span-5 relative bg-[#064F50] px-8 py-10 sm:px-10 sm:py-12 flex items-center justify-center overflow-hidden">
            {/* Decorative accents inside the teal panel */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#0B6865] opacity-60 pointer-events-none" aria-hidden="true" />
            <div className="absolute -bottom-8 -left-6 w-24 h-24 rounded-full bg-[#F8C96B]/20 pointer-events-none" aria-hidden="true" />

            <div
              role="img"
              aria-label={`Preview of ${displayName} — a ${fileType} document listing ${headline}`}
              className="relative w-full max-w-[268px] aspect-[8.5/11] bg-[#FFF4EC] rounded-xl shadow-[0_18px_40px_rgba(4,56,57,0.45)] p-5 sm:p-6 -rotate-2 hover:rotate-0 transition-transform duration-500"
            >
              <div className="flex flex-col h-full" aria-hidden="true">
                {/* Name + Title block */}
                <div className="flex items-center gap-3 pb-3 mb-3 border-b-2 border-[#064F50]/15">
                  <div className="w-11 h-11 rounded-full bg-[#064F50] flex items-center justify-center shrink-0">
                    <span className="font-serif text-[#FFF4EC] text-base leading-none">FJ</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="h-3 w-4/5 rounded-full bg-[#064F50]" />
                    <div className="h-2 w-3/5 rounded-full bg-[#F5A58C] mt-2" />
                  </div>
                </div>

                {/* Body copy lines */}
                <div className="flex-1 flex flex-col gap-2.5">
                  <div className="h-2 w-1/3 rounded-full bg-[#0B6865]/70" />
                  {RESUME_PREVIEW_LINES.map((line, idx) => (
                    <div
                      key={idx}
                      className={`h-1.5 rounded-full ${
                        line.tone === 'strong' ? 'bg-[#064F50]/45' : 'bg-[#064F50]/20'
                      } ${line.width}`}
                    />
                  ))}
                </div>

                {/* Footer badge row */}
                <div className="flex items-center justify-between pt-3 mt-3 border-t-2 border-[#064F50]/15">
                  <div className="h-1.5 w-10 rounded-full bg-[#0B6865]/30" />
                  <div className="px-2 py-1 rounded-md bg-[#F5A58C]">
                    <span className="text-[10px] font-bold tracking-wider text-[#064F50]">PDF</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: File Details & Download Actions */}
          <div className="lg:col-span-7 p-7 sm:p-10 flex flex-col">
            {/* Document Meta */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#064F50]/5 border border-[#064F50]/10 text-[#064F50] text-xs font-semibold">
                <FileText className="w-3.5 h-3.5 text-[#0B6865]" aria-hidden="true" />
                {fileType} Document
              </span>
              <span className="px-3 py-1 rounded-full bg-white border border-[#064F50]/15 text-xs font-medium text-[#0B6865]">
                {fileSize}
              </span>
              <span className="px-3 py-1 rounded-full bg-white border border-[#064F50]/15 text-xs font-medium text-[#0B6865]">
                {updated}
              </span>
            </div>

            {/* File Name */}
            <h3 className="font-sans font-bold text-xl sm:text-2xl text-[#064F50] break-words">
              {displayName}
            </h3>
            <p className="text-sm text-[#173E3D]/75 font-sans mt-1.5 leading-relaxed">{headline}</p>
            <p className="text-xs text-[#173E3D]/55 font-sans mt-1.5 break-words">
              Saved as <span className="font-semibold text-[#0B6865]">{fileName}</span>
            </p>

            {/* Highlights */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 my-6 pt-6 border-t border-[#064F50]/12">
              {highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2 text-sm text-[#173E3D]/80 font-sans">
                  <CheckCircle2 className="w-4 h-4 text-[#F5A58C] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-auto">
              <a
                href={url}
                download={fileName}
                aria-label={downloadLabel}
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#064F50] hover:bg-[#0B6865] text-[#FFF4EC] font-sans font-bold text-base transition-all duration-300 hover:scale-[1.03] shadow-[0_10px_25px_rgba(6,79,80,0.25)] cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#F5A58C] transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
                <span>Download Resume</span>
              </a>

              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${displayName} in a new tab`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-[#064F50]/25 hover:border-[#064F50] hover:bg-[#064F50]/5 text-[#064F50] font-sans font-semibold text-sm transition-all duration-300 hover:scale-[1.03] cursor-pointer"
              >
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
                <span>Preview in New Tab</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
