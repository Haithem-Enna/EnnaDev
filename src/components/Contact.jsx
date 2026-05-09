import { motion } from "motion/react";
import { 
  ArrowUpRight, 
  Instagram, 
  Facebook, 
  MessageSquare, 
  Send, 
  Mail,
  CircleDashed,
  Github,
  Music
} from "lucide-react";

export function Contact() {
  const socials = [
    { icon: <Github size={18} />, label: "GitHub", href: "https://github.com" },
    { icon: <Instagram size={18} />, label: "Instagram", href: "#" },
    { icon: <Music size={18} />, label: "TikTok", href: "#" },
    { icon: <Facebook size={18} />, label: "Facebook", href: "#" },
    { icon: <MessageSquare size={18} />, label: "Discord", href: "#" },
    { icon: <Send size={18} />, label: "Telegram", href: "#" },
    { icon: <CircleDashed size={18} />, label: "Reddit", href: "#" },
  ];

  return (
    <footer id="contact" className="py-32 px-6 border-t border-white/5 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-32">
          <div>
            <h2 className="text-5xl md:text-7xl font-extralight tracking-tight mb-8">
              Pronto a <br />
              iniziare?
            </h2>
            <p className="text-white/40 max-w-sm mb-12 font-light">
              Sono disponibile per progetti freelance e collaborazioni. 
              Scrivimi per discutere la tua visione e come realizzarla.
            </p>
            
            <a 
              href="mailto:ennadraouihaithem07@gmail.com" 
              className="group flex items-center gap-6 text-2xl font-light hover:text-white/80 transition-all underline decoration-white/20 underline-offset-12"
            >
              Manda una mail
              <ArrowUpRight className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" size={32} />
            </a>
          </div>

          <div className="flex flex-col justify-end">
            <div className="space-y-4 mb-12">
              <div className="font-mono text-[10px] tracking-widest text-white/30 uppercase">Posizione</div>
              <div className="text-lg font-light italic">Disponibile ovunque (Remote Friendly)</div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {socials.map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 group text-white/50 hover:text-white transition-colors"
                >
                  <div className="group-hover:text-blue-500 transition-colors">
                    {social.icon}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
          <div className="font-mono text-[10px] tracking-[0.5em] uppercase text-white/20">
            © 2026 ENNA
          </div>
          <div className="flex gap-12 text-[10px] uppercase tracking-[0.2em] text-white/30 font-medium">
            <a href="#" className="hover:text-white transition-colors">Back to top</a>
            <span>Freelance Ecosystem</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
