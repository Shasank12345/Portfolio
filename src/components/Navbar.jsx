import { NavLink } from 'react-router-dom';
import { socialLinks } from '../constants/indes.js';

const Navbar = () => {
  return (
    <header className='flex justify-between items-center w-full px-6 py-4 bg-white/5 backdrop-blur-lg z-50 sticky top-0 border-b border-white/10 shadow-lg'>
      
      {/* Brand */}
      <NavLink to="/" className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center font-extrabold border border-blue-500 hover:bg-blue-500 transition-all">
        <p className="text-white">SST</p>
      </NavLink>

      {/* Main Nav */}
      <nav className='flex items-center gap-6 font-medium text-sm md:text-lg'>
        {['About', 'Projects', 'Contact'].map((item) => (
          <NavLink 
            key={item}
            to={`/${item.toLowerCase()}`} 
            className={({ isActive }) => 
              isActive ? 'text-blue-400 border-b-2 border-blue-400 pb-1' : 'text-gray-300 hover:text-white transition-colors'
            }
          >
            {item}
          </NavLink>
        ))}
      </nav>

      {/* Social Icons (Black logos on white glass bubbles) */}
      <div className='flex gap-3'>
        {socialLinks.map((link) => (
          link.name !== 'Contact' && (
            <a 
              key={link.name} 
              href={link.link} 
              target="_blank" 
              rel="noopener noreferrer"
              // The white/10 background creates a subtle "bubble" that makes the black logo pop
              className="w-9 h-9 flex items-center justify-center hover:scale-110 transition-transform bg-white/10 rounded-full border border-white/10 hover:bg-white/20"
            >
              <img 
                src={link.iconUrl} 
                alt={link.name} 
                className="w-5 h-5 object-contain" 
              />
            </a>
          )
        ))}
      </div>
      
    </header>
  );
};

export default Navbar;