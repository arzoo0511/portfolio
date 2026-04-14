
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${scrolled ? 'bg-white/70 backdrop-blur-lg shadow-sm border-b border-border-subtle' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-xl font-bold font-heading flex items-center gap-2"
                >
                    <div className="w-8 h-8 bg-heading rounded-lg flex items-center justify-center text-white text-xs">QA</div>
                    <span className="tracking-tighter">QuantAI</span>
                </motion.div>

                <div className="hidden md:flex items-center gap-8">
                    {['Research', 'Expertise', 'Tools', 'Journal'].map((item) => (
                        <a 
                            key={item} 
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-medium text-foreground/60 hover:text-heading transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                    <a 
                        href="#contact" 
                        className="px-5 py-2 bg-heading text-white text-sm font-semibold rounded-full hover:bg-slate-800 transition-colors"
                    >
                        Terminal
                    </a>
                </div>
                
                <button className="md:hidden text-heading">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
        </nav>
    );
};
