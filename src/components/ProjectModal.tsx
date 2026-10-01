import React from 'react';
import { X, ArrowUpRight, CheckCircle2, Sparkles, Calendar, User, Layers, ExternalLink } from 'lucide-react';
import { Project } from '../types/portfolio';
import { SparkleIcon } from './DecorativeElements';
import { getSocialPlatformIcon } from './SocialPlatformIcons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#043839]/70 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-4xl bg-[#FFF4EC] rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl border-2 border-[#064F50]/15 max-h-[90vh] flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-[#064F50]/10 bg-[#FFF4EC]/95 sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#064F50] text-[#FFF4EC]">
              {project.category}
            </span>
            <span className="text-xs text-[#173E3D]/60 font-medium">Case Study</span>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#064F50]/5 hover:bg-[#064F50] text-[#064F50] hover:text-[#FFF4EC] flex items-center justify-center transition-all cursor-pointer"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Scroll Area */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Title & Tagline */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <SparkleIcon size={20} color="#F5A58C" />
              <span className="text-sm font-semibold uppercase tracking-widest text-[#0B6865]">
                {project.client}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <h2 className="font-serif text-3xl sm:text-5xl text-[#064F50] font-normal tracking-tight">
                {project.title}
              </h2>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#064F50] hover:bg-[#0B6865] text-[#FFF4EC] text-xs font-semibold transition-all self-start sm:self-auto shrink-0"
                >
                  <span>Visit Live Website</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#F8C96B]" />
                </a>
              )}
            </div>
            <p className="text-lg text-[#173E3D]/80 font-sans mt-3 max-w-2xl">
              {project.tagline}
            </p>
          </div>

          {/* Project Preview Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-md border border-[#064F50]/10 bg-white">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-auto max-h-[440px] object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Project Meta Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-[#064F50]/5 border border-[#064F50]/10 text-sm">
            <div className="flex items-center gap-2.5">
              <User className="w-4 h-4 text-[#064F50]" />
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-[#064F50]/60">Client / Portal</span>
                <span className="font-medium text-[#064F50]">{project.client}</span>
              </div>
            </div>
            {project.year && (
              <div className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-[#064F50]" />
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-[#064F50]/60">Timeline</span>
                  <span className="font-medium text-[#064F50]">{project.year}</span>
                </div>
              </div>
            )}
            <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
              <Layers className="w-4 h-4 text-[#064F50]" />
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-[#064F50]/60">Specialization</span>
                <span className="font-medium text-[#064F50]">{project.category}</span>
              </div>
            </div>
          </div>

          {/* Social Profiles (Social Media projects only) */}
          {project.socialProfiles && project.socialProfiles.length > 0 && (
            <div>
              <h3 className="font-serif text-xl text-[#064F50] mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F5A58C]" />
                Social Profiles
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {project.socialProfiles.map((profile) => {
                  const PlatformIcon = getSocialPlatformIcon(profile.platform);
                  return (
                    <a
                      key={profile.platform}
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} on ${profile.label} (opens in a new tab)`}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-[#064F50]/15 hover:bg-[#064F50] text-[#064F50] hover:text-[#FFF4EC] text-sm font-semibold transition-colors"
                    >
                      <PlatformIcon className="w-4 h-4" aria-hidden="true" />
                      <span>{profile.label}</span>
                      <ExternalLink className="w-3 h-3 opacity-50" aria-hidden="true" />
                    </a>
                  );
                })}
              </div>
            </div>
          )}

          {/* Narrative: Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="p-6 rounded-2xl bg-white border border-[#064F50]/10 shadow-xs">
              <h3 className="font-serif text-xl text-[#064F50] mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F5A58C]" />
                The Challenge
              </h3>
              <p className="text-[#173E3D]/80 leading-relaxed text-sm sm:text-base font-sans">
                {project.challenge}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#064F50]/10 shadow-xs">
              <h3 className="font-serif text-xl text-[#064F50] mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F8C96B]" />
                {project.solutionHeading || 'The SEO Strategy & Solution'}
              </h3>
              <p className="text-[#173E3D]/80 leading-relaxed text-sm sm:text-base font-sans">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Deliverables Checklist */}
          <div>
            <h3 className="font-serif text-xl text-[#064F50] mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#F5A58C]" />
              Deliverables &amp; Output
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-3 rounded-xl bg-white border border-[#064F50]/10 text-xs sm:text-sm text-[#064F50] font-medium"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#0B6865] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Live Page 1 Ranking Keywords if available */}
          {project.rankedKeywords && project.rankedKeywords.length > 0 && (
            <div>
              <h3 className="font-serif text-xl text-[#064F50] mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F8C96B]" />
                Verified Google Page 1 Rankings
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.rankedKeywords.map((kw, i) => (
                  <a
                    key={i}
                    href={kw.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white border border-[#064F50]/10 hover:border-[#064F50] transition-colors flex items-center justify-between group text-xs text-[#064F50]"
                  >
                    <span className="font-medium group-hover:text-[#0B6865] pr-2">
                      {kw.keyword}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] text-[#0B6865] shrink-0 font-semibold">
                      <span>{kw.badge}</span>
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Footer Call to Action: direct mailto link */}
          <div className="p-6 rounded-2xl bg-[#064F50] text-[#FFF4EC] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-serif text-xl">Need content that achieves measurable rankings?</h4>
              <p className="text-xs sm:text-sm text-[#FFF4EC]/75">Let's build a dedicated topic cluster strategy for your brand.</p>
            </div>
            <a
              href="mailto:fatimajaved1329@gmail.com"
              className="inline-flex items-center gap-2 bg-[#F5A58C] hover:bg-[#E2886D] text-[#064F50] px-6 py-3 rounded-full text-sm font-semibold transition-all hover:scale-105 cursor-pointer shrink-0"
            >
              <span>Discuss Your Content</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
