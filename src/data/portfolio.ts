/**
 * Central portfolio data for Tushar Lakhani.
 * Facts come from his GitHub (tusharrr017-arch), the public resume text, and what he stated directly.
 * Class 12 percentage is omitted until he confirms the number.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Tushar Lakhani',
  displayName: 'Tushar Lakhani',
  firstName: 'TUSHAR',
  monogram: 'TL',
  seriesTag: 'PORTFOLIO',
  originalLabel: 'FULL-STACK AI ENGINEER',
  role: 'Full-Stack AI Engineer',
  badge: 'FS·AI',
  tagline: ['Full-Stack AI Engineer'],
  stack: ['Python', 'Flask', 'FastAPI', 'Django', 'React', 'TypeScript', 'Next.js', 'Node.js', 'PostgreSQL', 'RAG', 'Docker', 'Shopify'],
  intro:
    'Full-stack AI engineer from Jaipur. BCA from JECRC University (CGPA 9.5), building React, TypeScript, Node.js and Python products — including LLM, RAG and automation apps. Freelance client work at Validare sits beside an internship at Tirupati Software Infotech. Looking for a full-time role.',
  location: 'Jaipur, Rajasthan',
  email: 'tusharrr017@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/tushar-lakhani-a254ab3a0/',
    github: 'https://github.com/tusharrr017-arch',
  },
  /** No PDF is shipped yet. The on-site sheet is the resume. */
  resumePdf: '',
  interests: ['LLMs & RAG', 'AI automation', 'Shopify & e-commerce'],
};

export const education = [
  {
    school: 'JECRC University',
    place: 'Jaipur',
    degree: 'Bachelor of Computer Applications (BCA)',
    period: '2021 – early 2025',
    score: 'CGPA 9.5',
  },
  {
    school: 'Higher secondary',
    place: 'Jaipur',
    degree: 'Class 12',
    period: '2019 – 2021',
    score: '',
  },
];

