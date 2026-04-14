import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
    return (
        <footer
            id="contact"
            className="border-t border-border-subtle bg-background/50 backdrop-blur-sm py-12 mt-24"
        >
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                
                <div className="text-sm text-foreground/60 font-mono">
                    © {new Date().getFullYear()} Quant Developer. All rights reserved.
                </div>

                <div className="flex items-center gap-6">
                    
                    <Link
                        href="https://github.com/yourgithub"
                        target="_blank"
                        className="text-foreground/60 hover:text-accent-blue transition-colors"
                    >
                        <Github className="w-5 h-5" />
                        <span className="sr-only">GitHub</span>
                    </Link>

                    <Link
                        href="https://linkedin.com/in/yourlinkedin"
                        target="_blank"
                        className="text-foreground/60 hover:text-accent-blue transition-colors"
                    >
                        <Linkedin className="w-5 h-5" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>

                    <Link
                        href="mailto:your@email.com"
                        className="text-foreground/60 hover:text-accent-blue transition-colors"
                    >
                        <Mail className="w-5 h-5" />
                        <span className="sr-only">Email</span>
                    </Link>

                </div>
            </div>
        </footer>
    );
}