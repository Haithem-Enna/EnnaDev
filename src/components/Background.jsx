import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";

export function Background() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Trasformazioni per gli stili di sfondo
  const mx1 = useTransform(smoothX, v => `${v}%`);
  const my1 = useTransform(smoothY, v => `${v}%`);
  const mx2 = useTransform(smoothX, v => `${100 - v}%`);
  const my2 = useTransform(smoothY, v => `${100 - v}%`);
  
  const orbitalX1 = useTransform(smoothX, v => (v - 50) * 0.2);
  const orbitalY1 = useTransform(smoothY, v => (v - 50) * 0.2);
  const orbitalX2 = useTransform(smoothX, v => (50 - v) * 0.3);
  const orbitalY2 = useTransform(smoothY, v => (50 - v) * 0.3);

  useEffect(() => {
    // RIMOSSO : MouseEvent
    const handleMouseMove = (e) => {
      mouseX.set((e.clientX / window.innerWidth) * 100);
      mouseY.set((e.clientY / window.innerHeight) * 100);
    };
    
    // RIMOSSO : TouchEvent
    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        mouseX.set((e.touches[0].clientX / window.innerWidth) * 100);
        mouseY.set((e.touches[0].clientY / window.innerHeight) * 100);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 -z-10 bg-[#020202] overflow-hidden pointer-events-none">
      {/* Primary Atmospheric Glows */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle 80vw at var(--mx) var(--my), rgba(50, 50, 150, 0.15), transparent 80%)`,
          // RIMOSSO [as any]
          "--mx": mx1,
          "--my": my1,
        }}
      />
      
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle 40vw at var(--mx) var(--my), rgba(255, 255, 255, 0.05), transparent 70%)`,
          // RIMOSSO [as any]
          "--mx": mx2,
          "--my": my2,
        }}
      />

      {/* Floating Orbital Elements */}
      <motion.div 
        style={{ x: orbitalX1, y: orbitalY1 }}
        className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px]" 
      />
      <motion.div 
        style={{ x: orbitalX2, y: orbitalY2 }}
        className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px]" 
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.05] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
