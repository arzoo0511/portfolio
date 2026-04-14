
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, LineChart, Cpu, Network } from 'lucide-react';
import { NeuralBackground } from './Background';
import p1 from '../p1.png';
import p2 from '../p2.png';
import p3 from '../p3.png';

const images = [
    {
        url: p1.src,
        label: "Quantitative Analysis"
    },
    {
        url: p2.src,
        label: "Neural Architectures"
    },
    {
        url: p3.src,
        label: "Low-Latency Execution"
    }
];

export function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-24 overflow-hidden">
            <NeuralBackground />

            {/* Background Image Transition Container */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20 overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute inset-0"
                    >
                        <img 
                            src={images[currentImageIndex].url} 
                            alt={images[currentImageIndex].label}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="relative z-10 max-w-5xl text-center space-y-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="flex justify-center mb-8">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-mono font-medium tracking-widest text-accent-blue bg-accent-blue/10 rounded-full border border-accent-blue/20 uppercase">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
                            Active for collaborations
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold text-heading tracking-tighter leading-[0.9] mb-4">
                        Quant Developer <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-violet to-accent-blue bg-[length:200%_auto] animate-gradient-flow">
                            AI Engineer
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-xl md:text-2xl text-foreground/60 max-w-3xl mx-auto font-light leading-relaxed"
                >
                    Engineering at the intersection of <span className="text-heading font-semibold">Stochastic Calculus</span> and <span className="text-heading font-semibold">Generative AI</span>. Architecting high-throughput financial systems with institutional-grade precision.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12"
                >
                    <a href="#projects" className="group flex items-center gap-2 px-10 py-4 bg-heading text-white font-semibold rounded-full hover:bg-slate-800 transition-all shadow-xl shadow-heading/20">
                        Explore Research
                        <LineChart className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="#contact" className="flex items-center gap-2 px-10 py-4 border border-border-subtle bg-white/40 text-heading font-semibold rounded-full hover:bg-white transition-all backdrop-blur-md">
                        Contact Protocol
                    </a>
                </motion.div>

                {/* Status indicators */}
                <motion.div 
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 1 }}
                   className="pt-12 grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-border-subtle/50 mt-16 opacity-50"
                >
                   <div className="flex flex-col items-center gap-1">
                      <Cpu className="w-5 h-5 mb-2 text-accent-blue" />
                      <span className="text-[10px] font-mono uppercase tracking-widest">Backend Architecture</span>
                      <span className="text-sm font-bold text-heading">Low Latency C++/Rust</span>
                   </div>
                   <div className="flex flex-col items-center gap-1">
                      <Network className="w-5 h-5 mb-2 text-accent-violet" />
                      <span className="text-[10px] font-mono uppercase tracking-widest">Model Training</span>
                      <span className="text-sm font-bold text-heading">LLMs & Transformers</span>
                   </div>
                   <div className="hidden md:flex flex-col items-center gap-1">
                      <LineChart className="w-5 h-5 mb-2 text-blue-400" />
                      <span className="text-[10px] font-mono uppercase tracking-widest">Signal Processing</span>
                      <span className="text-sm font-bold text-heading">Time Series ML</span>
                   </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/40"
            >
                <span className="text-[10px] uppercase tracking-[0.4em] font-medium">Scroll to explore</span>
                <ArrowDown className="w-5 h-5 animate-bounce" />
            </motion.div>

            <style>{`
              @keyframes gradient-flow {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
              }
              .animate-gradient-flow {
                animation: gradient-flow 10s ease infinite;
              }
            `}</style>
        </section>
    );
}
