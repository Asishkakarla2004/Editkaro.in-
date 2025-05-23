import React from 'react';
import { videos } from '../data/videos';
import { Play } from 'lucide-react';

export const Featured = () => {
  const featuredVideos = videos.filter(video => video.featured);
  
  return (
    <section id="featured" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredVideos.map((video, index) => (
            <div 
              key={video.id} 
              className={`relative overflow-hidden rounded-lg group ${
                index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <div className="aspect-video w-full overflow-hidden bg-gray-800">
                <img 
                  src={video.thumbnailUrl} 
                  alt={video.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity group-hover:opacity-90"></div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                  <div className="flex items-center text-indigo-400 text-sm mb-2">
                    <span className="uppercase tracking-wider">{video.category.replace('-', ' ')}</span>
                    <span className="mx-2">•</span>
                    <span>{video.duration}</span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{video.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {video.description}
                  </p>
                </div>
                
                <button className="w-12 h-12 rounded-full bg-indigo-600 hover:bg-indigo-700 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                  <Play className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};