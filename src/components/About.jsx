/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 relative"
        >
          <div className="aspect-[4/5] glass rounded-3xl overflow-hidden relative z-10 p-1">
            <img 
              src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800"
              className="w-full h-full object-cover rounded-[22px] opacity-70 grayscale hover:grayscale-0 transition-all duration-1000"
              alt="Haithem Digital Universe"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-bottom p-8">
               <span className="mt-auto font-mono text-[10px] text-white/40 uppercase tracking-[.8em]">ENNA PROTOCOL</span>
            </div>
          </div>
          {/* Background decoration */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <div className="mb-8 font-mono text-xs tracking-widest text-white/30 uppercase">Profilo Professionale</div>
          <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-8">
            Versatilità & <span className="text-white/40 italic">Metodo</span>
          </h2>
          
          <div className="space-y-6 text-white/60 font-light leading-relaxed text-lg">
            <p>
              Sono un <span className="text-white font-normal underline decoration-white/20 underline-offset-8">developer versatile</span> capace di adattarsi 
              rapidamente a linguaggi e tecnologie differenti. Dal basso livello con C/C++ 
              fino al frontend moderno con React, passando per il game development con 
              Godot Engine.
            </p>
            <p>
              Il mio approccio è guidato dalla curiosità e dalla metodicità. 
              Punto sempre a soluzioni pulite, scalabili e ben documentate, 
              garantendo che ogni riga di codice serva uno scopo preciso nell'architettura 
              del prodotto.
            </p>
            <div className="pt-8 grid grid-cols-2 gap-12 border-t border-white/10">
              <div>
                <div className="text-white font-mono text-3xl mb-1">99%</div>
                <div className="text-[10px] uppercase tracking-widest text-white/30">Adattabilità</div>
              </div>
              <div>
                <div className="text-white font-mono text-3xl mb-1">100%</div>
                <div className="text-[10px] uppercase tracking-widest text-white/30">Metodo</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
