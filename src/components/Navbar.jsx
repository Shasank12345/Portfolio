import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    // FIX: Reduced blur intensity, border opacity, and shadow size for a better "blend"
    <header className='flex justify-between items-center w-full px-8 py-4 bg-white/5 backdrop-blur-lg z-10 sticky top-0 border-b border-white/10 shadow-lg'>
      
      {/* Brand/Logo Link */}
      <NavLink 
        to="/" 
        className="w-10 h-10 rounded-lg bg-blue-500/10 items-center justify-center flex font-extrabold shadow-md border border-blue-500 hover:bg-blue-500 transition-colors duration-300"
      >
        {/* Text is white for contrast */}
        <p className="text-white drop-shadow-lg">SST</p>
      </NavLink>

      {/* Navigation Links Container */}
      <nav className='flex text-lg gap-7 font-medium'>
        
        {/* About Link */}
        <NavLink 
          to="/about" 
          className={({ isActive }) => 
            isActive 
              ? 'text-blue-400 border-b-2 border-blue-400 pb-1 transition-colors' 
              : 'text-gray-300 hover:text-white transition-colors'
          }
        >
          About
        </NavLink>

        {/* Projects Link */}
        <NavLink 
          to="/projects" 
          className={({ isActive }) => 
            isActive 
              ? 'text-blue-400 border-b-2 border-blue-400 pb-1 transition-colors' 
              : 'text-gray-300 hover:text-white transition-colors'
          }
        >
          Projects
        </NavLink>
      </nav>
      
    </header>
  )
}

export default Navbar