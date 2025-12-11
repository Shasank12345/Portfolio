import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    // FIX 1: Applied Glassmorphism container styling
    <section 
        className='flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto my-12 py-10 px-8 
                   bg-white/5 backdrop-blur-xl border border-white/20 rounded-xl 
                   shadow-2xl shadow-indigo-500/30 transition-all duration-500'
    >
        
      {/* Text Container */}
      <p className='cta-text text-3xl md:text-4xl font-extrabold mb-6 md:mb-0 max-w-2xl leading-tight drop-shadow-lg'>
          
          {/* Main CTA text with gradient effect */}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
             Have a project in mind? 
          </span>
          
          <br className='sm:block'/>
          
          {/* Secondary supporting text (White text with shadow for visibility on glass) */}
          <span className="text-white drop-shadow-md">
             Let's build something together!
          </span>
      </p>

      {/* Button Link - Remains high-contrast to stand out */}
      <Link 
        to='/contact' 
        className='py-3 px-8 rounded-lg text-lg font-bold text-white 
                   bg-gradient-to-r from-pink-500 to-indigo-600 
                   shadow-lg hover:shadow-xl hover:shadow-pink-500/40 
                   transform hover:scale-[1.05] transition-all duration-300 whitespace-nowrap'
      >
          Contact Me
      </Link>

    </section>
  );
};

export default CTA;