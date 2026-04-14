"use client";

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { WorldMap } from './components/WorldMap';
import { SectionView } from './components/SectionView';
import bgImage from './mind_palace_bg.png';

export type SectionType = 
  | 'journey'    // Mushrooms
  | 'vision'     // Floating Castle/Crystal
  | 'skills'     // Clockwork Tower
  | 'lab'        // Under-Cave/Tree Door
  | 'knowledge'  // Library
  | 'portal'     // Sky Window / Cave Portal
  | 'blog'       // Top door 1
  | 'extra1'     // Top door 2
  | 'extra2'     // Top door 3
  | 'extra3'     // Top door 4
  | null;

function App() {
  const [activeSection, setActiveSection] = useState<SectionType>(null);
  const [zoomTarget, setZoomTarget] = useState<{ x: string; y: string } | null>(null);
  const [worldMapHasPlayed, setWorldMapHasPlayed] = useState(false);

  const handleNavigate = (section: SectionType, coords: { x: string; y: string }) => {
    setZoomTarget(coords);
    setWorldMapHasPlayed(true);
    // Short delay for the "zoom into door" animation to play before switching views
    setTimeout(() => {
      setActiveSection(section);
    }, 800);
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-black overflow-hidden sm:p-4 md:p-8">
      {/* Blurred immersive background */}
      <div 
        className="absolute inset-0 z-0 opacity-40 blur-[100px] scale-110 pointer-events-none"
        style={{
          backgroundImage: `url(${typeof bgImage === 'string' ? bgImage : (bgImage as any).src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Dynamic box container */}
      <div className="relative z-10 w-full max-w-[1800px] h-[100dvh] sm:h-[calc(100vh-2rem)] md:h-[calc(100vh-4rem)] max-h-[1000px] bg-[#050510] sm:rounded-3xl border-transparent sm:border-white/10 sm:border overflow-hidden shadow-[0_0_150px_rgba(0,0,0,0.9)] flex items-center justify-center perspective-1000">
        <div className="absolute inset-0 w-full h-full">
          <AnimatePresence mode="wait">
        {!activeSection ? (
          <motion.div
            key="world-map"
            exit={{ 
              scale: 8,
              x: zoomTarget ? `${(50 - parseFloat(zoomTarget.x)) * 5}%` : 0,
              y: zoomTarget ? `${(50 - parseFloat(zoomTarget.y)) * 5}%` : 0,
              filter: 'blur(30px) brightness(2)',
              opacity: 0 
            }}
            transition={{ duration: 1, ease: [0.64, 0, 0.78, 0] }}
            className="w-full h-full"
          >
            <WorldMap onNavigate={handleNavigate} startAtFinal={worldMapHasPlayed} />
          </motion.div>
        ) : (
          <motion.div
            key="section-view"
            initial={{ opacity: 0, scale: 0.2, filter: 'blur(20px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full h-full"
          >
            <SectionView section={activeSection} onBack={() => setActiveSection(null)} />
          </motion.div>
        )}
      </AnimatePresence>
      </div>

        {/* Cinematic HUD */}
        <div className="absolute bottom-8 left-8 z-50 pointer-events-none">
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-white/20" />
            <div className="text-[10px] font-mono text-white/40 tracking-[0.5em] uppercase">
              System Online
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
