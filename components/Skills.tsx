"use client";

import { motion } from "framer-motion";

const skills = {
    "Quant & Math": [
        { name: "Time-Series Analysis", level: 5 },
        { name: "Stochastic Calculus", level: 4 },
        { name: "Convex Optimization", level: 4 },
        { name: "Linear Algebra", level: 5 }
    ],
    "AI & ML": [
        { name: "Transformers / LLMs", level: 5 },
        { name: "PyTorch / TensorFlow", level: 5 },
        { name: "Reinforcement Learning", level: 3 },
        { name: "RAG Systems", level: 4 }
    ],
    "Systems Engineering": [
        { name: "Low-Latency C++", level: 4 },
        { name: "Rust / Python (Async)", level: 5 },
        { name: "Distributed Systems", level: 4 },
        { name: "Docker / K8s", level: 3 }
    ]
};

const SignalBar = ({ level }: { level: number }) => {
    return (
        <div className="flex items-end gap-[2px] h-4">
            {[1, 2, 3, 4, 5].map((bar) => (
                <div
                    key={bar}
                    className={`w-1 rounded-sm transition-all duration-500 ${bar <= level ? "bg-accent-blue" : "bg-gray-200"}`}
                    style={{ height: `${bar * 20}%` }}
                />
            ))}
        </div>
    );
};

export function Skills() {
    return (
        <section id="skills" className="py-24 px-6 bg-white/50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-heading mb-16 text-center">
                    Technical Arsenal
                </h2>

                <div className="grid md:grid-cols-3 gap-12">
                    {Object.entries(skills).map(([category, items], idx) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="space-y-6"
                        >
                            <h3 className="text-xl font-heading font-semibold text-heading border-b border-border-subtle pb-2">
                                {category}
                            </h3>

                            <div className="space-y-4">
                                {items.map((skill) => (
                                    <div key={skill.name} className="flex items-center justify-between group">
                                        <span className="text-foreground/80 font-medium group-hover:text-accent-blue transition-colors">
                                            {skill.name}
                                        </span>
                                        <SignalBar level={skill.level} />
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
