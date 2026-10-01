import React, { useState } from 'react';
import { X, ShieldCheck, FileText, Eye } from 'lucide-react';

export const Footer: React.FC = () => {
  const [activePolicy, setActivePolicy] = useState<'privacy' | 'terms' | 'accessibility' | null>(null);

  const policyContent = {
    privacy: {
      title: 'Privacy Policy',
      icon: <ShieldCheck className="w-5 h-5 text-[#F5A58C]" />,
      text: 'Fatima Javeed values your privacy. Any inquiries and emails submitted through this portfolio are handled confidentially and utilized strictly to discuss prospective content writing roles, freelance engagements, and SEO consulting projects.',
    },
    terms: {
      title: 'Terms of Engagement',
      icon: <FileText className="w-5 h-5 text-[#F8C96B]" />,
      text: 'All case studies, published articles, and ranking proofs shown on this website represent legitimate client work delivered by Fatima Javeed. Work samples and client domains remain property of their respective owners under professional service agreements.',
    },
    accessibility: {
      title: 'Accessibility Statement',
      icon: <Eye className="w-5 h-5 text-[#B9E5DE]" />,
      text: 'This website is built conforming to WCAG 2.1 AA digital accessibility standards with semantic markup, readable typographic contrast, keyboard navigation, and reduced motion responsiveness.',
    },
  };

  return (
    <>
      <footer className="bg-[#043839] text-[#FFF4EC]/75 py-8 border-t border-[#FFF4EC]/10 text-xs font-sans">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span>© 2026 Fatima Javeed.</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Senior SEO Copywriter, Content Strategist &amp; Social Media Manager.</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/fatima-javeed-/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#F5A58C] transition-colors"
            >
              LinkedIn
            </a>
            <button
              onClick={() => setActivePolicy('privacy')}
              className="hover:text-[#F5A58C] transition-colors cursor-pointer"
            >
              Privacy
            </button>
            <button
              onClick={() => setActivePolicy('terms')}
              className="hover:text-[#F5A58C] transition-colors cursor-pointer"
            >
              Terms
            </button>
            <button
              onClick={() => setActivePolicy('accessibility')}
              className="hover:text-[#F5A58C] transition-colors cursor-pointer"
            >
              Accessibility
            </button>
          </div>
        </div>
      </footer>

      {/* Policy Modal */}
      {activePolicy && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#043839]/80 backdrop-blur-xs animate-in fade-in duration-150"
        >
          <div className="relative w-full max-w-md bg-[#FFF4EC] text-[#064F50] rounded-2xl p-6 shadow-2xl border border-[#064F50]/20">
            <div className="flex items-center justify-between pb-3 border-b border-[#064F50]/10 mb-4">
              <div className="flex items-center gap-2">
                {policyContent[activePolicy].icon}
                <h4 className="font-serif text-xl">{policyContent[activePolicy].title}</h4>
              </div>
              <button
                onClick={() => setActivePolicy(null)}
                className="w-8 h-8 rounded-full bg-[#064F50]/5 hover:bg-[#064F50] text-[#064F50] hover:text-[#FFF4EC] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close policy"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-sm leading-relaxed text-[#173E3D]/80">
              {policyContent[activePolicy].text}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
