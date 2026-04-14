/**
 * content.ts
 *
 * Centralized content configuration for the portfolio site.
 * All case studies, about, contact, and resume data live here.
 *
 * Why: Single source of truth for all site content, making updates easy and type-safe.
 * How: Exported objects/arrays are imported by page and component files.
 *
 * To update content, see the README for field descriptions and best practices.
 */

export type FigureSection =
  | 'overview'
  | 'problem'
  | 'research'
  | 'approach'
  | 'process'
  | 'workflow'
  | 'gallery'
  | 'states'
  | 'next'

export type FigureLayout =
  | 'hero'
  | 'wide'
  | 'split'
  | 'grid-3'
  | 'grid-4'
  | 'tall'

export type FigureAccent = 'violet' | 'cyan' | 'green' | 'yellow' | 'coral'

export interface CaseStudyFigure {
  id: string
  section: FigureSection
  title: string
  caption: string
  layout: FigureLayout
  accentColor: FigureAccent
}

export interface ProjectSnapshot {
  role: string
  scope: string
  environment: string
  constraints: string
  outcome: string
}

export interface WorkflowStep {
  step: string
  caption: string
}

export interface CaseStudy {
  id: string
  slug: string
  title: string
  subtitle: string
  tags: string[]
  year: string
  projectSnapshot?: ProjectSnapshot
  overview: string
  problemContext?: string
  challenges: string[]
  research: string
  whatILearned?: string[]
  approachTitle: string
  approach: string
  designPrinciples?: string[]
  process: string[]
  workflowTitle?: string
  workflowSteps?: WorkflowStep[]
  resultsImpact: string[]
  resultsTools: string[]
  whatIdDoNext?: string[]
  figures?: CaseStudyFigure[]
}

