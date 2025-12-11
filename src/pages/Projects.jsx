import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// The project data import remains the same
import { projects } from '../constants/indes.js'; 
import CTA from '../components/CTA.jsx';

// FIX: Adopted dark text constants from About.jsx for high contrast against light glass
const GLASS_TITLE_TEXT = "text-gray-900 font-extrabold"; 
const GLASS_BODY_TEXT = "text-gray-700"; 

// Framer Motion variants for individual card animation
const cardItemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

// --- Project Card Component (Light Glass, Dark Text) ---
const ProjectCard = ({ project }) => (
    <motion.div 
        // FIX: Reverted to light, translucent background (bg-white/15)
        className="bg-white/15 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-2xl 
                   transform transition-all duration-500 ease-in-out flex flex-col h-full 
                   hover:shadow-indigo-400/50 hover:-translate-y-1 hover:rotate-z-[1deg]"
        variants={cardItemVariants}
    >
        <header className="mb-4">
            {/* Titles are now dark gray */}
            <h3 className={`text-xl ${GLASS_TITLE_TEXT} mb-1 flex items-center`}>
                <span className="mr-3 text-3xl transition-transform duration-300 hover:scale-110">{project.icon}</span>
                {project.name}
            </h3>
            
            {/* Date Display (remains colored for visual interest) */}
            <p className="text-sm font-medium text-blue-500 mt-2 tracking-wider">
                {project.date}
            </p>
        </header>

        {/* Descriptive Text is now dark gray */}
        <p className={`mb-4 flex-grow text-sm ${GLASS_BODY_TEXT} leading-relaxed`}>
            {project.description}
        </p>

        {/* Tags and Link (contrast retained) */}
        <footer className="mt-auto pt-4 border-t border-white/10">
            <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                    <span 
                        key={index} 
                        className="text-xs font-medium px-3 py-1 rounded-full 
                                   bg-blue-700/80 text-white shadow-lg transition-colors duration-200 
                                   hover:bg-blue-500/90"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            {/* Action button linked to GitHub */}
            <Link 
                to={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block text-sm font-semibold text-white bg-indigo-500 px-5 py-2.5 rounded-lg 
                           shadow-lg shadow-indigo-500/40 hover:bg-indigo-600 transition-all duration-300 
                           transform hover:scale-[1.02]"
            >
                View Repository &rarr;
            </Link>
        </footer>
    </motion.div>
);


// Variants for the overall container (needed for staggered animation)
const projectContainerVariants = {
    show: { transition: { staggerChildren: 0.1 } }
};


const Projects = () => {
  return (
    <section className="min-h-screen py-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-color-gray-900)_20%,_var(--tw-color-indigo-950)_100%)] text-white relative overflow-hidden"> 
      
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] pointer-events-none" />
      
      {/* Primary Content Wrapper */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16 relative z-10"> 
        
        {/* --- 1. HEADER / INTRO BOX - Light Glass, Dark Text --- */}
        {/* FIX: Reverted to light, translucent background (bg-white/15) */}
        <div className="bg-white/15 backdrop-blur-lg border border-white/20 p-8 md:p-10 rounded-3xl shadow-2xl shadow-indigo-900/50 transition-shadow duration-500 text-center max-w-4xl mx-auto">
            
            <h1 className="head-text text-4xl md:text-6xl font-black text-center mb-3 leading-tight"> 
                {/* Headers are now dark gray */}
                <span className={GLASS_TITLE_TEXT}>
                  My{' '}
                </span>
                {/* Gradient remains colorful */}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-pink-600">
                    Projects
                </span>
            </h1>
            
            {/* Descriptive Paragraph Area is now dark gray */}
            <p className={`mt-4 ${GLASS_BODY_TEXT} max-w-2xl text-lg leading-relaxed mx-auto`}>
                My portfolio showcases functional prototypes built to solidify core programming concepts. Every project demonstrates hands-on application of front-end, back-end integration, and foundational system design, reflecting my commitment to practical learning.
            </p>

        </div>
        
        {/* --- 2. PROJECTS SECTION HEADER --- */}
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent my-12" />

        <div className="text-center">
            {/* Header is now dark gray */}
            <h2 className={`text-4xl font-extrabold ${GLASS_TITLE_TEXT}`}>
                Featured Prototypes
            </h2>
        </div>

        {/* --- 3. PROJECT CARDS CONTAINER --- */}
        <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-10" 
            id="project-container"
            variants={projectContainerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
        >
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </motion.div>
        
        {/* --- 4. CALL TO ACTION --- */}
        <div className='mt-20'>
          <hr className='border-white/20 mb-10'/>
          <CTA/>
        </div>
        
      </div>
    </section>
  );
}

export default Projects;