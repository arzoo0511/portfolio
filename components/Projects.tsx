"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, LineChart, Cpu, Bot } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        title: "Market Hawks",
        subtitle: "Deep Learning Stock Prediction",
        desc: "A transformer-based model for predicting short-term stock movements using high-frequency order book data. Achieved 68% directional accuracy on test set.",
        tech: ["PyTorch", "Transformers", "Kafka", "TimescaleDB"],
        metric: "68% Directional Accuracy",
        icon: <LineChart className="w-6 h-6" />,
        color: "bg-emerald-100 text-emerald-600",
        link: "#"
    },
    {
        title: "UnivestBot",
        subtitle: "RAG Financial Assistant",
        desc: "Interactive financial research assistant capable of parsing 10k filings and earnings call transcripts to answer complex queries with citations.",
        tech: ["LangChain", "FAISS", "OpenAI API", "FastAPI"],
        metric: "<200ms Query Latency",
        icon: <Bot className="w-6 h-6" />,
        color: "bg-blue-100 text-blue-600",
        link: "#"
    },
    {
        title: "GyaanGo",
        subtitle: "Adaptive Learning System",
        desc: "Reinforcement learning agent that optimizes curriculum sequencing for students based on real-time performance metrics.",
        tech: ["RL (PPO)", "Python", "React", "PostgreSQL"],
        metric: "40% Higher Retention",
        icon: <Cpu className="w-6 h-6" />,
        color: "bg-violet-100 text-violet-600",
        link: "#"
    }
];

export function Projects() {
    return (
        <section id="projects" className="py-24 px-6 bg-background">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-heading">
                        Selected Projects
                    </h2>
                    <p className="mt-4 text-lg text-foreground/60 max-w-2xl">
                        Systems that demonstrate alpha generation, scalability, and technical depth.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative bg-white border border-border-subtle rounded-xl p-6 hover:shadow-lg hover:border-accent-blue/30 transition-all duration-300"
                        >
                            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Link href={project.link} className="p-2 block bg-gray-50 rounded-full hover:bg-accent-blue/10 hover:text-accent-blue">
                                    <Github className="w-5 h-5" />
                                </Link>
                            </div>

                            <div className={`w-12 h-12 rounded-lg ${project.color} flex items-center justify-center mb-6`}>
                                {project.icon}
                            </div>

                            <h3 className="text-xl font-heading font-bold text-heading group-hover:text-accent-blue transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-sm font-medium text-foreground/50 mb-4 uppercase tracking-wider">
                                {project.subtitle}
                            </p>

                            <p className="text-foreground/70 mb-6 leading-relaxed text-sm">
                                {project.desc}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="px-2 py-1 text-xs font-mono bg-gray-100 text-foreground/60 rounded">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="pt-4 border-t border-border-subtle flex items-center justify-between">
                                <span className="text-xs font-mono text-foreground/40">KEY METRIC</span>
                                <span className="text-sm font-bold text-heading">{project.metric}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