export const experience = [
  {
    company: 'Validare Agency',
    role: 'Freelance Full-Stack Developer',
    place: 'Client work',
    period: 'Jul 2024 – Present',
    points: [
      'Mostly client work across Shopify, SaaS and e-commerce — not one in-house job stretched into a three-year employment line.',
      'Built a Canvas rendering path for heavy visualizations that holds 60 FPS and cut DOM nodes by 76.4%.',
      'Moved WebSocket work and heavy compute onto Web Workers, which made the UI 37.2% more responsive.',
      'Built a custom Frappe LMS (enrollment, progress, certificates, RBAC) and wired WhatsApp Business plus Razorpay.',
      'Tuned MariaDB-backed ERP views from 3.8s to 1.3s, raised backend throughput 2.4×, and lifted Shopify Lighthouse scores from below 30 to 94.',
    ],
  },
  {
    company: 'Tirupati Software Infotech Pvt. Ltd.',
    role: 'Software Engineer Intern',
    place: 'Jaipur',
    period: 'Oct 2023 – Apr 2024',
    points: [
      'Built secure REST APIs with RBAC, async state, session handling and persistence for internal tools.',
      'Shipped modular React and Ant Design dashboards. The team measured a 38.6% gain in operational efficiency and 23.4% fewer post-deployment bugs.',
      'Worked with backend developers to tighten API integrations and cut frontend fetch latency.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  live?: string;
  comingSoon?: boolean;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

const gh = (repo: string) => `https://github.com/tusharrr017-arch/${repo}`;

export const projects: Project[] = [
  {
    id: 'aeo-diagnostics',
    title: 'AEO Diagnostics',
    year: '2026',
    genre: 'AI • LLM eval • Next.js',
    logline: 'A dashboard that runs one shopping-intent prompt across several LLMs and scores which brand gets recommended.',
    stack: ['Next.js 15', 'React 19', 'TypeScript', 'OpenRouter'],
    build: [
      'Runs the same shopping prompt through GPT-4o-mini, Claude 3 Haiku and Llama, then parses the answers into a shared brand-intelligence shape.',
      'Ranks brands with share-of-voice scoring, competitor gaps and an executive-style summary. Live on Vercel.',
    ],
    features: [
      'One prompt, several models, in a single run',
      'Brand ranking with reasoning traces',
      'Share-of-voice scoring',
      'Recovery parsing when model JSON is messy',
    ],
    metrics: [
      { value: '3', label: 'models compared per run' },
      { value: '1', label: 'shared prompt' },
      { value: 'Live', label: 'on Vercel' },
    ],
    github: gh('aeo-diagnostics'),
    live: 'https://aeo-diagnostics-ten.vercel.app/',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'where-did-my-money-go',
    title: 'Where Did My Money Go',
    year: '2026',
    genre: 'AI • Finance • FastAPI',
    logline: 'Upload a bank statement. The app categorizes spending with AI and shows where the money went.',
    stack: ['React', 'FastAPI', 'PostgreSQL', 'OpenRouter'],
    build: [
      'Accepts PDF, CSV, XLSX and DOCX statements, normalizes merchants, and tags categories.',
      'Dashboard covers cash flow, a transaction table, duplicate detection on re-import, and an AI assistant for month-to-month questions.',
    ],
    features: [
      'Statement upload in four formats',
      'AI merchant and category tagging',
      'Guest preview, then a signed-in dashboard',
      'Duplicate detection on re-import',
    ],
    metrics: [
      { value: '4', label: 'statement formats' },
      { value: 'Neon', label: 'PostgreSQL' },
      { value: 'Live', label: 'frontend on Vercel' },
    ],
    github: gh('Where-Did-My-Money-Go-'),
    live: 'https://where-did-my-money-go-omega.vercel.app/',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'repo-assistant',
    title: 'Repo Assistant',
    year: '2026',
    genre: 'RAG • FastAPI • Code',
    logline: 'Ask a codebase a question and get an answer that cites the file and the line.',
    stack: ['FastAPI', 'ChromaDB', 'React', 'Docker'],
    build: [
      'Index a repo from a ZIP upload or a public GitHub URL. The backend chunks the code and stores embeddings in ChromaDB.',
      'Q&A and refactor suggestions come back with file and line references. OpenAI-compatible APIs, including OpenRouter. Docker Compose for local run.',
    ],
    features: [
      'Index from ZIP or a public GitHub URL',
      'Answers with file and line citations',
      'Refactor suggestions grounded in the index',
      'Docker Compose locally, Render for the demo',
    ],
    metrics: [
      { value: 'RAG', label: 'over your own code' },
      { value: '2', label: 'ways to index a repo' },
      { value: 'Live', label: 'frontend on Render' },
    ],
    github: gh('Repo-Assistant'),
    live: 'https://repo-assistant-frontend.onrender.com/',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'flow',
  },
  {
    id: 'grid-wars',
    title: 'Grid Wars',
    year: '2026',
    genre: 'Realtime • Multiplayer',
    logline: 'A shared 25×25 territory map. Claim a tile and every other player sees it immediately.',
    stack: ['React 19', 'TypeScript', 'Socket.IO', 'Node.js'],
    build: [
      'The Node server is the source of truth for tile ownership. A claim goes over Socket.IO, gets validated, then broadcasts to every client.',
      'Live leaderboard, activity feed, and a player identity that survives a refresh. Demo is on Vercel.',
    ],
    features: [
      'Shared 25×25 board',
      'Conflict handling on tile claims',
      'Live leaderboard and activity feed',
      'Identity kept in localStorage across reconnects',
    ],
    metrics: [
      { value: '25×25', label: 'shared board' },
      { value: 'Live', label: 'multiplayer demo' },
      { value: '1', label: 'shared room' },
    ],
    github: gh('grid-wars'),
    live: 'https://grid-wars-jade.vercel.app/',
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'tenants',
  },
  {
    id: 'spur-ai',
    title: 'Spur AI Chat',
    year: '2025',
    genre: 'AI • Support • Node.js',
    logline: 'A live support agent that answers store questions from a system prompt and the conversation so far.',
    stack: ['React', 'Node.js', 'TypeScript', 'OpenRouter'],
    build: [
      'Express service calls OpenRouter (gpt-3.5-turbo) with store policy in the system prompt and the full chat history.',
      'Sessions are UUID-based. The Vercel demo keeps history in memory, which resets between invocations.',
    ],
    features: [
      'Support chat with shipping, returns and payment context',
      'Session stored in the browser',
      'Layered routes, services and data access',
    ],
    metrics: [
      { value: 'Live', label: 'demo on Vercel' },
      { value: '500', label: 'token cap per reply' },
    ],
    github: gh('spur-ai-chat-agent'),
    live: 'https://llm-eight-swart.vercel.app',
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'flow',
  },
  {
    id: 'sweet-shop',
    title: 'Sweet Shop',
    year: '2025',
    genre: 'Full-stack • TDD',
    logline: 'Inventory for a sweet shop: browse, search, purchase, and an admin path to restock.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'JWT'],
    build: [
      'Express API with JWT auth, bcrypt passwords, and PostgreSQL. Admins add, edit, delete and restock. Shoppers search and purchase, which decrements stock.',
      'Written as a TDD kata with Jest. Frontend is React, Vite and Ant Design. Live on Vercel.',
    ],
    features: [
      'Register, login, and role-based admin actions',
      'Search by name, category and price',
      'Purchase and restock update quantity',
      'Jest coverage on the API',
    ],
    metrics: [
      { value: 'JWT', label: 'auth' },
      { value: 'TDD', label: 'API kata' },
      { value: 'Live', label: 'on Vercel' },
    ],
    github: gh('sweet-shop-management'),
    live: 'https://sweet-shop-management-lovat.vercel.app/',
    palette: { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' },
    motif: 'tenants',
  },
  {
    id: 'voice-order',
    title: 'Voice Order',
    year: 'Soon',
    genre: 'AI • Voice • Coming soon',
    logline: 'Speak an order. The system talks back, builds the order, then hands you the payment.',
    stack: ['Voice', 'LLM', 'Ordering', 'Payments'],
    comingSoon: true,
    build: [
      'In production now. A person gives a voice command, the system converses until the order is clear, then generates that order.',
      'Payment comes after the order is confirmed. No public repo yet.',
    ],
    features: [
      'Voice command in',
      'Back-and-forth until the order is right',
      'Order generated from the conversation',
      'Payment after confirmation',
    ],
    metrics: [
      { value: 'Voice', label: 'you speak the order' },
      { value: 'Talk', label: 'the system answers' },
      { value: 'Pay', label: 'after you confirm' },
    ],
    palette: { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' },
    motif: 'shield',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'cgpa',
    title: 'CGPA 9.5',
    org: 'JECRC University',
    detail: 'Bachelor of Computer Applications, finished across late 2024 and early 2025.',
    laurel: 'BCA',
  },
  {
    id: 'lighthouse',
    title: 'Lighthouse 94',
    org: 'Shopify storefronts',
    detail: 'Custom Liquid and asset work lifted client Lighthouse scores from below 30 to 94.',
    laurel: 'Speed',
  },
  {
    id: 'canvas',
    title: '60 FPS',
    org: 'Validare visualizations',
    detail: 'A canvas renderer for heavy views held 60 FPS and cut DOM nodes by 76.4%.',
    laurel: 'Canvas',
  },
  {
    id: 'frappe',
    title: 'Frappe LMS',
    org: 'Built from scratch',
    detail: 'Enrollment, progress, certificates, and RBAC, plus WhatsApp Business and Razorpay.',
    laurel: 'ERP',
  },
  {
    id: 'erp',
    title: '3.8s → 1.3s',
    org: 'ERP views',
    detail: 'MariaDB query work on report-heavy DocTypes, with backend throughput up 2.4×.',
    laurel: 'Backend',
  },
  {
    id: 'validare',
    title: 'Client work',
    org: 'Validare Agency',
    detail: 'Freelance since July 2024 across Shopify, Frappe, SaaS, and AI client projects.',
    laurel: 'Freelance',
  },
  {
    id: 'shipped',
    title: '7 originals',
    org: 'GitHub · live demos',
    detail: 'AEO Diagnostics, Repo Assistant, Grid Wars, Sweet Shop, and the finance and chat apps.',
    laurel: 'Shipped',
  },
  {
    id: 'tirupati',
    title: 'Internship',
    org: 'Tirupati Software Infotech',
    detail: 'October 2023 to April 2024. React, Ant Design, Redux, and REST APIs with RBAC.',
    laurel: '6 months',
  },
];

export type Certification = { issuer: string; name: string; link: string };

/** None confirmed with a credential link. HackerRank participation is under achievements. */
export const certifications: Certification[] = [];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'What the projects are written in',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Daily' },
      { name: 'TypeScript', mono: 'Ts' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'SQL', mono: 'Sq' },
      { name: 'C++', mono: 'C+' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Interfaces that shipped',
    skills: [
      { name: 'React', mono: 'Re' },
      { name: 'Next.js', mono: 'Nx' },
      { name: 'Tailwind CSS', mono: 'Tw' },
      { name: 'Redux', mono: 'Rx' },
      { name: 'Ant Design', mono: 'Ad' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'Python and Node, not a single framework',
    skills: [
      { name: 'FastAPI', mono: 'Fa', note: 'APIs' },
      { name: 'Flask', mono: 'Fl' },
      { name: 'Django', mono: 'Dj' },
      { name: 'Node.js', mono: 'No' },
      { name: 'Express', mono: 'Ex' },
      { name: 'Frappe', mono: 'Fr' },
    ],
  },
  {
    id: 'data',
    title: 'Data',
    subtitle: 'Stores behind the apps',
    skills: [
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'Redis', mono: 'Rd' },
      { name: 'MariaDB', mono: 'Ma' },
      { name: 'ChromaDB', mono: 'Ch' },
    ],
  },
  {
    id: 'ai',
    title: 'AI',
    subtitle: 'Models in the products',
    skills: [
      { name: 'OpenRouter', mono: 'Or', note: 'In use' },
      { name: 'RAG', mono: 'Rg' },
      { name: 'Prompting', mono: 'Pr' },
    ],
  },
  {
    id: 'ship',
    title: 'Shipping',
    subtitle: 'How it gets to users',
    skills: [
      { name: 'Shopify Liquid', mono: 'Sh' },
      { name: 'Docker', mono: 'Dk' },
      { name: 'Socket.IO', mono: 'So' },
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'Vercel', mono: 'Vc' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  TypeScript: ['AEO Diagnostics', 'Grid Wars', 'Sweet Shop', 'Repo Assistant'],
  JavaScript: ['Tirupati Software Infotech'],
  Python: ['Where Did My Money Go', 'Repo Assistant', 'Frappe LMS'],
  SQL: ['Sweet Shop', 'Where Did My Money Go'],
  React: ['Grid Wars', 'Sweet Shop', 'Spur AI Chat', 'Tirupati dashboards'],
  'Next.js': ['AEO Diagnostics'],
  'Tailwind CSS': ['AEO Diagnostics', 'Grid Wars', 'Where Did My Money Go'],
  Redux: ['Tirupati Software Infotech'],
  'Ant Design': ['Sweet Shop', 'Tirupati dashboards'],
  'Node.js': ['Grid Wars', 'Sweet Shop', 'Spur AI Chat'],
  Express: ['Grid Wars', 'Sweet Shop', 'Spur AI Chat'],
  FastAPI: ['Where Did My Money Go', 'Repo Assistant'],
  Flask: ['Python API work alongside FastAPI'],
  Django: ['django-taskflow'],
  Frappe: ['Validare — custom LMS'],
  PostgreSQL: ['Sweet Shop', 'Where Did My Money Go'],
  Redis: ['Validare client stack'],
  MariaDB: ['Validare ERP views'],
  ChromaDB: ['Repo Assistant'],
  OpenRouter: ['AEO Diagnostics', 'Where Did My Money Go', 'Spur AI Chat', 'Repo Assistant'],
  RAG: ['Repo Assistant'],
  Prompting: ['AEO Diagnostics', 'Spur AI Chat'],
  'Shopify Liquid': ['Validare storefronts'],
  Docker: ['Repo Assistant'],
  'Socket.IO': ['Grid Wars'],
  'Git / GitHub': ['github.com/tusharrr017-arch'],
  Vercel: ['AEO Diagnostics', 'Grid Wars', 'Where Did My Money Go', 'Sweet Shop'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'Jaipur',
    period: '2019 – 2021',
    synopsis: 'Class 12 in Jaipur, before the BCA.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'Class 12',
        description: 'Finished higher secondary in Jaipur in 2021. The percentage is not on this site until it is confirmed.',
        tags: ['Class 12', 'Jaipur'],
        runtime: '2019 – 2021',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'BCA',
    period: '2021 – 2025',
    synopsis: 'Bachelor of Computer Applications at JECRC University, Jaipur.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'JECRC',
        description: 'Started in 2021 and finished across the end of 2024 and the start of 2025, with a CGPA of 9.5.',
        tags: ['BCA', 'CGPA 9.5', 'Jaipur'],
        runtime: '2021 – early 2025',
        palette: violet,
      },
    ],
  },
  {
    number: 3,
    title: 'The Internship',
    period: '2023 – 2024',
    synopsis: 'Six months as a software engineer intern at Tirupati Software Infotech.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Internal tools',
        description: 'REST APIs with RBAC, React and Ant Design dashboards, and tighter API integrations with the backend team.',
        tags: ['React', 'Node.js', 'Redux'],
        runtime: 'Oct 2023 – Apr 2024',
        palette: ocean,
      },
    ],
  },
  {
    number: 4,
    title: 'Client Work',
    period: '2024 – Now',
    synopsis: 'Freelance full-stack work at Validare. Mostly client projects: Shopify, Frappe, and AI pipelines.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'Validare',
        description: 'Canvas rendering, Web Workers, a custom Frappe LMS, Razorpay, WhatsApp Business, and Shopify storefronts.',
        tags: ['Frappe', 'Shopify', 'Next.js', 'FastAPI'],
        runtime: 'Jul 2024 – Present',
        palette: crimson,
      },
    ],
  },
  {
    number: 5,
    title: 'The Originals',
    period: '2025 – 2026',
    synopsis: 'Public products on GitHub, plus a voice ordering system still being built.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'AI products',
        description: 'AEO Diagnostics, Repo Assistant, Where Did My Money Go, and Spur AI Chat.',
        tags: ['OpenRouter', 'RAG', 'FastAPI'],
        runtime: '2025 – 2026',
        palette: violet,
      },
      {
        code: 'S05 E02',
        title: 'Shipped apps',
        description: 'Grid Wars, a real-time 25×25 multiplayer board, and Sweet Shop, a JWT inventory app.',
        tags: ['Socket.IO', 'React', 'PostgreSQL'],
        runtime: '2025 – 2026',
        palette: jade,
      },
      {
        code: 'S05 E03',
        title: 'Voice Order',
        description: 'Coming soon. Speak the order, the system talks back, then payment follows once the order is confirmed.',
        tags: ['Voice', 'Coming soon'],
        runtime: 'In production',
        palette: crimson,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'The AI original', title: 'AEO Diagnostics', detail: 'One prompt, three models, live', palette: crimson },
  { label: 'Code that cites itself', title: 'Repo Assistant', detail: 'RAG over a ZIP or a GitHub URL', palette: ocean },
  { label: 'The money app', title: 'Where Did My Money Go', detail: 'Statements in, categories out', palette: amber },
  { label: 'Live multiplayer', title: 'Grid Wars', detail: '25×25 board on Socket.IO', palette: jade },
  { label: 'The degree', title: 'CGPA 9.5', detail: 'BCA · JECRC University', palette: violet },
  { label: 'How the work is structured', title: 'Freelance', detail: 'Validare · mostly client projects', palette: amber },
  { label: 'The internship', title: 'Tirupati', detail: 'Oct 2023 – Apr 2024', palette: ocean },
  { label: 'Still filming', title: 'Voice Order', detail: 'Speak it, confirm it, pay', palette: crimson },
  { label: 'The shop', title: 'Sweet Shop', detail: 'JWT inventory · TDD kata', palette: jade },
  { label: 'Now', title: 'Full-time', detail: 'Open to the next role', palette: violet },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'BCA · 9.5',
    lines: ['JECRC University, Jaipur', '2021 – early 2025'],
    chips: ['CGPA 9.5'],
  },
  {
    kicker: 'Stack',
    title: 'Python and the web.',
    lines: ['Flask, FastAPI, Django, Node.js', 'React, TypeScript, Next.js, PostgreSQL, RAG'],
    chips: ['Python', 'Flask', 'FastAPI', 'Django', 'React', 'TypeScript'],
  },
  {
    kicker: 'Work',
    title: 'Client work',
    lines: ['Freelance at Validare since July 2024', 'Shopify, Frappe, SaaS — mostly client projects', 'Intern at Tirupati Software Infotech, Oct 2023 – Apr 2024'],
  },
  {
    kicker: 'Originals',
    title: 'Seven titles',
    lines: ['AEO Diagnostics · Repo Assistant · Where Did My Money Go', 'Grid Wars · Spur AI Chat · Sweet Shop', 'Voice Order — coming soon'],
  },
  {
    kicker: 'Now',
    title: 'Jaipur',
    lines: ['Full-stack AI engineer', 'Looking for a full-time role'],
  },
];

export type ProfileId = 'tushar' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'tushar',
    name: 'Tushar',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Work, degree and skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack and GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc and highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Jaipur', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Ten from the real work', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume sheet', palette: violet },
};
