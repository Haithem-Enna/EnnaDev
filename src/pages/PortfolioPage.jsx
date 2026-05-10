/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { Background } from "../components/Background";
import { Navbar } from "../components/Navbar";
import { Portfolio } from "../components/Portfolio";
import { Contact } from "../components/Contact";
import { Loader } from "../components/Loader";
import { useEffect } from "react";

export function PortfolioPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative bg-black min-h-screen selection:bg-blue-500/30">
      <Loader />
      <Background />
      <Navbar />
      
      <div className="pt-20">
        <Portfolio isHomePage={false} />
      </div>
      
      <Contact />
    </main>
  );
}
