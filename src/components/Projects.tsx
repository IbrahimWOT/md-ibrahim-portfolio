// src/components/Projects.tsx

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { projectsData } from "@/data/projects";

const GithubIcon = ({ size = 16, className = "" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
        <path d="M9 18c-4.51 2-5-2-7-2"></path>
    </svg>
);

export default function Projects() {
    return (
        <section id="projects" className="relative w-full px-6 md:px-16 py-24 text-white bg-[#030712] overflow-hidden border-t border-gray-800/40">

            {/* Background Glow Accents */}
            <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#00e5ff]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full relative z-10 space-y-16">

                {/* Section Header */}
                <div className="text-center space-y-3">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                        Featured <span className="text-[#00e5ff] drop-shadow-[0_0_12px_rgba(0,229,255,0.6)]">Projects</span>
                    </h2>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative rounded-2xl border border-gray-800 bg-gray-900/40 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(0,229,255,0.15)] transition-all duration-300 backdrop-blur-sm flex flex-col justify-between overflow-hidden"
                        >
                            <div>
                                {/* Project Thumbnail Image Container */}
                                <div className="relative w-full h-48 bg-gray-950 overflow-hidden border-b border-gray-800/80">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-40 z-10" />

                                    {/* Action Links Top Right */}
                                    <div className="absolute top-3 right-3 z-20 flex items-center gap-2">
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 rounded-xl bg-gray-900/80 border border-gray-700/80 text-gray-300 hover:text-[#00e5ff] hover:border-cyan-500/50 hover:bg-cyan-950/40 transition-all duration-200 shadow-md"
                                                title="View Source / Dataset"
                                            >
                                                <GithubIcon size={16} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Project Content */}
                                <div className="p-6 space-y-3">
                                    <h3 className="text-lg font-bold text-gray-100 group-hover:text-[#00e5ff] transition-colors duration-300">
                                        {project.title}
                                    </h3>

                                    <p className="text-xs md:text-sm text-gray-400 leading-relaxed line-clamp-3">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack Badges */}
                                    <div className="flex flex-wrap gap-1.5 pt-2">
                                        {project.tags.map((tag, tIdx) => (
                                            <span
                                                key={tIdx}
                                                className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-cyan-950/30 border border-cyan-500/20 text-[#00e5ff]"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Card Footer Button */}
                            <div className="px-6 pb-6 pt-2">
                                <a
                                    href={project.githubUrl || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-xs md:text-sm font-semibold bg-gray-800/60 border border-gray-700/60 text-gray-300 hover:bg-cyan-950/40 hover:border-cyan-500/40 hover:text-[#00e5ff] transition-all duration-200 group/btn"
                                >
                                    <GithubIcon size={15} />
                                    <span>{project.githubUrl?.includes("kaggle") ? "View Dataset" : "Source Code"}</span>
                                    <ExternalLink size={13} className="opacity-60 group-hover/btn:translate-x-0.5 transition-transform" />
                                </a>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}