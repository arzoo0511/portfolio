import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, LogIn } from 'lucide-react';
import { SectionType } from '../App';
import bgImage from '../mind_palace_bg.png';

interface HotspotProps {
  id: SectionType;
  top: string;
  left: string;
  width: string;
  height: string;
  label: string;
  onNavigate: (id: SectionType, coords: { x: string; y: string }) => void;
  isActiveInTour?: boolean;
}

const DoorHotspot: React.FC<HotspotProps> = ({ id, top, left, width, height, label, onNavigate, isActiveInTour }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`absolute cursor-pointer z-30 group ${isActiveInTour ? 'ring-4 ring-white/50 rounded-3xl bg-white/10' : ''}`}
      style={{ top, left, width, height }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onNavigate(id, { x: left, y: top })}
    >
      {/* High-Impact Interaction Glow */}
      <AnimatePresence>
        {(isHovered || isActiveInTour) && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            className="absolute inset-0 bg-white/20 rounded-full blur-2xl border border-white/50"
          />
        )}
      </AnimatePresence>
      
      {/* Floating Magic Nameplate */}
      <div className="absolute inset-x-0 -top-16 flex items-center justify-center pointer-events-none z-40">
        <div className={`relative transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${isHovered || isActiveInTour ? 'opacity-100 translate-y-0 scale-110' : 'opacity-70 translate-y-4 scale-90'}`}>
          <div className="animate-[bounce_3s_ease-in-out_infinite] group-hover:animate-none">
            {/* Vintage / Magical Sign Background */}
            <div className={`bg-gradient-to-b from-[#1a1423] to-[#0f0a18] border border-amber-900/50 shadow-[0_10px_30px_rgba(0,0,0,0.8)] px-5 py-2 rounded-xl backdrop-blur-xl transition-all duration-500 relative overflow-hidden ${isHovered || isActiveInTour ? 'ring-2 ring-amber-500/50 shadow-[0_0_30px_rgba(245,158,11,0.3)]' : ''}`}>
               {/* Ornate corner accents */}
               <div className="absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-amber-500/50" />
               <div className="absolute top-1 right-1 w-1.5 h-1.5 border-t border-r border-amber-500/50" />
               <div className="absolute bottom-1 left-1 w-1.5 h-1.5 border-b border-l border-amber-500/50" />
               <div className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-amber-500/50" />
               
               <span className={`text-[10px] md:text-xs font-heading uppercase tracking-[0.3em] font-bold transition-colors duration-300 drop-shadow-md relative z-10 ${isHovered || isActiveInTour ? 'text-amber-300' : 'text-amber-100/60'}`}>
                 {label}
               </span>
               
               {/* Inner glow effect on hover */}
               <div className={`absolute inset-0 bg-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-md`} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const WorldMap: React.FC<{ onNavigate: (id: SectionType, coords: { x: string; y: string }) => void; startAtFinal?: boolean }> = ({ onNavigate, startAtFinal }) => {
  type MapState = 'loading' | 'overview' | 'reception' | 'exploring' | 'tour' | 'exited';
  const [mapState, setMapState] = useState<MapState>(startAtFinal ? 'exploring' : 'loading');
  const [tourIndex, setTourIndex] = useState(0);

  useEffect(() => {
    if (startAtFinal) return;
    const timer = setTimeout(() => {
      setMapState('overview');
    }, 2500);
    return () => clearTimeout(timer);
  }, [startAtFinal]);

  // Exited fallback screen
  if (mapState === 'exited') {
    return (
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        className="w-full h-full flex flex-col items-center justify-center bg-black text-white p-8 text-center"
      >
        <h1 className="text-2xl md:text-4xl font-heading tracking-[0.5em] mb-4 uppercase text-white/80">Disconnected</h1>
        <p className="text-white/40 font-mono text-xs md:text-sm tracking-widest uppercase">Safe travels outside the Mind Palace.</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-12 px-8 py-3 bg-white/5 border border-white/20 hover:bg-white/10 transition-colors uppercase text-xs tracking-widest rounded-lg"
        >
          Reconnect
        </button>
      </motion.div>
    );
  }

  // Adjusted Coordinates based on the v6 image prompts:
  // Note: These coordinates carefully map to the visible doors/arches in the new futuristic mind palace background.
  
  /* 🟢 EDIT THESE VALUES TO ADJUST HOTSPOT PLACEMENT 🟢 */
  // 'top' and 'left' control the position. 'width' and 'height' control the clickable area size.
  const doors = [
    // --- BOTTOM DOORS (Technical) ---
    { id: 'journey' as SectionType, top: '55%', left: '8%', width: '8%', height: '22%', label: 'Journey', desc: 'Education and professional experience.' },
    { id: 'skills' as SectionType, top: '50%', left: '28%', width: '6%', height: '18%', label: 'Arsenal', desc: 'Core tech stack and capabilities.' },
    { id: 'lab' as SectionType, top: '50%', left: '44%', width: '12%', height: '25%', label: 'Project Lab', desc: 'Experimental open-source projects.' },
    { id: 'knowledge' as SectionType, top: '50%', left: '67%', width: '6%', height: '20%', label: 'Archive', desc: 'Publications, papers, and achievements.' },
    { id: 'portal' as SectionType, top: '55%', left: '85%', width: '8%', height: '25%', label: 'Connect', desc: 'Establish a communication channel.' },
    
    // --- TOP DOORS (Extra Curricular / Personal) ---
    /* 🟢 Adjust these coordinates to place them perfectly over the top 4 doors 🟢 */
    { id: 'blog' as SectionType, top: '17%', left: '24%', width: '6%', height: '15%', label: 'Blog', desc: 'Personal writings and thoughts.' },
    { id: 'extra1' as SectionType, top: '15%', left: '48%', width: '6%', height: '15%', label: 'Activities', desc: 'Extra curriculars and events.' },
    { id: 'extra2' as SectionType, top: '18%', left: '60%', width: '6%', height: '15%', label: 'Research Papers', desc: 'Academic publications and ongoing work.' },
    { id: 'extra3' as SectionType, top: '15%', left: '70%', width: '6%', height: '15%', label: 'Gallery', desc: 'Creative pursuits and memories.' },
  ];

  const currentTourGate = doors[tourIndex];

  // Camera settings based on map state
  // FIX: Scale kept at 1 to prevent resolution loss and haziness on initial load
  let cameraSettings = { scale: 1, x: '0%', y: '0%', filter: 'blur(0px)' };
  
  if (mapState === 'loading') {
    cameraSettings = { scale: 1, x: '0%', y: '0%', filter: 'blur(10px)' };
  } else if (mapState === 'overview') {
    cameraSettings = { scale: 1, x: '0%', y: '0%', filter: 'blur(0px)' };
  } else if (mapState === 'reception') {
    // Zoom in tightly to the center girl
    cameraSettings = { scale: 1.5, x: '0%', y: '10%', filter: 'blur(0px)' };
  } else if (mapState === 'exploring') {
    cameraSettings = { scale: 1, x: '0%', y: '0%', filter: 'blur(0px)' };
  } else if (mapState === 'tour') {
    // Zoom and pan to the specific gate depending on which side it's on to keep it somewhat centered
    const targetX = (50 - parseFloat(currentTourGate.left)) * 1.2;
    // Don't pan too far down so we don't hit the bottom edge of the image
    const targetY = Math.max((50 - parseFloat(currentTourGate.top)) * 1.2, -10);
    cameraSettings = { scale: 1.4, x: `${targetX}%`, y: `${targetY}%`, filter: 'blur(0px)' };
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-black overflow-hidden perspective-1000">
      {/* Container that strictly maintains the image's aspect ratio and ensures it fits on any screen */}
      <div 
        className="relative flex items-center justify-center" 
        style={{ 
          width: '100%',
          maxWidth: 'calc(100vh * (16/9))', 
          aspectRatio: '16/9',
          maxHeight: '100vh'
        }}
      >
        {/* Background Image Container */}
        <motion.div 
          initial={false}
          animate={cameraSettings}
          transition={{ duration: 2, ease: [0.25, 1, 0.5, 1] }}
          className="absolute w-full h-full flex items-center justify-center origin-center will-change-transform"
        >
          <img 
            src={typeof bgImage === 'string' ? bgImage : (bgImage as any).src} 
            alt="Mind Palace" 
            className="absolute w-full h-full object-cover origin-center max-w-none transform-gpu" 
          />
          
        {/* Central Guide Click Area - Active in overview or exploring so she can always be clicked to open map */}
        {(mapState === 'overview' || mapState === 'exploring') && (
          <div 
            className="absolute top-[80%] left-[49.5%] -translate-x-1/2 -translate-y-1/2 w-[8%] h-[25%] cursor-pointer z-50 flex items-center justify-center group"
            onClick={() => setMapState('reception')}
          >
            {/* Subtle glow instead of loud radar ping */}
            <div className={`w-full h-full rounded-full bg-white/15 opacity-10 group-hover:opacity-100 transition-all blur-[20px] shadow-[0_0_50px_rgba(255,255,255,0.4)]`} />
          </div>           
        )}

        {/* Hotspots reveal in exploring or tour state */}
        <AnimatePresence>
          {(mapState === 'exploring' || mapState === 'tour') && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 z-40 w-full h-full"
            >
              {doors.map((door, idx) => (
                <DoorHotspot 
                  key={`${door.id}-${idx}`} 
                  {...door} 
                  onNavigate={onNavigate} 
                  isActiveInTour={mapState === 'tour' && idx === tourIndex}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      </div>

      {/* Vignette Overlay (Stays static) */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_transparent_20%,_rgba(0,0,0,0.8)_100%)] z-10" />

      {/* UI Overlays */}
      <AnimatePresence mode="wait">
        {mapState === 'loading' && (
          <motion.div 
            key="loading-ui"
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 flex flex-col items-center justify-center z-50 pointer-events-none bg-black/40"
          >
            <motion.h2 
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="text-white text-xl md:text-2xl font-heading tracking-[0.5em] uppercase font-light text-center px-4"
            >
              Loading Environment...
            </motion.h2>
          </motion.div>
        )}

        {/* Global Instruction Overlay */}
        {(mapState === 'overview' || mapState === 'exploring') && (
          <motion.div 
            key="instruction-ui"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 1 }}
            className="absolute bottom-12 left-0 w-full flex justify-center z-50 pointer-events-none"
          >
            <div className="bg-black/40 backdrop-blur-xl px-8 py-4 rounded-2xl border border-white/10 shadow-2xl flex items-center gap-4 group">
              <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shadow-[0_0_10px_rgba(251,191,36,0.8)]" />
              <span className="text-white/80 font-sans text-sm md:text-base tracking-wide font-medium">
                Click the <span className="text-amber-300 font-bold">central guide</span> to view the map, or select a <span className="text-amber-300 border-b border-amber-300/30 border-dotted font-bold">floating sign</span> directly.
              </span>
            </div>
          </motion.div>
        )}

        {mapState === 'reception' && (
          <motion.div
            key="reception-ui"
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="absolute z-50 flex flex-col items-center justify-center w-full h-full bg-black/60 backdrop-blur-md overflow-hidden"
          >
             {/* Magical background aura */}
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,20,60,0.5)_0%,transparent_70%)] pointer-events-none" />

             <div className="mb-16 mt-8 flex flex-col items-center">
               <h2 className="text-3xl md:text-5xl font-heading text-white tracking-[0.2em] uppercase mb-4 shadow-black drop-shadow-2xl">
                 Select a Portal
               </h2>
               <p className="text-fuchsia-200/60 font-mono text-xs md:text-sm uppercase tracking-widest text-center max-w-lg">
                 The guide presents five gateways into the architect's mind.
               </p>
             </div>

             {/* MAGICAL PORTAL CAROUSEL */}
             <div className="w-full max-w-6xl relative flex flex-wrap justify-center items-center gap-6 px-4 z-10 perspective-1000">
                {doors.slice(0, 5).map((door, idx) => (
                   <motion.button 
                     key={door.id}
                     initial={{ opacity: 0, y: 50 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: idx * 0.1 }}
                     onClick={() => onNavigate(door.id, { x: door.left, y: door.top })}
                     className="group relative w-40 h-64 md:w-52 md:h-80 rounded-2xl border-2 border-white/10 hover:border-white/50 bg-gradient-to-br from-white/5 to-white/0 overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] flex flex-col items-center justify-end p-6 hover:-translate-y-4 hover:scale-105 transition-all duration-500 will-change-transform"
                   >
                     {/* Portal Inner Energy */}
                     <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                     <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                        {/* Swirling magic effect */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[conic-gradient(from_0deg,transparent,rgba(255,255,255,0.2),transparent)] animate-spin-slow blur-xl" />
                        <div className="absolute inset-0 bg-fuchsia-500/20 mix-blend-overlay" />
                     </div>
                     
                     {/* Floating Sigil/Dot */}
                     <div className="absolute top-10 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-fuchsia-300 group-hover:shadow-[0_0_20px_rgba(217,70,239,0.8)] transition-all z-20">
                        <div className="w-2 h-2 rounded-full bg-white group-hover:bg-fuchsia-200" />
                     </div>

                     <span className="text-white font-heading tracking-widest uppercase text-lg md:text-xl mb-2 relative z-20 group-hover:text-fuchsia-200 transition-colors text-shadow-glow">
                       {door.label}
                     </span>
                     <span className="text-white/50 font-sans text-xs text-center leading-relaxed relative z-20 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 duration-500">
                       {door.desc}
                     </span>
                   </motion.button>
                ))}
             </div>

             {/* Secondary Actions */}
             <div className="mt-20 flex gap-6 relative z-10">
               <button 
                 onClick={() => { setTourIndex(0); setMapState('tour'); }}
                 className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-mono text-xs tracking-[0.2em] uppercase rounded-full border border-white/20 transition-all hover:scale-105 shadow-xl"
               >
                 Auto-Guided Tour
               </button>
               <button 
                 onClick={() => setMapState('exploring')}
                 className="px-8 py-3 bg-transparent hover:bg-white/5 text-white/50 hover:text-white font-mono text-xs tracking-[0.2em] uppercase rounded-full border border-transparent hover:border-white/10 transition-all"
               >
                 Close
               </button>
             </div>
          </motion.div>
        )}

        {mapState === 'tour' && (
          <motion.div
            key="tour-ui"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl bg-black/60 backdrop-blur-xl border border-white/20 rounded-2xl p-6 flex items-center justify-between gap-6 shadow-2xl"
          >
            {/* Prev Button */}
            <button 
              onClick={() => setTourIndex(prev => Math.max(0, prev - 1))}
              disabled={tourIndex === 0}
              className="p-3 rounded-full hover:bg-white/10 disabled:opacity-20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Tour Info */}
            <div className="flex-1 text-center">
              <div className="text-white/40 font-mono text-[10px] uppercase tracking-[0.3em] mb-2">
                Gate {tourIndex + 1} of {doors.length}
              </div>
              <h3 className="text-2xl font-heading text-white tracking-widest uppercase mb-2">
                {currentTourGate.label}
              </h3>
              <p className="text-white/60 text-xs font-mono uppercase tracking-widest">
                {currentTourGate.desc}
              </p>
            </div>

            {/* Actions: Next or Enter */}
            <div className="flex gap-2">
              <button 
                onClick={() => onNavigate(currentTourGate.id, { x: currentTourGate.left, y: currentTourGate.top })}
                className="flex items-center gap-2 px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-colors"
              >
                <LogIn className="w-4 h-4 text-white" />
                <span className="hidden sm:inline text-white font-mono text-[10px] uppercase tracking-widest">Enter</span>
              </button>
              <button 
                onClick={() => {
                  if (tourIndex < doors.length - 1) {
                    setTourIndex(prev => prev + 1);
                  } else {
                     setMapState('exploring');
                  }
                }}
                className="p-3 rounded-full hover:bg-white/10 transition-colors"
              >
                {tourIndex === doors.length - 1 ? (
                  <span className="text-white font-mono text-[10px] uppercase tracking-widest px-2">End</span>
                ) : (
                  <ChevronRight className="w-6 h-6 text-white" />
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

