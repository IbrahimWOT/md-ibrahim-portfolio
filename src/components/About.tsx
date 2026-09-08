// src/components/About.tsx

import { aboutData } from "@/data/about";

export default function About() {
    return (
        <section id="about" className="relative w-full px-6 md:px-16 py-20 text-white bg-[#030712] overflow-hidden border-t border-gray-800/50">

            {/* Background Glow Accents */}
            <div className="absolute top-10 right-10 w-80 h-80 bg-[#00e5ff]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full relative z-10 space-y-16">

                {/* Section Header */}
                <div className="text-center space-y-3">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                        About <span className="text-[#00e5ff] drop-shadow-[0_0_12px_rgba(0,229,255,0.7)]">Me</span>
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
                        {aboutData.subtitle}
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side: Bio Paragraphs with High Contrast & Bolding */}
                    <div className="space-y-5 text-gray-300 text-base md:text-lg leading-relaxed">
                        <p className="bg-gray-900/40 p-5 rounded-xl border border-gray-800/80 shadow-lg backdrop-blur-sm">
                            <strong className="text-[#00e5ff] font-bold">Alhamdulillah</strong>, I am a Computer Science and Engineering graduate from <strong className="text-white font-semibold">BUBT</strong> with an impressive CGPA of <strong className="text-[#00e5ff] font-bold">3.95/4.00</strong>. My core expertise lies in building <strong className="text-white font-semibold">robust backend systems</strong>, designing <strong className="text-white font-semibold">scalable APIs</strong>, and writing clean, maintainable code.
                        </p>
                        <p className="bg-gray-900/40 p-5 rounded-xl border border-gray-800/80 shadow-lg backdrop-blur-sm">
                            Alongside backend engineering, I specialize in <strong className="text-white font-semibold">deep learning and medical image processing</strong>, highlighted by my thesis on colorectal cancer segmentation using <strong className="text-white font-semibold">Atten2UNet</strong>. I also sharpen my algorithmic mindset through competitive programming (<strong className="text-[#00e5ff] font-semibold">500+ problems</strong>) and mentor students actively.
                        </p>
                    </div>

                    {/* Right Side: Interactive Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {aboutData.stats.map((stat, index) => (
                            <div
                                key={index}
                                className="group p-6 rounded-xl border border-cyan-500/20 bg-gray-900/60 hover:border-[#00e5ff] hover:shadow-[0_0_20px_rgba(0,229,255,0.25)] transition-all duration-300 flex flex-col justify-between"
                            >
                                <div>
                                    <span className="text-3xl md:text-4xl font-extrabold text-[#00e5ff] group-hover:scale-105 inline-block transition-transform duration-300">
                                        {stat.value}
                                    </span>
                                    <h3 className="text-lg font-semibold text-white mt-2">
                                        {stat.label}
                                    </h3>
                                </div>
                                <p className="text-xs text-gray-400 mt-4 pt-3 border-t border-gray-800">
                                    {stat.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}