import React, { useState, useEffect } from 'react';
import { testimonials } from '../data/videos';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 8000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection('left');
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection('right');
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm p-8 md:p-12">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-indigo-500/20" />
            
            <div className="relative z-10">
              <div className="mb-8">
                <p className={`text-lg md:text-xl text-gray-300 italic leading-relaxed transition-all duration-500 ${
                  isAnimating 
                    ? direction === 'right' 
                      ? 'transform -translate-x-8 opacity-0' 
                      : 'transform translate-x-8 opacity-0'
                    : 'transform translate-x-0 opacity-100'
                }`}>
                  "{testimonials[currentIndex].testimonial}"
                </p>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-indigo-500">
                  <img 
                    src={testimonials[currentIndex].avatarUrl} 
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover" 
                  />
                </div>
                
                <div>
                  <h4 className="font-semibold text-white">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-indigo-400">{testimonials[currentIndex].company}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            <button 
              onClick={goToPrev}
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-indigo-600 flex items-center justify-center transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 'right' : 'left');
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentIndex === index 
                      ? 'bg-indigo-500 w-6' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={goToNext}
              className="w-10 h-10 rounded-full bg-gray-800 hover:bg-indigo-600 flex items-center justify-center transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};