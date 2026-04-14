import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Compass, Cpu, Palette, Zap, Mail, BookOpen, ExternalLink, Github, MapPin, Calendar, Award, MessageSquare, Heart, GitBranch, Mic, Trophy, Camera, Music, Gamepad2, Coffee } from 'lucide-react';
import { SectionType } from '../App';


// --- SUB-COMPONENTS FOR EACH SECTION ---

const JourneySection = () => (
  <div className="space-y-12 text-left p-12 bg-gradient-to-b from-amber-950/40 to-black/80 border-t border-amber-500/20 rounded-3xl backdrop-blur-md relative overflow-hidden font-serif">
    {/* Floating Dust / Magical Particles Overlay */}
    <div className="absolute inset-0 opacity-10 mix-blend-color-dodge bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none" />
    <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[100px] pointer-events-none" />

    <h3 className="text-4xl text-amber-500 mb-8 tracking-widest border-b border-amber-500/30 pb-4 inline-flex items-center gap-4">
      <Compass className="w-8 h-8 opacity-70" /> Path of the Architect
    </h3>

    <div className="relative border-l-2 border-amber-500/30 ml-4 pl-10 space-y-16">
      {/* Education */}
      <div className="relative group">
        <div className="absolute -left-[49px] bg-amber-950 border border-amber-500/50 rounded-full p-2 mt-1 shadow-[0_0_15px_rgba(245,158,11,0.3)] group-hover:bg-amber-500 transition-colors">
          <BookOpen className="w-4 h-4 text-amber-500 group-hover:text-black transition-colors" />
        </div>
        <div className="p-8 bg-amber-900/10 border border-amber-500/20 rounded-2xl hover:bg-amber-900/20 transition-all backdrop-blur-md relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-10 transition duration-500 blur" />
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2 relative z-10">
            <div>
              <h3 className="text-2xl font-bold tracking-wider text-amber-100 font-sans">Bachelor of Science in Computer Science Engineering</h3>
              <p className="text-amber-500/80 font-mono text-sm uppercase mt-1">Bennett University (Times of India Group)</p>
            </div>
            <div className="flex items-center gap-2 text-amber-200/50 font-mono text-xs uppercase bg-amber-950/50 border border-amber-500/20 px-3 py-1 rounded-full w-fit">
              <Calendar className="w-3 h-3" /> Aug 2023 - Present
            </div>
          </div>
          <p className="text-amber-100/60 text-sm leading-relaxed relative z-10 font-sans">Specialization: Artificial Intelligence</p>
        </div>
      </div>

      {/* Experience 1 */}
      <div className="relative group">
        <div className="absolute -left-[49px] bg-amber-950 border border-amber-500/50 rounded-full p-2 mt-1 shadow-[0_0_15px_rgba(245,158,11,0.3)] group-hover:bg-amber-500 transition-colors">
          <Zap className="w-4 h-4 text-orange-400 group-hover:text-black transition-colors" />
        </div>
        <div className="p-8 bg-amber-900/10 border border-amber-500/20 rounded-2xl hover:bg-amber-900/20 transition-all backdrop-blur-md relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-10 transition duration-500 blur" />
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2 relative z-10">
            <div>
              <h3 className="text-2xl font-bold tracking-wider text-amber-100 font-sans">Mentor | GirlScript Summer of Code</h3>
              <p className="text-orange-400/80 font-mono text-xs uppercase mt-1">Python • PyTorch • Hugging Face Transformers • Git</p>
            </div>
            <div className="flex items-center gap-2 text-amber-200/50 font-mono text-xs uppercase bg-amber-950/50 border border-amber-500/20 px-3 py-1 rounded-full w-fit">
              <Calendar className="w-3 h-3" /> Aug 2025 - Dec 2025
            </div>
          </div>
          <ul className="text-amber-100/60 text-sm leading-relaxed space-y-2 list-none relative z-10 font-sans">
            <li className="flex gap-3"><span className="text-amber-500">✦</span> Led and mentored a team of 15+ contributors on a multi-modal AI project, designing NLP pipelines.</li>
            <li className="flex gap-3"><span className="text-amber-500">✦</span> Evaluated model performance using statistical metrics to guide optimization decisions.</li>
            <li className="flex gap-3"><span className="text-amber-500">✦</span> Reviewed and merged 25+ pull requests while enforcing CI/CD best practices.</li>
          </ul>
        </div>
      </div>

      {/* Experience 2 */}
      <div className="relative group">
        <div className="absolute -left-[49px] bg-amber-950 border border-amber-500/50 rounded-full p-2 mt-1 shadow-[0_0_15px_rgba(245,158,11,0.3)] group-hover:bg-amber-500 transition-colors">
          <Cpu className="w-4 h-4 text-yellow-400 group-hover:text-black transition-colors" />
        </div>
        <div className="p-8 bg-amber-900/10 border border-amber-500/20 rounded-2xl hover:bg-amber-900/20 transition-all backdrop-blur-md relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl opacity-0 group-hover:opacity-10 transition duration-500 blur" />
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2 relative z-10">
            <div>
              <h3 className="text-2xl font-bold tracking-wider text-amber-100 font-sans">AI Tech Intern | Univest</h3>
              <p className="text-yellow-400/80 font-mono text-xs uppercase mt-1">Python • Hugging Face • PostgreSQL • LangChain • React</p>
            </div>
            <div className="flex items-center gap-2 text-amber-200/50 font-mono text-xs uppercase flex-col sm:flex-row sm:bg-amber-950/50 sm:border sm:border-amber-500/20 sm:px-3 sm:py-1 rounded-full w-fit">
              <span className="flex items-center gap-2"><MapPin className="w-3 h-3" /> Gurgaon</span>
              <span className="hidden sm:inline text-amber-500/30">|</span>
              <span className="flex items-center gap-2"><Calendar className="w-3 h-3" /> Jun 2025 - Aug 2025</span>
            </div>
          </div>
          <ul className="text-amber-100/60 text-sm leading-relaxed space-y-2 list-none relative z-10 font-sans">
            <li className="flex gap-3"><span className="text-amber-500">✦</span> Developed and shipped intelligent RAG chatbot systems used within the product.</li>
            <li className="flex gap-3"><span className="text-amber-500">✦</span> Worked on backend infrastructure improvements to support scalability, performance, and reliable user interactions in a high-velocity production environment.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const SkillsSection = () => {
  const skillCategories = [
    { name: "Core", icon: Cpu, skills: ["C++", "Data Structures & Algorithms", "Python", "HTML/CSS", "MATLAB", "Jira"] },
    { name: "AI/ML", icon: Zap, skills: ["LLMs", "LangChain", "Hugging Face", "TensorFlow", "PyTorch", "Scikit-learn", "NumPy", "Pandas", "MatplotLib"] },
    { name: "Backend", icon: BookOpen, skills: ["Flask", "Node.js", "FastAPI", "MongoDB", "MySQL", "PostgreSQL"] },
    { name: "Frontend", icon: Palette, skills: ["React Native", "Javascript", "TypeScript", "React.js"] },
    { name: "DevOps", icon: Compass, skills: ["Git", "Docker", "Figma", "Selenium", "BeautifulSoup", "Postman"] },
    { name: "Soft Skills", icon: Mail, skills: ["Problem-Solving", "Presentation", "Communication", "Team Work", "Pro-active"] }
  ];

  return (
    <div className="p-10 bg-[#0a0f1c]/90 border border-blue-500/20 rounded-[2rem] shadow-[inset_0_0_80px_rgba(37,99,235,0.1)] relative overflow-hidden font-sans">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)] pointer-events-none" />

      <h3 className="text-3xl text-blue-400 tracking-[0.3em] uppercase mb-12 text-center font-bold flex flex-col items-center gap-4">
        <Cpu className="w-12 h-12 opacity-80" /> Tech Stack
      </h3>

      <div className="grid md:grid-cols-2 gap-6 text-left relative z-10">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="p-6 bg-blue-950/20 border border-blue-500/10 rounded-xl hover:bg-blue-900/30 hover:border-blue-500/30 transition-all group backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <category.icon className="w-24 h-24" />
            </div>
            
            <h3 className="text-sm font-bold tracking-[0.2em] text-blue-300 uppercase mb-4 flex items-center gap-3">
              <div className="w-2 h-2 rounded bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" /> {category.name}
            </h3>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map(skill => (
                <span key={skill} className="px-3 py-1.5 bg-black/40 border border-blue-500/20 rounded flex items-center gap-2 text-[10px] font-mono tracking-wider text-blue-100/70 group-hover:border-blue-400/40 group-hover:text-blue-100 transition-colors shadow-inner">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const LabSection = () => {
  const projects = [
    {
      title: "EcoPlay",
      tech: "Python • React • Node.js • Tailwind CSS",
      github: "https://github.com/arzoo0511/ecoplay.git",
      desc: "Built an interactive, gamified environmental platform featuring creative mini games, an advanced Eco Village system, dynamic dashboards, educational content, events, and community engagement integrated with SQL database."
    },
    {
      title: "UnivestBot",
      tech: "Python • HF • PostgreSQL • LangChain • React",
      github: "https://github.com/arzoo0511/chatbot_univest.git",
      desc: "Built an LLM powered RAG chatbot using FAISS for vector search and LangChain for orchestration. Supports async API routing for real time, context aware financial query resolution. Response time optimized for 10x efficiency."
    },
    {
      title: "Market Hawks",
      tech: "Python • TensorFlow • Deep Learning • Streamlit",
      github: "https://github.com/arzoo0511/markethawks.git",
      desc: "Machine Learning powered stock market prediction app built using deep learning models to forecast stock prices based on historical trends using Yahoo dataset."
    },
    {
      title: "GyaanGo",
      tech: "Python • FastAPI • PostgreSQL • React.js",
      github: "https://github.com/arzoo0511/gyaanGo2.git",
      desc: "An AI powered app for gamified offline learning in remote regions. Potential to increase learning by 45%. Worked with 3+ distinct APIs and 5+ datasets for robust learning."
    }
  ];

  return (
    <div className="p-10 bg-[#051111]/90 border border-emerald-500/20 rounded-[3rem] relative overflow-hidden font-sans shadow-[0_0_50px_rgba(16,185,129,0.05)_inset]">
      
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <h3 className="text-3xl text-emerald-400 tracking-[0.3em] mb-12 text-center uppercase font-bold">
        Project Workbench
      </h3>

      <div className="grid md:grid-cols-2 gap-8 text-left relative z-10">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="p-8 bg-emerald-950/20 border-t border-emerald-500/30 rounded-2xl hover:bg-emerald-900/40 transition-all group backdrop-blur-md flex flex-col h-full shadow-[0_-5px_20px_rgba(16,185,129,0.05)]"
          >
            <div className="flex justify-between items-start mb-4">
              
              <h3 className="text-3xl font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                {project.title}
              </h3>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Github repository for ${project.title}`}
                className="text-emerald-500/50 hover:text-emerald-400 hover:scale-110 transition-all bg-emerald-950/50 p-3 rounded-full border border-emerald-500/20"
              >
                <Github className="w-5 h-5" />
              </a>

            </div>

            <div className="h-px w-full bg-gradient-to-r from-emerald-500/50 to-transparent mb-4" />

            <p className="text-emerald-400 font-mono text-[10px] uppercase tracking-[0.2em] mb-4 leading-relaxed bg-emerald-950/50 px-3 py-2 rounded border border-emerald-500/10 inline-block w-fit">
              {project.tech}
            </p>

            <p className="text-white/60 text-sm leading-relaxed flex-grow">
              {project.desc}
            </p>

          </div>
        ))}
      </div>
    </div>
  );
};

const KnowledgeSection = () => (
  <div className="text-left font-serif max-w-4xl mx-auto space-y-12">
    
    {/* Achievements Scroll */}
    <div className="p-10 bg-[#140a11]/90 border border-rose-900/50 rounded-sm relative overflow-hidden shadow-2xl">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/parchment.png')] opacity-20 mix-blend-overlay pointer-events-none" />
      
      {/* Scroll borders */}
      <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-rose-900/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-rose-900/40 to-transparent" />
      <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-r from-rose-900/60 to-transparent" />
      <div className="absolute right-0 top-0 h-full w-2 bg-gradient-to-l from-rose-900/60 to-transparent" />

      <h3 className="text-3xl text-rose-300 mb-8 tracking-widest border-b border-rose-900/50 pb-4 flex items-center gap-4 italic font-bold">
        <Award className="w-8 h-8 opacity-70" /> Achievements
      </h3>
      
      <ul className="text-rose-100/70 space-y-6 relative z-10 text-lg">
        <li className="flex gap-4 items-start hover:text-rose-200 transition-colors">
          <span className="text-rose-500 mt-1">☙</span> 
          <span className="leading-relaxed">Build With India  (Top 100 teams)</span>
        </li>
        <li className="flex gap-4 items-start hover:text-rose-200 transition-colors bg-rose-950/20 p-4 border border-rose-900/30 rounded">
          <span className="text-rose-500 mt-1 shadow-[0_0_10px_rgba(244,63,94,0.5)]">✤</span> 
          <span className="leading-relaxed text-rose-100"><strong>Published Research Paper:</strong> <em>PATHS: Predictive AI Traffic Handling System</em></span>
        </li>
        <li className="flex gap-4 items-start hover:text-rose-200 transition-colors">
          <span className="text-rose-500 mt-1">☙</span> 
          <span className="leading-relaxed">Ranked top 50 Mentors at GGSOC 2025 out of 300+ Mentors</span>
        </li>
        <li className="flex gap-4 items-start hover:text-rose-200 transition-colors">
          <span className="text-rose-500 mt-1">☙</span> 
          <span className="leading-relaxed">Ranked 42 in college and under 5k globally on Codolio platform</span>
        </li>
        <li className="flex gap-4 items-start hover:text-rose-200 transition-colors">
          <span className="text-rose-500 mt-1">☙</span> 
          <span className="leading-relaxed">Smart India Hackathon - Achieved rank 26 out of 500+ teams in internal round</span>
        </li>
      </ul>
    </div>

    {/* Positions Book */}
    <div className="p-10 bg-[#1f1118]/90 border border-fuchsia-900/40 rounded-sm relative overflow-hidden shadow-2xl">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/leather.png')] opacity-10 mix-blend-overlay pointer-events-none" />
      
      <h3 className="text-3xl font-bold text-fuchsia-300 mb-8 tracking-widest border-b border-fuchsia-900/50 pb-4 flex items-center gap-4 italic">
        <BookOpen className="w-8 h-8 opacity-70" /> Leadership Roles
      </h3>
      
      <div className="space-y-10 relative z-10">
        <div className="group pl-6 border-l-2 border-fuchsia-900/50 hover:border-fuchsia-500 transition-colors">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-3 gap-2">
            <h4 className="text-xl font-bold text-fuchsia-100">OSS Lead <span className="text-fuchsia-500/60 font-medium italic">@ Google Dev Group (GDG)</span></h4>
            <span className="text-fuchsia-400/50 font-mono text-[10px] tracking-widest uppercase">Feb 2025 - Present</span>
          </div>
          <p className="text-fuchsia-100/60 leading-relaxed font-sans text-sm">Contributed to 7+ open-source projects via code, issue resolution, and peer collaboration. Assisted in organizing OSS-related workshops and events, and led a workshop with 150+ participants on n8n.</p>
        </div>

        <div className="group pl-6 border-l-2 border-fuchsia-900/50 hover:border-fuchsia-500 transition-colors">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-3 gap-2">
            <h4 className="text-xl font-bold text-fuchsia-100">Placement Committee Member <span className="text-fuchsia-500/60 font-medium italic">@ Career Services Center</span></h4>
            <span className="text-fuchsia-400/50 font-mono text-[10px] tracking-widest uppercase">May 2025 - Present</span>
          </div>
          <p className="text-fuchsia-100/60 leading-relaxed font-sans text-sm">Led student-industry engagement efforts and oversaw placements of 150+ students. Coordinated 12 placement drives, managed outreach, and organized skill-building workshops.</p>
        </div>

        <div className="group pl-6 border-l-2 border-fuchsia-900/50 hover:border-fuchsia-500 transition-colors">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-3 gap-2">
            <h4 className="text-xl font-bold text-fuchsia-100">Design Head <span className="text-fuchsia-500/60 font-medium italic">@ Indian Blockchain Fraternity</span></h4>
            <span className="text-fuchsia-400/50 font-mono text-[10px] tracking-widest uppercase">Aug 2024 - Aug 2025</span>
          </div>
          <p className="text-fuchsia-100/60 leading-relaxed font-sans text-sm">Led design strategy and branding for blockchain platforms. Mentored 15+ junior designers and collaboratively crafted user-centric blockchain solutions.</p>
        </div>
      </div>
    </div>
  </div>
);

const PortalSection = () => (
  <div className="flex flex-col items-center justify-center space-y-8 mt-8">
    <div className="p-10 bg-[#1a0b2e]/80 border-4 border-[#3d1c63] rounded-lg shadow-[inset_0_0_50px_rgba(0,0,0,0.8),0_0_20px_rgba(147,51,234,0.3)] max-w-xl w-full text-center relative overflow-hidden font-serif">
      {/* Vintage Texture Overlay */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] pointer-events-none" />
      
      {/* Decorative corners */}
      <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-purple-500/50" />
      <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-purple-500/50" />
      <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-purple-500/50" />
      <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-purple-500/50" />

      <h3 className="text-4xl text-[#d4b483] mb-2 tracking-wider border-b-2 border-purple-900/50 pb-4 inline-block flex items-center gap-3">
        <Mail className="w-8 h-8 opacity-70" /> Directory
      </h3>
      
      <p className="text-purple-300/60 text-sm mb-10 italic mt-4">
        "To establish a connection, please consult the records below."
      </p>

      <div className="flex flex-col gap-0 w-full text-left font-mono text-sm">
        <div className="border-b border-purple-900/40 py-4 flex justify-between items-end hover:bg-purple-900/20 px-2 transition-colors">
          <span className="text-purple-400">EMAIL_ADDR</span>
          <span className="text-gray-500 flex-1 border-b border-dotted border-gray-600/30 mx-3 mb-1"></span>
           <a href="mailto:arzoorai26@gmail.com" className="text-[#d4b483] hover:text-white transition-colors">arzoorai26@gmail.com</a>
        </div>
        
        <div className="border-b border-purple-900/40 py-4 flex justify-between items-end hover:bg-purple-900/20 px-2 transition-colors">
          <span className="text-purple-400">TELEPHONE</span>
          <span className="text-gray-500 flex-1 border-b border-dotted border-gray-600/30 mx-3 mb-1"></span>
          <span className="text-[#d4b483]">+91 701-092-4877</span>
        </div>
        
        <div className="border-b border-purple-900/40 py-4 flex justify-between items-end hover:bg-purple-900/20 px-2 transition-colors">
  <span className="text-purple-400">LINKED_IN</span>
  <span className="text-gray-500 flex-1 border-b border-dotted border-gray-600/30 mx-3 mb-1"></span>
  <a
    href="https://www.linkedin.com/in/arzoo-rai/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#d4b483] hover:text-white transition-colors flex items-center gap-1"
  >
    View Profile <ExternalLink className="w-3 h-3" />
  </a>
</div>

<div className="border-b border-purple-900/40 py-4 flex justify-between items-end hover:bg-purple-900/20 px-2 transition-colors">
  <span className="text-purple-400">CODOLIO</span>
  <span className="text-gray-500 flex-1 border-b border-dotted border-gray-600/30 mx-3 mb-1"></span>
  <a
    href="https://codolio.com/profile/arzoo0511"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#d4b483] hover:text-white transition-colors flex items-center gap-1"
  >
    Profile <ExternalLink className="w-3 h-3" />
  </a>
</div>

<div className="py-4 flex justify-between items-end hover:bg-purple-900/20 px-2 transition-colors">
  <span className="text-purple-400">LEETCODE</span>
  <span className="text-gray-500 flex-1 border-b border-dotted border-gray-600/30 mx-3 mb-1"></span>
  <a
    href="https://leetcode.com/u/e23cseu2419/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#d4b483] hover:text-white transition-colors flex items-center gap-1"
  >
    Pofile <ExternalLink className="w-3 h-3" />
  </a>
</div>
      </div>
    </div>
  </div>
);

// --- NEW EXTRA SECTIONS (TOP DOORS) ---



const BlogSection = () => {
  const posts = [
    {
      title: "Agentic AI for Autonomous Algorithmic Trading Systems",
      date: "March 2026",
      readTime: "5 min read",
      category: "AI",
      link: "https://medium.com/@arzoorai26/agentic-ai-for-autonomous-algorithmic-trading-systems-46e9c3231496",
      description:
        "beginning of a research journey into how Agentic AI architectures can be applied to build smarter, more adaptive, and more autonomous algorithmic trading systems"
    },
    {
      title: "From Regional to Global: Enabling Spherical Graph Neural Networks for Weather Forecasting",
      date: "February 2026",
      readTime: "8 min read",
      category: "Deep Dive",
      link: "https://medium.com/@arzoorai26/from-regional-to-global-enabling-spherical-graph-neural-networks-for-weather-forecasting-c3c02a6f69cd",
      description:
        "practical and system-oriented approach to enabling global forecasting by introducing spherical graph representations, geometry-aware feature construction, and boundary-free autoregressive modeling"
    },
    {
      title: "The Mathematics Behind Market Prediction: Why Financial Forecasting Is So Difficult",
      date: "April 2026",
      readTime: "6 min read",
      category: "Analysis",
      link: "http://medium.com/p/553717d2fa04?postPublishedType=initial",
      description:
        "Understanding the mathematical limitations of financial forecasting through stochastic processes, chaos theory, probability distributions, and market randomness."
    }
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-20">
      <div className="p-8 md:p-12 bg-black/60 border border-orange-500/20 rounded-3xl shadow-[0_0_80px_rgba(249,115,22,0.1)] relative overflow-hidden backdrop-blur-xl font-mono">
        
        {/* Terminal Header */}
        <div className="flex items-center gap-3 border-b border-orange-500/20 pb-6 mb-10">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>

          <span className="text-orange-500/60 text-sm tracking-widest uppercase ml-4">
            System://Logs.txt
          </span>

          <div className="flex-1" />

          <div className="flex items-center gap-2 text-orange-400">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs uppercase tracking-widest">Live</span>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-12 gap-12">

          {/* Blog Posts */}
          <div className="md:col-span-8 space-y-10 relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500/50 via-orange-500/10 to-transparent" />

            {posts.map((post, idx) => (
              <div
                key={idx}
                className="relative pl-8 group cursor-pointer"
              >
                <div className="absolute left-[-4px] top-2 w-2 h-2 bg-black border border-orange-500 rounded-full group-hover:bg-orange-500 transition-all shadow-[0_0_10px_rgba(249,115,22,0)] group-hover:shadow-[0_0_15px_rgba(249,115,22,1)]" />

                <h4 className="text-2xl text-orange-100 font-bold mb-2 group-hover:text-orange-400 transition-colors">
                  {post.title}
                </h4>

                <div className="flex gap-4 text-xs text-orange-500/50 uppercase tracking-widest mb-4">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                  <span>•</span>
                  <span>{post.category}</span>
                </div>

                <p className="text-orange-100/60 font-sans leading-relaxed text-sm mb-5">
                  {post.description}
                </p>

                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="flex items-center gap-2 text-orange-400 opacity-60 group-hover:opacity-100 transition-all text-xs uppercase tracking-widest bg-orange-500/10 px-4 py-2 rounded-lg hover:bg-orange-500/20">
                    Parse Entry
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </a>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="md:col-span-4 border-l border-orange-500/10 pl-8 space-y-8">

            <div>
              <h5 className="text-orange-500/50 text-xs tracking-[0.2em] uppercase mb-4">
                Categories
              </h5>

              <ul className="space-y-3">
                {[
                  "AI",
                  "Deep Dive",
                  "Analysis",
                  "Opinions"
                ].map((cat) => (
                  <li
                    key={cat}
                    className="text-orange-200/70 hover:text-orange-400 hover:translate-x-2 transition-all cursor-pointer text-sm"
                  >
                    {'>'} {cat}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 bg-orange-950/30 rounded-xl border border-orange-500/20">
              <h5 className="text-orange-500 text-xs tracking-widest uppercase mb-3">
                Metrics
              </h5>

              <div className="space-y-2 text-xs text-orange-200/60">
                <div className="flex justify-between">
                  <span>Entries</span>
                  <span>3</span>
                </div>

                <div className="flex justify-between">
                  <span>Words</span>
                  <span>12,040</span>
                </div>

                <div className="flex justify-between">
                  <span>Uptime</span>
                  <span>99.9%</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

const ActivitiesSection = () => {
  const activities = [
    { title: "Open Source Contributor", org: "React Navigation", date: "2024 - 2026", desc: "Resolved critical rendering bugs and improved documentation.", icon: GitBranch },
    { title: "Tech Workshop Speaker", org: "Google Developer Group", date: "Oct 2025", desc: "Presented on N8N architectures to 150+ attendees.", icon: Mic }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto space-y-12 text-left font-sans">
      <div className="p-8 md:p-12 bg-cyan-950/20 border border-cyan-500/20 rounded-[3rem] shadow-[0_0_100px_rgba(6,182,212,0.1)_inset] relative overflow-hidden backdrop-blur-2xl">
        
        {/* Abstract Network Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          {activities.map((act, idx) => (
            <div key={idx} className="group relative p-8 bg-black/40 border border-cyan-500/20 rounded-3xl hover:bg-cyan-900/40 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute -inset-0.5 bg-gradient-to-b from-cyan-500 to-transparent rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity blur" />
              <div className="relative">
                <act.icon className="w-10 h-10 text-cyan-400 mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">{act.title}</h4>
                <span className="text-cyan-500/80 font-mono text-xs uppercase tracking-widest">{act.org}</span>
                <div className="my-4 h-px w-full bg-cyan-500/20" />
                <p className="text-cyan-100/60 text-sm leading-relaxed mb-6">{act.desc}</p>
                <div className="inline-block px-3 py-1 bg-cyan-950/50 border border-cyan-500/30 rounded-full text-[10px] font-mono text-cyan-400 uppercase tracking-widest">
                  {act.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ResearchSection = () => {
  const papers = [
    {
      title: "PATHS: Predictive AI Traffic Handling System",
      conference: "International Conference on AI & Infrastructure",
      date: "Spring 2025",
      status: "In publication",
      desc: "Developed an AI-driven predictive model to optimize urban traffic flows, reducing congestion latency by up to 20% during peak hours using advanced time-series forecasting.",
      link: "https://www.overleaf.com/read/fvzcjrhxqbqc#eb9094"
    },
    {
      title: "SCAATA: Self -Critiquing Algorithmic Trading Agent (Pending)",
      conference: "",
      date: "Early 2026",
      status: "In Progress",
      desc: "Exploring the Reinforcement learning optimised with large language model to develope a model to earn maximum profit without human intervention.",
      link: "https://www.overleaf.com/read/pdpqzkdmvfzr#bf66fe"
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8 text-left font-serif">
      <div className="flex items-center gap-4 mb-12">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-rose-500/50" />
        <h3 className="text-3xl font-heading tracking-[0.3em] uppercase text-rose-300">
           Research & Publications
        </h3>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-rose-500/50" />
      </div>

      <div className="flex flex-col gap-8">
        {papers.map((paper, idx) => (
           <div key={idx} className="group relative p-8 md:p-10 bg-black/40 border border-rose-900/50 hover:border-rose-400 rounded-3xl transition-all duration-500 backdrop-blur-xl overflow-hidden hover:shadow-[0_0_50px_rgba(244,63,94,0.15)] flex flex-col items-start gap-4">
              <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/5 blur-[100px] group-hover:bg-rose-500/20 transition-colors pointer-events-none" />
              
              <div className="flex self-stretch justify-between items-start mb-2 relative z-10 w-full">
                 <h4 className="text-2xl md:text-3xl font-bold text-white group-hover:text-rose-300 transition-colors max-w-3xl leading-snug font-sans">
                   {paper.title}
                 </h4>
                 {paper.link && (
                   <a href={paper.link} className="flex shrink-0 items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 hover:bg-rose-500 hover:text-white transition-all group-hover:scale-110">
                     <ExternalLink className="w-5 h-5 md:w-6 md:h-6" />
                   </a>
                 )}
              </div>
              
              <div className="flex flex-wrap items-center gap-4 font-mono text-[10px] md:text-xs uppercase tracking-widest text-rose-200/50 relative z-10">
                 <span className="px-3 py-1 bg-rose-950/40 rounded-full border border-rose-900/50">{paper.conference}</span>
                 <span>{paper.date}</span>
                 <span className={`flex items-center gap-2 ${paper.status === 'Published' ? 'text-emerald-400' : 'text-amber-400'}`}>
                    <span className={`w-2 h-2 rounded-full ${paper.status === 'Published' ? 'bg-emerald-400' : 'bg-amber-400'} animate-pulse`} />
                    {paper.status}
                 </span>
              </div>
              
              <div className="w-full h-px bg-gradient-to-r from-rose-500/20 to-transparent my-2" />
              
              <p className="text-rose-100/70 font-sans text-sm md:text-base leading-relaxed relative z-10">
                {paper.desc}
              </p>
           </div>
        ))}
      </div>
    </div>
  );
};

const GallerySection = () => {
  return (
    <div className="w-full max-w-7xl mx-auto space-y-8 text-left">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {[1, 2, 3, 4, 5, 6].map((idx) => (
          <div key={idx} className="break-inside-avoid relative group rounded-2xl overflow-hidden border border-fuchsia-500/20 bg-fuchsia-950/20">
            {/* Aspect ratio variation for masonry effect */}
            <div className={`w-full ${idx % 2 === 0 ? 'h-64' : 'h-96'} bg-gradient-to-br from-fuchsia-900/40 to-black relative`}>
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay opacity-30" />
               <div className="absolute inset-0 bg-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                  <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out text-center px-6">
                    <h4 className="text-white font-bold text-xl mb-2 drop-shadow-md">Creative #{idx}</h4>
                    <p className="text-fuchsia-200 text-sm">Experimental UI components and shaders.</p>
                  </div>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


// --- MAIN WRAPPER ---

const sectionData = {
  journey: { icon: Compass, title: 'My Journey', color: 'from-amber-500 to-orange-600' },
  vision: { icon: Zap, title: 'Future Vision', color: 'from-blue-400 to-cyan-600' },
  skills: { icon: Cpu, title: 'Tech Arsenal', color: 'from-indigo-400 to-purple-600' },
  lab: { icon: Palette, title: 'Project Lab', color: 'from-teal-400 to-emerald-600' },
  knowledge: { icon: BookOpen, title: 'Archive', color: 'from-rose-400 to-pink-600' },
  portal: { icon: Mail, title: 'Connect', color: 'from-slate-400 to-slate-800' },
  blog: { icon: BookOpen, title: 'Personal Blog', color: 'from-yellow-400 to-orange-500' },
  extra1: { icon: Compass, title: 'Activities', color: 'from-green-400 to-cyan-500' },
  extra2: { icon: Palette, title: 'Research Papers', color: 'from-rose-400 to-rose-600' },
  extra3: { icon: Zap, title: 'Gallery(coming soon)', color: 'from-purple-400 to-fuchsia-500' }
};

export const SectionView: React.FC<{ section: SectionType; onBack: () => void }> = ({ section, onBack }) => {
  if (!section) return null;
  const data = sectionData[section];

  return (
    <div className="w-full h-full bg-[#050510]/95 backdrop-blur-3xl text-white relative flex flex-col items-center p-8 md:p-12 overflow-y-auto">
      {/* Back Button */}
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onBack}
        className="absolute top-6 left-6 md:top-12 md:left-12 flex items-center gap-3 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-all z-50 shadow-lg"
      >
        <ChevronLeft className="w-4 h-4" />
        <span className="text-[10px] tracking-[0.2em] uppercase font-mono">Back to Map</span>
      </motion.button>

      {/* Decorative Background Elements */}
      <div className={`fixed top-0 left-0 w-full h-full bg-gradient-to-br ${data.color} opacity-[0.03] blur-[150px] pointer-events-none -z-10`} />

      {/* Content Container */}
      <div className="max-w-7xl w-full text-center space-y-10 mt-20 md:mt-12 pb-20">
        
        {/* Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex flex-col items-center"
        >
          <div className={`p-5 md:p-6 rounded-[2rem] bg-gradient-to-br ${data.color} shadow-[0_20px_50px_rgba(0,0,0,0.5)] mb-8`}>
            <data.icon className="w-10 h-10 md:w-12 md:h-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-widest mb-4 uppercase drop-shadow-2xl">
            {data.title}
          </h1>
        </motion.div>

        {/* Dynamic Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="w-full"
        >
          {section === 'journey' && <JourneySection />}
          {section === 'skills' && <SkillsSection />}
          {section === 'lab' && <LabSection />}
          {section === 'knowledge' && <KnowledgeSection />}
          {section === 'portal' && <PortalSection />}
          {section === 'blog' && <BlogSection />}
          {section === 'extra1' && <ActivitiesSection />}
          {section === 'extra2' && <ResearchSection />}
          {section === 'extra3' && <GallerySection />}
          {section === 'vision' && (
             <div className="p-12 border border-white/5 rounded-3xl bg-white/5 text-white/50 font-mono text-sm uppercase tracking-widest">
               Data transmission incomplete. Vision module constructing...
             </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};
