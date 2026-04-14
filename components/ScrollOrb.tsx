"use client";

import React, { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

/*
 Firefly / enchanted forest orb
 Softer golden-green magical glow instead of pink fantasy orb
*/

export function ScrollOrb() {
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 24,
    stiffness: 85,
    mass: 0.65,
  });

  const y = useTransform(smoothProgress, [0, 1], ["0vh", "85vh"]);

  const x = useTransform(
    smoothProgress,
    [0, 0.15, 0.35, 0.55, 0.75, 1],
    ["0px", "30px", "-25px", "20px", "-30px", "0px"]
  );

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame: number;

    type Particle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      life: number;
    };

    const particles: Particle[] = [];

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const orb = orbRef.current;
      if (orb) {
        const rect = orb.getBoundingClientRect();

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        for (let i = 0; i < 2; i++) {
          particles.push({
            x: centerX,
            y: centerY,
            vx: (Math.random() - 0.5) * 0.8,
            vy: Math.random() * -1.5,
            size: Math.random() * 3 + 1,
            life: 60,
          });
        }
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;
        p.life--;

        const alpha = p.life / 60;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

        ctx.fillStyle = `rgba(255,220,120,${alpha})`;
        ctx.shadowBlur = 12;
        ctx.shadowColor = "rgba(255,220,120,0.8)";
        ctx.fill();

        if (p.life <= 0) particles.splice(i, 1);
      }

      frame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <>
      {/* Particle layer */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-40"
      />

      <div className="fixed top-24 left-10 md:left-24 h-screen w-[130px] pointer-events-none z-50 hidden sm:block overflow-visible">
        <motion.div
          ref={orbRef}
          style={{ x, y }}
          className="absolute left-0 w-14 h-14 flex items-center justify-center"
        >
          {/* Firefly trail */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full w-[6px] h-28 rounded-full bg-gradient-to-t from-yellow-200/50 via-yellow-100/20 to-transparent blur-md" />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full w-[16px] h-36 rounded-full bg-gradient-to-t from-lime-200/10 via-yellow-100/10 to-transparent blur-2xl" />

          {/* Outer glow */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.25, 0.5, 0.25],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
            }}
            className="absolute w-12 h-12 rounded-full bg-yellow-200/30 blur-xl"
          />

          <motion.div
            animate={{
              scale: [1, 1.6, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="absolute w-20 h-20 rounded-full bg-lime-200/20 blur-3xl"
          />

          {/* Tiny orbiting dust */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ rotate: 360 }}
              transition={{
                duration: 6 + i,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-full h-full"
            >
              <div
                className="absolute top-0 left-1/2 w-1.5 h-1.5 rounded-full bg-yellow-100 blur-[1px]"
                style={{
                  transform: `translateX(-50%) translateY(-${8 + i * 2}px)`,
                }}
              />
            </motion.div>
          ))}

          {/* Firefly Core */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.9, 1, 0.9],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
            }}
            className="relative z-30 w-4 h-4 rounded-full bg-yellow-100 shadow-[0_0_15px_#fff7b2,0_0_30px_#fde047,0_0_60px_#facc15]"
          />
        </motion.div>
      </div>
    </>
  );
}