import React from 'react';
import { skills, milestones } from '../constants/indes.js';
import { motion } from 'framer-motion';
import CTA from '../components/CTA.jsx';

const GLASS_TITLE_TEXT = "text-gray-900 font-extrabold";
const GLASS_BODY_TEXT = "text-gray-700";

const About = () => {
  return (
    <section className="min-h-screen py-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-color-gray-900)_20%,_var(--tw-color-indigo-950)_100%)] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] pointer-events-none" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Header Section (Matching Projects Header) */}
        <div className="bg-white/15 backdrop-blur-lg border border-white/20 p-8 md:p-10 rounded-3xl shadow-2xl shadow-indigo-900/50 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
            <span className={GLASS_TITLE_TEXT}>Hello, I am </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-pink-600">SHASANK</span>
          </h1>
          <p className={`mt-4 ${GLASS_BODY_TEXT} text-lg leading-relaxed max-w-2xl mx-auto font-medium`}>
            Computer Engineer passionate about Data Science, AI/ML, and building scalable full-stack systems.
          </p>
        </div>

        {/* Technical Stack */}
        <div className="bg-white/15 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-2xl">
          <h3 className={`text-2xl font-bold mb-10 text-center ${GLASS_TITLE_TEXT}`}>Technical Stack</h3>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 justify-items-center">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.15, y: -5 }}
                className={`relative w-16 h-16 group cursor-pointer p-3 rounded-xl border backdrop-blur-md transition-all duration-300
                  ${skill.type === "Main"
                    ? "bg-blue-600/20 border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                    : "bg-white/10 border-white/20 hover:border-white/40"
                  }`}
              >
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs font-semibold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 border border-white/10">
                  {skill.name}
                </div>
                <img src={skill.imageUrl} alt={skill.name} className="w-full h-full object-contain" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-10">
          <h3 className={`text-3xl font-extrabold text-center ${GLASS_TITLE_TEXT}`}>Experience & Growth</h3>
          
          <div className="relative border-l-2 border-white/20 ml-3 md:ml-6 space-y-12">
            {milestones.map((milestone, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative pl-8 group"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900 shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
                
                <div className="bg-white/15 backdrop-blur-lg border border-white/20 p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 shadow-xl">
                  <h3 className={`text-xl ${GLASS_TITLE_TEXT}`}>{milestone.title}</h3>
                  {milestone.organization && <p className="text-sm font-bold text-blue-700">{milestone.organization}</p>}
                  <p className="text-xs font-mono text-gray-600 mb-4">{milestone.period || milestone.date}</p>
                  
                  <div className={`${GLASS_BODY_TEXT} text-sm opacity-90`}>
                    <p className="mb-3 font-medium italic">{milestone.description}</p>
                    <ul className="list-disc ml-4 space-y-2">
                      {milestone.points.map((point, i) => {
                        if (point.includes("[View Certificate]")) {
                            return <li key={i} dangerouslySetInnerHTML={{ __html: point.replace(/\[View Certificate\]\((.*?)\)/, '<a href="$1" target="_blank" class="text-blue-700 font-bold hover:text-pink-600 underline">View Certificate &rarr;</a>') }} />;
                        }
                        return <li key={i}>{point}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <hr className="border-white/20 mb-10" />
          <CTA />
        </div>
      </div>
    </section>
  );
};

export default About;