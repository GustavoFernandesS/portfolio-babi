import type { Content } from "./types";

export const en: Content = {
  meta: {
    title: "Barbara Paschoalini — HR & Organizational Behavior",
    description:
      "Project Consultant at Consultoria RH Junior (FGV and Mackenzie) and psychology student at Mackenzie. Recruiting, engagement surveys, performance reviews and career paths.",
    htmlLang: "en",
  },

  nav: {
    items: [
      { href: "#trajetoria", label: "Path" },
      { href: "#entregas", label: "Work" },
      { href: "#repertorio", label: "Learning" },
      { href: "#competencias", label: "Skills" },
      { href: "#contato", label: "Contact" },
    ],
    toggleLabel: "Ver em português",
  },

  hero: {
    eyebrow: "Professional record",
    name: "Barbara Paschoalini",
    fields: [
      { label: "role", value: "Project Consultant, Consultoria RH Junior" },
      { label: "studies", value: "Psychology · Mackenzie" },
      { label: "languages", value: "Fluent English · Intermediate Spanish" },
      { label: "based in", value: "São Paulo · on-site, hybrid or remote" },
    ],
    thesis: "I turn people diagnostics into a process the team can run without me.",
    body: "I study Psychology at Mackenzie. I joined Consultoria RH Junior — a student-run consultancy from FGV and Mackenzie — as a trainee in March 2026, and became a Project Consultant in June. Today I run recruiting, engagement, performance review and career path projects for client companies: from the diagnosis to the leadership debrief.",
    primaryCta: "Get in touch",
    secondaryCta: "LinkedIn",
    resumeCta: "Résumé (PDF)",
    status: "Open to HR and talent acquisition internships",
  },

  profile: {
    title: "Working-style profile",
    note: "Self-report · 7-point scale",
    rows: [
      { left: "Evidence", right: "Intuition", value: 2 },
      { left: "Process", right: "Improvisation", value: 2 },
      { left: "Listening", right: "Directing", value: 3 },
      { left: "Individual", right: "Collective", value: 6 },
      { left: "Depth", right: "Speed", value: 3 },
    ],
    caption: "Illustrative instrument, not a psychometric measure.",
  },

  timeline: {
    eyebrow: "Path",
    title: "From coursework to client delivery",
    lede: "Three positions in six months at the same consultancy, with the degree running alongside.",
    entries: [
      {
        role: "Project Consultant",
        org: "Consultoria RH Junior",
        period: "Jun 2026 — present",
        bullets: [
          "I coordinate the internal selection process at Consultoria RH Junior.",
          "I plan and run every stage of recruiting and selection.",
          "I screen résumés and assess candidate profiles.",
          "I run interviews and group exercises.",
          "I stay with the candidate from first contact to the end of the process.",
          "I develop engagement, job description, career path and performance review projects.",
        ],
        current: true,
      },
      {
        role: "Projects Trainee",
        org: "Consultoria RH Junior",
        period: "May 2026 — Jun 2026",
        bullets: [
          "Supported recruiting and selection processes.",
          "Took part in résumé screening and interviews.",
          "Followed candidates through the selection process.",
          "Supported people management projects.",
          "Kept contact with clients and cross-functional teams.",
        ],
      },
      {
        role: "General Trainee",
        org: "Consultoria RH Junior",
        period: "Mar 2026 — May 2026",
        bullets: [
          "Training program rotating through every area of the organization.",
          "Built skills in communication, management and consulting.",
        ],
      },
      {
        role: "BA in Psychology",
        org: "Universidade Presbiteriana Mackenzie",
        period: "Feb 2025 — Nov 2029",
        bullets: [
          "Graduating in November 2029.",
          "Academic interest in neuropsychology, cognition and human behavior: the basis of how people decide and learn inside a work structure.",
        ],
      },
      {
        role: "Secondary school",
        org: "Colégio Objetivo Paulista",
        period: "completed Nov 2024",
      },
    ],
  },

  cases: {
    eyebrow: "Work",
    title: "Projects, and what came out of them",
    lede: "Each project by what changed for whoever received it, not by the effort it took.",
    fields: { context: "Context", action: "What I did", result: "Result" },
    items: [
      {
        label: "Career path · training project",
        title: "Career track for Asfaltec",
        context:
          "Onboarding project at Consultoria RH Junior, using a case company: Asfaltec had no defined growth path for either its administrative or its operational side.",
        action:
          "With my group, I designed vertical career tracks for both areas, connecting progression, development and promotion criteria.",
        result:
          "We delivered the plan plus an Implementation Guide that was not in scope: a step-by-step for applying the track. The plan stopped being a PDF and became something the company can run on its own.",
      },
      {
        label: "Consulting challenge · 1st place",
        title: "Blueprint",
        context:
          "A challenge between teams: analyze a real business problem and defend a strategic proposal in front of a panel.",
        action:
          "I structured the analysis with my group, built the proposal and presented the solution to the judges.",
        result:
          "First place in that edition. The prize was a two-hour conversation with the HR team at IGC Partners, an M&A firm, including the partner who leads the area.",
      },
      {
        label: "Consulting · client companies",
        title: "HR projects for real clients",
        context:
          "Companies arrive with a symptom, not a diagnosis: a role that will not close, a misaligned team, reviews without criteria, a job nobody can describe.",
        action:
          "Recruiting and selection, engagement surveys, performance reviews and job descriptions — from the first diagnosis to the leadership debrief.",
        result:
          "{{FILL IN: number of projects or client companies, plus one concrete result, e.g. X roles filled, Y jobs described and signed off, survey response rate}}",
      },
    ],
  },

  repertoire: {
    eyebrow: "Learning",
    title: "The part of the education that is not on the syllabus",
    lede: "Working with people takes a repertoire about companies. I go looking for the people already inside them.",
    items: [
      {
        org: "Bruna Z. Russo · HR Director at BIC (Brazil and Argentina)",
        meta: "Aug 2026",
        detail:
          "A conversation about HR tools in practice: how performance tracking, feedback and development support decisions rather than just routine.",
      },
      {
        org: "IGC Partners",
        meta: "Blueprint prize",
        detail:
          "Two hours with the HR partner and her team on process, culture and professional development inside an M&A firm.",
      },
      {
        org: "Finscale",
        meta: "Apr 2026",
        detail:
          "Strategic marketing training: how a support function connects to business goals — the same question I ask about HR.",
      },
      {
        org: "Integration",
        meta: "Mar 2026",
        detail:
          "A talk on the company's path and the real challenges of working in human resources.",
      },
      {
        org: "Psychology Week · Mackenzie",
        meta: "coordinator",
        detail:
          "Coordinated the administrative and communications areas: event organization, attendee communication, onboarding, schedule management and administrative support.",
      },
    ],
  },

  skills: {
    eyebrow: "Skills",
    title: "What I bring into an HR team",
    groups: [
      {
        title: "People",
        items: [
          "Recruiting & selection",
          "Job descriptions",
          "Engagement surveys",
          "Performance reviews",
          "Career paths",
          "Organizational development",
        ],
      },
      {
        title: "Consulting & project",
        items: [
          "Organizational diagnosis",
          "Proposal writing",
          "Client management",
          "Project management",
          "Presenting to leadership",
          "Teamwork",
        ],
      },
      {
        title: "Tools",
        items: [
          "Excel (basic)",
          "Word · PowerPoint",
          "Microsoft Teams",
          "Google Workspace",
          "Zoom",
          "LinkedIn",
        ],
      },
    ],
    languagesTitle: "Languages",
    languages: [
      { name: "Portuguese", level: "Native", value: 5 },
      { name: "English", level: "Fluent", value: 5 },
      { name: "Spanish", level: "Intermediate", value: 3 },
    ],
  },

  contact: {
    eyebrow: "Contact",
    title: "If your team needs someone who delivers and comes back with what was agreed, let's talk.",
    body: "Looking for an internship in recruiting, talent acquisition, organizational development or people management — on-site in São Paulo, hybrid or remote.",
    emailLabel: "Email",
    linkedinLabel: "LinkedIn",
    locationLabel: "Based in",
    location: "São Paulo, Brazil",
    pending: "FILL IN at src/site.ts",
  },

  footer: {
    note: "Barbara Paschoalini · HR and organizational behavior",
    credit: "Built by hand.",
  },
};
