// index.js
export const servicesData = [
  {
    title: "Business Analysis & Requirements Engineering",
    description:
      "I translate business needs into clear, actionable requirements. From stakeholder discussions to BRDs, FRDs, user stories and acceptance criteria, I help bridge the gap between business expectations and technical solutions.",
    items: [
      {
        title: "Requirements Gathering",
        description: "(Stakeholder Interviews, Workshops, Scope Definition)",
      },
      {
        title: "BRD & FRD Documentation",
        description: "(Business & Functional Requirement Specifications)",
      },
      {
        title: "User Stories & Acceptance Criteria",
        description: "(Agile Epics, User Stories, Gherkin/Given-When-Then Criteria)",
      },
    ],
  },
  {
    title: "Data Analysis & Business Intelligence",
    description:
      "I transform raw business data into meaningful insights using SQL, Excel and Power BI. Through data exploration, visualisation and performance reporting, I help organisations identify trends, measure KPIs and make informed business decisions.",
    items: [
      {
        title: "SQL & Data Querying",
        description: "(Complex Joins, Aggregations, CTEs, Data Extraction)",
      },
      {
        title: "Advanced Excel & Data Analysis",
        description: "(Pivot Tables, XLOOKUP, Data Cleaning, Financial Modeling)",
      },
      {
        title: "Power BI Dashboards & Reporting",
        description: "(Interactive Dashboards, DAX Measures, KPI Tracking)",
      },
    ],
  },
  {
    title: "Agile Project & Stakeholder Management",
    description:
      "I bring structure to project execution through Agile methodologies, effective stakeholder collaboration and clear communication. I use Jira and Confluence to manage requirements, track progress, coordinate sprint activities and keep business and technical teams aligned.",
    items: [
      {
        title: "Agile & Scrum Methodologies",
        description: "(Sprint Planning, Daily Standups, Backlog Grooming, Retrospectives)",
      },
      {
        title: "Jira Project Management",
        description: "(Kanban & Scrum Boards, Workflow Customization, Issue Tracking)",
      },
      {
        title: "Stakeholder Communication",
        description: "(Cross-functional Alignment, Status Reporting, Expectation Management)",
      },
    ],
  },
  {
    title: "Business Process Analysis & Improvement",
    description:
      "I analyse business workflows to uncover inefficiencies, identify improvement opportunities and streamline operations through process mapping, gap analysis and structured problem-solving, helping teams deliver practical, measurable business improvements.",
    items: [
      {
        title: "As-Is & To-Be Process Mapping",
        description: "(BPMN Diagrams, Flowcharts, Swimlane Diagrams)",
      },
      {
        title: "Gap & Root Cause Analysis",
        description: "(5 Whys, Fishbone / Ishikawa, Pain-Point Identification)",
      },
      {
        title: "Workflow Optimisation",
        description: "(Operational Streamlining, Waste Reduction, Efficiency Metrics)",
      },
    ],
  },
];
const baseUrl = import.meta.env.BASE_URL;

export const projects = [
  {
    id: 1,
    name: "Mobile Accessories E-commerce",
    description:
      "An online store specializing in phone accessories including cases, chargers, cables, and power banks with MagSafe compatibility.",
    href: "",
    image: `${baseUrl}assets/projects/mobile-accessories-store.jpg`,
    bgImage: `${baseUrl}assets/backgrounds/blanket.jpg`,
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Node.js" },
      { id: 4, name: "MongoDB" },
      { id: 5, name: "Tailwind CSS" },
    ],
  },
  {
    id: 2,
    name: "Plant Shop E-commerce",
    description:
      "An online store specializing in rare and decorative plants with a clean, user-friendly interface.",
    href: "",
    image: `${baseUrl}assets/projects/plant-shop.jpg`,
    bgImage: `${baseUrl}assets/backgrounds/curtains.jpg`,
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Stripe API" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
  {
    id: 3,
    name: "Apple Tech Marketplace",
    description:
      "An e-commerce platform for Apple products and accessories with deals and category filtering.",
    href: "",
    image: `${baseUrl}assets/projects/apple-tech-store.jpg`,
    bgImage: `${baseUrl}assets/backgrounds/map.jpg`,
    frameworks: [
      { id: 1, name: "Blazor" },
      { id: 2, name: "ASP.NET Core" },
      { id: 3, name: "SQL Server" },
      { id: 4, name: "Bootstrap" },
    ],
  },
  {
    id: 4,
    name: "Electronics & Gadgets Store",
    description:
      "A multi-category online shop featuring electronics, home appliances, and gaming gear with special offers.",
    href: "",
    image: `${baseUrl}assets/projects/electronics-store.jpg`,
    bgImage: `${baseUrl}assets/backgrounds/poster.jpg`,
    frameworks: [
      { id: 1, name: "Vue.js" },
      { id: 2, name: "Laravel" },
      { id: 3, name: "MySQL" },
      { id: 4, name: "SCSS" },
    ],
  },
  {
    id: 5,
    name: "Home Decor Marketplace",
    description:
      "A curated collection of designer home decor items, including furniture and artisan vases.",
    href: "",
    image: `${baseUrl}assets/projects/home-decor-store.jpg`,
    bgImage: `${baseUrl}assets/backgrounds/table.jpg`,
    frameworks: [
      { id: 1, name: "Angular" },
      { id: 2, name: "Firebase" },
      { id: 3, name: "GraphQL" },
      { id: 4, name: "Material UI" },
    ],
  },
  {
    id: 6,
    name: "Digital Game Store",
    description:
      "A gaming platform featuring discounted titles, top sellers, and genre-based browsing.",
    href: "",
    image: `${baseUrl}assets/projects/game-store.jpg`,
    bgImage: `${baseUrl}assets/backgrounds/curtains.jpg`,
    frameworks: [
      { id: 1, name: "Svelte" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "MongoDB" },
      { id: 4, name: "Chakra UI" },
    ],
  },
];
export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/teawithyash/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/yashwantkeyan/" },
  { name: "GitHub", href: "https://github.com/Devwithyashwant" },
];
