import React, {useState} from 'react'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-full max-w-max z-50">
      <div className="bg-[#111] border border-[#222] rounded-lg backdrop-blur-lg shadow-xl">
        <div className="flex items-center justify-center h-14 px-6 space-x-6">
          {['home', 'skills', 'projects', 'experience', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`${
                activeSection === section 
                  ? 'text-[#74C365] border-[#333]' 
                  : 'text-gray-400 hover:text-gray-200'
              } px-4 py-2 rounded-md text-sm font-medium transition-all duration-300`}
              onClick={() => setActiveSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar