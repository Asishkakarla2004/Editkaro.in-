import React, { useState, useEffect, useRef } from 'react';
import { videos, categories } from '../data/videos';
import { Play, Clock } from 'lucide-react';
import { VideoCategory } from '../types';

export const VideoGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<VideoCategory | 'all'>('all');
  const [filteredVideos, setFilteredVideos] = useState(videos);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredVideos(videos);
    } else {
      setFilteredVideos(videos.filter(video => video.category === selectedCategory));
    }
  }, [selectedCategory]);

  const handleCategoryChange = (category: VideoCategory | 'all') => {
    setSelectedCategory(category);
    
    // Scroll the container back to the top when changing categories
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-8"></div>
          
          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <button
              onClick={() => handleCategoryChange('all')}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                selectedCategory === 'all'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              All
            </button>
            
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id as VideoCategory)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  selectedCategory === category.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Video grid */}
        <div 
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredVideos.map(video => (
            <div 
              key={video.id}
              className="group relative overflow-hidden rounded-lg bg-gray-800 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={video.thumbnailUrl} 
                  alt={video.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white mb-1">{video.title}</h3>
                <p className="text-sm text-gray-300 mb-2">{video.description}</p>
                <div className="flex items-center text-xs text-indigo-300">
                  <Clock className="w-3 h-3 mr-1" />
                  <span>{video.duration}</span>
                </div>
              </div>
              
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <button className="w-16 h-16 rounded-full bg-indigo-600/80 hover:bg-indigo-600 flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-300">
                  <Play className="w-6 h-6 text-white" />
                </button>
              </div>
              
              <div className="absolute top-2 right-2 bg-black/60 text-xs text-white px-2 py-1 rounded">
                {video.category.replace('-', ' ')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};