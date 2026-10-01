import React from 'react';

// Four-point editorial sparkle (like the reference beside headings and hero)
export const SparkleIcon: React.FC<{ className?: string; color?: string; size?: number }> = ({
  className = '',
  color = '#F5A58C',
  size = 20,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block shrink-0 ${className}`}
  >
    <path
      d="M12 0C12 7 17 12 24 12C17 12 12 17 12 24C12 17 7 12 0 12C7 12 12 7 12 0Z"
      fill={color}
    />
  </svg>
);

// Hand-drawn sunburst (like the teal sunburst in the reference hero)
export const SunburstIcon: React.FC<{ className?: string; color?: string; size?: number }> = ({
  className = '',
  color = '#064F50',
  size = 36,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    stroke={color}
    strokeWidth="2.2"
    strokeLinecap="round"
    className={className}
  >
    <path d="M24 4V12" />
    <path d="M24 36V44" />
    <path d="M4 24H12" />
    <path d="M36 24H44" />
    <path d="M9.8 9.8L15.5 15.5" />
    <path d="M32.5 32.5L38.2 38.2" />
    <path d="M38.2 9.8L32.5 15.5" />
    <path d="M15.5 32.5L9.8 38.2" />
  </svg>
);

// Outlined ring with center dot (like the teal circle/dot motif)
export const RingDotIcon: React.FC<{ className?: string; color?: string; size?: number }> = ({
  className = '',
  color = '#064F50',
  size = 32,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    className={className}
  >
    <circle cx="16" cy="18" r="9" stroke={color} strokeWidth="3" />
    <circle cx="16" cy="6" r="2.5" fill={color} />
  </svg>
);

// Hand-drawn whimsical crown
export const CrownIcon: React.FC<{ className?: string; color?: string; size?: number }> = ({
  className = '',
  color = '#F8C96B',
  size = 36,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 40"
    fill="none"
    stroke={color}
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M6 32L10 12L20 22L24 8L28 22L38 12L42 32H6Z" />
    <circle cx="10" cy="9" r="2" fill={color} />
    <circle cx="24" cy="5" r="2" fill={color} />
    <circle cx="38" cy="9" r="2" fill={color} />
  </svg>
);

// Hand-drawn playful heart
export const HandDrawnHeart: React.FC<{ className?: string; color?: string; size?: number }> = ({
  className = '',
  color = '#F5A58C',
  size = 24,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    stroke={color}
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 26C16 26 5 19 5 11C5 7 8 4 12 4C14.5 4 15.5 5.5 16 6.5C16.5 5.5 17.5 4 20 4C24 4 27 7 27 11C27 19 16 26 16 26Z" />
  </svg>
);

// Hand-drawn wavy underline
export const HandDrawnUnderline: React.FC<{ className?: string; color?: string }> = ({
  className = '',
  color = '#F5A58C',
}) => (
  <svg
    viewBox="0 0 160 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-full overflow-visible ${className}`}
  >
    <path
      d="M2 9.5C28 4.5 64 12.5 98 6.5C122 2.5 144 8 158 5.5"
      stroke={color}
      strokeWidth="3.5"
      strokeLinecap="round"
    />
  </svg>
);

// Hand-drawn smile sticker
export const SmileBadge: React.FC<{ className?: string; size?: number; bgColor?: string; strokeColor?: string }> = ({
  className = '',
  size = 48,
  bgColor = '#F5A58C',
  strokeColor = '#064F50',
}) => (
  <div
    style={{ width: size, height: size, backgroundColor: bgColor }}
    className={`rounded-full flex items-center justify-center shadow-xs select-none ${className}`}
  >
    <svg width={size * 0.55} height={size * 0.55} viewBox="0 0 24 24" fill="none" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round">
      <circle cx="8.5" cy="9.5" r="1.25" fill={strokeColor} />
      <circle cx="15.5" cy="9.5" r="1.25" fill={strokeColor} />
      <path d="M7 14.5C8.5 17 15.5 17 17 14.5" />
    </svg>
  </div>
);

// Curved organic blob for hero backdrop
export const OrganicGoldenArch: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div
    className={`bg-[#F8C96B] rounded-t-[140px] md:rounded-t-[200px] rounded-b-[40px] shadow-sm ${className}`}
    style={{
      boxShadow: 'inset 0 -12px 24px rgba(245, 165, 140, 0.25)',
    }}
  />
);
