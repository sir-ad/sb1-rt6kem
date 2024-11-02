import React from 'react';
import { BookOpen } from 'lucide-react';

const books = [
  {
    title: "Retire Today?",
    cover: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=400",
    description: "Learn to determine your ideal retirement fund size for financial freedom",
    year: "2020",
    platform: "Google Play Books"
  },
  {
    title: "Halcyon: Your Finance Guide",
    cover: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=400",
    description: "Master personal finance strategies for lifelong financial security",
    year: "2020",
    platform: "Notion Press"
  }
];

export default function Books() {
  return (
    <div className="py-12">
      <div className="flex items-center gap-2 mb-8">
        <BookOpen className="w-6 h-6 text-slate-700" />
        <h2 className="text-3xl font-bold text-slate-800">Published Works</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {books.map((book, index) => (
          <div key={index} className="group relative">
            <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 group-hover:scale-105">
              <img
                src={book.cover}
                alt={book.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 p-6">
                  <p className="text-sm text-slate-300">{book.platform} · {book.year}</p>
                  <h3 className="mt-2 text-xl font-bold text-white">{book.title}</h3>
                  <p className="mt-2 text-sm text-gray-300">{book.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}