/**
 * Centralized portfolio content.
 *
 * Every piece of editable content (personal information, social URLs, resume,
 * experience, projects, case studies, skills, achievements, articles and
 * availability) lives here so real details can replace placeholders without
 * touching the UI layer.
 *
 * Rules:
 * - `null` values mean "not configured yet". The UI hides or disables the
 *   corresponding action rather than inventing a destination.
 * - No personal, employment, technology or achievement facts are fabricated.
 */

export type NavSection = {
  label: string;
  id: string;
};

export const navSections: NavSection[] = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Achievements", id: "achievements" },
  { label: "Writing", id: "writing" },
  { label: "Contact", id: "contact" },
];

export const profile = {
  name: "Bobby Chilami",
  role: "Software Engineer",
  positioning: "Software Engineer | Backend & AI Engineer",
  headline: "Software Engineer",
  summary:
    "Software engineer building scalable backend systems, AI-powered applications and enterprise software for real-world products.",
  systems: [
    "Backend systems",
    "AI-powered applications",
    "Database systems",
    "Enterprise software",
  ],
  focusChips: ["Backend & AI Engineering", "Enterprise Software"],
  techStack: ["Python", "FastAPI", "Node.js", "Java", "SQL Server", "AI/LLMs", "Docker"],
  availability: {
    active: false,
    label: "Availability not specified",
  },
  heroFacts: [
    { label: "Current role", value: "Team Lead, Flixir Solutions" },
    { label: "Team", value: "6 developers · 2 testers" },
    { label: "Focus", value: "Backend · AI · Enterprise" },
    { label: "Platform exposure", value: "Approximately 30 lakh students" },
  ],
};

export type AboutCard = {
  number: string;
  label: string;
  text: string;
};

export const aboutCards: AboutCard[] = [
  {
    number: "01",
    label: "Backend Engineering",
    text: "APIs, services, databases, integrations and backend architecture.",
  },
  {
    number: "02",
    label: "AI Engineering",
    text: "LLM applications, AI agents, natural-language interfaces and multimodal AI.",
  },
  {
    number: "03",
    label: "Technical Leadership",
    text: "Leading engineers, coordinating development and testing work, and contributing to production systems.",
  },
];

export const socialLinks = {
  github: null as string | null,
  linkedin: null as string | null,
  resume: null as string | null,
  email: null as string | null,
};

export const contact = {
  heading: "Have an interesting engineering problem?",
  intro:
    "Backend, AI, systems and product engineering. The channels below are the current ways to reach me.",
  focusAreas: ["Backend", "AI", "Systems", "Product Engineering"],
};

export type ExperienceHighlight = {
  label: string;
  stat?: string | undefined;
  text: string;
};

export const experience = {
  company: "Flixir Solutions",
  position: "Software Engineer / Team Lead",
  period: "September 2022 – Present",
  progression: ["Software Engineer", "Team Lead"],
  summary:
    "Engineering software platforms and backend systems, with progression from software engineering into technical leadership.",
  highlights: [
    {
      label: "Team leadership",
      stat: "6 devs · 2 testers",
      text: "Leads a team of 6 developers and 2 testers across software platform and backend engineering work.",
    },
    {
      label: "Engineering",
      text: "Backend development, databases, enterprise software and AI engineering.",
    },
    {
      label: "Platform exposure",
      stat: "~30 lakh students",
      text: "Software platforms and backend systems with exposure to approximately 30 lakh students.",
    },
    {
      label: "Impact",
      text: "Progression from software engineering into technical leadership while contributing to production systems.",
    },
  ],
};

export type ArchitectureNode = {
  label: string;
  detail?: string;
};

export type CaseStudyDecision = {
  title: string;
  text: string;
};

export type CaseStudy = {
  overview: string;
  approach: string;
  architectureNodes: ArchitectureNode[];
  architectureCaption?: string;
  technicalDecisions: CaseStudyDecision[];
  engineeringChallenges: string[];
  implementation: string[];
  currentState: string;
  privacyNote?: string;
};

