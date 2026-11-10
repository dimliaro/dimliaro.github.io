/* =========================================================
   Site content — two modes over one layout.
   Every entry that differs between the portfolios is a { data, it } pair.
   Sources: public/Dimitris_Liaropoulos_CV.pdf (data) and
            public/Dimitris_Liaropoulos_CV_IT_Support.pdf (IT).
   Links set to '#' are placeholders.
   ========================================================= */

import type { ImageMetadata } from 'astro';
import plPtsVsXpts from '../assets/work/pl-pts-vs-xpts.png';
import plProjectionSlope from '../assets/work/pl-projection-slope.png';
import plPaceDiff from '../assets/work/pl-pace-diff.png';
import nexusSplash from '../assets/work/nexus-splash.png';
import nexusPcs from '../assets/work/nexus-pcs.png';
import nexusPrinters from '../assets/work/nexus-printers.png';
import gbcFront from '../assets/work/gbc-front.jpg';
import gbcShell from '../assets/work/gbc-shell.jpg';
import gbcTeardown from '../assets/work/gbc-teardown.jpg';
import pcInside from '../assets/work/pc-inside.jpg';
import pcFront from '../assets/work/pc-front.jpg';
import pcBack from '../assets/work/pc-back.jpg';
import ragEvaluation from '../assets/work/rag-evaluation.png';

export type Mode = 'data' | 'it';
export type Pair<T = string> = { data: T; it: T };

export const meta: Pair<{ title: string; description: string; path: string }> = {
  data: {
    title: 'Dimitris Liaropoulos — Data Analyst · Python, SQL & AI/LLM tools',
    description:
      'Computer Science graduate (AUEB) from Athens building a career in data. Python, SQL, EDA, RAG pipelines and football analytics. Open to junior data roles.',
    path: '/',
  },
  it: {
    title: 'Dimitris Liaropoulos — IT Support / Desktop Technician',
    description:
      'Computer Science graduate (AUEB) with hands-on PC, laptop and MacBook repair experience from military IT service, electronics retail and independent work. Open to Helpdesk and Desktop Support roles in Athens.',
    path: '/it/',
  },
};

export const email = 'dimliaro@hotmail.com';
export const cvHref: Pair = {
  data: '/Dimitris_Liaropoulos_CV.pdf',
  it: '/Dimitris_Liaropoulos_CV_IT_Support.pdf',
};

/* ---------- HERO ---------- */
export const hero = {
  status: { data: 'Open to junior data roles', it: 'Open to Helpdesk & Desktop Support roles' },
  line: {
    data: 'I turn raw data into clear answers.',
    it: 'I keep machines and networks running.',
  },
  lede: {
    data:
      'Computer Science graduate (AUEB) from Athens, building a career in data. I use Python and SQL to collect, clean and analyse data, and AI/LLM tools daily to build data workflows — from football xG models to RAG pipelines over EU legislation.',
    it:
      'Computer Science graduate (AUEB) with hands-on PC, laptop and MacBook repair experience from military IT service, electronics retail and independent work. Three years in retail taught me to explain technical problems clearly and stay calm.',
  },
  spec: [
    { key: 'Mode',   data: 'DATA',                        it: 'IT SUPPORT' },
    { key: 'Focus',  data: 'Analysis · Pipelines · LLMs', it: 'Helpdesk · Desktop · LAN' },
    { key: 'Stack',  data: 'Python · SQL · pandas',       it: 'Windows · AD · Hardware' },
    { key: 'Latest', data: 'Premier League xG model',     it: 'Army IT support, 2025–26' },
  ],
  switchLabel: { data: 'Switch to IT side', it: 'Switch to data side' },
};

