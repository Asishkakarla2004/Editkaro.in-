import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { VideoGallery } from './components/VideoGallery';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';
import { Testimonials } from './components/Testimonials';
import { Featured } from './components/Featured';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <Hero />
      <Featured />
      <VideoGallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;