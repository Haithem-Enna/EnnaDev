/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export function Loader() {
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setComplete(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[1000] bg-black flex items-center justify-center overflow-hidden"
        >
          <div className="relative flex flex-col items-center">
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, ease: "circIn" }}
              className="w-48 h-[1px] bg-white/20 mb-8"
            />
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-display font-extrabold text-5xl tracking-tighter"
            >
              ENNA<span className="text-blue-500 italic">.</span>
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="mt-4 font-mono text-[8px] tracking-[1em] text-white/40 uppercase"
            >
              Protocol Initializing
            </motion.div>

            {/* Cinematic background flashes */}
            <motion.div 
              animate={{ opacity: [0, 0.05, 0] }}
              transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 0.5 }}
              className="absolute inset-0 bg-blue-500 blur-[100px] -z-10"
            />
          </div>
          
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-12 font-mono text-[9px] text-white/20"
          >
            ESTABLISHED 2026 / FREELANCE CORE
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
