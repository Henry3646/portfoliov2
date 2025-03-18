import { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const smoothScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Adjust this value based on your header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
  
      // Update URL without jumping
      window.history.pushState({}, '', `#${id}`);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100; // Adjust 100 based on your header height

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId || 'home');
        }
      });
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();

    // Remove listener on cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  

  return (
    <nav className="fixed top-4 md:left-1/2 right-4  md:-translate-x-1/2 w-full max-w-max z-50">
      <div className="bg-[#111] border border-[#222] rounded-lg backdrop-blur-lg shadow-xl">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-4 text-gray-400 hover:text-[#74C365]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Navigation Links */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <div className="flex flex-col md:flex-row items-center md:justify-center md:h-14 px-6 space-y-4 md:space-y-0 md:space-x-6 py-4 md:py-0">
            {['home', 'skills', 'experience', 'projects', 'contact'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`${
                  activeSection === section 
                    ? 'text-[#74C365] border-[#333]' 
                    : 'text-gray-400 hover:text-gray-200'
                } px-4 py-2 rounded-md text-base md:text-sm font-medium transition-all duration-300`}
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo(section);
                  setActiveSection(section);
                  setIsMenuOpen(false);
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;