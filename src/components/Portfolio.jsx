/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { motion } from "motion/react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { ALL_PROJECTS } from "../constants";
import { Link } from "react-router-dom";

export function Portfolio({ isHomePage = false }) {
  // On home page, show only 1 project per category
  const categories = Array.from(new Set(ALL_PROJECTS.map(p => p.category)));
  const homeProjects = categories.map(cat => ALL_PROJECTS.find(p => p.category === cat));
  
  const projects = isHomePage ? homeProjects : ALL_PROJECTS;

  return (
    <section id="portfolio" className={`py-32 px-6 ${isHomePage ? 'bg-white/[0.02]' : 'bg-black min-h-screen'}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-extralight tracking-tight mb-4 italic">
              {isHomePage ? 'Featured Work' : 'Full Portfolio'}
            </h2>
            <p className="text-white/40 max-w-sm font-light">
              {isHomePage 
                ? "Una selezione dei miei lavori migliori, uno per categoria principale."
                : "L'elenco completo di tutti i miei progetti, esperimenti e collaborazioni."}
            </p>
          </div>
          
          {isHomePage ? (
            <Link 
              to="/portfolio"
              className="flex items-center gap-4 group font-mono text-xs tracking-widest text-blue-500 uppercase hover:text-white transition-colors"
            >
              <span>Vedi tutto il portfolio</span>
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          ) : (
             <div className="flex gap-4 font-mono text-xs tracking-widest text-white/30 uppercase">
                <span>Total Projects: {ALL_PROJECTS.length}</span>
                <div className="w-12 h-px bg-white/20 my-auto" />
              </div>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-6 bg-white/5">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                   <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                        <Github size={18} />
                      </div>
                      <div className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                        <ExternalLink size={18} />
                      </div>
                   </div>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40">
                  {project.category}
                </span>
                <div className="h-px w-8 bg-white/10" />
              </div>
              
              <h3 className="text-2xl font-light mb-4 group-hover:text-glow transition-all">
                {project.title}
              </h3>
              
              <p className="text-sm text-white/50 font-light leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="text-[9px] uppercase tracking-tighter text-white/30">
                    #{t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {!isHomePage && (
          <div className="mt-24 text-center">
            <Link to="/" className="text-xs uppercase tracking-[0.3em] text-white/20 hover:text-white transition-colors">
              Torna alla Home
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
