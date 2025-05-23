import { Video, Testimonial } from '../types';

export const videos: Video[] = [
  {
    id: '1',
    title: 'Social Media Promo',
    description: 'Fast-paced promotional video for Instagram and TikTok',
    category: 'short-form',
    thumbnailUrl: 'https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg',
    videoUrl: 'https://example.com/videos/video1.mp4',
    duration: '0:45',
    featured: true
  },
  {
    id: '2',
    title: 'Product Showcase',
    description: 'Elegant product showcase with smooth transitions',
    category: 'short-form',
    thumbnailUrl: 'https://images.pexels.com/photos/2440021/pexels-photo-2440021.jpeg',
    videoUrl: 'https://example.com/videos/video2.mp4',
    duration: '0:30'
  },
  {
    id: '3',
    title: 'Brand Documentary',
    description: 'In-depth look at a brand\'s journey and values',
    category: 'long-form',
    thumbnailUrl: 'https://images.pexels.com/photos/3379943/pexels-photo-3379943.jpeg',
    videoUrl: 'https://example.com/videos/video3.mp4',
    duration: '8:12',
    featured: true
  },
  {
    id: '4',
    title: 'Interview Series',
    description: 'Professional interview series with expert color grading',
    category: 'long-form',
    thumbnailUrl: 'https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg',
    videoUrl: 'https://example.com/videos/video4.mp4',
    duration: '12:35'
  },
  {
    id: '5',
    title: 'Apex Legends Highlights',
    description: 'Action-packed gaming highlights with dynamic effects',
    category: 'gaming',
    thumbnailUrl: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg',
    videoUrl: 'https://example.com/videos/video5.mp4',
    duration: '3:40'
  },
  {
    id: '6',
    title: 'Football Match Highlights',
    description: 'Cinematic edit of key football match moments',
    category: 'football',
    thumbnailUrl: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg',
    videoUrl: 'https://example.com/videos/video6.mp4',
    duration: '5:25',
    featured: true
  },
  {
    id: '7',
    title: 'E-commerce Ad Campaign',
    description: 'Series of product advertisements for an e-commerce platform',
    category: 'ecommerce',
    thumbnailUrl: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg',
    videoUrl: 'https://example.com/videos/video7.mp4',
    duration: '2:15'
  },
  {
    id: '8',
    title: 'Wildlife Documentary',
    description: 'Stunning footage of wildlife with professional narration',
    category: 'documentary',
    thumbnailUrl: 'https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg',
    videoUrl: 'https://example.com/videos/video8.mp4',
    duration: '18:42'
  },
  {
    id: '9',
    title: 'Film Color Grading Showcase',
    description: 'Before and after showcase of professional color grading',
    category: 'color-grading',
    thumbnailUrl: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg',
    videoUrl: 'https://example.com/videos/video9.mp4',
    duration: '4:10'
  },
  {
    id: '10',
    title: 'Anime Opening Recreation',
    description: 'Fan recreation of popular anime opening sequence',
    category: 'anime',
    thumbnailUrl: 'https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg',
    videoUrl: 'https://example.com/videos/video10.mp4',
    duration: '1:30'
  },
  {
    id: '11',
    title: 'Commercial Advertisement',
    description: 'Professional TV commercial for a major brand',
    category: 'ads',
    thumbnailUrl: 'https://images.pexels.com/photos/3945317/pexels-photo-3945317.jpeg',
    videoUrl: 'https://example.com/videos/video11.mp4',
    duration: '0:30',
    featured: true
  },
  {
    id: '12',
    title: 'Sporting Event Montage',
    description: 'Exciting montage of sporting event highlights',
    category: 'football',
    thumbnailUrl: 'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg',
    videoUrl: 'https://example.com/videos/video12.mp4',
    duration: '6:45'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    company: 'Digital Marketing Agency',
    testimonial: 'The video content created by Editkaro.in transformed our social media presence. The quality and creativity exceeded our expectations!',
    avatarUrl: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg'
  },
  {
    id: '2',
    name: 'Mark Chen',
    company: 'Sports Media Network',
    testimonial: 'Their football highlight edits are second to none. The pacing, music selection, and visual effects create truly engaging content.',
    avatarUrl: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg'
  },
  {
    id: '3',
    name: 'Priya Sharma',
    company: 'E-commerce Platform',
    testimonial: 'Our product videos have driven a 40% increase in conversions. Editkaro.in has a talent for showcasing products in the best possible light.',
    avatarUrl: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg'
  }
];

export const categories = [
  { id: 'short-form', name: 'Short Form' },
  { id: 'long-form', name: 'Long Form' },
  { id: 'gaming', name: 'Gaming' },
  { id: 'football', name: 'Football' },
  { id: 'ecommerce', name: 'eCommerce' },
  { id: 'documentary', name: 'Documentary' },
  { id: 'color-grading', name: 'Color Grading' },
  { id: 'anime', name: 'Anime' },
  { id: 'ads', name: 'Ads' }
];