/* ---------- ABOUT ---------- */
export const about = {
  heading: {
    data: 'A data person with a builder’s instinct.',
    it: 'Hands-on with the hardware underneath.',
  },
  paras: {
    data: [
      'I’m Dimitris — a Computer Science graduate from AUEB building a career in data. I like opening a notebook, loading a dataset I care about and making it tell me something I didn’t know — then checking whether that something actually holds up.',
      'Day to day I work in Python (pandas) and SQL across the whole data lifecycle: pulling data from APIs, cleaning and reconciling it, exploring it and reporting it clearly. I use AI/LLM tools every day to build workflows and pick up new techniques fast.',
    ],
    it: [
      'I’m Dimitris — a Computer Science graduate from AUEB who has been repairing, cleaning and upgrading machines since 2021: desktops, laptops, MacBooks and handheld consoles, plus the routers, printers and smart devices around them.',
      'During military service in the Research & Informatics Corps I managed Active Directory users, configured IPs on a wired LAN, repaired Ethernet cabling and upgraded legacy Windows PCs. Before that, three years at Kotsovolos taught me to explain technical problems clearly and stay calm.',
    ],
  },
  facts: [
    { label: 'Based in',    data: 'Athens, Greece',     it: 'Kifisia, Athens' },
    { label: 'Degree',      data: 'BSc CS · AUEB',      it: 'BSc CS · AUEB' },
    { label: 'Looking for', data: 'Junior data role',   it: 'Helpdesk / Desktop Support' },
    { label: 'Languages',   data: 'Greek · English',    it: 'Greek · English' },
    { label: 'Off-screen',  data: 'Competitive futsal', it: 'Competitive futsal' },
    { label: 'Also',        data: 'Army done · Cat. B', it: 'Army IT · Cat. B' },
  ],
};

/* Same number of groups per mode so each row flips into its counterpart. */
export const skills: Pair<{ label: string; items: string[] }[]> = {
  data: [
    { label: 'Programming & data', items: ['Python', 'pandas', 'NumPy', 'SQL', 'SQLite', 'Jupyter', 'Excel'] },
    { label: 'Analysis & viz',     items: ['EDA', 'Statistics', 'Data-quality checks', 'matplotlib', 'seaborn'] },
    { label: 'AI / LLM',           items: ['Claude', 'ChatGPT', 'RAG', 'LangChain', 'ChromaDB', 'Agents'] },
    { label: 'Familiar with',      items: ['Git', 'Docker', 'FastAPI', 'PySpark', 'Databricks', 'Azure', 'React'] },
  ],
  it: [
    { label: 'Hardware',       items: ['PC assembly', 'RAM / SSD / NVMe upgrades', 'Thermal paste', 'Component diagnosis', 'MacBooks', 'Consoles', 'Printers'] },
    { label: 'OS & software',  items: ['Windows installs & upgrades', 'BIOS / UEFI', 'Drivers', 'Active Directory', 'Basic Linux'] },
    { label: 'Networking',     items: ['Routers', 'Wi-Fi troubleshooting', 'IP config on wired LANs', 'Ethernet cable repair', 'Smart / IoT devices'] },
    { label: 'Scripting & tools', items: ['Python automation', 'SQL', 'Git / GitHub', 'Excel', 'Google AppSheet', 'Docker (basic)'] },
  ],
};

/* ---------- EXPERIENCE ---------- */
type Job = { role: string; org: string; period: string; points: string[] };

