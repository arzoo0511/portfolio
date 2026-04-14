"use client";

import { motion } from "framer-motion";
import { FileText, Award, Trophy } from "lucide-react";
import Link from "next/link";

const research = [
    {
        type: "Paper",
        title: "Optimizing Transformer Attention for Long Context Financial Logs",
        venue: "NeurIPS Workshop 2024 (Under Review)",
        link: "#"
    },
    {
        type: "Achievement",
        title: "1st Place - Global Quant Hackathon 2024",
        venue: "Built a profitable mean-reversion strategy on crypto pairs.",
        link: "#"
    },
    {
        type: "Open Source",
        title: "Maintainer - PyQuantLib",
        venue: "Author of popular Python library for option pricing with 500+ stars.",
        link: "#"
    }
];

export function Research() {
    return (
        <section id="research" className="py-24 px-6 bg-white/50 border-t border-border-subtle">
            <div className="max-w-5xl mx-auto">
                <div className="flex items-center gap-4 mb-12">
                    <Trophy className="w-8 h-8 text-accent-violet" />
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-heading">
                        Research & Achievements
                    </h2>
                </div>

                <div className="grid gap-6">
                    {research.map((item, idx) => (
                        <motion.a
                            key={idx}
                            href={item.link}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-white rounded-lg border border-border-subtle hover:border-accent-violet/50 hover:shadow-md transition-all group"
                        >
                            <div className="space-y-2">
                                <div className="flex items-center gap-3">
                                    <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded uppercase tracking-wide
                         ${item.type === 'Paper' ? 'bg-blue-100 text-blue-700' :
                                            item.type === 'Achievement' ? 'bg-amber-100 text-amber-700' :
                                                'bg-purple-100 text-purple-700'}`}>
                                        {item.type}
                                    </span>
                                </div>
                                <h3 className="text-lg font-heading font-semibold text-heading group-hover:text-accent-violet transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-foreground/60 text-sm">
                                    {item.venue}
                                </p>
                            </div>

                            <div className="mt-4 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1">
                                <FileText className="w-5 h-5 text-foreground/40" />
                            </div>
                        </motion.a>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link href="/resume.pdf" className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent-blue border-b border-transparent hover:border-accent-blue transition-all pb-0.5">
                        Download Full CV <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

import { ArrowUpRight } from "lucide-react";
