import React, { useState } from 'react';
import { ArrowUpRight, TrendingUp, ExternalLink, Sparkles, Megaphone, CheckCircle2, Wrench } from 'lucide-react';
import { PORTFOLIO_PROJECTS, ALL_PAGE_ONE_RANKINGS, SOCIAL_MEDIA_SECTION } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types/portfolio';
import { SparkleIcon } from './DecorativeElements';
import { getSocialPlatformIcon } from './SocialPlatformIcons';

interface SelectedWorkProps {
  onSelectProject: (project: Project) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  const [showRankingsDrawer, setShowRankingsDrawer] = useState(false);

  const filterTabs: { label: string; key: ProjectCategory }[] = [
    { label: 'All Projects', key: 'all' },
    { label: 'SaaS & Tech', key: 'saas' },
    { label: 'Healthcare & Medical', key: 'healthcare' },
    { label: 'Consulting & B2B', key: 'consulting' },
    { label: 'Social Media', key: 'social' },
  ];

  const filteredProjects = PORTFOLIO_PROJECTS.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.filterKey === activeFilter;
  });

  const showSocialMediaSection = filteredProjects.some((item) => item.filterKey === 'social');

  return (
    <section id="work" className="py-10 md:py-16 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Main Showcase Container in Deep Teal */}
        <div className="bg-[#064F50] rounded-[28px] sm:rounded-[40px] p-6 sm:p-10 md:p-14 text-[#FFF4EC] shadow-[0_24px_50px_rgba(6,79,80,0.25)] relative overflow-hidden">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#0B6865]/40 rounded-full blur-3xl pointer-events-none" />

          {/* Section Header & Interactive Filter Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 md:mb-14 relative z-10">
            {/* Title with Hand-drawn Sparkle */}
            <div className="flex items-center gap-3">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#FFF4EC]">
                Featured Client Work
              </h2>
              <SparkleIcon size={24} color="#F5A58C" className="animate-pulse-soft" />
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              {filterTabs.map((tab) => {
                const isActive = activeFilter === tab.key;
                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveFilter(tab.key)}
                    className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-[#F5A58C] text-[#064F50] shadow-sm font-semibold scale-105'
                        : 'bg-transparent text-[#FFF4EC]/85 border border-[#FFF4EC]/30 hover:border-[#FFF4EC] hover:text-[#FFF4EC]'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Portfolio Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10 mb-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group bg-[#FFF4EC] rounded-[22px] sm:rounded-[26px] p-3.5 sm:p-4 text-[#173E3D] cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_35px_rgba(0,0,0,0.2)] flex flex-col border border-[#FFF4EC]/20"
              >
                {/* Image Container with Subtle Zoom */}
                <div className="relative aspect-[4/3] rounded-[18px] sm:rounded-[20px] overflow-hidden bg-[#EAE0D7] mb-4">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  {/* Subtle hover overlay badge */}
                  <div className="absolute top-3 left-3 bg-[#064F50]/85 backdrop-blur-xs text-[#FFF4EC] text-[11px] font-sans font-medium px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#F8C96B]" />
                    <span>View Case Study</span>
                  </div>
                </div>

                {/* Social Profile Links (Social Media projects only) */}
                {project.socialProfiles && project.socialProfiles.length > 0 && (
                  <div className="px-1.5 pt-3.5 mb-3.5 border-t border-[#064F50]/10">
                    <div className="grid grid-cols-2 gap-1.5 min-h-[64px] content-start">
                      {project.socialProfiles.map((profile) => {
                        const PlatformIcon = getSocialPlatformIcon(profile.platform);
                        return (
                          <a
                            key={profile.platform}
                            href={profile.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            aria-label={`${project.title} on ${profile.label} (opens in a new tab)`}
                            title={`${project.title} on ${profile.label}`}
                            className="group/link inline-flex items-center justify-center gap-1.5 px-2 py-1.5 rounded-full bg-[#064F50]/5 hover:bg-[#064F50] text-[#064F50] hover:text-[#FFF4EC] text-[11px] font-semibold tracking-wide transition-colors duration-200 cursor-pointer"
                          >
                            <PlatformIcon className="w-3.5 h-3.5" aria-hidden="true" />
                            <span>{profile.label}</span>
                            <ExternalLink className="w-2.5 h-2.5 opacity-50 group-hover/link:opacity-90 transition-opacity" aria-hidden="true" />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Card Bottom Meta & Circular Coral Arrow Button */}
                <div className="flex items-center justify-between px-1.5 pb-1">
                  <div>
                    <h3 className="font-sans font-bold text-lg sm:text-xl text-[#064F50] group-hover:text-[#0B6865] transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#0B6865]/80 font-medium mt-0.5">
                      {project.category}
                    </p>
                  </div>

                  {/* Circular Coral Arrow Button */}
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#F5A58C] group-hover:bg-[#E2886D] text-[#064F50] flex items-center justify-center shrink-0 shadow-xs transition-all duration-200 group-hover:scale-110">
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Social Media Growth & Content Management (shown with Social Media projects) */}
          {showSocialMediaSection && (
            <div className="relative z-10 pt-8 pb-2 border-t border-[#FFF4EC]/15">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Overview Copy */}
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#F5A58C]/20 flex items-center justify-center text-[#F5A58C] shrink-0">
                      <Megaphone className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#FFF4EC] leading-snug">
                      {SOCIAL_MEDIA_SECTION.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#FFF4EC]/80 font-sans leading-relaxed">
                    {SOCIAL_MEDIA_SECTION.text}
                  </p>
                </div>

                {/* Responsibilities Checklist */}
                <div className="lg:col-span-7">
                  <span className="block text-[10px] sm:text-xs uppercase tracking-widest font-bold text-[#F8C96B] mb-4">
                    Core Responsibilities
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2.5">
                    {SOCIAL_MEDIA_SECTION.responsibilities.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#FFF4EC]/85 font-sans leading-snug"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#F5A58C] shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tools & Platforms Row */}
              <div className="mt-7 pt-6 border-t border-[#FFF4EC]/10">
                <div className="flex items-center gap-2 mb-3.5">
                  <Wrench className="w-4 h-4 text-[#B9E5DE]" aria-hidden="true" />
                  <span className="text-[10px] sm:text-xs uppercase tracking-widest font-bold text-[#B9E5DE]">
                    Tools &amp; Platforms
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {SOCIAL_MEDIA_SECTION.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 rounded-full bg-[#FFF4EC]/10 hover:bg-[#FFF4EC]/15 border border-[#FFF4EC]/20 text-[11px] sm:text-xs font-medium text-[#FFF4EC] transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Interactive Page 1 Rankings Banner */}
          <div className="relative z-10 pt-6 border-t border-[#FFF4EC]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-full bg-[#F8C96B]/20 flex items-center justify-center text-[#F8C96B] shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-lg text-[#FFF4EC]">
                  Proven Google Page 1 Rankings
                </h4>
                <p className="text-xs text-[#FFF4EC]/75 font-sans">
                  Active search positions earned through semantic SEO and E-E-A-T optimization.
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowRankingsDrawer(!showRankingsDrawer)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F8C96B] hover:bg-[#FDE8B3] text-[#064F50] text-xs font-bold transition-all cursor-pointer shadow-sm hover:scale-105 shrink-0"
            >
              <span>{showRankingsDrawer ? 'Hide Live Rankings' : 'Explore Live Ranking Proofs (12+ URLs)'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Collapsible Live Rankings Grid */}
          {showRankingsDrawer && (
            <div className="mt-6 pt-6 border-t border-[#FFF4EC]/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
              {ALL_PAGE_ONE_RANKINGS.map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#043839]/60 hover:bg-[#043839] border border-[#FFF4EC]/10 hover:border-[#F5A58C]/50 transition-all flex flex-col justify-between group"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#F8C96B] bg-[#F8C96B]/15 px-2 py-0.5 rounded-sm">
                      {item.badge}
                    </span>
                    <ExternalLink className="w-3 h-3 text-[#FFF4EC]/40 group-hover:text-[#F5A58C] transition-colors" />
                  </div>
                  <p className="font-serif text-xs text-[#FFF4EC] group-hover:text-[#F5A58C] transition-colors line-clamp-2 mb-2">
                    {item.keyword}
                  </p>
                  <span className="text-[10px] text-[#FFF4EC]/50 font-mono truncate">
                    {item.group}
                  </span>
                </a>
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
};
