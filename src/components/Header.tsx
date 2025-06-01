
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
      isScrolled ? 'backdrop-blur-lg shadow-2xl border-b' : 'bg-transparent'
    }`} style={{ 
      backgroundColor: isScrolled ? 'rgba(45, 45, 45, 0.95)' : 'transparent',
      borderBottomColor: isScrolled ? '#2D2D2D' : 'transparent'
    }}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold hover:scale-105 transition-transform duration-300 cursor-pointer"
               style={{ color: '#F4D35E' }}>
            Akshaya Muvva
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['About', 'Skills', 'Projects', 'Achievements', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="relative transition-all duration-300 font-medium group"
                style={{ color: '#E5E5E5' }}
                onMouseEnter={(e) => e.target.style.color = '#B68973'}
                onMouseLeave={(e) => e.target.style.color = '#E5E5E5'}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                      style={{ backgroundColor: '#B68973' }}></span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
