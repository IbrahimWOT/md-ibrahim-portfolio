// src/components/Skills.tsx

import { Terminal, Database, BrainCircuit, Wrench, LucideIcon, Cpu } from "lucide-react";
import { skillsData } from "@/data/skills";

interface CategoryIcons {
    [key: string]: LucideIcon;
}

const categoryIcons: CategoryIcons = {
    "Languages & Frameworks": Terminal,
    "Backend & Databases": Database,
    "AI & Deep Learning Systems": BrainCircuit,
    "Operating Systems & Tools": Wrench,
};

const CategoryIcon = ({ categoryName }: { categoryName: string }) => {
    const Icon = categoryIcons[categoryName] || Cpu;
    return <Icon className="w-5 h-5 text-[#00e5ff]" strokeWidth={2} />;
};

export default function Skills() {
    return (
        <section id="skills" className="relative w-full px-6 md:px-16 py-24 text-white bg-[#030712] overflow-hidden border-t border-gray-800/40">

            {/* Subtle Background Glow */}
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#00e5ff]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full relative z-10 space-y-16">

                {/* Section Header */}
                <div className="text-center space-y-3">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                        Technical <span className="text-[#00e5ff] drop-shadow-[0_0_12px_rgba(0,229,255,0.6)]">Skills</span>
                    </h2>
                </div>

                {/* Minimalist Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skillsData.categories.map((cat, index) => (
                        <div
                            key={index}
                            className="group relative p-7 rounded-2xl border border-gray-800 bg-gray-900/40 hover:border-cyan-500/40 hover:bg-gray-900/70 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between"
                        >
                            <div>
                                {/* Category Header (Clean & Minimal) */}
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="p-2.5 rounded-lg bg-cyan-950/40 border border-cyan-500/20 text-[#00e5ff] group-hover:scale-105 transition-transform duration-300">
                                        <CategoryIcon categoryName={cat.categoryName} />
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold text-gray-100 group-hover:text-[#00e5ff] transition-colors duration-300">
                                        {cat.categoryName}
                                    </h3>
                                </div>

                                {/* Skills Badges (Clean Pills) */}
                                <div className="flex flex-wrap gap-2">
                                    {cat.skills.map((skill, sIdx) => (
                                        <span
                                            key={sIdx}
                                            className="px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium bg-gray-800/60 border border-gray-700/60 text-gray-300 group-hover:border-cyan-500/30 hover:!border-[#00e5ff] hover:bg-cyan-950/30 hover:text-[#00e5ff] transition-all duration-200 cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}