import React, { useState } from 'react';

const Navbar = ({ toggleModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky-nav py-4">
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <span className="text-white font-bold text-xl">N</span>
          </div>
          <span className="ml-3 text-xl font-bold text-dark font-['Raleway']">NEXUS DIGITAL</span>
        </div>
        
        <div className="hidden md:flex space-x-8">
          {['Home', 'About', 'Services', 'AI Solutions', 'Projects', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className="text-dark hover:text-primary transition font-medium"
            >
              {item}
            </a>
          ))}
        </div>
        
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleModal}
            className="bg-primary text-white px-5 py-2 rounded-lg font-semibold hover:bg-secondary transition hidden md:block"
          >
            Book Demo
          </button>
          <button 
            id="mobile-menu-button" 
            className="md:hidden text-dark"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4">
          <div className="flex flex-col space-y-4 px-6">
            {['Home', 'About', 'Services', 'AI Solutions', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="text-dark hover:text-primary transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button 
              onClick={toggleModal}
              className="bg-primary text-white px-5 py-2 rounded-lg font-semibold hover:bg-secondary transition mt-2"
            >
              Book Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;