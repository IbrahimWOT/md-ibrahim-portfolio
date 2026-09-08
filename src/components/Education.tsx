// src/components/Education.tsx

import { GraduationCap, Calendar, Award } from "lucide-react";
import { educationData } from "@/data/education";

export default function Education() {
    return (
        <section id="education" className="relative w-full px-6 md:px-16 py-20 text-white bg-[#030712] overflow-hidden border-t border-gray-800/50">

            {/* Background Glow Accents */}
            <div className="absolute top-20 left-10 w-80 h-80 bg-[#00e5ff]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full relative z-10 space-y-16">

                {/* Section Header */}
                <div className="text-center space-y-3">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                        Educational <span className="text-[#00e5ff] drop-shadow-[0_0_12px_rgba(0,229,255,0.7)]">Journey</span>
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
                        {educationData.subtitle}
                    </p>
                </div>

                {/* Education Cards Grid / Timeline Style */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {educationData.degrees.map((edu, index) => (
                        <div
                            key={index}
                            className="group relative p-6 rounded-2xl border border-cyan-500/20 bg-gray-900/60 hover:border-[#00e5ff] hover:shadow-[0_0_25px_rgba(0,229,255,0.25)] transition-all duration-300 flex flex-col justify-between backdrop-blur-sm"
                        >
                            {/* Top Icon & Duration */}
                            <div>
                                <div className="flex justify-between items-center mb-6">
                                    <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-[#00e5ff] group-hover:scale-110 transition-transform duration-300">
                                        <GraduationCap size={26} />
                                    </div>
                                    <span className="flex items-center gap-1.5 text-xs font-semibold text-gray-300 bg-gray-800/80 px-3 py-1 rounded-full border border-gray-700">
                                        <Calendar size={13} className="text-[#00e5ff]" />
                                        {edu.duration}
                                    </span>
                                </div>

                                {/* Degree & Institution */}
                                <h3 className="text-xl font-bold text-white group-hover:text-[#00e5ff] transition-colors duration-300">
                                    {edu.degree}
                                </h3>
                                <p className="text-sm font-medium text-gray-400 mt-1">
                                    {edu.institution}
                                </p>
                            </div>

                            {/* Result / GPA and Description */}
                            <div className="mt-6 pt-4 border-t border-gray-800/80 space-y-3">
                                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-950/50 border border-cyan-500/30 text-[#00e5ff] text-sm font-bold shadow-[0_0_10px_rgba(0,229,255,0.1)]">
                                    <Award size={15} />
                                    {edu.result}
                                </div>
                                <p className="text-xs text-gray-400 leading-relaxed">
                                    {edu.description}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}