// src/components/Navbar.tsx

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full py-6 px-8 md:px-16 flex justify-between items-center bg-[#030712]/95 border-b border-cyan-500/20 text-white sticky top-0 z-50 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
            {/* Logo / Brand Name */}
            <a href="#home" className="text-2xl font-extrabold tracking-tight text-white group flex items-center">
                Ibrahim<span className="text-[#00e5ff] drop-shadow-[0_0_10px_rgba(0,229,255,0.8)] group-hover:scale-125 inline-block transition-transform">.</span>
            </a>

            {/* Nav Links - Using standard <a> tags for smooth in-page jump */}
            <ul className="hidden md:flex gap-9 text-base font-bold text-gray-100">
                <li>
                    <a href="#home" className="text-[#00e5ff] drop-shadow-[0_0_10px_rgba(0,229,255,0.7)] hover:text-[#00e5ff] transition-all duration-300">Home</a>
                </li>
                <li>
                    <a href="#about" className="hover:text-[#00e5ff] hover:drop-shadow-[0_0_12px_rgba(0,229,255,0.9)] transition-all duration-300">About</a>
                </li>
                <li>
                    <a href="#education" className="hover:text-[#00e5ff] hover:drop-shadow-[0_0_12px_rgba(0,229,255,0.9)] transition-all duration-300">Education</a>
                </li>
                <li>
                    <a href="#skills" className="hover:text-[#00e5ff] hover:drop-shadow-[0_0_12px_rgba(0,229,255,0.9)] transition-all duration-300">Skills</a>
                </li>
                <li>
                    <a href="#projects" className="hover:text-[#00e5ff] hover:drop-shadow-[0_0_12px_rgba(0,229,255,0.9)] transition-all duration-300">Projects</a>
                </li>
                <li>
                    <a href="#contact" className="hover:text-[#00e5ff] hover:drop-shadow-[0_0_12px_rgba(0,229,255,0.9)] transition-all duration-300">Contact</a>
                </li>
            </ul>

            {/* Mobile Menu Placeholder */}
            <div className="md:hidden text-[#00e5ff] font-bold text-base cursor-pointer hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.8)]">
                Menu
            </div>
        </nav>
    );
}