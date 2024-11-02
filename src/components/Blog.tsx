import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, MessageCircle } from 'lucide-react';

const blogs = [
  {
    title: "APIs: The Backbone of Seamless UX",
    excerpt: "APIs are the backbone of a seamless UX—but optimizing them is often easier said than done. Some strategies to enhance API performance in web apps...",
    date: "March 2024",
    readTime: "5 min read",
    comments: 1,
    category: "Tech",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "The Parable of the Sinking Ship",
    excerpt: "Let's consider a scenario that mirrors a common dilemma in organizational decision-making. Picture a ship facing turbulent waters...",
    date: "February 2024",
    readTime: "4 min read",
    comments: 30,
    category: "Leadership",
    image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Journey Through Examinations",
    excerpt: "Real strength isn't just in acing exams; it's in rising after each fall, understanding that the marks we miss teach us as much as the ones we hit...",
    date: "January 2024",
    readTime: "3 min read",
    comments: 522,
    category: "Personal",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Blog() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Thoughts & Insights</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Sharing my experiences and learnings about product management, leadership, and personal growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-slate-800">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    {post.comments}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
                  {post.title}
                </h3>

                <p className="text-slate-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <button className="inline-flex items-center gap-2 text-slate-800 font-medium group/btn">
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors inline-flex items-center gap-2">
            View All Posts
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}