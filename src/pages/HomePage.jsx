/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { Background } from "../components/Background";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { FullStack } from "../components/FullStack";
import { Automation } from "../components/Automation";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Portfolio } from "../components/Portfolio";
import { Contact } from "../components/Contact";
import { Loader } from "../components/Loader";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <main className="relative bg-black min-h-screen selection:bg-blue-500/30">
      <Loader />
      <Background />
      <Navbar />
      
      <Hero />
      
      {/* Primary Section */}
      <FullStack />
      
      {/* Automation Section */}
      <Automation />
      
      {/* Other Sections */}
      <About />
      <Portfolio isHomePage={true} />
      <Skills />
      
      <Contact />
    </main>
  );
}
