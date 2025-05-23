import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    // Show success message (would be implemented with state in a real app)
    alert('Message sent successfully! We will get back to you soon.');
  };
  
  return (
    <section id="contact" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to transform your video content? Contact us today for a free consultation or quote.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact information */}
          <div className="lg:col-span-2 bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-6 text-white">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-indigo-500 mt-1 mr-3" />
                <div>
                  <p className="text-sm text-gray-400">Email us at</p>
                  <a href="mailto:info@editkaro.in" className="text-white hover:text-indigo-400 transition-colors">
                    info@editkaro.in
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-indigo-500 mt-1 mr-3" />
                <div>
                  <p className="text-sm text-gray-400">Call us at</p>
                  <a href="tel:+919876543210" className="text-white hover:text-indigo-400 transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-indigo-500 mt-1 mr-3" />
                <div>
                  <p className="text-sm text-gray-400">Our studio</p>
                  <address className="not-italic text-white">
                    123 Creative Studios,<br />
                    Film City, Mumbai - 400065,<br />
                    Maharashtra, India
                  </address>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-800">
              <h4 className="text-lg font-medium mb-4 text-white">Our Services</h4>
              <ul className="grid grid-cols-2 gap-2">
                <li className="text-gray-400 text-sm">• Short-form videos</li>
                <li className="text-gray-400 text-sm">• Documentary films</li>
                <li className="text-gray-400 text-sm">• E-commerce ads</li>
                <li className="text-gray-400 text-sm">• Gaming montages</li>
                <li className="text-gray-400 text-sm">• Color grading</li>
                <li className="text-gray-400 text-sm">• Sports highlights</li>
              </ul>
            </div>
          </div>
          
          {/* Contact form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-white"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-white"
                >
                  <option value="">Select a subject</option>
                  <option value="Quote Request">Quote Request</option>
                  <option value="Project Inquiry">Project Inquiry</option>
                  <option value="Collaboration">Collaboration</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-white"
                  placeholder="Tell us about your project or requirements..."
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg font-medium flex items-center justify-center transition-all duration-300"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};