export type Project = {
  slug: string;
  number: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  technologies: string[];
  problem: string;
  solution: string;
  architectureSummary: string;
  architectureFlow: string[];
  engineeringWork: string;
  githubUrl: string | null;
  demoUrl: string | null;
  featured?: boolean | undefined;
  caseStudy: CaseStudy;
};

export const projects: Project[] = [
  {
    slug: "localmind-ai",
    number: "01",
    name: "LocalMindAI / Sentinel",
    category: "AI Engineering / Backend / Database Systems",
    tagline: "Natural-language access to structured databases.",
    description:
      "An AI-powered database assistant that lets users interact with structured databases using natural language instead of hand-written SQL.",
    technologies: ["Python", "FastAPI", "Qwen", "Ollama", "SQL Server", "SQLAlchemy", "Alembic"],
    problem:
      "Structured databases are normally queried through hand-written SQL, which assumes knowledge of the schema, the query language and the shape of the data. That creates friction for anyone who wants answers from the database without writing queries, and for teams that want routine questions answered quickly and consistently.",
    solution:
      "A FastAPI service connects a locally hosted large language model (Qwen via Ollama) to a SQL Server database. Schema and metadata context is used to translate natural-language questions into SQL, validate the generated query, run it, and return a human-readable answer.",
    architectureSummary:
      "User → FastAPI → Query / AI Engine with schema + metadata context → SQL generation → SQL Server → result processing → natural-language response.",
    architectureFlow: ["User", "FastAPI", "AI Engine", "SQL Server", "NL Response"],
    engineeringWork:
      "Local LLM execution, database schema understanding, metadata-driven context, natural-language-to-SQL generation, query validation, result interpretation and human-readable response formatting.",
    githubUrl: null,
    demoUrl: null,
    featured: true,
    caseStudy: {
      overview:
        "LocalMindAI / Sentinel is an AI-powered database assistant that closes the gap between natural-language questions and structured databases. A FastAPI service sits in front of a locally hosted LLM and a SQL Server database, using schema and metadata context to translate questions into validated SQL and turning query results back into readable answers. Database names, schemas, credentials, stored procedures and any confidential company data are intentionally excluded from this write-up.",
      approach:
        "The system grounds the language model in the database's actual structure. At request time, schema and metadata context is assembled alongside the user's question, and the model generates SQL in the target dialect. Generated queries are validated before they reach SQL Server; the returned rows are then interpreted into a clear, human-readable response instead of raw result sets.",
      architectureNodes: [
        { label: "User", detail: "Natural-language question" },
        { label: "FastAPI", detail: "API service for the query flow" },
        { label: "Query / AI Engine", detail: "Generation + validation" },
        { label: "Database Schema + Metadata Context", detail: "Grounds generation" },
        { label: "SQL Generation", detail: "Target dialect" },
        { label: "SQL Server", detail: "Structured database" },
        { label: "Result Processing", detail: "Rows to readable output" },
        { label: "Natural-Language Response", detail: "Human-readable answer" },
      ],
      architectureCaption: "Request flow for natural-language database interaction.",
      technicalDecisions: [
        {
          title: "Local LLM execution",
          text: "Inference runs locally via Qwen through Ollama, keeping model execution inside the local environment rather than calling an external service per query.",
        },
        {
          title: "Metadata-driven context",
          text: "Schema and metadata are supplied as context so SQL generation is anchored in the real structure of the database rather than guessed from the question alone.",
        },
        {
          title: "Validation before execution",
          text: "Generated SQL is checked before it runs against SQL Server, reducing the risk of malformed statements reaching the database.",
        },
        {
          title: "FastAPI service layer",
          text: "Python and FastAPI provide the API over the query and response cycle, with SQLAlchemy handling database access and Alembic managing schema versioning.",
        },
        {
          title: "Human-readable output",
          text: "Query results are processed and presented as natural-language answers rather than raw tables, matching the assistant's conversational interface.",
        },
      ],
      engineeringChallenges: [
        "Schema understanding — resolving natural-language questions to the correct tables and columns within a real schema.",
        "Query reliability — producing syntactically valid SQL for SQL Server and catching problems in a validation step before execution.",
        "Result interpretation — turning rows, including empty or unexpected results, into answers that read naturally to a user.",
        "Local model integration — wiring Qwen through Ollama into the request flow while keeping the stack self-contained.",
      ],
      implementation: [
        "A FastAPI service exposing the database-assistant query flow.",
        "Assembly of database schema and metadata context per request.",
        "Natural-language-to-SQL generation through a local LLM (Qwen via Ollama).",
        "Query validation before execution against SQL Server.",
        "Result processing that returns human-readable natural-language responses.",
        "SQLAlchemy-based data access and Alembic-managed schema versioning.",
      ],
      currentState:
        "Current state: a working AI-powered database assistant demonstrating natural-language interaction with structured databases through local LLM execution and metadata-driven query generation. This case study describes implemented capabilities only.",
      privacyNote:
        "Proprietary database names, schemas, credentials, stored procedures and confidential company information are intentionally not exposed in this case study.",
    },
  },
  {
    slug: "sayit",
    number: "02",
    name: "SayIt",
    category: "AI / Mobile / Voice / Product",
    tagline: "Voice-based AI conversation practice on mobile.",
    description:
      "An AI-powered voice application with a conversation engine, scenario-based practice, shareable results and a Pro subscription — built on Supabase Edge Functions.",
    technologies: [
      "React Native",
      "Expo",
      "Supabase",
      "Gemini",
      "RevenueCat",
      "Supabase Edge Functions",
    ],
    problem:
      "Practicing real conversation usually means finding a live partner, and generic AI chatbots are text-first and hard to keep inside a scenario. The product problem was a mobile experience where voice interaction, multimodal AI and structured scenarios could form a repeatable practice loop, with result sharing and a paid tier designed into the product.",
    solution:
      "A React Native (Expo) app backed by Supabase. Supabase Edge Functions host the server-side AI path: they call Gemini to drive a conversation engine that handles voice and multimodal interaction across scenario-based sessions. RevenueCat manages the Pro subscription, and results are shareable from the app.",
    architectureSummary:
      "React Native / Expo → Supabase → Edge Function → AI Provider → Conversation Engine → Mobile UI.",
    architectureFlow: ["React Native", "Supabase", "Edge Function", "AI Provider", "UI"],
    engineeringWork:
      "Mobile app architecture with Expo, Serverless backend through Supabase Edge Functions, AI provider integration, conversation engine, multimodal AI, scenario flows, shareable results and RevenueCat subscription handling.",
    githubUrl: null,
    demoUrl: null,
    caseStudy: {
      overview:
        "SayIt is an AI-powered voice application that turns mobile conversation practice into a structured product. Users speak, an AI conversation engine responds, and sessions are organized around scenarios with shareable results. The client is React Native with Expo, the backend platform is Supabase, server-side logic runs in Supabase Edge Functions, Gemini powers the AI conversation engine and RevenueCat handles the Pro subscription.",
      approach:
        "The mobile app captures voice input and drives a conversation engine hosted behind a Supabase Edge Function. The Edge Function calls the AI provider to generate responses and manage conversation state for scenario-based practice, while RevenueCat handles the Pro subscription and the app handles sharing of results.",
      architectureNodes: [
        { label: "React Native / Expo", detail: "Mobile client" },
        { label: "Supabase", detail: "Backend platform" },
        { label: "Edge Function", detail: "Server-side AI call path" },
        { label: "AI Provider", detail: "Gemini" },
        { label: "Conversation Engine", detail: "Scenarios + responses" },
        { label: "Mobile UI", detail: "Voice, share, subscription" },
      ],
      architectureCaption: "Product request flow for a conversation session.",
      technicalDecisions: [
        {
          title: "React Native with Expo",
          text: "A single mobile codebase with Expo's managed workflow for building and iterating the app.",
        },
        {
          title: "Supabase Edge Functions",
          text: "Server-side logic such as the AI call path runs in an Edge Function, keeping provider calls off the device.",
        },
        {
          title: "Gemini as the AI provider",
          text: "Gemini powers the conversation engine behind voice and multimodal interactions.",
        },
        {
          title: "Multimodal AI",
          text: "The conversation engine handles multimodal AI input rather than plain text alone.",
        },
        {
          title: "RevenueCat for the Pro tier",
          text: "Subscription management handled through RevenueCat, wiring a Pro subscription into the app.",
        },
        {
          title: "Shareable results",
          text: "Practice outcomes are shareable from the app as part of the product loop.",
        },
      ],
      engineeringChallenges: [
        "Voice conversation flow — coordinating voice input, AI response and turn-taking inside the mobile app.",
        "Multimodal conversation — keeping the AI conversation engine coherent across modalities.",
        "Scenario-based sessions — structuring practice around repeatable, stateful scenarios.",
        "Serverless AI path — moving the AI provider call through Supabase Edge Functions without operating a dedicated server.",
        "Subscription integration — gating the Pro subscription through RevenueCat within the app experience.",
      ],
      implementation: [
        "A React Native / Expo mobile application.",
        "Supabase backend platform with an Edge Function for server-side logic.",
        "An AI conversation engine powered by Gemini.",
        "Voice conversation and multimodal AI interactions.",
        "Scenario-based practice with shareable results.",
        "A Pro subscription managed through RevenueCat.",
      ],
      currentState:
        "Current state: an implemented product build with the capabilities above. This case study intentionally reports implemented features only — user counts, revenue, ratings, downloads and other business metrics are not published.",
    },
  },
  {
    slug: "enterprise-manufacturing",
    number: "03",
    name: "Enterprise Manufacturing Software",
    category: "Enterprise Software / Manufacturing / Desktop",
    tagline: "Anonymized enterprise engineering for manufacturing workflows.",
    description:
      "An anonymized case study of enterprise desktop software for manufacturing environments — production workflows, database integration and industrial system integration.",
    technologies: ["C#", "WPF", "SQL Server", "MES", "SOP", "PLC integration"],
    problem:
      "Manufacturing environments run on production workflows defined through MES and standard operating procedures, while shop-floor operators need dependable desktop tooling. The engineering challenge is building enterprise software that supports production workflows, integrates with structured data in SQL Server and connects to industrial systems — in an environment where correctness, debugging and reliability matter day to day.",
    solution:
      "A C# / WPF desktop application backed by SQL Server, structured around manufacturing workflows and MES / SOP processes. PLC integration connects the desktop tooling to industrial systems, with engineering effort focused on database integration, debugging across the stack and reliability in production use.",
    architectureSummary:
      "Operators → WPF Desktop App (C#) → Workflow & validation logic → SQL Server; aligned with MES / SOP processes and PLC integration.",
    architectureFlow: ["Operators", "WPF App (C#)", "SQL Server", "MES / SOP", "PLC"],
    engineeringWork:
      "Enterprise application development, production workflows, database integration, manufacturing systems (MES / SOP), debugging, reliability and industrial system integration (PLC).",
    githubUrl: null,
    demoUrl: null,
    caseStudy: {
      overview:
        "An anonymized case study of enterprise desktop software for manufacturing environments, built with C# and WPF on SQL Server within MES and SOP contexts. The work spans enterprise application development, production workflows, database integration and industrial system integration — including PLC integration. All company, customer, product and internal details are intentionally withheld; this write-up covers engineering scope only.",
      approach:
        "The work centers on a C# / WPF desktop application backed by SQL Server, structured around manufacturing workflows and MES / SOP processes. PLC integration connects desktop tooling to industrial systems, and the engineering effort focuses on dependable database integration, debugging across the stack and reliability in production use.",
      architectureNodes: [
        { label: "Operators / Shop Floor", detail: "Day-to-day users" },
        { label: "WPF Desktop Application (C#)", detail: "Operator-facing tooling" },
        { label: "Workflow & Validation Logic", detail: "MES / SOP alignment" },
        { label: "SQL Server", detail: "Production data" },
        { label: "MES / SOP Processes", detail: "Manufacturing workflows" },
        { label: "PLC / Industrial Integration", detail: "Shop-floor systems" },
      ],
      architectureCaption: "Functional layers of the enterprise desktop application.",
      technicalDecisions: [
        {
          title: "WPF on C# for desktop",
          text: "A native Windows desktop foundation for operator-facing enterprise tooling in manufacturing environments.",
        },
        {
          title: "SQL Server for production data",
          text: "Relational storage and database integration for production records and workflows.",
        },
        {
          title: "MES / SOP alignment",
          text: "Software structured around manufacturing execution processes and standard operating procedures.",
        },
        {
          title: "PLC integration",
          text: "Connecting the application to industrial control systems as part of the manufacturing workflow.",
        },
        {
          title: "Reliability focus",
          text: "Debugging and reliability treated as first-class concerns for software running in industrial day-to-day operations.",
        },
      ],
      engineeringChallenges: [
        "Enterprise application development — building desktop software that fits real manufacturing workflows.",
        "Production workflow support — handling the process structure defined by MES and SOPs.",
        "Database integration — working with SQL Server as the backbone for production data.",
        "Industrial integration — connecting desktop tooling to PLC and shop-floor systems.",
        "Debugging and reliability — resolving issues across UI, database and industrial layers in an environment where stability matters.",
        "Confidentiality — keeping company, customer, algorithmic and source-level detail out of public write-ups.",
      ],
      implementation: [
        "A C# / WPF enterprise desktop application.",
        "SQL Server-based database integration for production data.",
        "Workflow and validation logic aligned with MES / SOP processes.",
        "PLC integration with industrial systems.",
        "A reliability and debugging focus across application and database layers.",
      ],
      currentState:
        "Current state: an ongoing, anonymized enterprise engineering engagement focused on the scope above.",
      privacyNote:
        "Confidential company information, proprietary algorithms, internal IP, credentials, confidential database structures, customer information and internal source code are intentionally excluded from this case study.",
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  { label: "Backend", items: ["Python", "FastAPI", "Node.js", "Express.js", "Java", "C#"] },
  {
    label: "AI / LLM",
    items: [
      "LLM Applications",
      "AI Agents",
      "Qwen",
      "Ollama",
      "Gemini",
      "Natural Language to SQL",
      "Multimodal AI",
    ],
  },
  {
    label: "Data",
    items: ["SQL Server", "MySQL", "MongoDB", "Redis", "SQLAlchemy", "Alembic"],
  },
  { label: "Cloud / DevOps", items: ["AWS", "Docker", "Jenkins", "CI/CD"] },
  { label: "Mobile", items: ["React Native", "Expo", "Supabase"] },
  {
    label: "Architecture",
    items: [
      "REST APIs",
      "Clean Architecture",
      "Database Integration",
      "AI Application Architecture",
    ],
  },
];

export type Achievement = {
  label: string;
  text: string;
};

export const achievements: Achievement[] = [
  {
    label: "Team Leadership",
    text: "Leads a team of 6 developers and 2 testers.",
  },
  {
    label: "Large-Scale Platform Exposure",
    text: "Engineering platforms and backend systems whose exposure involves approximately 30 lakh students.",
  },
  {
    label: "AI Engineering",
    text: "Built AI-powered systems connecting natural-language interfaces with structured databases.",
  },
  {
    label: "Product Development",
    text: "Built an AI-powered voice application using React Native, Expo, Supabase, Gemini and RevenueCat.",
  },
];

export type Article = {
  title: string;
  url: string | null;
};

export const articles: Article[] = [
  {
    title: "From ₹25K/month to ₹1.2L/month — My Software Engineering Journey",
    url: null,
  },
  {
    title: "Building an AI Database Agent with FastAPI and Local LLMs",
    url: null,
  },
  {
    title: "Running Local LLMs with Ollama",
    url: null,
  },
  {
    title: "Building Production APIs with FastAPI",
    url: null,
  },
  {
    title: "From Backend Engineer to AI Engineer",
    url: null,
  },
];
