"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

// Subtle background animation component
const NeuralBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Abstract decorative circles/gradients */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-accent-blue/10 blur-[100px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent-violet/10 blur-[100px]" />

            <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
                <pattern id="grid-pattern" width="50" height="50" patternUnits="userSpaceOnUse">
                    <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            </svg>
        </div>
    );
};

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-16">
            <NeuralBackground />

            <div className="relative z-10 max-w-5xl text-center space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block px-3 py-1 mb-6 text-sm font-mono font-medium tracking-wider text-accent-blue bg-accent-blue/10 rounded-full border border-accent-blue/20">
                        AVAILABLE FOR HIRE
                    </span>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-heading tracking-tight leading-[1.1]">
                        Quant Developer <span className="text-foreground/30">&</span> <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-violet">
                            AI Engineer
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto font-light"
                >
                    Building intelligent financial systems with <span className="text-foreground font-medium">Time-series modeling</span>, <span className="text-foreground font-medium">LLMs</span>, and <span className="text-foreground font-medium">Low-latency backends</span>.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
                >
                    <a href="#projects" className="px-8 py-3 bg-heading text-background font-medium rounded-lg hover:bg-heading/90 transition-colors">
                        View Research
                    </a>
                    <a href="#contact" className="px-8 py-3 border border-border-subtle bg-white/50 text-foreground font-medium rounded-lg hover:bg-white transition-colors backdrop-blur-sm">
                        Contact Me
                    </a>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-foreground/30"
            >
                <ArrowDown className="w-6 h-6" />
            </motion.div>
        </section>
    );
}
