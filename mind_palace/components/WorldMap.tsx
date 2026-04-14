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

const DoorHotspot: React.FC<HotspotProps> = ({
  id,
  top,
  left,
  width,
  height,
  label,
  onNavigate,
  isActiveInTour
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`absolute cursor-pointer z-30 group ${
        isActiveInTour ? 'ring-4 ring-white/50 rounded-3xl bg-white/10' : ''
      }`}
      style={{ top, left, width, height }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onNavigate(id, { x: left, y: top })}
    >
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

      <div className="absolute inset-x-0 -top-8 sm:-top-10 md:-top-16 flex items-center justify-center pointer-events-none z-40">
        <div
          className={`relative transition-all duration-700 ${
            isHovered || isActiveInTour
              ? 'opacity-100 translate-y-0 scale-110'
              : 'opacity-70 translate-y-2 md:translate-y-4 scale-90'
          }`}
        >
          <div className="animate-[bounce_3s_ease-in-out_infinite] group-hover:animate-none">
            <div
              className={`bg-gradient-to-b from-[#1a1423] to-[#0f0a18]
              border border-amber-900/50
              shadow-[0_10px_30px_rgba(0,0,0,0.8)]
              px-2 sm:px-3 md:px-5
              py-1 md:py-2
              rounded-xl
              backdrop-blur-xl
              ${
                isHovered || isActiveInTour
                  ? 'ring-2 ring-amber-500/50'
                  : ''
              }`}
            >
              <span
                className={`text-[7px] sm:text-[8px] md:text-xs
                font-heading uppercase tracking-[0.2em]
                ${
                  isHovered || isActiveInTour
                    ? 'text-amber-300'
                    : 'text-amber-100/60'
                }`}
              >
                {label}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const WorldMap: React.FC<{
  onNavigate: (id: SectionType, coords: { x: string; y: string }) => void;
  startAtFinal?: boolean;
}> = ({ onNavigate, startAtFinal }) => {
  type MapState =
    | 'loading'
    | 'overview'
    | 'reception'
    | 'exploring'
    | 'tour'
    | 'exited';

  const [mapState, setMapState] = useState<MapState>(
    startAtFinal ? 'exploring' : 'loading'
  );

  const [tourIndex, setTourIndex] = useState(0);

  useEffect(() => {
    if (startAtFinal) return;

    const timer = setTimeout(() => {
      setMapState('overview');
    }, 2500);

    return () => clearTimeout(timer);
  }, [startAtFinal]);

  const doors = [
    { id: 'journey' as SectionType, top: '55%', left: '8%', width: '8%', height: '22%', label: 'Journey', desc: 'Education and professional experience.' },
    { id: 'skills' as SectionType, top: '50%', left: '28%', width: '6%', height: '18%', label: 'Arsenal', desc: 'Core tech stack and capabilities.' },
    { id: 'lab' as SectionType, top: '50%', left: '44%', width: '12%', height: '25%', label: 'Project Lab', desc: 'Experimental open-source projects.' },
    { id: 'knowledge' as SectionType, top: '50%', left: '67%', width: '6%', height: '20%', label: 'Archive', desc: 'Publications, papers, and achievements.' },
    { id: 'portal' as SectionType, top: '55%', left: '85%', width: '8%', height: '25%', label: 'Connect', desc: 'Establish a communication channel.' },
    { id: 'blog' as SectionType, top: '17%', left: '24%', width: '6%', height: '15%', label: 'Blog', desc: 'Personal writings and thoughts.' },
    { id: 'extra1' as SectionType, top: '15%', left: '48%', width: '6%', height: '15%', label: 'Activities', desc: 'Extra curriculars and events.' },
    { id: 'extra2' as SectionType, top: '18%', left: '60%', width: '6%', height: '15%', label: 'Research Papers', desc: 'Academic publications and ongoing work.' },
    { id: 'extra3' as SectionType, top: '15%', left: '70%', width: '6%', height: '15%', label: 'Gallery', desc: 'Creative pursuits and memories.' }
  ];

  const currentTourGate = doors[tourIndex];

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden">
      <div className="relative w-full h-full max-h-screen aspect-video">
        <img
          src={typeof bgImage === 'string' ? bgImage : (bgImage as any).src}
          alt="Mind Palace"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {(mapState === 'overview' || mapState === 'exploring') && (
          <>
            {/* CLICK GUIDE HOTSPOT */}
            <div
              className="absolute top-[80%] left-[49.5%]
              -translate-x-1/2 -translate-y-1/2
              w-[10%] sm:w-[8%]
              h-[20%] sm:h-[25%]
              cursor-pointer z-50"
              onClick={() => setMapState('reception')}
            />

            {/* FLOATING CENTER SIGN */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
              className="absolute top-[68%] left-1/2 -translate-x-1/2 z-40 pointer-events-none"
            >
              <div className="px-4 py-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
                <span className="text-[10px] sm:text-xs md:text-sm text-white/80 uppercase tracking-[0.25em] font-mono">
                  Press The Guide
                </span>
              </div>
            </motion.div>
          </>
        )}

        {(mapState === 'exploring' || mapState === 'tour') && (
          <div className="absolute inset-0">
            {doors.map((door, idx) => (
              <DoorHotspot
                key={idx}
                {...door}
                onNavigate={onNavigate}
                isActiveInTour={mapState === 'tour' && idx === tourIndex}
              />
            ))}
          </div>
        )}
      </div>

      {/* BOTTOM GUIDE BOX */}
      {(mapState === 'overview' || mapState === 'exploring') && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50"
        >
          <div className="bg-black/40 backdrop-blur-xl px-5 sm:px-8 py-3 sm:py-4 rounded-2xl border border-white/10 shadow-2xl flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-white/80 text-[10px] sm:text-sm md:text-base tracking-wide">
              Click the <span className="text-amber-300 font-bold">central guide</span> to open navigation.
            </span>
          </div>
        </motion.div>
      )}

      {mapState === 'reception' && (
        <div className="absolute inset-0 z-50 bg-black/70 backdrop-blur-md flex flex-col items-center justify-center px-4">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 max-w-6xl">
            {doors.slice(0, 5).map((door) => (
              <button
                key={door.id}
                onClick={() => onNavigate(door.id, { x: door.left, y: door.top })}
                className="
                w-28 h-44
                sm:w-32 sm:h-52
                md:w-40 md:h-64
                lg:w-52 lg:h-80
                rounded-2xl border border-white/20 bg-white/5"
              >
                {door.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMapState('exploring')}
            className="mt-10 px-6 py-3 border border-white/20 rounded-xl text-white/70"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};