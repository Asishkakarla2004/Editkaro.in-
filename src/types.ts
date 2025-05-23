export interface Video {
  id: string;
  title: string;
  description: string;
  category: VideoCategory;
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  featured?: boolean;
}

export type VideoCategory = 
  | 'short-form'
  | 'long-form'
  | 'gaming'
  | 'football'
  | 'ecommerce'
  | 'documentary'
  | 'color-grading'
  | 'anime'
  | 'ads';

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  testimonial: string;
  avatarUrl: string;
}