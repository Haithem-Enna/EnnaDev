/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDownRight } from "lucide-react";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden bg-black">
      {/* Background Image - Absolute and Full Cover */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
          className="w-full h-full object-cover opacity-40 grayscale-[0.2]"
          alt="Technical Background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl w-full z-10"
      >
        <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8 md:mb-12">
          <div className="h-px w-10 md:w-16 bg-blue-500" />
          <span className="font-mono text-[9px] md:text-xs tracking-[0.4em] uppercase text-blue-400">
            Freelance Full-Stack Specialized
          </span>
        </motion.div>

        <div className="mb-8 md:mb-12 relative flex justify-center">
          {/* Background Glow behind text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[60%] bg-blue-500/10 blur-[100px] md:blur-[150px] rounded-full animate-pulse" />
          
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <h1 className="text-[15vw] md:text-[12vw] font-display font-extrabold tracking-tighter leading-none select-none text-reveal">
              ENNA
            </h1>
          </motion.div>
        </div>

        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start relative z-20"
        >
          <div className="md:col-span-7">
            <p className="text-3xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight leading-[1] mb-6">
              FULL-STACK <br className="hidden md:block" />
              <span className="text-blue-500">MAVERICK</span>.
            </p>
            <div className="h-px w-24 md:w-32 bg-gradient-to-r from-blue-500 to-transparent mb-8" />
          </div>
          
          <div className="md:col-span-5 flex flex-col gap-6 md:gap-8 items-start md:items-end md:text-right">
            <div className="space-y-2">
              <span className="font-mono text-[9px] md:text-[10px] tracking-widest text-blue-500 uppercase block">Freelance Protocol</span>
              <p className="text-white/40 text-xs md:text-sm font-light max-w-xs leading-relaxed">
                Sviluppo software d'avanguardia con un approccio radicale alla performance e all'estetica.
              </p>
            </div>

            <motion.a
              href="#fullstack"
              whileHover={{ scale: 1.05, letterSpacing: "0.2em" }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-4 md:gap-6 bg-white text-black px-8 md:px-12 py-4 md:py-5 rounded-full font-bold uppercase text-[10px] md:text-xs tracking-widest transition-all"
            >
              Enter the Core
              <ArrowDownRight size={18} className="group-hover:rotate-45 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Dynamic Floating Rings */}
      <motion.div 
         animate={{ rotate: 360 }}
         transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] border border-white/[0.03] rounded-full hidden lg:block"
      />
      <motion.div 
         animate={{ rotate: -360 }}
         transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] border border-white/[0.02] rounded-full hidden lg:block"
      />

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-6"
      >
        <span className="font-mono text-[9px] tracking-widest text-white/20 uppercase">Scroll to explore</span>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </motion.div>
    </section>
  );
}
