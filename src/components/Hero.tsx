import Image from "next/image";
import { Code2, ArrowRight } from "lucide-react";
import { personalInfo } from "@/data/personal";

export default function Hero() {
    return (
        <section id="home" className="relative w-full px-6 md:px-16 py-12 md:py-20 flex flex-col justify-between min-h-[calc(100vh-76px)] text-white bg-[#030712] overflow-hidden">

            {/* Background Glow Effect */}
            <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#00e5ff]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

            {/* Main Content Area */}
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center my-auto relative z-10">

                {/* Left Side: Text and Buttons */}
                <div className="space-y-6">
                    {/* Dynamic Availability Badge */}
                    {personalInfo.isAvailable && (
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-xs font-semibold text-[#00e5ff] shadow-[0_0_12px_rgba(0,229,255,0.2)]">
                            <span className="w-2 h-2 rounded-full bg-[#00e5ff] animate-pulse" />
                            {personalInfo.availabilityText}
                        </div>
                    )}

                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
                        Hi, I&apos;m <span className="text-gradient">{personalInfo.name}</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-100">
                        And I&apos;m a{" "}
                        <span className="text-[#00e5ff] font-bold inline-block animate-pulse drop-shadow-[0_0_12px_rgba(0,229,255,0.7)]">
                            Backend Engineer
                        </span>
                    </h2>

                    <p className="text-gray-200 text-sm md:text-base leading-relaxed max-w-lg font-normal">
                        <strong className="text-white font-bold tracking-wide">Aspiring Backend Engineer</strong> skilled in designing robust server-side architectures, building scalable APIs, and optimizing system performance with clean, maintainable code.
                    </p>

                    {/* Action Buttons with High Contrast & Glow */}
                    <div className="flex flex-wrap gap-4 pt-3">
                        <a
                            href="#contact"
                            className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-[#00e5ff] text-black font-bold text-sm hover:bg-[#33edff] shadow-[0_0_15px_rgba(0,229,255,0.4)] hover:shadow-[0_0_25px_rgba(0,229,255,0.7)] transition-all duration-300"
                        >
                            Hire Me
                            <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
                        </a>
                        <a
                            href={personalInfo.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-lg border border-cyan-500/50 bg-cyan-950/25 text-white font-bold text-sm hover:bg-cyan-500/10 hover:border-[#00e5ff] shadow-[0_0_10px_rgba(0,229,255,0.1)] transition-all duration-300 flex items-center justify-center"
                        >
                            View CV
                        </a>
                    </div>
                </div>

                {/* Right Side: Circular Profile Image with Vibrant Glow Ring */}
                <div className="flex justify-center md:justify-end">
                    <div className="relative group">
                        <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-[#00e5ff] to-blue-500 opacity-50 group-hover:opacity-100 blur-md transition duration-500" />

                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-cyan-500/50 bg-gray-900 shadow-2xl">
                            <Image
                                src="/images/profile.jpeg"
                                alt={personalInfo.name}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                priority
                            />
                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom Social Icons with High Contrast & Colourful Hover Glow */}
            <div className="max-w-7xl mx-auto w-full flex flex-wrap gap-5 pt-12 relative z-10">
                {/* Facebook */}
                <a href={personalInfo.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-11 h-11 rounded-full border border-gray-700 bg-gray-900/90 flex items-center justify-center text-gray-200 hover:text-black hover:bg-[#00e5ff] hover:border-[#00e5ff] hover:shadow-[0_0_20px_rgba(0,229,255,0.8)] hover:scale-110 transition-all duration-300">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                </a>
                {/* LinkedIn */}
                <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-11 h-11 rounded-full border border-gray-700 bg-gray-900/90 flex items-center justify-center text-gray-200 hover:text-black hover:bg-[#00e5ff] hover:border-[#00e5ff] hover:shadow-[0_0_20px_rgba(0,229,255,0.8)] hover:scale-110 transition-all duration-300">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </a>
                {/* Github */}
                <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-11 h-11 rounded-full border border-gray-700 bg-gray-900/90 flex items-center justify-center text-gray-200 hover:text-black hover:bg-[#00e5ff] hover:border-[#00e5ff] hover:shadow-[0_0_20px_rgba(0,229,255,0.8)] hover:scale-110 transition-all duration-300">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                </a>
                {/* Codeforces */}
                <a href={personalInfo.socials.codeforces} target="_blank" rel="noopener noreferrer" aria-label="Codeforces" className="w-11 h-11 rounded-full border border-gray-700 bg-gray-900/90 flex items-center justify-center text-gray-200 hover:text-black hover:bg-[#00e5ff] hover:border-[#00e5ff] hover:shadow-[0_0_20px_rgba(0,229,255,0.8)] hover:scale-110 transition-all duration-300">
                    <Code2 size={20} />
                </a>
                {/* LeetCode */}
                <a href={personalInfo.socials.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode" className="w-11 h-11 rounded-full border border-gray-700 bg-gray-900/90 flex items-center justify-center text-gray-200 hover:text-black hover:bg-[#00e5ff] hover:border-[#00e5ff] hover:shadow-[0_0_20px_rgba(0,229,255,0.8)] hover:scale-110 transition-all duration-300">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M16.102 17.93l-2.73 2.55-7.79-8.31 7.79-8.31 2.73 2.55-5.06 5.76 5.06 5.76zm-3.66 3.07h-3.42l-6.3-6.72 6.3-6.72h3.42l-5.06 5.4 5.06 5.4zm10.74-10.44h-6.22v3.36h6.22v3.36h-9.58V7.93h9.58v3.63z" /></svg>
                </a>
            </div>
        </section>
    );
}