/* Same length per mode: card i flips into card i. */
export const jobs: Pair<Job[]> = {
  data: [
    {
      role: 'Data & Operations Coordinator',
      org: 'GamePlan Digital Football Agency',
      period: 'Jan 2026 — Sep 2026',
      points: [
        'Consolidated, reconciled and validated player data from multiple agencies and external sources (Cosmos, Sports Connection, Fides) with systematic data-quality checks.',
        'Built and maintained an Excel player database (~75–80 records), standardising names and cross-referencing against Transfermarkt.',
        'Ran the matchday content pipeline — briefing the designer, editing in Photoshop and publishing posts for matchdays, signings and transfers.',
      ],
    },
    {
      role: 'Sales Consultant',
      org: 'Kotsovolos',
      period: 'Oct 2020 — Nov 2023',
      points: [
        'Advised customers in a high-volume, target-driven retail environment, consistently meeting sales targets and handling issues end-to-end.',
        'Worked with performance metrics and reporting to improve store results under tight deadlines.',
      ],
    },
    {
      role: 'Junior Software Engineer (Intern)',
      org: 'Intelligencia.ai',
      period: 'May 2019 — Aug 2019',
      points: [
        'Wrote automated BDD validation tests (Cucumber.js / Gherkin) for the company’s React web app.',
        'Hands-on frontend exposure in a startup: React hooks, async code and HTML/CSS components.',
      ],
    },
  ],
  it: [
    {
      role: 'IT Support (military service)',
      org: 'Hellenic Army · Research & Informatics Corps',
      period: 'Aug 2025 — Apr 2026',
      points: [
        'Built an IT asset inventory in Google AppSheet: each workstation’s user, specs, OS, BIOS setup and last check.',
        'Managed Active Directory users — new accounts, password resets and security groups.',
        'Set IP addresses on the wired LAN, repaired Ethernet cabling; upgraded legacy Windows PCs, swapped drives and RAM, re-pasted CPUs.',
        'Jan – Apr 2026: transferred to Ministry of Defence HQ (Pentagon).',
      ],
    },
    {
      role: 'Independent IT Support & PC Building',
      org: 'Friends and family · Athens',
      period: '2021 — present',
      points: [
        'Repair, clean and upgrade desktops, laptops, MacBooks and handheld consoles (RAM, SSD/NVMe, thermal paste) and assemble PCs from components.',
        'Reinstall Windows and software, recover slow machines, and set up routers, Wi-Fi, smart home devices, printers and peripherals.',
      ],
    },
    {
      role: 'Sales Consultant',
      org: 'Kotsovolos',
      period: 'Oct 2020 — Nov 2023',
      points: [
        'Advised customers on laptops, PCs, peripherals, smartphones, smart home and Wi-Fi solutions; set up display PCs and laptops.',
        'Regularly assisted the in-store technician with device diagnostics, setup and repairs.',
        'Handled customer requests, returns and after-sales issues in a high-traffic store.',
      ],
    },
  ],
};

export const education = [
  { title: 'BSc in Computer Science', where: 'Athens University of Economics and Business (AUEB)', when: 'Graduated May 2025' },
  { title: 'AI Knowledge Engineering with Data', where: 'Accenture × Code.Hub bootcamp · ~90 hours', when: 'May — Jun 2026' },
  { title: 'Building with LLMs — MCP, Agents, Workflows', where: 'Anthropic Academy · online', when: 'In progress' },
  { title: 'Data Engineering — LakeFlow, Spark, Pipelines', where: 'Databricks Academy · online', when: 'In progress' },
];

/* ---------- WORK ---------- */
type Link = { label: string; href: string };
/* `invert` turns white-background matplotlib charts dark to match the site */
export type Shot = { src: ImageMetadata; alt: string; caption: string; invert?: boolean };
type CaseStudy = {
  headline: string;      // lead with the finding, not the topic
  project: string;
  year: string;
  stack: string[];
  problem: string;
  approach: string;
  result: string;
  visual: string;        // placeholder label, shown when there are no images
  images?: Shot[];
  links: Link[];
};

