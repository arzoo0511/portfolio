"use client";

import { motion } from "framer-motion";
import { Brain, TrendingUp, Server } from "lucide-react";

export function About() {
    const highlights = [
        {
            icon: <TrendingUp className="w-5 h-5" />,
            title: "Quant Mindset",
            desc: "Statistical modeling & alpha generation"
        },
        {
            icon: <Brain className="w-5 h-5" />,
            title: "AI Specialization",
            desc: "LLMs, RAG, & Transformer architectures"
        },
        {
            icon: <Server className="w-5 h-5" />,
            title: "Systems Engineering",
            desc: "Low-latency & distributed systems"
        }
    ];

    return (
        <section id="about" className="py-24 px-6 bg-white/50">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                <div className="space-y-8">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-heading font-bold text-heading"
                    >
                        Research-First Engineering
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="space-y-6 text-foreground/80 leading-relaxed text-lg font-light"
                    >
                        <p>
                            I don't just write code; I build systems that reason. My work bridges the gap between
                            <span className="font-medium text-heading"> rigorous quantitative research</span> and
                            <span className="font-medium text-heading"> production-grade engineering</span>.
                        </p>
                        <p>
                            Whether optimization for low-latency trading execution or architecting RAG pipelines for
                            unstructured financial data, I focus on the mathematical elegance and system robustness required
                            in high-stakes environments.
                        </p>
                    </motion.div>

                    <div className="pt-4 grid gap-4">
                        {highlights.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + idx * 0.1 }}
                                className="flex items-center gap-4 p-4 rounded-lg bg-white border border-border-subtle shadow-sm hover:border-accent-blue/40 transition-colors"
                            >
                                <div className="p-2 rounded-md bg-accent-blue/10 text-accent-blue">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="font-heading font-semibold text-heading">{item.title}</h3>
                                    <p className="text-sm text-foreground/60">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Visual / Graphic Side */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative h-full min-h-[400px] rounded-2xl bg-gray-50 border border-border-subtle p-8 overflow-hidden flex items-center justify-center"
                >
                    {/* Abstract "Research Lab" visualization - Code/Math mix */}
                    <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:16px_16px]" />

                    <div className="relative z-10 font-mono text-xs md:text-sm text-foreground/60 space-y-2">
                        <div className="p-4 bg-white shadow-sm border border-border-subtle rounded-lg">
                            <span className="text-accent-blue">def</span> <span className="text-heading">optimize_portfolio</span>(weights, returns):
                            <div className="pl-4 text-foreground/50">
                                <span className="text-gray-400"># Minimize volatility</span><br />
                                cov_matrix = np.cov(returns)<br />
                                volatility = np.sqrt(weights.T @ cov_matrix @ weights)<br />
                                return volatility
                            </div>
                        </div>

                        <div className="translate-x-8 p-4 bg-white shadow-md border border-border-subtle rounded-lg">
                            <span className="text-accent-violet">class</span> <span className="text-heading">TransformerBlock</span>(nn.Module):
                            <div className="pl-4 text-foreground/50">
                                <span className="text-gray-400"># Multi-head attention mechanism</span><br />
                                self.attention = MultiHeadAttention(d_model, n_head)<br />
                                self.norm1 = nn.LayerNorm(d_model)<br />
                                x = x + self.dropout(self.attention(x, x, x))
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