export const caseStudies: CaseStudy[] = [
  {
    id: "redesign-settings",
    slug: "redesign-settings",
    title: "Restructuring a Legacy Settings Experience for Clarity and Accessibility",
    subtitle: "A redesign of a fragmented settings and profile experience to improve findability, reduce cognitive overload, and help users make changes with confidence in a legacy B2B environment.",
    tags: ["Information Architecture", "User Research", "Accessibility", "Vue/SCSS"],
    year: "2024",
    projectSnapshot: {
      role: "UI/UX Designer + Frontend Developer",
      scope: "Information architecture, interaction design, accessibility, Vue/SCSS implementation",
      environment: "Legacy B2B SaaS platform (emergency and operations software)",
      constraints: "Backend untouched · 10+ years of feature accumulation · cross-organization behavior preserved",
      outcome: "Reorganized settings into a clearer, more predictable, more accessible experience with accessibility promoted from buried to discoverable."
    },
    overview: "The settings and profile experience had evolved over time without a clear structure, leaving users to navigate a long list of loosely grouped options. In practice, people struggled to find the right place to update information, understand which settings belonged together, or make changes confidently. This mattered because in a B2B product, settings affect how entire teams work across organizations and environments. I led a redesign of the information architecture and interaction model to make the experience easier to scan, easier to understand, and more accessible — while preserving the existing backend structure.",
    problemContext: "The core issues weren't visual. They were structural. Settings reflected system history more than user mental models.",
    challenges: [
      "Users couldn't locate specific settings quickly because related options were scattered or labeled inconsistently.",
      "Accessibility-related controls were buried instead of surfaced as first-class settings.",
      "Switching between organizations reloaded the page and broke user context.",
      "A decade of ad-hoc additions and competing internal preferences had layered complexity without a unifying structure."
    ],
    research: "To understand where the experience was breaking down, I pulled from multiple sources of evidence rather than relying on a single channel: internal support tickets, recurring usability complaints, Solutions Engineers who saw customer friction firsthand, survey responses, and external discussions that helped validate common expectations around settings organization. Across those inputs, the same patterns surfaced — users couldn't find settings quickly, category structure felt inconsistent, and organization-specific changes introduced unnecessary friction.",
    whatILearned: [
      "Users needed a clearer mental model, not just cleaner visuals.",
      "Discoverability mattered as much as accessibility itself — hidden accessibility settings are functionally less useful.",
      "Reducing visible complexity helped users stay oriented without stripping away capability."
    ],
    approachTitle: "Progressive disclosure as accessibility",
    approach: "Instead of exposing every setting at once, I restructured the experience around progressive disclosure. Users first see clear, scannable categories, then drill into details only when needed. This solved two problems at once: it reduced information competing for attention, and it preserved orientation by helping users understand the overall structure before interacting with individual controls. From an accessibility perspective this was especially valuable — reducing unnecessary complexity makes interfaces easier to navigate for users with cognitive and attention-related differences.",
    designPrinciples: [
      "Match user mental models, not API shape.",
      "Make accessibility discoverable, not buried.",
      "Preserve context across organization switches.",
      "Prefer predictable patterns over dense screens."
    ],
    process: [
      "Audited the existing structure. Compared the current API response with competitor patterns to separate real technical constraints from poor organizational choices.",
      "Rebuilt the information architecture. Used whiteboard grouping exercises and repeated label refinement, converging on one-word categories users could predict.",
      "Designed the interaction model. Explored how users would move between profile, general settings, organization-scoped settings, and accessibility controls without losing context.",
      "Progressed from wireframes to high fidelity. Paper sketches → mid-fi structure → high-fidelity screens in Sketch → interactive prototypes.",
      "Validated accessibility. Tested contrast, semantics, focus order, and screen reader behavior with AxeDev and macOS VoiceOver.",
      "Unified profile and settings into a single coherent surface while keeping backend logic intact.",
      "Shipped behind feature flags for safe production testing and staged rollout.",
      "Refined post-release based on user tickets, adding missing settings and accessibility improvements."
    ],
    workflowTitle: "Walkthrough: Updating a notification setting",
    workflowSteps: [
      {
        step: "Open Settings from the primary navigation",
        caption: "User enters the redesigned surface and sees scannable top-level categories instead of a flat list."
      },
      {
        step: "Scan grouped categories and select Notifications",
        caption: "Category names are one word and predictable, so users hit the right bucket on the first try."
      },
      {
        step: "Category expands to reveal related controls",
        caption: "Progressive disclosure shows only the relevant controls, keeping the rest of the surface calm."
      },
      {
        step: "Adjust a toggle with inline helper text",
        caption: "Helper copy clarifies what the setting does and any related behavior before the user commits to the change."
      },
      {
        step: "Save confirms with a non-modal toast; context preserved",
        caption: "No page reload, no lost scroll position, no context loss — users keep their place in the flow."
      }
    ],
    resultsImpact: [
      "Settings became easier to find because related options were grouped intentionally.",
      "Accessibility controls became discoverable instead of feeling buried or secondary.",
      "The experience felt less overwhelming because users no longer had to parse every setting at once.",
      "The redesign created a clearer foundation for future growth by imposing structure on years of accumulated product decisions.",
      "Public metrics aren't available, but the project was positively received internally for clarity, usability, and improved accessibility."
    ],
    resultsTools: [
      "Sketch for high-fidelity wireframes and prototypes",
      "Whiteboard ideation and pen & paper sketching",
      "AxeDev Tools and macOS VoiceOver for accessibility testing",
      "Vue/SCSS for component implementation",
      "Feature flags for safe production testing",
      "Production analytics for post-release validation"
    ],
    whatIdDoNext: [
      "Merge hidden Solutions-Engineer-only settings into the user-facing surface so users with the right permissions can self-serve instead of filing tickets.",
      "Clearer dependency messaging when one setting affects another related control.",
      "Usage analytics to identify high-friction settings and inform future placement decisions."
    ],
    figures: [
      {
        id: "settings-hero",
        section: "overview",
        title: "From fragmented to structured",
        caption: "The old settings page was a flat list of loose options. The new structure groups them by user intent, surfaces accessibility, and reveals detail only when needed.",
        layout: "split",
        accentColor: "violet"
      },
      {
        id: "settings-pain-map",
        section: "problem",
        title: "Four structural pain points",
        caption: "Findability, accessibility discoverability, organization-switch friction, and legacy sprawl. Each one mapped to a distinct design move in the redesign.",
        layout: "grid-4",
        accentColor: "coral"
      },
      {
        id: "settings-ia-diagram",
        section: "approach",
        title: "IA before and after — system-driven to user-centered",
        caption: "The redesign collapsed a flat list into predictable one-word categories. This is the most important diagram in the case study — it shows IA thinking at a glance.",
        layout: "wide",
        accentColor: "cyan"
      },
      {
        id: "settings-whiteboard",
        section: "process",
        title: "Whiteboard grouping and label iteration",
        caption: "Early grouping exercise. The crossed-out labels are the interesting part — they show how many passes the category names took before they settled on one-word labels users could predict.",
        layout: "wide",
        accentColor: "yellow"
      },
      {
        id: "settings-workflow",
        section: "workflow",
        title: "End-to-end: updating a notification setting",
        caption: "A complete user journey in four frames. This directly answers the hiring feedback asking for end-to-end workflows — entry, navigation, change, confirmation, with context preserved throughout.",
        layout: "grid-4",
        accentColor: "green"
      },
      {
        id: "settings-states",
        section: "states",
        title: "Edge cases — permissions and org-managed settings",
        caption: "B2B settings live and die by edge cases. These states show the redesign respects organizational boundaries, permission restrictions, and admin-managed controls.",
        layout: "grid-3",
        accentColor: "violet"
      }
    ]
  },
  {
    id: "messaging-modernization",
    slug: "messaging-modernization",
    title: "Modernizing Messaging for Context, Clarity, and Scale",
    subtitle: "A redesign of a legacy messaging experience to improve conversation context, reduce navigation friction, and align the interface with modern user expectations and the product's evolving design system.",
    tags: ["UX Design", "Storybook", "Accessibility", "Vue/SCSS"],
    year: "2024",
    projectSnapshot: {
      role: "UI/UX Designer + Frontend Developer",
      scope: "Messaging UX, accessibility, component design, Storybook documentation, Vue/SCSS implementation",
      environment: "Legacy B2B platform (emergency and operations software)",
      constraints: "Existing architecture · legacy thread patterns · compatibility with upcoming product redesign",
      outcome: "A clearer, more modern messaging experience with stronger context handling, improved accessibility, and tighter design system alignment."
    },
    overview: "The existing messaging experience made it difficult for users to follow conversations, maintain context, and use messaging as an efficient collaboration tool. Threading was hard to understand, modern interaction patterns were missing, and the interface no longer matched the direction of the broader product. I redesigned the experience to make communication easier to follow, easier to act on, and more consistent with how users already expect modern chat tools to behave. The work spanned interaction design, accessibility, Storybook documentation, and frontend implementation.",
    problemContext: "In a B2B product, messaging isn't social — it's operational infrastructure. These issues weren't cosmetic; they were slowing coordination.",
    challenges: [
      "Users struggled to understand where threaded conversations lived and how to follow them.",
      "Context was easily lost when moving between related views in the cockpit.",
      "The system lacked messaging patterns users already expected — clearer replies, quoting, and contextual grouping.",
      "The interface felt increasingly disconnected from the product's newer visual and interaction direction."
    ],
    research: "To identify what needed to change, I pulled from both internal and external signals: conversations with Solutions Engineers who understood recurring customer pain points, direct customer feedback, comparative analysis of Slack, Discord, and Teams, and analysis of existing API constraints. This made it possible to separate two things — what users already expected from modern messaging, and what could realistically be adapted within the current product architecture.",
    whatILearned: [
      "Users needed stronger conversation context, not just more features.",
      "Modern patterns mattered because they reduce relearning — when familiar behaviors are adapted well, users do less guesswork.",
      "Messaging had to work as part of a larger system, not as an isolated UI surface."
    ],
    approachTitle: "Familiar patterns, adapted to our constraints",
    approach: "Rather than reinventing chat behaviors from scratch, I used established messaging patterns as a baseline and adapted them to the product's architecture and accessibility requirements. The goal wasn't to imitate Slack or Discord visually — it was to borrow familiar interaction logic where it improved usability, then tailor those patterns to the realities of this product.",
    designPrinciples: [
      "Preserve context above all.",
      "Reduce clutter, not capability.",
      "Borrow familiar patterns intentionally.",
      "Build for accessibility and scale."
    ],
    process: [
      "Mapped the conversation workflow. Sketched how users moved through messages, threads, actions, and related views, exposing where context dropped.",
      "Explored structure at low fidelity. Sketches and whiteboard wireframes for quoting, replies, thread visibility, and side-by-side context patterns.",
      "Brought core interactions into high fidelity. Hierarchy, spacing, message grouping, action visibility, and system alignment in Sketch.",
      "Reduced interaction-layer noise. Simplified overflow and action menus so high-frequency actions were easier to reach and low-frequency actions were less disruptive.",
      "Strengthened contextual awareness. Added contextual information blocks and message hierarchy so users could understand what a message referred to.",
      "Shipped a copy-message-link feature that deep-links to a specific message and auto-scrolls to it on open, making it easy to reference past messages without losing conversation context.",
      "Tested accessibility with AxeDev, macOS VoiceOver, semantic HTML, and full ARIA support.",
      "Rebuilt and documented components in Storybook for reuse, debugging, and design-system consistency.",
      "Implemented in Vue/SCSS and released behind feature flags for real-world testing.",
      "Refined post-launch based on real feedback — long text, system messages, access levels, sizing, and screen reader copy."
    ],
    workflowTitle: "Walkthrough: Threading a message and returning to context",
    workflowSteps: [
      {
        step: "User sees a new message in a busy channel",
        caption: "The channel is active, with multiple threads already in progress. Clear hierarchy keeps the scroll readable."
      },
      {
        step: "User clicks Reply via thread — popup appears with the source message pinned at the top",
        caption: "The original message stays visible during composition, so the user never loses what they're replying to."
      },
      {
        step: "Reply sends — the original message now shows a thread count badge",
        caption: "A lightweight badge signals the message now has replies without crowding the main feed."
      },
      {
        step: "User navigates back — parent channel scroll position preserved",
        caption: "Returning to the channel drops the user exactly where they were, not at the top or bottom."
      },
      {
        step: "Later, user opens the thread view — full context restored, source message stays pinned",
        caption: "The entire reply chain is accessible in a dedicated view with the source message anchored for reference."
      },
      {
        step: "User navigates back again — parent channel scroll position preserved",
        caption: "Both the compose path and the read path preserve context. That repetition is the point — it proves the pattern is consistent."
      }
    ],
    resultsImpact: [
      "Conversation context got stronger through clearer thread and reply patterns.",
      "Interface clutter dropped through more intentional hierarchy and menu design.",
      "Messaging aligned better with modern user expectations, lowering how much users had to relearn.",
      "Accessibility improved through semantic structure, ARIA support, and screen reader refinement.",
      "System consistency strengthened through Storybook documentation and closer alignment with the broader design direction.",
      "Shipped a copy-message-link feature that scrolls to the referenced message, making cross-conversation references effortless.",
      "Public metrics aren't available, but the work improved clarity, maintainability, and usability in a part of the product that users touch frequently."
    ],
    resultsTools: [
      "Sketch for high-fidelity design and prototyping",
      "Whiteboard ideation and pen & paper sketching",
      "AxeDev Tools and macOS VoiceOver for accessibility testing",
      "Vue/SCSS for component implementation",
      "Storybook for component documentation and design system alignment",
      "Feature flags for staged real-world testing"
    ],
    whatIdDoNext: [
      "Object tying — a side panel that shows the object a conversation is about (incident, ticket, asset) alongside the message stream so users never have to leave the conversation to check context.",
      "Analytics around thread adoption, reply behavior, and navigation friction to inform future pattern work."
    ],
    figures: [
      {
        id: "messaging-hero",
        section: "overview",
        title: "From flat feed to contextual workflow",
        caption: "The old messaging UI lost context whenever a conversation branched. The new one makes thread relationships visible without crowding the feed.",
        layout: "split",
        accentColor: "cyan"
      },
      {
        id: "messaging-friction-map",
        section: "problem",
        title: "Friction map of the legacy experience",
        caption: "Five friction points mapped onto one screen. Each one became a specific design move later in the case study.",
        layout: "wide",
        accentColor: "coral"
      },
      {
        id: "messaging-pattern-matrix",
        section: "research",
        title: "Comparative pattern matrix",
        caption: "Pattern literacy plus tradeoff thinking in one table. For each modern chat pattern, I captured the user expectation, the product constraint, and the adaptation decision.",
        layout: "tall",
        accentColor: "green"
      },
      {
        id: "messaging-principles",
        section: "approach",
        title: "Four design principles",
        caption: "The principles that guided every design decision from wireframe to shipped code — preserve context, reduce clutter, borrow patterns intentionally, and build for accessibility and scale.",
        layout: "grid-4",
        accentColor: "yellow"
      },
      {
        id: "messaging-workflow",
        section: "workflow",
        title: "Threading a message and returning to context",
        caption: "A complete reply-and-return workflow across six frames. Context preservation shows up on both the compose path and the read path — this is the most important figure for answering the end-to-end workflows feedback.",
        layout: "grid-3",
        accentColor: "cyan"
      },
      {
        id: "messaging-anatomy",
        section: "gallery",
        title: "Anatomy of the redesigned message component",
        caption: "Every element of the message component labeled and justified — sender, timestamp, reply target, body, thread badge, and overflow actions. Every element earned its place.",
        layout: "wide",
        accentColor: "violet"
      },
      {
        id: "messaging-states",
        section: "states",
        title: "State gallery — default, hover, reply, thread, long content, system, empty, restricted",
        caption: "States are where B2B credibility lives. These prove the redesign survives contact with real product reality — long messages, system events, access restrictions.",
        layout: "grid-3",
        accentColor: "green"
      }
    ]
  }
];

