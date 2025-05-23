import React from 'react';
import { Film, Instagram, Twitter, Youtube, Facebook } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Film className="h-8 w-8 text-indigo-500 mr-2" />
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                Editkaro.in
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Professional video editing services for creators, brands, and businesses.
              We transform raw footage into compelling visual stories that captivate audiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-indigo-600 flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-indigo-600 flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-indigo-600 flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-indigo-600 flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-gray-400 hover:text-indigo-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#featured" className="text-gray-400 hover:text-indigo-400 transition-colors">Featured Work</a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-indigo-400 transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-indigo-400 transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-indigo-400 transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#short-form" className="text-gray-400 hover:text-indigo-400 transition-colors">Short Form Videos</a>
              </li>
              <li>
                <a href="#long-form" className="text-gray-400 hover:text-indigo-400 transition-colors">Long Form Content</a>
              </li>
              <li>
                <a href="#gaming" className="text-gray-400 hover:text-indigo-400 transition-colors">Gaming Edits</a>
              </li>
              <li>
                <a href="#ecommerce" className="text-gray-400 hover:text-indigo-400 transition-colors">E-commerce Videos</a>
              </li>
              <li>
                <a href="#color-grading" className="text-gray-400 hover:text-indigo-400 transition-colors">Color Grading</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {currentYear} Editkaro.in. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};