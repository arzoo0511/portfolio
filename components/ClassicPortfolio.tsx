import React from 'react';
import { Calendar, Github, MapPin } from 'lucide-react';

export function ClassicPortfolio() {
  const experiences = [
    {
      role: 'Mentor',
      company: 'GirlScript Summer of Code',
      date: 'Aug 2025 - Dec 2025',
      tech: 'Python • PyTorch • HF Transformers • Git',
      points: [
        'Led and mentored a team of 15+ contributors on a multi-modal AI project, designing NLP pipelines.',
        'Evaluated model performance using statistical metrics to guide optimization decisions.',
        'Reviewed and merged 25+ pull requests while enforcing CI/CD best practices.'
      ]
    },
    {
      role: 'AI Tech Intern',
      company: 'Univest',
      location: 'Gurgaon',
      date: 'Jun 2025 - Aug 2025',
      tech: 'Python • HF • PostgreSQL • LangChain • React',
      points: [
        'Developed and shipped intelligent RAG chatbot systems used within the product.',
        'Worked on backend infrastructure improvements to support scalability, performance, and reliable user interactions.'
      ]
    }
  ];

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
    <section
      id="classic-portfolio"
      className="w-full min-h-screen bg-[#050510] relative text-white py-32 px-6"
    >
      <div className="max-w-5xl mx-auto space-y-32">

        {/* Header */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-widest text-[#d4b483]">
            Professional Registry
          </h2>
          <div className="h-px w-32 bg-gradient-to-r from-[#d4b483] to-transparent" />
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed font-sans">
            A linear consolidation of my experience, projects, and skills for visitors who prefer traditional documentation over the neural interface.
          </p>
        </div>

        {/* Experience */}
        <div id="experience" className="space-y-12 scroll-mt-32">
          <h3 className="text-2xl font-mono uppercase tracking-[0.2em] text-white/40 flex items-center gap-4">
            <span className="w-8 h-px bg-white/20" /> Experience
          </h3>

          <div className="space-y-16 pl-4 md:pl-12 border-l border-white/10">
            {experiences.map((exp, i) => (
              <div key={i} className="relative group">
                <div className="absolute -left-[17px] md:-left-[49px] top-1 w-3 h-3 rounded-full bg-[#050510] border-2 border-white/20 group-hover:border-[#d4b483] transition-colors" />

                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                  <div>
                    <h4 className="text-2xl font-bold font-sans">
                      {exp.role}{' '}
                      <span className="text-[#d4b483]">@ {exp.company}</span>
                    </h4>

                    <span className="text-white/40 font-mono text-xs uppercase tracking-widest mt-2 block">
                      {exp.tech}
                    </span>
                  </div>

                  <div className="flex flex-col items-start md:items-end text-white/40 font-mono text-xs uppercase tracking-widest gap-1">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-3 h-3" /> {exp.date}
                    </span>

                    {exp.location && (
                      <span className="flex items-center gap-2">
                        <MapPin className="w-3 h-3" /> {exp.location}
                      </span>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 text-white/70 font-sans leading-relaxed text-sm max-w-3xl">
                  {exp.points.map((pt, idx) => (
                    <li key={idx} className="flex gap-4">
                      <span className="text-[#d4b483]/50 mt-1">▹</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div id="projects" className="space-y-12 scroll-mt-32">
          <h3 className="text-2xl font-mono uppercase tracking-[0.2em] text-white/40 flex items-center gap-4">
            <span className="w-8 h-px bg-white/20" /> Featured Builds
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((proj, i) => (
              <div
                key={i}
                className="p-8 bg-white/5 border border-white/10 hover:border-[#d4b483]/50 rounded-2xl transition-all group hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-2xl font-bold font-sans text-white group-hover:text-[#d4b483] transition-colors">
                    {proj.title}
                  </h4>

                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 hover:text-[#d4b483] transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>

                <div className="text-white/40 font-mono text-[10px] uppercase tracking-widest mb-4 inline-block px-3 py-1 bg-white/5 rounded">
                  {proj.tech}
                </div>

                <p className="text-white/60 font-sans text-sm leading-relaxed">
                  {proj.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div id="contact" className="space-y-12 scroll-mt-32">
          <h3 className="text-2xl font-mono uppercase tracking-[0.2em] text-white/40 flex items-center gap-4">
            <span className="w-8 h-px bg-white/20" /> Contact
          </h3>

          <div className="space-y-4 max-w-3xl">

            {[
              ["EMAIL", "mailto:your@email.com", "Send Mail"],
              ["LINKEDIN", "https://www.linkedin.com/in/arzoo-rai/", "View Profile"],
              ["GITHUB", "https://github.com/arzoo0511", "Repository"],
              ["CODOLIO", "https://codolio.com/profile/arzoo0511", "Solve"],
              ["RESUME", "https://drive.google.com/file/d/1PIT2freE4uA_w94pmweuOONkI74O2kCn/view?usp=drive_link", "View Resume"]
            ].map(([label, href, text], i) => (
              <div
                key={i}
                className="border-b border-purple-900/40 py-4 flex justify-between items-end hover:bg-purple-900/10 px-2 transition-colors"
              >
                <span className="text-purple-400 font-mono">{label}</span>
                <span className="text-gray-500 flex-1 border-b border-dotted border-gray-600/30 mx-3 mb-1"></span>

                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#d4b483] hover:text-white transition-colors"
                >
                  {text}
                </a>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}