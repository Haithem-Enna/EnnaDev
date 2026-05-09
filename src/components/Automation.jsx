import { motion } from "motion/react";
import { Bot, MessageSquare, Search, Zap, Terminal, Activity } from "lucide-react";

export function Automation() {
  return (
    <section id="automation" className="py-40 px-6 bg-linear-to-b from-transparent to-indigo-900/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-32">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="p-6 rounded-full bg-indigo-500/10 mb-8"
          >
            <Bot size={40} className="text-indigo-400" />
          </motion.div>
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-extralight tracking-tight mb-8"
          >
            Special Ops: <span className="text-indigo-400 italic">Automation</span>
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/40 font-light max-w-2xl leading-relaxed"
          >
            Sviluppo soluzioni intelligenti che lavorano al posto tuo. 
            Dall'estrazione dati automatica ai bot per la gestione di community, 
            massimizzo l'efficienza tramite script Python e integrazioni API.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Bot Case Study - Vinted Automation */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="md:col-span-2 glass rounded-[3rem] p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-12 opacity-5">
              <Search size={220} />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-indigo-500/10">
                  <Activity className="text-indigo-400" />
                </div>
                <h3 className="text-3xl font-light">E-Commerce Intelligence</h3>
              </div>
              
              <div className="space-y-8 mb-12">
                <p className="text-lg text-white/60 font-light leading-relaxed max-w-xl">
                  Ho sviluppato un sistema proprietario di monitoraggio per piattaforme di 
                  second-hand che automatizza la ricerca di prodotti rari, 
                  notificando l'utente in tempo reale tramite Discord. 
                </p>
                
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <div className="text-white/30 text-xs uppercase tracking-widest">Tempo di Risposta</div>
                    <div className="text-3xl font-mono text-indigo-400">&lt; 1s</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-white/30 text-xs uppercase tracking-widest">Uptime</div>
                    <div className="text-3xl font-mono text-indigo-400">99.9%</div>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                 <span className="px-4 py-2 bg-indigo-500/5 rounded-full text-[10px] uppercase font-mono tracking-widest border border-indigo-500/10">Python</span>
                 <span className="px-4 py-2 bg-indigo-500/5 rounded-full text-[10px] uppercase font-mono tracking-widest border border-indigo-500/10">Discord API</span>
                 <span className="px-4 py-2 bg-indigo-500/5 rounded-full text-[10px] uppercase font-mono tracking-widest border border-indigo-500/10">Web Scraping</span>
              </div>
            </div>
          </motion.div>

          {/* Integration Card */}
          <motion.div 
             whileHover={{ y: -10 }}
             className="glass rounded-[3rem] p-12 flex flex-col justify-between"
          >
            <div>
              <div className="mb-8 p-3 w-fit rounded-2xl bg-blue-500/10">
                <MessageSquare className="text-blue-400" />
              </div>
              <h3 className="text-2xl font-light mb-4">Discord Ecosystems</h3>
              <p className="text-sm text-white/40 font-light leading-relaxed">
                Creazione di bot per la gestione di grandi community, 
                automazione dei rulli, sistemi di economia e moderazione AI.
              </p>
            </div>
            
            <div className="mt-12 flex flex-col gap-4">
              <div className="h-px w-full bg-white/5" />
              <div className="flex items-center justify-between text-xs font-mono text-white/20">
                <span>Status</span>
                <span className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                  ONLINE
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
