import { Project, Service, Statistic, Testimonial, ExperienceItem, RankedKeyword, ResumeDocument, SocialMediaSection } from '../types/portfolio';
import imqrscanMockupImg from '../assets/images/project_imqrscan_mockup_1790759604440.jpg';
import healthcareMockupImg from '../assets/images/project_healthcare_mockup_1790759615637.jpg';
import paradigmMockupImg from '../assets/images/project_paradigm_mockup_1790759627470.jpg';
import clientAvatarImg from '../assets/images/client_testimonial_avatar_1790337202608.jpg';
import resumePdfUrl from '../assets/resume/Fatima-Javeed-Resume.pdf?url';
import empradarSocialMockupImg from '../assets/images/project_empradar_social_mockup.svg';
import emraSkillsSocialMockupImg from '../assets/images/project_emra_skills_social_mockup.svg';
import dafilabsSocialMockupImg from '../assets/images/project_dafilabs_social_mockup.svg';

export const RESUME_DOWNLOAD_NAME = 'Fatima-Javeed-SEO-Content-Strategist-Resume.pdf';

export const RESUME_DOCUMENT: ResumeDocument = {
  url: resumePdfUrl,
  fileName: RESUME_DOWNLOAD_NAME,
  displayName: 'Fatima Javeed Resume.pdf',
  fileType: 'PDF',
  fileSize: '745 KB',
  updated: 'Updated 2026',
  headline: 'Senior SEO Copywriter, Content Strategist & Social Media Manager',
  summary:
    'Explore my professional journey, SEO content strategy experience, and results-driven work across healthcare, SaaS, AI, and digital marketing brands.',
  highlights: [
    '6+ years in semantic SEO & E-E-A-T content',
    '160+ ranking articles in 7 months',
    '25+ brands across 5 global markets',
    'Healthcare, SaaS, AI & digital marketing',
  ],
};

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'imqrscan-saas-seo',
    title: 'IMQRScan SaaS & QR Platform',
    category: 'SaaS & Technology',
    filterKey: 'saas',
    imageUrl: imqrscanMockupImg,
    tagline: '160+ high-ranking technical blogs and conversion-optimized SaaS pages delivered in 7 months',
    client: 'IMQRScan Technologies (Dubai, UAE)',
    year: '2025',
    summary: 'Comprehensive semantic SEO content strategy and technical copywriting that translated complex QR code capabilities into sustainable Page 1 Google rankings.',
    challenge: 'Break into an intensely saturated international SaaS space against legacy QR tools, earning domain authority and organic search visibility within a compressed 7-month launch cycle.',
    solution: 'Designed and executed structured topic clusters targeting high-intent commercial and informational keywords, authoring 160+ articles covering custom wooden QR codes, vCards, floating ads, and transparent QR generators.',
    deliverables: ['Semantic Topic Clusters', '160+ Technical Blogs', 'SERP Feature Targeting', 'Conversion Landing Pages'],
    liveUrl: 'https://imqrscan.com/',
    accentColor: '#F5A58C',
    rankedKeywords: [
      {
        keyword: 'Transparent QR Code: Free Generator for Logo & PNG',
        url: 'https://imqrscan.com/transparent-qr-code',
        group: 'SaaS & Technology',
        badge: 'Page 1 Google',
      },
      {
        keyword: 'How Much Does a QR Code Generator Cost',
        url: 'https://imqrscan.com/blogs/how-much-does-qr-code-generator-cost',
        group: 'SaaS & Technology',
        badge: 'Page 1 Google',
      },
      {
        keyword: 'Rick Roll QR Code – Create & Prank in Seconds',
        url: 'https://imqrscan.com/use-case/by-marketing/rick-roll-qr-code',
        group: 'SaaS & Technology',
        badge: 'Page 1 Google',
      },
      {
        keyword: 'How to Create a Review QR Code & Get More Feedback',
        url: 'https://imqrscan.com/how-to/create-review-qr-code',
        group: 'SaaS & Technology',
        badge: 'Page 1 Google',
      },
      {
        keyword: 'Print or Engrave: Custom Wooden QR Codes',
        url: 'https://imqrscan.com/use-case/by-marketing/custom-wooden-qr-codes',
        group: 'SaaS & Technology',
        badge: 'Page 1 Google',
      },
      {
        keyword: 'Floating QR Code | Make Ads That Engage and Convert',
        url: 'https://imqrscan.com/blogs/floating-qr-code',
        group: 'SaaS & Technology',
        badge: 'Page 1 Google',
      },
      {
        keyword: 'Generate VCF and VCard QR Codes Easily',
        url: 'https://imqrscan.com/vcard-plus-qr-code-generator',
        group: 'SaaS & Technology',
        badge: 'Page 1 Google',
      },
      {
        keyword: 'Cheap QR Code Generator – Affordable QR Codes from $2.99',
        url: 'https://imqrscan.com/cheap-qr-codes',
        group: 'SaaS & Technology',
        badge: 'Page 1 Google',
      },
    ],
  },
  {
    id: 'healthcare-medical-suite',
    title: 'The Acupuncture Experts & Healthcare Suite',
    category: 'Healthcare & Medical',
    filterKey: 'healthcare',
    imageUrl: healthcareMockupImg,
    tagline: 'Patient-centered medical copywriting & Google E-E-A-T optimization across 7 major healthcare portals',
    client: 'Royal Cosmetic Surgery Clinics & The Acupuncture Experts',
    year: '2022 – 2025',
    summary: 'Clinically accurate, empathetic healthcare content engineered to meet stringent Google Helpful Content standards and convert organic visitors into booked consultations.',
    challenge: 'Medical web copy requires strict E-E-A-T compliance and patient safety guidelines where inaccurate or robotic copy causes severe search ranking drops and visitor hesitation.',
    solution: 'Produced medically referenced treatment guides, recovery overviews, and local intent pages for 7 healthcare brands including Dynamic Clinic and Royal Cosmetic Surgery, securing prominent Page 1 local rankings.',
    deliverables: ['Medical E-E-A-T Compliance', '7 Healthcare Sites Managed', 'Clinical Content Audits', 'Patient Journey Copywriting'],
    liveUrl: 'https://www.theacupuncturexperts.com/',
    accentColor: '#B9E5DE',
    rankedKeywords: [
      {
        keyword: 'Does Skin Peel After a HydraFacial in Islamabad?',
        url: 'https://www.dynamiclinic.com.pk/does-skin-peel-after-a-hydrafacial-in-islamabad',
        group: 'Healthcare & Medical',
        badge: 'Page 1 Google',
      },
      {
        keyword: 'Best Skin Whitening Injection Clinic Near Me',
        url: 'https://www.dynamiclinic.com.pk/best-skin-whitening-injection-clinic-near-me/',
        group: 'Healthcare & Medical',
        badge: 'Page 1 Google',
      },
      {
        keyword: 'The 12 Best Ways to Stop Hair Loss in Islamabad',
        url: 'https://www.dynamiclinic.com.pk/the-12-best-ways-to-stop-hair-loss-in-islamabad/',
        group: 'Healthcare & Medical',
        badge: 'Page 1 Google',
      },
      {
        keyword: 'How Much Teeth Filling Costs in Islamabad',
        url: 'https://www.royalcosmeticsurgery.com.pk/how-much-teeth-filling-costs-in-islamabad-pakistan',
        group: 'Healthcare & Medical',
        badge: 'Page 1 Google',
      },
      {
        keyword: 'Best Facial for Glowing Skin by Aesthetic Physician',
        url: 'https://www.enfieldroyalclinics.com.pk/best-facial-for-glowing-skin-by-aesthetic-physician-in-islamabad',
        group: 'Healthcare & Medical',
        badge: 'Page 1 Google',
      },
      {
        keyword: 'Laser Skin Resurfacing Overview & Recovery',
        url: 'https://www.royalcosmeticsurgery.com.pk/laser-skin-resurfacing.html',
        group: 'Healthcare & Medical',
        badge: 'Page 1 Google',
      },
    ],
  },
  {
    id: 'paradigm-warrior-b2b',
    title: 'Paradigm Experts & Warrior Service Co.',
    category: 'Consulting & B2B',
    filterKey: 'consulting',
    imageUrl: paradigmMockupImg,
    tagline: 'Authority-establishing corporate messaging and high-converting service copy for enterprise and trade clients',
    client: 'Paradigm Experts & Warrior Service Company',
    year: '2024 – 2025',
    summary: 'Strategic messaging and conversion-focused web copy designed to attract high-value consulting clients and generate high-intent service bookings.',
    challenge: 'Enterprise consulting and specialized trade services often rely on generic buzzwords that obscure core value and fail to inspire client action.',
    solution: 'Formulated concise value propositions, clear service breakdowns, and trust-oriented proof points that clearly communicate institutional capability and prompt immediate inquiries.',
    deliverables: ['B2B Value Propositions', 'High-Converting Web Copy', 'Service Page SEO', 'Local Search Targeting'],
    liveUrl: 'https://www.paradigmexperts.com/',
    accentColor: '#F8C96B',
    rankedKeywords: [
      {
        keyword: 'Strategic Consulting & Operational Excellence Advisory',
        url: 'https://www.paradigmexperts.com/',
        group: 'Consulting & B2B',
        badge: 'Client Portal',
      },
      {
        keyword: 'Professional Service & Commercial Contractor Solutions',
        url: 'https://www.warriorservicecompany.org/',
        group: 'Consulting & B2B',
        badge: 'Client Portal',
      },
    ],
  },
  {
    id: 'empradar-ai-social',
    title: 'EmpRadar AI',
    category: 'Social Media Marketing',
    filterKey: 'social',
    imageUrl: empradarSocialMockupImg,
    tagline: 'LinkedIn, Instagram, Facebook & X content strategy, audience engagement, and brand growth management.',
    client: 'EmpRadar AI',
    summary: 'Always-on social content strategy and audience growth management for an AI-powered talent and HR intelligence brand, built across LinkedIn, Instagram, Facebook, and X.',
    challenge: 'An AI talent platform needed a consistent, platform-native presence that could translate complex product value into content people actually read, comment on, and share in an increasingly crowded tech feed.',
    solution: 'Built channel-specific content pillars, monthly publishing calendars, and platform-native copy for LinkedIn, Instagram, Facebook, and X, pairing practical AI and HR-tech insights with brand storytelling. Ran a structured engagement routine on comments and DMs and reviewed performance weekly to keep the best-performing formats in rotation.',
    solutionHeading: 'The Social Media Strategy & Solution',
    deliverables: ['Channel Strategy', 'Content Calendars', 'Platform-Specific Copy', 'Community Engagement', 'Performance Reporting'],
    accentColor: '#B9E5DE',
    socialProfiles: [
      { platform: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/company/empradarai' },
      { platform: 'x', label: 'X', url: 'https://x.com/empradarai' },
      { platform: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/empradar' },
      { platform: 'facebook', label: 'Facebook', url: 'https://www.facebook.com/empradarai' },
    ],
  },
  {
    id: 'emra-skills-social',
    title: 'EMRA Skills',
    category: 'Social Media Marketing',
    filterKey: 'social',
    imageUrl: emraSkillsSocialMockupImg,
    tagline: 'Social media strategy, content planning, LinkedIn growth, and community engagement for an education and skills platform.',
    client: 'EMRA Skills',
    summary: 'Full-cycle social media management for an education and skills platform, led by LinkedIn growth and day-to-day community engagement with learners and instructors.',
    challenge: 'An education brand had valuable course, career, and skills content to share but no consistent publishing rhythm, so organic reach stayed flat and the audience had no reason to return or reply.',
    solution: 'Planned and published a structured monthly content calendar, wrote platform-native posts and carousels for LinkedIn, and managed comment threads and community conversations. Tracked performance in-platform and in analytics to reallocate effort toward the topics and formats driving the best interaction.',
    solutionHeading: 'The Social Media Strategy & Solution',
    deliverables: ['Social Media Strategy', 'Content Planning', 'LinkedIn Growth', 'Community Engagement', 'Analytics & Reporting'],
    accentColor: '#F5A58C',
    socialProfiles: [
      { platform: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/company/emra-skills/' },
      { platform: 'x', label: 'X', url: 'https://x.com/emraskills' },
      { platform: 'facebook', label: 'Facebook', url: 'https://www.facebook.com/emraskills' },
    ],
  },
  {
    id: 'dafilabs-social',
    title: 'DafiLabs',
    category: 'Social Media Marketing',
    filterKey: 'social',
    imageUrl: dafilabsSocialMockupImg,
    tagline: 'Social media content management, brand communication, and audience growth across digital platforms.',
    client: 'DafiLabs',
    summary: 'Ongoing social media content management and brand communication for DafiLabs, focused on a consistent cross-platform presence and steady audience growth.',
    challenge: 'A growing digital brand was posting ad hoc, so its social channels looked inconsistent from one post to the next and the audience had no clear picture of what the brand stood for.',
    solution: 'Took over day-to-day content management, set a regular publishing schedule, and kept one brand voice across Facebook and LinkedIn. Used audience and competitor research plus hashtag and trend research to shape topics, then reviewed analytics to optimize formats and posting times.',
    solutionHeading: 'The Social Media Strategy & Solution',
    deliverables: ['Content Management', 'Brand Communication', 'Publishing Schedule', 'Audience Growth', 'Performance Insights'],
    accentColor: '#F8C96B',
    socialProfiles: [
      { platform: 'facebook', label: 'Facebook', url: 'https://www.facebook.com/DafiLabs' },
      { platform: 'linkedin', label: 'LinkedIn', url: 'https://pk.linkedin.com/company/dafilabs' },
    ],
  },
];

export const SOCIAL_MEDIA_SECTION: SocialMediaSection = {
  title: 'Social Media Growth & Content Management',
  text: 'Developed and managed social media strategies across LinkedIn, Instagram, Facebook, and X. Created content calendars, platform-specific copy, engagement strategies, and performance-driven campaigns to improve brand visibility and audience interaction.',
  tools: [
    'Buffer',
    'Later',
    'SocialBee',
    'Canva',
    'Taplio',
    'AuthoredUp',
    'Meta Business Suite',
    'LinkedIn',
    'Instagram',
    'Facebook',
    'GA4',
    'Google Search Console',
  ],
  responsibilities: [
    'Social media strategy development',
    'Monthly content calendar planning',
    'Social media copywriting and captions',
    'Content scheduling and publishing',
    'Audience and competitor research',
    'Hashtag and trend research',
    'Community management',
    'Analytics tracking and reporting',
    'Content performance optimization',
  ],
};

export const SERVICES: Service[] = [
  {
    id: 'semantic-seo-writing',
    title: 'Semantic SEO Writing',
    iconName: 'monitor',
    description: 'Data-driven content architectures aligned with the latest Google updates and E-E-A-T criteria to secure sustainable Page 1 rankings.',
    tags: ['Topic Clusters', 'Semantic SEO', 'Surfer SEO & Ahrefs', 'Search Intent Mapping'],
  },
  {
    id: 'medical-healthcare-content',
    title: 'Medical & Healthcare Copy',
    iconName: 'pen-tool',
    description: 'Clinically referenced, empathetic healthcare content that builds institutional trust, satisfies medical search guidelines, and drives consultations.',
    tags: ['Google E-E-A-T', 'Patient Education', 'Clinical Website Portals', 'Treatment Overviews'],
  },
  {
    id: 'conversion-copywriting',
    title: 'Conversion Copywriting',
    iconName: 'smile',
    description: 'Persuasive website messaging, high-impact landing pages, and service copy that transforms casual readers into qualified commercial inquiries.',
    tags: ['Landing Pages', 'Sales Funnels', 'B2B Web Copy', 'Call-to-Action Strategy'],
  },
  {
    id: 'content-strategy-clusters',
    title: 'Topic Clusters & Strategy',
    iconName: 'pencil',
    description: 'Comprehensive keyword research, competitive SERP gap analysis, and content workflows engineered for rapid organic visibility.',
    tags: ['SEMrush & Ahrefs', 'Keyword Clustering', 'Content Audits', 'Google Search Console'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Fatima understands both SEO and storytelling. Her content helped us improve search visibility while keeping our brand voice authentic.",
    author: "Sarah Ahmed",
    role: "Marketing Manager",
    company: "Growth Brands",
    avatarUrl: clientAvatarImg,
  },
  {
    quote: "Her research-driven approach helped us create content that attracts the right audience and supports business growth.",
    author: "Daniel Wilson",
    role: "SaaS Founder",
    company: "CloudScale Technologies",
    avatarUrl: clientAvatarImg,
  },
  {
    quote: "Fatima creates clear, trustworthy content that connects with readers and performs well in search.",
    author: "Ayesha Khan",
    role: "Healthcare Brand Manager",
    company: "Clinical Health Group",
    avatarUrl: clientAvatarImg,
  },
  {
    quote: "Professional, strategic, and detail-focused. She delivers content that is built for both users and search engines.",
    author: "Michael Brown",
    role: "Digital Marketing Consultant",
    company: "Apex Advisory",
    avatarUrl: clientAvatarImg,
  },
];

export const TESTIMONIAL: Testimonial = TESTIMONIALS[0];

export const STATISTICS: Statistic[] = [
  {
    value: '600+',
    label: 'Students Trained',
    sublabel: 'In SEO writing at PFTP',
  },
  {
    value: '160+',
    label: 'Ranked Articles',
    sublabel: 'Delivered in 7 months',
  },
  {
    value: '6+',
    label: 'Years Experience',
    sublabel: 'Across 5 global markets',
  },
];

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    id: 'exp-1',
    period: 'Oct 2025 – May 2026',
    location: 'South Miami, FL, USA (Remote)',
    company: 'Simply The Best Digital',
    role: 'Semantic SEO Writer & Digital Marketing Specialist',
    points: [
      'Developed and executed end-to-end semantic SEO content strategies targeting Page 1 Google rankings through topic cluster architecture.',
      'Produced high-converting web copy and blog content optimized with SEMrush, Ahrefs, and Surfer SEO.',
      'Conducted comprehensive keyword research, competitive gap analysis, and SERP feature targeting.',
    ],
  },
  {
    id: 'exp-2',
    period: 'Mar 2022 – Dec 2025',
    location: 'Islamabad, Pakistan',
    company: 'Royal Cosmetic Surgery Clinics',
    role: 'Senior Medical Content Writer',
    points: [
      'Authored SEO-optimized medical content for 7 major healthcare portals including Dynamic Clinic and Royal Cosmetic Surgery.',
      'Translated complex clinical procedures into accurate, reassuring, patient-friendly articles improving organic search visibility.',
      'Audited and optimized existing web pages for on-page SEO elements, driving measurable top-tier Google ranking improvements.',
    ],
  },
  {
    id: 'exp-3',
    period: 'Oct 2024 – Dec 2025',
    location: 'Lahore, Pakistan',
    company: 'Professional Freelancing Training Program (PFTP)',
    role: 'Content Writing Trainer',
    points: [
      'Designed and delivered comprehensive SEO content writing curriculum for a government-affiliated institute, training 600+ students.',
      'Mentored students in keyword research, Google E-E-A-T frameworks, client management, and freelancing on Fiverr and Upwork.',
    ],
  },
  {
    id: 'exp-4',
    period: 'Apr 2024 – Dec 2024',
    location: 'Toronto, Canada (Remote)',
    company: 'Bloom Digital Marketing Agency',
    role: 'SEO Content Strategist & Medical Copywriter',
    points: [
      'Led SEO content strategy and topic cluster planning for healthcare clients, significantly increasing domain authority and organic impressions.',
      'Authored medically accurate, Google E-E-A-T-compliant copy that helped private practices rank higher in competitive regional searches.',
    ],
  },
  {
    id: 'exp-5',
    period: 'Feb 2025 – Oct 2025',
    location: 'Dubai, UAE (Remote)',
    company: 'IMQRSCAN',
    role: 'QR Code & SaaS Technology SEO Writer',
    points: [
      'Produced 160+ blogs and technical web pages in 7 months — with dozens actively maintaining Page 1 rankings on Google.',
      'Transformed technical SaaS concepts into clear, engaging, search-optimized narratives that drove software sign-ups.',
    ],
  },
];

export const CLIENT_BRANDS: string[] = [
  'Dynamic Clinic',
  'Enfield Royal Clinic',
  'Royal Cosmetic Surgery',
  'SKN Cosmetics',
  'Vital Urgent Care',
  'The Acupuncture Experts',
  'Advantage Therapy (AU)',
  'IMQRSCAN (UAE)',
  'Simply The Best Digital (USA)',
  'Paradigm Experts',
  'Warrior Service Company',
  'Al Ghazi Group (UAE)',
  'PFTP Institute',
  'LegacyV',
  'Florida Foot Specialists',
  'Kronish Funeral Services',
];

export const ALL_PAGE_ONE_RANKINGS: RankedKeyword[] = [
  {
    keyword: 'Transparent QR Code: Free Generator for Logo & PNG',
    url: 'https://imqrscan.com/transparent-qr-code',
    group: 'IMQRScan · SaaS Niche',
    badge: 'Page 1 Google',
  },
  {
    keyword: 'How Much Does a QR Code Generator Cost',
    url: 'https://imqrscan.com/blogs/how-much-does-qr-code-generator-cost',
    group: 'IMQRScan · SaaS Niche',
    badge: 'Page 1 Google',
  },
  {
    keyword: 'Rick Roll QR Code – Create & Prank in Seconds',
    url: 'https://imqrscan.com/use-case/by-marketing/rick-roll-qr-code',
    group: 'IMQRScan · SaaS Niche',
    badge: 'Page 1 Google',
  },
  {
    keyword: 'How to Create a Review QR Code & Get More Feedback',
    url: 'https://imqrscan.com/how-to/create-review-qr-code',
    group: 'IMQRScan · SaaS Niche',
    badge: 'Page 1 Google',
  },
  {
    keyword: 'Print or Engrave: Custom Wooden QR Codes',
    url: 'https://imqrscan.com/use-case/by-marketing/custom-wooden-qr-codes',
    group: 'IMQRScan · SaaS Niche',
    badge: 'Page 1 Google',
  },
  {
    keyword: 'Floating QR Code | Make Ads That Engage and Convert',
    url: 'https://imqrscan.com/blogs/floating-qr-code',
    group: 'IMQRScan · SaaS Niche',
    badge: 'Page 1 Google',
  },
  {
    keyword: 'Does Skin Peel After a HydraFacial in Islamabad?',
    url: 'https://www.dynamiclinic.com.pk/does-skin-peel-after-a-hydrafacial-in-islamabad',
    group: 'Healthcare & Medical Local SEO',
    badge: 'Page 1 Google',
  },
  {
    keyword: 'Best Skin Whitening Injection Clinic Near Me',
    url: 'https://www.dynamiclinic.com.pk/best-skin-whitening-injection-clinic-near-me/',
    group: 'Healthcare & Medical Local SEO',
    badge: 'Page 1 Google',
  },
  {
    keyword: 'The 12 Best Ways to Stop Hair Loss in Islamabad',
    url: 'https://www.dynamiclinic.com.pk/the-12-best-ways-to-stop-hair-loss-in-islamabad/',
    group: 'Healthcare & Medical Local SEO',
    badge: 'Page 1 Google',
  },
  {
    keyword: 'How Much Teeth Filling Costs in Islamabad',
    url: 'https://www.royalcosmeticsurgery.com.pk/how-much-teeth-filling-costs-in-islamabad-pakistan',
    group: 'Healthcare & Medical Local SEO',
    badge: 'Page 1 Google',
  },
  {
    keyword: 'Best Facial for Glowing Skin by Aesthetic Physician',
    url: 'https://www.enfieldroyalclinics.com.pk/best-facial-for-glowing-skin-by-aesthetic-physician-in-islamabad',
    group: 'Healthcare & Medical Local SEO',
    badge: 'Page 1 Google',
  },
  {
    keyword: 'What to Avoid Before a P Shot',
    url: 'https://www.dynamiclinic.com.pk/what-to-avoid-before-a-p-shot',
    group: 'Healthcare & Medical Local SEO',
    badge: 'Page 1 Google',
  },
];