export const aboutContent = {
  intro: "I'm a UI/UX designer and frontend developer who believes accessibility isn't optional; it's fundamental to good design. I specialize in strategic information architecture and inclusive user experiences, transforming complex systems into intuitive, accessible interfaces that work for everyone.",
  body: "From conducting screenreader testing to implementing WCAG-compliant components in Vue, I bridge the gap between design vision and technical reality. My work emphasizes human-centered design, accessibility, and scalable front-end solutions that ensure every user, regardless of ability, can accomplish their goals efficiently."
};

export const contactInfo = {
  email: "claire.sersun@gmail.com",
  linkedin: "https://linkedin.com/in/clairesersun",
  linkedinDisplay: "linkedin.com/in/clairesersun",
  github: "https://github.com/clairesersun"
};

export const resumeData = {
  name: "Claire Sersun",
  summary: "UI/UX Developer and Accessibility-Focused Frontend Engineer with professional experience building accessible, scalable web applications in remote-friendly, cross-functional teams. My background spans frontend development, accessibility-first UI implementation, and UX-driven design, with recent experience working in a Vue/Nuxt production codebase. I've built and maintained user-facing features, modernized legacy frontend code, and collaborated closely with product managers, designers, and engineers.",
  experience: [
    {
      company: "Veoci",
      role: "UI/UX Developer",
      period: "October 2023 - October 2025",
      location: "New Haven, Connecticut, United States",
      highlights: [
        "Worked in a hybrid role across design and frontend development, helping bridge collaboration between designers and engineers on the product team",
        "Took ownership of multiple UI rebuilds and refactors, improving usability, accessibility, and long-term maintainability across the application",
        "Led design-to-development execution for new and existing product areas, translating UX concepts directly into production frontend code",
        "Co-led WCAG 2.1 AA accessibility efforts, contributing audits, remediations, and accessibility standards integrated into design and code review workflows",
        "Established a Storybook-driven component library (Vue/Vuetify), creating reusable, accessible UI patterns and supporting early design system foundations",
        "Modernized legacy frontend code using Vue (Options API → Composition API), JavaScript, HTML, CSS, and SCSS",
        "Integrated frontend features with existing APIs in collaboration with engineering, ensuring reliable data handling and smooth user interactions",
        "Used AI-assisted tools to support UI refactoring, accessibility validation, documentation, and development efficiency while maintaining code quality",
        "Collaborated with product managers, designers, and engineers across distributed teams to improve consistency, scalability, and user experience"
      ]
    },
    {
      company: "Freelance",
      role: "Web Designer / Frontend Developer",
      period: "2018 - Present",
      highlights: [
        "Designed, rebuilt, and maintained client-facing websites using WordPress, HTML, CSS, and JavaScript",
        "Took ownership of site redesigns and refactors, improving usability, performance, and content structure",
        "Customized themes and stylesheets to align branding with responsive and accessibility-aware UI patterns",
        "Collaborated with clients and non-technical stakeholders to translate goals into functional web experiences",
        "Audited plugins, frontend assets, and site structure to improve maintainability and performance",
        "Ensured cross-browser compatibility and mobile responsiveness across projects",
        "Clients included arts organizations, fitness studios, photographers, and small businesses"
      ]
    },
    {
      company: "TriGaBo Marketing LLC",
      role: "Web Design Intern",
      period: "March 2022 - December 2022",
      highlights: [
        "Created wireframes and visual designs for client websites using Adobe XD and Photoshop",
        "Implemented and updated live websites using HTML, CSS, JavaScript, and platform-specific tooling",
        "Customized Shopify and Wix themes to support branding, usability, and structured content",
        "Assisted with site rebuilds and UI updates, improving consistency across client projects",
        "Worked within platform-provided data and configurations to ensure frontend UI accurately reflected dynamic content",
        "Iterated on designs and implementations based on internal and client feedback"
      ]
    }
  ],
  education: [
    {
      institution: "University of Florida",
      degree: "Master of Arts - MA",
      field: "Mass Communication - Web Design",
      period: "January 2022 - August 2023"
    },
    {
      institution: "Marymount Manhattan College",
      degree: "Bachelor of Arts (B.A.)",
      field: "Dance: Body, Science, and Motion",
      period: "2016 - 2020"
    }
  ],
  skills: {
    primary: ["UI Development", "Frontend Development", "Vue.js", "React", "Accessibility (WCAG)", "Design Systems"],
    technical: ["JavaScript", "TypeScript", "HTML", "CSS/SCSS", "WordPress", "Shopify", "Git"],
    tools: ["Sketch", "Storybook", "AxeDev Tools", "Screen Readers", "Adobe Creative Suite"]
  }
};
