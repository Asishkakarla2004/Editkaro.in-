import React, { useState, useEffect } from 'react';
import { Menu, X, Film } from 'lucide-react';
import { categories } from '../data/videos';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Film className="h-8 w-8 text-indigo-500 mr-2" />
          <span className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            Editkaro.in
          </span>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-white hover:text-indigo-400 transition-colors"
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('featured')}
                className="text-white hover:text-indigo-400 transition-colors"
              >
                Featured
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-white hover:text-indigo-400 transition-colors"
              >
                Portfolio
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-white hover:text-indigo-400 transition-colors"
              >
                Testimonials
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-indigo-400 transition-colors"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
        
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md">
          <ul className="py-4 px-4 space-y-4">
            <li>
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-white hover:text-indigo-400 transition-colors block w-full text-left"
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('featured')}
                className="text-white hover:text-indigo-400 transition-colors block w-full text-left"
              >
                Featured
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-white hover:text-indigo-400 transition-colors block w-full text-left"
              >
                Portfolio
              </button>
            </li>
            <li className="py-2 border-t border-gray-800">
              <div className="text-gray-400 text-sm mb-2">Categories</div>
              <div className="grid grid-cols-2 gap-2">
                {categories.map(category => (
                  <button 
                    key={category.id}
                    onClick={() => scrollToSection(category.id)}
                    className="text-gray-300 hover:text-indigo-400 text-sm transition-colors text-left"
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </li>
            <li className="border-t border-gray-800 pt-2">
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-white hover:text-indigo-400 transition-colors block w-full text-left"
              >
                Testimonials
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-indigo-400 transition-colors block w-full text-left"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};