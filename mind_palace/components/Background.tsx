
import React from 'react';

export const NeuralBackground: React.FC = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Abstract decorative circles/gradients */}
            <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-accent-blue/5 blur-[120px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-accent-violet/5 blur-[120px]" />

            <svg className="absolute inset-0 w-full h-full opacity-[0.04]">
                <pattern id="grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            </svg>
            
            {/* Additional "data node" dots */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.1]">
              <div className="w-full h-full grid grid-cols-12 grid-rows-12">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div 
                    key={i} 
                    className="w-1 h-1 bg-accent-blue rounded-full" 
                    style={{ 
                      gridColumn: Math.floor(Math.random() * 12) + 1, 
                      gridRow: Math.floor(Math.random() * 12) + 1 
                    }} 
                  />
                ))}
              </div>
            </div>
        </div>
    );
};
