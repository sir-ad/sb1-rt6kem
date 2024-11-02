import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#111111]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
        <div className="absolute inset-0 backdrop-blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                Adarsh Agrahari
              </h1>
              <div className="text-xl md:text-2xl text-gray-400 h-20">
                <TypeAnimation
                  sequence={[
                    'Director of Product',
                    2000,
                    'Tech Leader',
                    2000,
                    'Mentor & Author',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </div>
            </div>
            
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Driving innovation through technology and leadership. Building products that matter, 
              leading teams that inspire, and mentoring the next generation of tech leaders.
            </p>
            
            <div className="flex gap-4">
              <button className="group px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex items-center gap-2">
                View Journey
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-6 py-3 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-800 transition-all">
                Connect
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=2071"
                alt="Professional headshot"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-lg shadow-xl">
              <p className="font-semibold">Product King Award</p>
              <p className="text-sm text-blue-200">Paytail 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}