/* =========================================================
   Site content — two modes over one layout.
   Every entry that differs between the portfolios is a { data, it } pair.
   Sources: public/Dimitris_Liaropoulos_CV.pdf (data) and
            public/Dimitris_Liaropoulos_CV_IT_Support.pdf (IT).
   Links set to '#' are placeholders.
   ========================================================= */

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
type CaseStudy = {
  headline: string;      // lead with the finding, not the topic
  project: string;
  year: string;
  stack: string[];
  problem: string;
  approach: string;
  result: string;
  visual: string;        // describes the image that will replace the placeholder
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
      links: [{ label: 'Code', href: '#' }, { label: 'Notebook', href: '#' }],
    },
    {
      headline: 'Ask EU law a question, get a grounded answer.',
      project: 'Corpus — RAG over EU law',
      year: '2026',
      stack: ['LangChain', 'ChromaDB', 'OpenAI', 'RAG'],
      problem: 'Regulatory text (GDPR and more) is long, dense and hard to search.',
      approach: 'Document processing, vector search in ChromaDB, and an LLM answer layer via LangChain.',
      result: 'Built around the Accenture × Code.Hub bootcamp — I led the final team presentation to senior leadership.',
      visual: 'Screenshot · question → answer',
      links: [{ label: 'Code', href: '#' }],
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
      links: [{ label: 'Code', href: '#' }, { label: 'Notebook', href: '#' }],
    },
  ],
  it: [
    {
      headline: 'Every workstation’s specs, OS and last check — in one app.',
      project: 'IT asset inventory · Hellenic Army',
      year: '2025 — 26',
      stack: ['Google AppSheet', 'Inventory', 'Windows', 'BIOS'],
      problem: 'Workstation details — user, specs, OS, BIOS setup — weren’t tracked in one place.',
      approach: 'Built an inventory in Google AppSheet with a record per workstation and the date of its last check.',
      result: 'One place to see each machine’s user, specs, OS, BIOS setup and when it was last checked.',
      visual: 'Screenshot · inventory app (anonymised)',
      links: [],
    },
    {
      headline: 'A dead Game Boy Advance SP, traced to one blown fuse.',
      project: 'Game Boy Advance SP — no power',
      year: 'Repair',
      stack: ['Multimeter', 'Fault tracing', 'Board-level'],
      problem: 'The console showed no signs of power at all.',
      approach: 'Followed the power path across the board with a multimeter, checking continuity component by component.',
      result: 'Isolated the fault to a blown fuse (F2).',
      visual: 'Photo · board & multimeter',
      links: [],
    },
    {
      headline: 'My everyday PC, built from salvaged parts.',
      project: 'Recycled-parts PC',
      year: 'Build',
      stack: ['PC assembly', 'Component testing', 'Windows'],
      problem: 'Build a reliable daily machine without buying new parts.',
      approach: 'Salvaged components, tested each one individually, then assembled and set up the system.',
      result: 'The PC I use every day.',
      visual: 'Photo · the build',
      links: [],
    },
  ],
};

type Row = { title: string; blurb: string; year: string; stack: string; href?: string; status?: string };

/* Four compact rows per mode. */
export const otherWork: Pair<Row[]> = {
  data: [
    { title: 'AI Job-Search Agent', blurb: 'Finds postings, scores them against my profile, drafts a tailored CV.', year: '2026', stack: 'Python · LLMs', status: 'In progress', href: '#' },
    { title: 'Movie Analytics with SQL', blurb: 'TMDB in SQLite — hidden gems, ROI and box-office flops.', year: '2026', stack: 'SQL · SQLite', href: '#' },
    { title: 'rippl — Pi micro-donations', blurb: 'Full-stack donation platform on the Pi Network SDK.', year: '2026', stack: 'React · Vercel', href: 'https://pi-give.vercel.app/', status: 'Live' },
    { title: 'Client websites', blurb: 'Sites for restaurants, shops and personal brands.', year: '2024 — 25', stack: 'HTML · CSS · JS', href: '#' },
  ],
  it: [
    { title: 'Game Boy Color', blurb: 'Revived a dead console by cleaning the board with isopropyl alcohol.', year: 'Repair', stack: 'Board cleaning' },
    { title: 'Logitech MX Master 2S', blurb: 'Freed a stuck thumb button by loosening an internal screw.', year: 'Repair', stack: 'Peripherals' },
    { title: 'Daily job-alert script', blurb: 'Python automation: API → SQLite → email, every day.', year: 'Script', stack: 'Python · SQLite', href: '#' },
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
