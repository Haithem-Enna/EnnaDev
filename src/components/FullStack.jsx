import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Server, Globe, Cpu, Zap, Code, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Architetture Scalabili",
    desc: "Progettazione di sistemi backend robusti in PHP e Python capaci di gestire carichi elevati senza compromessi.",
    icon: <Server className="text-blue-400" />
  },
  {
    title: "Interfacce Reattive",
    desc: "Frontend moderni costruiti con React, ottimizzati per la velocità e l'user experience.",
    icon: <Globe className="text-indigo-400" />
  },
  {
    title: "Logica di Sistema",
    desc: "Sviluppo core in C/C++ per massime prestazioni e integrazione hardware/software.",
    icon: <Cpu className="text-purple-400" />
  },
  {
    title: "Sicurezza & Integrità",
    desc: "Implementazione di protocolli di sicurezza avanzati e protezione dei dati sensibili.",
    icon: <ShieldCheck className="text-emerald-400" />
  }
];

export function FullStack() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} id="fullstack" className="py-40 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-5 lg:sticky lg:top-32 mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-[1px] bg-blue-500" />
                <span className="font-mono text-[10px] md:text-xs tracking-widest text-blue-400 uppercase">Core Expertise</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-extralight tracking-tighter leading-none mb-8">
                Full-Stack <br />
                <span className="text-white/40">Engineering</span>
              </h2>
              <p className="text-base md:text-xl text-white/50 font-light leading-relaxed mb-12 max-w-sm">
                Non mi occupo solo di codice, ma di architettura digitale. 
                Dalla gestione dei database alla UX finale, ogni tassello è 
                progettato per durare e scalare.
              </p>
              
              <div className="p-6 md:p-8 rounded-3xl glass relative group overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                  <Code size={100} />
                </div>
                <div className="relative z-10">
                   <div className="text-3xl md:text-4xl font-mono mb-2">12+</div>
                   <div className="text-[10px] uppercase tracking-widest text-white/40">Tecnologie Padroneggiate</div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.03)" }}
                className="p-8 md:p-10 rounded-[1.5rem] md:rounded-[2rem] border border-white/5 bg-white/[0.01] transition-all"
              >
                <div className="mb-6 md:mb-8 p-3 md:p-4 w-fit rounded-2xl bg-white/5">
                  {feature.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-light mb-4">{feature.title}</h3>
                <p className="text-sm md:text-base text-white/40 font-light leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
            
            {/* Call to action card */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               className="md:col-span-2 p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-br from-blue-600/10 to-indigo-600/10 border border-blue-500/10 flex flex-col md:flex-row justify-between items-center gap-8"
            >
              <div className="text-center md:text-left">
                <h4 className="text-2xl md:text-3xl font-light mb-2 italic">Hai un progetto complesso?</h4>
                <p className="text-sm md:text-base text-white/50 font-light">Mettiamo alla prova la mia capacità di problem solving.</p>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto px-10 py-5 bg-white text-black rounded-full font-medium text-sm"
              >
                Inizia ora
              </motion.button>
            </motion.div>
          </div>

        </div>
      </div>
      
      {/* Dynamic Background Element */}
      <motion.div 
        style={{ y }}
        className="absolute -right-40 top-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] -z-10"
      />
    </section>
  );
}
