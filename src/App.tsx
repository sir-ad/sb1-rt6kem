import React from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import Books from './components/Books';
import Mentoring from './components/Mentoring';
import Chatbot from './components/Chatbot';
import Experience from './components/Experience';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="min-h-screen bg-[#111111]">
      <Hero />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 py-16"
      >
        <Experience />
      </motion.div>
      
      <Testimonials />
      <Blog />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 py-16"
      >
        <Books />
      </motion.div>
      
      <Mentoring />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 py-16 flex justify-center"
      >
        <Chatbot />
      </motion.div>
      
      <footer className="bg-black/50 backdrop-blur-xl text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2024 Adarsh Agrahari. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;