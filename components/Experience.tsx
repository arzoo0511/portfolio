"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experience = [
    {
        role: "Quantitative Developer Intern",
        company: "Citadel / Two Sigma Style Firm",
        period: "May 2025 - Aug 2025",
        desc: "Optimized execution algorithms reducing latency by 15ms. Implemented a backtesting engine for high-frequency strategies using C++ and Python bindings."
    },
    {
        role: "AI Research Fellow",
        company: "Top University Lab",
        period: "Jan 2024 - Present",
        desc: "Conducting research on retrieval-augmented generation for financial documents. Published findings on reducing hallucination rates in domain-specific questions."
    },
    {
        role: "Full Stack Engineer",
        company: "Early Stage Fintech",
        period: "Jun 2023 - Dec 2023",
        desc: "Architected a real-time market dashboard processing 50k+ messages/sec via WebSocket. Built microservices for data ingestion using Go and Kafka."
    }
];

export function Experience() {
    return (
        <section id="experience" className="py-24 px-6 bg-background">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-heading mb-16 px-4">
                    Experience
                </h2>

                <div className="relative border-l-2 border-border-subtle ml-6 md:ml-12 space-y-12">
                    {experience.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative pl-8 md:pl-12 pr-4"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-accent-blue border-4 border-white shadow-sm" />

                            <div className="bg-white p-6 rounded-xl border border-border-subtle shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                                    <h3 className="text-xl font-heading font-bold text-heading">{item.role}</h3>
                                    <span className="text-xs font-mono font-medium px-2 py-1 bg-gray-100 rounded text-foreground/60">
                                        {item.period}
                                    </span>
                                </div>

                                <div className="text-emerald-600 font-medium text-sm mb-4 flex items-center gap-2">
                                    <Briefcase className="w-4 h-4" /> {item.company}
                                </div>

                                <p className="text-foreground/70 leading-relaxed text-sm">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