/* Three featured case studies per mode. */
export const cases: Pair<CaseStudy[]> = {
  data: [
    {
      headline: 'xPts predicts the final table better than the table itself.',
      project: 'Premier League: Luck or Skill?',
      year: '2026 — now',
      stack: ['Python', 'pandas', 'xG', 'Statistics'],
      problem: 'Is a team’s league position quality — or luck?',
      approach: '12 seasons of Understat match-level xG (2014/15–2025/26), year-over-year correlations via a self-join, and a backtest at every matchweek.',
      result: 'Quality persists (r = 0.76); overperformance doesn’t (r = 0.11). The model now projects the live 2026/27 season.',
      visual: 'Chart · xPts vs actual points',
      images: [
        { src: plPtsVsXpts, caption: 'Actual vs expected points, 2014/15–2025/26', alt: 'Scatter plot of actual versus expected points for every Premier League team-season from 2014/15 to 2025/26, clustered along the diagonal.', invert: true },
        { src: plProjectionSlope, caption: '2026/27: table now vs projected finish', alt: 'Slope chart comparing the current 2026/27 Premier League table with the xPts-projected final standings as of 30 October 2026.', invert: true },
        { src: plPaceDiff, caption: '2026/27: xPts pace vs current pace', alt: 'Bar chart of the difference between xPts-based projected points and current-pace projected points for each 2026/27 Premier League team.', invert: true },
      ],
      links: [{ label: 'GitHub', href: 'https://github.com/dimliaro/pl-xg-luck' }],
    },
    {
      headline: 'A RAG pipeline over EU law that finds the right document 98% of the time.',
      project: 'Corpus — RAG over EU law',
      year: '2026',
      stack: ['LangChain', 'ChromaDB', 'OpenAI', 'RAG'],
      problem: 'Regulatory text (GDPR and more) is long, dense and hard to search.',
      approach: 'Document processing, vector search in ChromaDB, and an LLM answer layer via LangChain.',
      result: 'On a 61-question evaluation set: 82% pass rate, 0.984 document hit rate and a perfect 5.0 faithfulness score. I led the final presentation to senior leadership at the Accenture × Code.Hub bootcamp.',
      visual: 'Screenshot · evaluation summary',
      images: [
        { src: ragEvaluation, caption: 'Evaluation summary · 61 questions', alt: 'Evaluation dashboard: 82% pass rate, 0.984 document hit rate, average relevance 4.574, faithfulness 5.0, correctness 4.426 across 61 cases.' },
      ],
      links: [{ label: 'GitHub', href: 'https://github.com/dimliaro/EU-RAG-project' }],
    },
    {
      headline: 'Unleaded 98 costs ~€3.30 more per tank — for nothing.',
      project: 'Fuel EDA — Hyundai i20',
      year: '2024',
      stack: ['pandas', 'seaborn', 'matplotlib'],
      problem: 'Does premium fuel actually pay off in my own car?',
      approach: '68 of my own fill-ups, analysed across price, consumption, seasonality and habits.',
      result: 'No efficiency gain from 98 octane; about €3.30 extra on every tank.',
      visual: 'Chart · consumption by fuel type',
      links: [{ label: 'GitHub', href: 'https://github.com/dimliaro/FuelEDA' }],
    },
  ],
  it: [
    {
      headline: 'Every workstation’s specs, OS and last check — in one app.',
      project: 'IT asset inventory · Hellenic Army',
      year: '2025 — 26',
      stack: ['Google AppSheet', 'Inventory', 'Windows', 'BIOS'],
      problem: 'Workstation details — user, specs, OS, BIOS setup — weren’t tracked in one place.',
      approach: 'Built “Nexus”, a mobile app in Google AppSheet with sections for workstations, PC status, printers, IP addresses and spare-parts stock.',
      result: 'One place to see each machine’s user, specs, OS, BIOS setup and when it was last checked.',
      visual: 'Screenshot · inventory app (anonymised)',
      // IP addresses are blurred in nexus-printers.png (see the original in "it app for army/")
      images: [
        { src: nexusSplash, caption: 'Nexus · Google AppSheet', alt: 'Splash screen of the Nexus inventory app: a hexagon logo linking a user to a computer and a printer.' },
        { src: nexusPcs, caption: 'Workstations · OS and CPU per machine', alt: 'Nexus app workstation list showing each PC’s operating system and processor, with edit and delete buttons.' },
        { src: nexusPrinters, caption: 'Printers · IP addresses blurred', alt: 'Nexus app printer list showing location and model for each printer, with the IP addresses blurred.' },
      ],
      links: [],
    },
    {
      headline: 'A dead Game Boy Color, revived with a clean board.',
      project: 'Game Boy Color — no power',
      year: 'Repair',
      stack: ['Teardown', 'Isopropyl alcohol', 'Board-level'],
      problem: 'The console was dead.',
      approach: 'Full teardown — shell, screen and board separated — then cleaned the board with isopropyl alcohol.',
      result: 'Cleaning alone brought it back to life.',
      visual: 'Photo · teardown',
      images: [
        { src: gbcFront, caption: 'Front shell, opened', alt: 'Lime-green Game Boy Color front shell on a blue repair mat, with a pry tool resting on the screen lens.' },
        { src: gbcShell, caption: 'Shell stripped for cleaning', alt: 'Inside of the Game Boy Color front shell with buttons removed and the rubber contact pads set aside.' },
        { src: gbcTeardown, caption: 'Separating the screen from the board', alt: 'Gloved hand using a blue pry tool to lift the screen ribbon away from the Game Boy Color board.' },
      ],
      links: [],
    },
    {
      headline: 'My everyday PC, built from salvaged parts.',
      project: 'Recycled-parts PC · Dell OptiPlex 3020',
      year: 'Build',
      stack: ['PC assembly', 'Component testing', 'Low-profile GPU', 'Windows'],
      problem: 'Build a reliable daily machine without buying new parts.',
      approach: 'Started from a small-form-factor Dell OptiPlex 3020, tested each salvaged component individually, fitted a low-profile graphics card and set up the system.',
      result: 'The PC I use every day.',
      visual: 'Photo · the build',
      images: [
        { src: pcInside, caption: 'Inside · cooler, board and PSU', alt: 'Open Dell OptiPlex 3020 small-form-factor case showing the CPU cooler, motherboard, cabling and power supply.' },
        { src: pcFront, caption: 'Front · OptiPlex 3020 SFF', alt: 'Front of a Dell OptiPlex 3020 small-form-factor PC standing on a wooden floor.' },
        { src: pcBack, caption: 'Back · I/O and low-profile GPU', alt: 'Rear of the OptiPlex showing USB, network and video ports, plus a low-profile graphics card with HDMI and DVI.' },
      ],
      links: [],
    },
  ],
};

