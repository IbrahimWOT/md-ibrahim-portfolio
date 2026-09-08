// src/app/page.tsx

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712]">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}