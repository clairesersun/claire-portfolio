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
export const caseStudies = [
  {
    id: "redesign-settings",
    slug: "redesign-settings",
    title: "Redesign Settings: IA + Accessibility Focus",
    subtitle: "Redesigning settings to reduce cognitive load and improve accessibility",
    tags: ["Information Architecture", "User Research", "Accessibility", "Vue/SCSS"],
    year: "2024",
    overview: "The user settings and profile pages were developer-designed with no clear structure or logic. Users struggled to find where to change information, settings were not grouped, and the cognitive load was high. My goal was to redesign the information architecture and accessibility while keeping the backend untouched.",
    challenges: [
      "Disorganized and ungrouped settings made it difficult for users to locate options",
      "Accessibility features were unclear and buried",
      "Users had to reload the page to switch between organizations, causing confusion",
      "Ten years of conflicting opinions and ad-hoc feature additions created complexity"
    ],
    research: "I gathered user feedback from Reddit discussions, internal tickets, Solutions Engineers, and surveys. Key findings showed users could not find settings easily, the grouping caused cognitive overload, and organization-specific reloads were frustrating.",
    approachTitle: "Key Innovation",
    approach: "Applied cognitive accessibility concepts like the \"black box\" idea so only categories were visible at first, reducing on-screen clutter. This progressive disclosure pattern specifically helps neurodivergent users by maintaining context while minimizing cognitive overload.",
    process: [
      "Analyzed the existing API response and compared it with competitors to find structural and naming patterns",
      "Brainstormed and grouped settings on a whiteboard, refining category names over several iterations to one-word labels",
      "Created wireframes on paper, then high-fidelity designs in Sketch, followed by interactive prototypes",
      "Validated accessibility with AxeDev Tools and screen readers to ensure color contrast and proper code structure",
      "Combined profile and settings pages into a unified interface while maintaining backend logic",
      "Coded the redesigned structure with accessible patterns in Vue/SCSS",
      "Used production testing with feature flags to identify bugs and refine user flows",
      "Added missing settings and improved post-release accessibility based on user tickets"
    ],
    resultsImpact: [
      "Users could locate and understand accessibility settings easily in a single organized view",
      "Reduced confusion and cognitive overload through clear categorization and progressive disclosure",
      "Improved accessibility awareness and adoption across the user base",
      "Received praise from users and internal teams for clarity and usability",
      "Successfully addressed ten years of legacy technical debt and conflicting design decisions"
    ],
    resultsTools: [
      "Sketch for high-fidelity wireframes and prototypes",
      "Whiteboard ideation and pen & paper sketching",
      "AxeDev Tools and macOS screen readers for accessibility testing",
      "Vue/SCSS for component implementation",
      "Feature flags for safe production testing",
      "Production analytics for validation"
    ]
  },
  {
    id: "messaging-modernization",
    slug: "messaging-modernization",
    title: "Messaging Modernization",
    subtitle: "Transforming a cluttered chat system into a streamlined, accessible experience",
    tags: ["UX Design", "Storybook", "Accessibility", "Vue/SCSS"],
    year: "2024",
    overview: "The existing messaging room lacked modern chat functionality and clarity. Users were losing context, threads were hard to find, and the system design did not align with upcoming app redesigns. I redesigned the experience to create a more intuitive, organized, and accessible messaging interface.",
    challenges: [
      "Users did not use or understand threads",
      "Lost context when navigating through cockpit views",
      "Lack of modern messaging features such as quoting and replies",
      "The interface did not align with the new design system"
    ],
    research: "I interviewed Solutions Engineers, gathered customer feedback, analyzed competitor designs and APIs, and studied discussions on what users valued in chat tools.",
    approachTitle: "Key Innovation",
    approach: "Conducted comparative analysis of modern chat systems (Slack, Discord, Teams) to identify user expectations and established patterns, then strategically adapted these patterns to fit existing technical constraints while maintaining comprehensive accessibility standards throughout.",
    process: [
      "Created sketches and whiteboard wireframes to explore layout and context flow",
      "Designed high-fidelity screens in Sketch to visualize quoting, replies, and side-by-side threads",
      "Simplified overflow and action menus for clearer user interactions",
      "Added contextual information blocks to maintain message relevance",
      "Built accessibility checks using AxeDev Tools and screen readers",
      "Rebuilt and documented UI code in Storybook to support scalability and easier debugging",
      "Implemented frontend components in Vue/SCSS with full ARIA support and semantic HTML",
      "Released under a feature flag for internal testing in production environments",
      "Collected feedback from real users and adjusted for long text, system messages, and user access levels",
      "Improved sizing and screen reader text after real-world testing"
    ],
    resultsImpact: [
      "Organized, modern, and accessible messaging experience that users could navigate intuitively",
      "Reduced admin cleanup and increased contextual awareness through threaded conversations",
      "Seamlessly integrated into the upcoming app redesign with consistent visual and interaction patterns",
      "Matched modern user expectations for communication features like quoting and replies",
      "Improved accessibility compliance with proper ARIA support and screen reader optimization"
    ],
    resultsTools: [
      "Sketch for high-fidelity design and prototyping",
      "Whiteboard ideation and pen & paper sketching",
      "AxeDev Tools and macOS screen readers for accessibility testing",
      "Vue/SCSS for component implementation",
      "Storybook for component documentation and design system",
      "Feature flag testing with real users in production"
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
