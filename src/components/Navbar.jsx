import { motion, AnimatePresence } from "motion/react";
import { 
  Instagram, 
  Facebook, 
  MessageSquare, 
  Send, 
  Mail, 
  LayoutGrid, 
  X, 
  Terminal, 
  Gamepad2, 
  Info,
  CircleDashed,
  Github,
  Music
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSocialOpen, setIsSocialOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isOpen || isSocialOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, isSocialOpen]);

  const navItems = [
    { icon: <LayoutGrid size={24} />, label: "Full-Stack", href: "/#fullstack" },
    { icon: <Terminal size={24} />, label: "Automation", href: "/#automation" },
    { icon: <Gamepad2 size={24} />, label: "Portfolio", href: "/portfolio" },
    { icon: <Info size={24} />, label: "About", href: "/#about" },
    { icon: <MessageSquare size={24} />, label: "Contact", href: "/#contact" },
  ];

  const socialLinks = [
    { icon: <Github size={20} />, label: "GitHub", href: "https://github.com", color: "hover:text-white" },
    { icon: <Instagram size={20} />, label: "Instagram", href: "#", color: "hover:text-pink-500" },
    { icon: <Music size={20} />, label: "TikTok", href: "#", color: "hover:text-cyan-400" },
    { icon: <Facebook size={20} />, label: "Facebook", href: "#", color: "hover:text-blue-500" },
    { icon: <MessageSquare size={20} />, label: "Discord", href: "#", color: "hover:text-indigo-400" },
    { icon: <Send size={20} />, label: "Telegram", href: "#", color: "hover:text-sky-400" },
    { icon: <CircleDashed size={20} />, label: "Reddit", href: "#", color: "hover:text-orange-500" },
    { icon: <Mail size={20} />, label: "Gmail", href: "mailto:ennadraouihaithem07@gmail.com", color: "hover:text-red-500" },
  ];

  // RIMOSSO : string
  const handleLinkClick = (href) => {
    setIsOpen(false);
    if (href.startsWith('/#') && location.pathname === '/') {
      const id = href.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-100 p-4 md:p-6 flex justify-between items-center bg-black/80 backdrop-blur-3xl border-b border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
      >
        <Link to="/" className="flex items-center gap-2 md:gap-4 pointer-events-auto">
          <span className="font-display font-black text-lg md:text-2xl tracking-tighter text-white hover:text-blue-500 transition-colors cursor-pointer select-none uppercase">
            ENNA
          </span>
        </Link>
        
        <div className="flex items-center gap-2 md:gap-4 pointer-events-auto">
          <button 
            onClick={() => setIsSocialOpen(true)}
            className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-2.5 bg-white/5 hover:bg-white/10 rounded-full border border-white/5 transition-all text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-white/80"
          >
            Social <span className="hidden xs:inline">& Contatti</span>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isSocialOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-300 flex items-center justify-center bg-black/70 backdrop-blur-3xl p-4 md:p-6"
            onClick={() => setIsSocialOpen(false)}
          >
            <motion.div
              initial={{ y: 20, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.95 }}
              className="w-full max-w-sm glass rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-12 relative overflow-hidden flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-8 md:mb-10 shrink-0">
                <div className="text-left">
                  <h3 className="font-display font-black text-2xl md:text-3xl tracking-tighter mb-1">NETWORK</h3>
                  <p className="text-[9px] md:text-[10px] font-mono text-white/30 uppercase tracking-widest">Established Connections</p>
                </div>
                <button 
                  onClick={() => setIsSocialOpen(false)}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors group"
                >
                  <X size={18} className="group-hover:rotate-90 transition-all opacity-50 group-hover:opacity-100" />
                </button>
              </div>

              <div className="flex flex-col gap-2 md:gap-3 overflow-y-auto no-scrollbar pb-6">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className={`flex items-center gap-6 p-5 rounded-2xl bg-white/2 border border-white/5 transition-all group shrink-0 ${social.color}`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center transition-colors">
                      {social.icon}
                    </div>
                    <span className="font-display font-bold text-lg tracking-tight group-hover:pl-4 transition-all">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>
              <div className="mt-4 h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent shrink-0" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed bottom-8 right-8 md:bottom-12 md:right-12 z-200">
        <div className="relative">
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-2xl"
                onClick={() => setIsOpen(false)}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {navItems.map((item, i) => {
                      const angle = (i * (360 / navItems.length)) - 90;
                      // Raggio ridotto per mobile/iPad
                      const radius = typeof window !== 'undefined' && window.innerWidth < 768 ? 140 : 220;
                      
                      return (
                        <Link
                          key={item.label}
                          to={item.href}
                          onClick={() => handleLinkClick(item.href)}
                        >
                          <motion.div
                            initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
                            animate={{ 
                              scale: 1, 
                              opacity: 1, 
                              x: Math.cos(angle * (Math.PI / 180)) * radius,
                              y: Math.sin(angle * (Math.PI / 180)) * radius 
                            }}
                            exit={{ scale: 0, opacity: 0, x: 0, y: 0 }}
                            transition={{ type: "spring", damping: 15, stiffness: 100, delay: i * 0.05 }}
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-28 md:h-28 glass rounded-full flex flex-col items-center justify-center hover:bg-blue-600 hover:text-white transition-all group shadow-2xl cursor-pointer"
                          >
                            <div className="group-hover:scale-110 transition-transform mb-2">
                              {item.icon}
                            </div>
                            <span className="text-[8px] md:text-[10px] font-mono font-bold uppercase tracking-widest text-white/40 group-hover:text-white">
                              {item.label}
                            </span>
                          </motion.div>
                        </Link>
                      );
                    })}
                    <div className="w-4 h-4 rounded-full bg-blue-500 blur-sm animate-pulse" />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-16 h-16 md:w-20 md:h-20 rounded-full glass flex items-center justify-center group relative overflow-hidden shadow-2xl z-210"
          >
            <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <motion.div
              animate={{ rotate: isOpen ? 45 : 0 }}
              className="relative z-10"
            >
              {isOpen ? (
                <X size={28} className="text-white" />
              ) : (
                <LayoutGrid size={28} className="text-white" />
              )}
            </motion.div>
          </motion.button>
        </div>
      </div>
    </>
  );
}
