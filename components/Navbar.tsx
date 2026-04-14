import React from 'react';
import { motion } from 'framer-motion';
import { Network, Terminal, User } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center">
            <Terminal className="w-5 h-5 text-blue-400" />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-heading font-bold tracking-widest uppercase text-sm md:text-base">Arzoo Rai</span>
            <span className="text-white/50 font-mono text-[10px] tracking-[0.2em] uppercase">AI Developer</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#mind-palace" className="text-white/60 hover:text-white font-mono text-xs uppercase tracking-widest transition-colors flex items-center gap-2">
            <Network className="w-3.5 h-3.5" /> Interactive Map
          </a>
          <a href="#experience" className="text-white/60 hover:text-white font-mono text-xs uppercase tracking-widest transition-colors flex items-center gap-2">
            <User className="w-3.5 h-3.5" /> Experience
          </a>
          <a href="#projects" className="text-white/60 hover:text-white font-mono text-xs uppercase tracking-widest transition-colors flex items-center gap-2">
            <User className="w-3.5 h-3.5" /> Projects
          </a>
        </div>

        <a href="#contact">
          <button className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase tracking-widest rounded-full transition-colors border border-white/20">
          Contact
          </button>
        </a>

      </div>
    </nav>
  );
}
