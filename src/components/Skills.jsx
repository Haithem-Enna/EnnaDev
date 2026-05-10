/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { motion } from "motion/react";
import { Code2, Monitor, Database, Gamepad2 } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Monitor size={20} />,
    skills: ["React", "JavaScript ES6+", "HTML5 / CSS3", "Tailwind CSS"],
    description: "Interfacce fluide e responsive ad alte prestazioni."
  },
  {
    title: "Backend",
    icon: <Database size={20} />,
    skills: ["PHP", "API REST", "SQL", "Python"],
    description: "Sistemi scalabili, autenticazione e logica server-side."
  },
  {
    title: "Game Dev",
    icon: <Gamepad2 size={20} />,
    skills: ["Godot Engine", "GDScript", "C#", "Unity"],
    description: "Sviluppo di videogiochi, fisica e logica di gioco."
  },
  {
    title: "Core Logic",
    icon: <Code2 size={20} />,
    skills: ["C / C++", "POO", "Automation", "Git"],
    description: "Programmazione a basso livello e controllo versione."
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-4">Competenze</h2>
          <div className="h-px w-24 bg-white/20 mx-auto md:mx-0" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-2xl group hover:bg-white/10 transition-colors"
            >
              <div className="mb-6 text-white/40 group-hover:text-white transition-colors">
                {cat.icon}
              </div>
              <h3 className="text-xl font-medium mb-4">{cat.title}</h3>
              <p className="text-sm text-white/40 mb-6 font-light leading-relaxed">
                {cat.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span 
                    key={skill}
                    className="text-[10px] uppercase tracking-widest px-3 py-1 bg-white/5 border border-white/5 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
