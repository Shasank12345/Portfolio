import React from 'react';
import { skills, milestones } from '../constants/indes.js';
import { motion } from 'framer-motion';
import CTA from '../components/CTA.jsx';

// Defined class for visible dark titles on light glass
const GLASS_TITLE_TEXT = "text-gray-900 font-extrabold";
const GLASS_BODY_TEXT = "text-gray-700";

const TimelineItem = ({ title, organization, date, description, index }) => {
  const isLeft = index % 2 === 0;

  const renderDescription = () => {
    if (Array.isArray(description)) {
      return (
        // Changed to dark body text for contrast
        <ul className={`${GLASS_BODY_TEXT} mt-2 list-disc ml-5 space-y-1 text-justify`}>
          {description.map((item, i) => (
            <li key={i} className="text-xs md:text-sm leading-snug">{item}</li>
          ))}
        </ul>
      );
    }
    // Changed to dark body text for contrast
    return <p className={`${GLASS_BODY_TEXT} mt-2 whitespace-pre-line text-justify text-xs md:text-sm leading-snug`}>{description}</p>;
  };

  return (
    <div className="relative w-full mb-12 flex flex-col md:flex-row"> 
      {/* Vertical line - Remains colorful */}
      <div className="absolute left-4 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 h-full transform md:-translate-x-1/2 rounded-full" />

      {/* Dot */}
      <motion.div
        className={`absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transform md:-translate-x-1/2 z-10 shadow-lg border-2 border-gray-900`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.3 }}
      />

      {/* Desktop card - Glassy Style Applied (Transparent white background) */}
      <div
        className={`hidden md:flex w-1/2 ${
          isLeft 
            ? 'justify-end pr-6 text-right'
            : 'justify-start pl-6 text-left ml-auto'
        }`}
      >
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -50 : 50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: index * 0.1 }}
          // Glass style retained
          className="bg-white/5 backdrop-blur-xl border border-white/20 p-5 rounded-lg shadow-xl hover:scale-[1.02] transition-all duration-300 max-w-sm"
        >
          {/* Changed text color to dark gray */}
          <h3 className={`text-lg ${GLASS_TITLE_TEXT}`}>{title}</h3>
          <p className="text-xs text-blue-500 mt-0.5 italic">{organization}</p>
          <p className="text-xs text-gray-500 mt-0.5 font-mono">{date}</p>
          {description && renderDescription()}
        </motion.div>
      </div>

      {/* Mobile card - Glassy Style Applied */}
      <div className="md:hidden w-full pl-10">
        <motion.div
          initial={{ opacity: 0, x: -20, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: index * 0.05 }}
          className="bg-white/5 backdrop-blur-xl border border-white/20 p-4 rounded-lg shadow-lg mb-4 hover:scale-[1.01] transition-all duration-300"
        >
          {/* Changed text color to dark gray */}
          <h3 className={`text-base ${GLASS_TITLE_TEXT}`}>{title}</h3>
          <p className="text-xs text-blue-500 mt-0.5 italic">{organization}</p>
          <p className="text-xs text-gray-500 mt-0.5 font-mono">{date}</p>
          {description && renderDescription()}
        </motion.div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    // Background remains dark
    <section className="min-h-screen py-16 bg-[radial-gradient(ellipse_at_top,_var(--tw-color-gray-900)_30%,_var(--tw-color-indigo-900)_100%)] text-white"> 
      
      {/* Primary Content Wrapper */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-10 md:space-y-12"> 
        
        {/* --- 1. HEADER / INTRO BOX - Glassy Style Applied --- */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/20 p-6 md:p-8 rounded-xl shadow-2xl hover:shadow-indigo-500/30 transition-shadow duration-500 text-center">
            {/* FIX: Removed md:text-left to ensure centering on all devices */}
            <h1 className="head-text text-3xl md:text-5xl font-extrabold text-center">
                {/* Headers revert to dark text for contrast on transparent background */}
                <span className={GLASS_TITLE_TEXT}>
                  Hello, I am{' '}
                </span>
                {/* The name remains colorful for emphasis */}
                <span className="font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-pink-600">
                    SHASANK SINGH THAKURI
                </span>
            </h1>
            
            {/* FIX: Removed border and left-align overrides to allow centering */}
            <p className={`mt-4 ${GLASS_BODY_TEXT} max-w-3xl text-sm md:text-lg text-center leading-relaxed mx-auto`}>
                Computer Engineer based in Nepal, passionate about hands-on learning and creating
                practical applications to enhance technical education.
            </p>
        </div>

        {/* --- 2. SKILLS BOX - Glassy Style Applied --- */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/20 p-6 md:p-8 rounded-xl shadow-2xl hover:shadow-pink-500/30 transition-shadow duration-500">
            {/* FIX: Removed md:text-left to ensure centering on all devices */}
            <h3 className={`subhead-text text-2xl md:text-3xl mb-10 text-center ${GLASS_TITLE_TEXT}`}>
                My Skills
            </h3>
            
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-5 justify-items-center"> 
            {skills.map((skill, idx) => (
                <motion.div
                    key={idx}
                    whileHover={{ scale: 1.1 }}
                    className="relative w-16 h-16 group cursor-pointer"
                >
                    {/* Tooltip text remains white, but is fine as it has a solid background */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 px-1.5 py-0.5 bg-blue-600 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20">
                        {skill.name}
                    </div>

                    {/* Icon Container - Glassy style for icons */}
                    <div className="relative bg-white/10 border border-white/30 rounded-lg flex justify-center items-center w-full h-full shadow-lg backdrop-blur-sm">
                        <img
                            src={skill.imageUrl}
                            alt={skill.name}
                            className="w-10 h-10 object-contain"
                        />
                    </div>
                </motion.div>
            ))}
            </div>
        </div>

        {/* --- 3. MILESTONES / TIMELINE BOX - Glassy Style Applied --- */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/20 p-6 md:p-8 rounded-xl shadow-2xl hover:shadow-blue-500/30 transition-shadow duration-500">
            {/* FIX: Removed md:text-left to ensure centering on all devices */}
            <h3 className={`subhead-text text-2xl md:text-3xl mb-12 text-center ${GLASS_TITLE_TEXT}`}>
                Learning & Achievements
            </h3>
            <div className="relative">
                {milestones.map((milestone, idx) => (
                <TimelineItem key={idx} index={idx} {...milestone} />
                ))}
            </div>
        </div>
      </div>
      
      {/* FIX: Replaced <hr> with a visually consistent gradient separator */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-16 mb-8">
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
      </div>
      
      <CTA/>
    </section>
  );
};

export default About;