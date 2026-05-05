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
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
];

export const milestones = [
  {
    title: "Academic Project Developer",
    period: "2024–Present",
    description: "Led develoapment of real-world inspired university projects",
    points: [
      "Developed RouteHive transport management system using React, Flask, and Leaflet",
      "Implemented OTP-based email verification and password reset system",
      "Built enrollment management with admin approval and automated email notifications",
      "Simulated bus and user live-location tracking on a map"
    ]
  },
  {
    title: "Independent Developer",
    period: "2023–Present",
    description: "Executed self-driven software projects to strengthen practical skills",
    points: [
      "Built a 3D interactive portfolio using React Three Fiber",
      "Designed reusable UI components, custom animations, and form handling",
      "Integrated EmailJS for contact messaging"
    ]
  },
  {
    title: "Team Project Contributor",
    period: "University Group Work",
    description: "Collaborated in teams of 5–6 members to deliver software projects",
    points: [
      "Handled backend logic and API structure",
      "Modeled databases and maintained version control (Git)",
      "Integrated frontend with React"
    ]

  },
  {
  title: "Participant, Global Hackathon",
  organization: "Harvard Health Systems Innovation Lab (HSIL)",
  date: "April 2026",
  description: [
    "Participated in the global health systems innovation event.",
    "Validated technical triage logic and project implementation."
  ],
  certificateUrl: "https://drive.google.com/file/d/1ggwnh-ZNPw0nC-yThGv_IzbluBBaCoUk/view?usp=drive_link"
}
];



export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        name: "Route Hive: Bus Operations Optimizer",
        description: "A web-based platform designed to digitize and optimize university bus operations, enhancing punctuality, communication, and transparency. Features include online enrollment, automated route assignment, and simulated bus tracking with map integration.",
        tags: ["React.js", "Flask", "SQLite", "Leaflet.js"],
        link: "https://github.com/Shasank12345/ROUTE_HIVE",
        icon: "🚌",
        date: "May 2025 - Present" 
    },
    {
        name: "CuraMind: Mental Health Chatbot Prototype",
        description: "Full-stack prototype for an initial mental health resource. It allows users to check symptoms via a smart chatbot and connects them with medical professionals, focusing on robust authentication and complex multi-module integration.",
        tags: ["Python/Flask", "Chatbot Logic", "Authentication", "Database Design"],
        link: "https://github.com/Shasank12345/QT_PROJECT", 
        icon: "🧠",
        date: "Recent Prototype (2 Weeks Ago - Present)" 
    },
    {
        name: "Faculty Management System (Desktop)",
        description: "A desktop application built using C++ and the Qt framework for faculty to streamline internal interactions and management processes. This project focuses on native application development and efficient system design.",
        tags: ["C++", "Qt Framework", "Desktop App", "System Design"],
        link: "https://github.com/Shasank12345/QT_PROJECT", 
        icon: "🖥️",
        date: "Late 2024 - Early 2025" 
    },
];