import React from 'react';

interface BrandLogoProps {
  className?: string;
  onClick?: () => void;
}

export const BrandMark: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="9 14 46 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    className={className}
  >
    <path d="M9 14H32V21.5H17V28.5H28V36H17V50H9V14Z" fill="#FFF4EC" />
    <path d="M31 37H38V42.5H47V14H55V50H31V37Z" fill="#F5A58C" />
  </svg>
);

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = '', onClick }) => {
  return (
    <a
      href="#"
      onClick={onClick}
      className={`group flex items-center gap-3 rounded-lg focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#064F50] ${className}`}
      aria-label="Fatima Javeed Portfolio Home"
    >
      <div className="w-9 h-9 shrink-0 rounded-xl bg-[#064F50] flex items-center justify-center text-[#FFF4EC] shadow-xs group-hover:scale-105 transition-transform">
        <BrandMark className="w-[24px] h-[19px]" />
      </div>
      <div className="flex flex-col text-left leading-tight">
        <span className="font-serif text-[17px] sm:text-lg font-bold text-[#064F50] tracking-tight whitespace-nowrap">
          Fatima Javeed
        </span>
        <span className="text-[10px] sm:text-[11px] font-sans font-medium uppercase tracking-wider text-[#0B6865]/80 whitespace-nowrap">
          SEO &amp; Copywriting
        </span>
      </div>
    </a>
  );
};