type Row = { title: string; blurb: string; year: string; stack: string; href?: string; status?: string };

/* Four compact rows per mode. */
export const otherWork: Pair<Row[]> = {
  data: [
    { title: 'AI Job-Search Agent', blurb: 'Finds postings, scores them against my profile, drafts a tailored CV.', year: '2026', stack: 'Python · LLMs', status: 'In progress', href: 'https://github.com/dimliaro/job-agent' },
    { title: 'Movie Analytics with SQL', blurb: 'TMDB in SQLite — hidden gems, ROI and box-office flops.', year: '2026', stack: 'SQL · SQLite', href: 'https://github.com/dimliaro/Movie-Analytics-with-SQL' },
    { title: 'rippl — Pi micro-donations', blurb: 'Full-stack donation platform on the Pi Network SDK.', year: '2026', stack: 'React · Vercel', href: 'https://pi-give.vercel.app/', status: 'Live' },
    { title: 'Client websites', blurb: 'Sites for restaurants, shops and personal brands.', year: '2024 — 25', stack: 'HTML · CSS · JS' },
  ],
  it: [
    { title: 'Game Boy Advance SP', blurb: 'Traced a no-power fault with a multimeter to a blown fuse (F2).', year: 'Repair', stack: 'Fault tracing' },
    { title: 'Logitech MX Master 2S', blurb: 'Freed a stuck thumb button by loosening an internal screw.', year: 'Repair', stack: 'Peripherals' },
    { title: 'Daily job-alert script', blurb: 'Python automation: API → SQLite → email, every day.', year: 'Script', stack: 'Python · SQLite' },
    { title: 'Home network & smart devices', blurb: 'Routers, Wi-Fi, printers and smart home setups for friends and family.', year: '2021 — now', stack: 'Networking' },
  ],
};

/* ---------- CONTACT ---------- */
export const contact = {
  lede: {
    data: 'I’m looking for a junior data role where I can contribute from day one and keep growing — analyst, data or AI-tooling work. The fastest way to reach me is by email.',
    it: 'I’m looking for a Helpdesk, Desktop Support or junior System / Network Admin role in Athens. The fastest way to reach me is by email.',
  },
  links: [
    { label: 'Email',    value: email,                     href: `mailto:${email}` },
    { label: 'GitHub',   value: '@dimliaro',               href: 'https://github.com/dimliaro' },
    { label: 'LinkedIn', value: 'in/dimitris-liaropoulos', href: 'https://www.linkedin.com/in/dimitris-liaropoulos-77b335158/' },
  ],
};
