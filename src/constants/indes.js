import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
} from "../assets/icons";

export const skills = [
    // --- Data Science & AI (Main Focus) ---
    { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", name: "Python", type: "Main" },
    { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", name: "NumPy", type: "Main" },
    { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", name: "Pandas", type: "Main" },
    { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", name: "AI/ML", type: "Main" },
    { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", name: "FastAPI", type: "Main" },
    { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", name: "Flask", type: "Main" },
    
    // --- Frontend & Web ---
    { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", name: "React", type: "Frontend" },
    { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", name: "Tailwind CSS", type: "Frontend" },
    { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", name: "HTML", type: "Frontend" },
    { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", name: "CSS", type: "Frontend" },
    
    // --- Systems & Version Control ---
    { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", name: "C", type: "Systems" },
    { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", name: "C++", type: "Systems" },
    { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", name: "Git", type: "Version Control" },
    { imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", name: "GitHub", type: "Version Control" },
];
export const milestones = [
  {
    title: "Full-Stack Developer",
    period: "2024–Present",
    description: "Architected and deployed data-driven web and desktop applications to solve real-world operational challenges.",
    points: [
      "Vital Sync: Engineered a high-speed data pipeline for automated trauma triage, utilizing AI to structure field notes into ER telemetry.",
      "Route Hive: Built a bus operations platform with real-time map integration, automated scheduling, and secure user authentication.",
      "CuraMind: Developed a telemedicine triage tool that automates clinical routing for injury assessment using standardized medical logic.",
      "Faculty Management: Created a native C++ desktop application with Qt to streamline internal faculty data and workflow management."
    ]
  },
  {
    title: "Healthcare Systems Innovator",
    organization: "Harvard Health Systems Innovation Lab (HSIL)",
    period: "April 2026",
    description: "Participated in a global hackathon focused on clinical technology and patient care innovation.",
    points: [
      "Collaborated in a high-pressure, cross-functional environment to prototype clinical triage workflows.",
      "Certification: [View Certificate](https://drive.google.com/file/d/1ggwnh-ZNPw0nC-yThGv_IzbluBBaCoUk/view?usp=drive_link)"
    ]
  }
];



export const socialLinks = [
    {
        name: 'Contact',
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
        link: 'https://github.com/Shasank12345',
    },
    {
        name: 'LinkedIn',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
        link: 'https://www.linkedin.com/in/shasank-singh-thakuri-b53267346/',
    }
];
export const projects = [
    {
        name: "Vital Sync: Trauma Triage Automation",
        description: "Engineered a high-speed data pipeline transforming unstructured field notes into structured ER telemetry. Implemented AI for real-time acuity scoring, reducing triage data entry latency.",
        tags: ["React", "FastAPI", "AI", "Data Pipelines"],
        repo: null,
        live: "https://app-bp72q5c4r0n5.appmedo.com/",
        icon: "🚑",
        date: "June 2026"
    },
    {
        name: "Route Hive: Bus Operations Optimizer",
        description: "Digitized university bus logistics with automated route assignment and real-time mapping. Reduced student wait times through efficient scheduling algorithms.",
        tags: ["React.js", "Flask", "SQLite", "Leaflet.js"],
        repo: "https://github.com/Shasank12345/ROUTE_HIVE",
        live: null,
        icon: "🚌",
        date: "May 2025 - August 2025"
    },
    {
        name: "CuraMind: AI Telemedicine Triage",
        description: "Automated clinical routing for musculoskeletal injuries using the Ottawa Ankle Rules. Streamlines patient intake and prioritizes specialist consultations through an AI-driven interface.",
        tags: ["Python", "Flask", "NLP", "SQLAlchemy"],
        repo: "https://github.com/Shasank12345/CURA_MIND",
        live: null,
        icon: "🧠",
        date: "Dec 2025 - Feb 2026"
    },
    {
        name: "Faculty Management System",
        description: "Native C++ desktop application built with Qt to streamline internal faculty workflows, interaction, and data management.",
        tags: ["C++", "Qt Framework", "Desktop App"],
        repo: "https://github.com/Shasank12345/QT_PROJECT",
        live: null,
        icon: "🖥️",
        date: "Late 2024 - Early 2025"
    },
];