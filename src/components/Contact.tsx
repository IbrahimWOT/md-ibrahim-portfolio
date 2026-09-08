// src/components/Contact.tsx
"use client";

import { Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="relative w-full px-6 md:px-16 py-28 text-white bg-[#030712] overflow-hidden border-t border-gray-800/40">

            {/* Background Glow Accents */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00e5ff]/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full relative z-10 space-y-16">

                {/* Section Header (Without Subtitle) */}
                <div className="text-center space-y-3">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                        Get In <span className="text-[#00e5ff] drop-shadow-[0_0_12px_rgba(0,229,255,0.6)]">Touch</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Left Side: Contact Info Cards */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="p-8 rounded-2xl border border-gray-800 bg-gray-900/40 backdrop-blur-sm space-y-6">
                            <h3 className="text-xl font-bold text-gray-100">Let's build something amazing together.</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                I'm currently available for backend engineering roles, AI/deep learning projects, and freelance opportunities. Let's talk about your next big idea.
                            </p>

                            <div className="space-y-4 pt-4 border-t border-gray-800/80">
                                {/* Email */}
                                <div className="flex items-center gap-4 text-gray-300">
                                    <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/20 text-[#00e5ff]">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <span className="text-xs text-gray-500 block">Email Me</span>
                                        <span className="text-sm font-medium text-gray-200">ibrahimhridoy4848@gmail.com</span>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-center gap-4 text-gray-300">
                                    <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/20 text-[#00e5ff]">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <span className="text-xs text-gray-500 block">Location</span>
                                        <span className="text-sm font-medium text-gray-200">Mirpur, Dhaka, Bangladesh</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Professional Contact Form */}
                    <div className="lg:col-span-7">
                        <form
                            onSubmit={(e) => { e.preventDefault(); alert("Message sent successfully!"); }}
                            className="p-8 rounded-2xl border border-gray-800 bg-gray-900/40 backdrop-blur-sm space-y-6"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider">Your Name</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder=""
                                        className="w-full px-4 py-3 rounded-xl bg-gray-950/60 border border-gray-800 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#00e5ff] focus:ring-1 focus:ring-[#00e5ff] transition-all duration-200 text-sm"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider">Your Email</label>
                                    <input
                                        type="email"
                                        required
                                        placeholder=""
                                        className="w-full px-4 py-3 rounded-xl bg-gray-950/60 border border-gray-800 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#00e5ff] focus:ring-1 focus:ring-[#00e5ff] transition-all duration-200 text-sm"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider">Subject</label>
                                <input
                                    type="text"
                                    required
                                    placeholder=""
                                    className="w-full px-4 py-3 rounded-xl bg-gray-950/60 border border-gray-800 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#00e5ff] focus:ring-1 focus:ring-[#00e5ff] transition-all duration-200 text-sm"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider">Your Message</label>
                                <textarea
                                    rows={5}
                                    required
                                    placeholder=""
                                    className="w-full px-4 py-3 rounded-xl bg-gray-950/60 border border-gray-800 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#00e5ff] focus:ring-1 focus:ring-[#00e5ff] transition-all duration-200 text-sm resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 rounded-xl font-bold bg-[#00e5ff] text-[#030712] hover:bg-[#00c4d8] hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all duration-300 flex items-center justify-center gap-2 text-sm tracking-wide cursor-pointer"
                            >
                                <Send size={16} />
                                <span>Send Message</span>
                            </button>
                        </form>
                    </div>

                </div>

                {/* Copyright Section */}
                <div className="mt-16 pt-8 border-t border-gray-800/60 text-center text-sm text-gray-400">
                    <p>© {new Date().getFullYear()} Ibrahim.dev. All rights reserved.</p>
                </div>

            </div>
        </section>
    );
}