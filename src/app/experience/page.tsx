'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function ExperiencePage() {
    return (
        <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-red-600 selection:text-white relative overflow-hidden">
            {/* Background Noise Texture */}
            <div
                className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]"
                style={{ backgroundImage: `url("https://raw.githubusercontent.com/devloop01/webgl-slider/main/src/img/noise.png")` }}
            ></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 flex flex-col min-h-screen justify-between">
                
                {/* Unified Top Navigation */}
                <Navbar currentPath="/experience" />

                {/* Main Hero Header */}
                <div className="pt-12 sm:pt-16 pb-8 text-center select-none">
                    <span className="font-mono text-xs sm:text-sm text-red-500 tracking-[0.4em] uppercase block mb-2">
                        Career Timeline & Leadership
                    </span>
                    <h1 className="text-[14vw] sm:text-[11vw] md:text-[8rem] font-black uppercase tracking-tight text-transparent stroke-text opacity-40 leading-none">
                        EXPERIENCE
                    </h1>
                    <p className="mt-4 text-white/60 max-w-xl mx-auto text-sm sm:text-base font-sans leading-relaxed">
                        Commercial engineering roles, co-founding ventures, and production full-stack systems.
                    </p>
                </div>

                {/* Timeline Stepper Track */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-6 items-center px-1">
                    {/* Left Node: Only Click */}
                    <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full border-2 border-white/40 bg-transparent shrink-0"></div>
                        <span className="text-xs sm:text-sm text-white/60 font-sans tracking-wide">
                            Sep, 2025 — Oct, 2025
                        </span>
                        <div className="hidden md:block h-px bg-white/15 flex-1 ml-2"></div>
                    </div>

                    {/* Right Node: ParkEzy */}
                    <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center shrink-0">
                            <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                        </div>
                        <span className="text-xs sm:text-sm text-white/90 font-sans tracking-wide">
                            Dec, 2025 — Present
                        </span>
                        <span className="text-[10px] sm:text-xs text-emerald-400 border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-0.5 rounded-full font-sans font-medium">
                            Present
                        </span>
                    </div>
                </div>

                {/* 2-Column Experience Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch mb-16">
                    
                    {/* Card 1: Full Stack Developer Intern (Only Click) */}
                    <div className="group bg-[#0c0c0c] border border-white/10 rounded-3xl p-6 sm:p-10 flex flex-col justify-between hover:border-white/25 transition-all duration-300 shadow-2xl relative overflow-hidden">
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="font-mono text-xs text-white/40 block">01</span>
                                <span className="font-mono text-[10px] text-white/40 border border-white/10 px-2.5 py-0.5 rounded-full">
                                    INTERNSHIP
                                </span>
                            </div>

                            <div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-red-500 transition-colors">
                                    Full Stack Developer Intern
                                </h2>
                                <p className="text-base sm:text-lg text-white/70 font-normal mt-1">
                                    Only Click
                                </p>
                            </div>

                            <p className="text-white/60 text-sm leading-relaxed pt-2">
                                Worked on backend and mobile app for Only Click, optimizing application logic and shipping customer-facing features.
                            </p>

                            <ul className="space-y-2.5 text-sm text-white/75 leading-relaxed pt-2">
                                <li className="flex items-start gap-2.5">
                                    <span className="text-red-500 select-none mt-1 font-mono text-xs">▸</span>
                                    <span>Built and maintained scalable backend services and tested REST APIs in Node.js and Express.</span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <span className="text-red-500 select-none mt-1 font-mono text-xs">▸</span>
                                    <span>Contributed to cross-platform mobile application features, responsive layouts, and seamless API integrations.</span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <span className="text-red-500 select-none mt-1 font-mono text-xs">▸</span>
                                    <span>Participated in daily standups, code reviews, and Git-driven version control workflows.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Tech Stack Pills */}
                        <div className="pt-8 mt-8 border-t border-white/10">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="font-mono text-[10px] text-white/40 tracking-wider uppercase">TECH ARSENAL:</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {["React Native", "Node.js", "Express", "REST APIs", "Git & GitHub", "JWT Auth"].map((tech) => (
                                    <span
                                        key={tech}
                                        className="font-mono text-xs text-white/80 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-lg hover:border-red-500/40 hover:text-white transition-colors"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Technical Co-Founder (ParkEzy) */}
                    <div className="group bg-[#0c0c0c] border border-white/10 rounded-3xl p-6 sm:p-10 flex flex-col justify-between hover:border-white/25 transition-all duration-300 shadow-2xl relative overflow-hidden">
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="font-mono text-xs text-white/40 block">02</span>
                                <span className="font-mono text-[10px] text-emerald-400 border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 rounded-full">
                                    STARTUP VENTURE
                                </span>
                            </div>

                            <div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-red-500 transition-colors">
                                    Technical Co-Founder
                                </h2>
                                <a
                                    href="https://parkezy.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-base sm:text-lg text-white/70 font-normal mt-1 hover:text-white transition-colors group/link"
                                >
                                    <span>ParkEzy</span>
                                    <svg className="w-3.5 h-3.5 text-white/40 group-hover/link:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>

                            <p className="text-white/60 text-sm leading-relaxed pt-2">
                                Technical co-founder leading platform architecture, backend systems, and mobile application engineering for a smart parking and slot reservation solution.
                            </p>

                            <ul className="space-y-2.5 text-sm text-white/75 leading-relaxed pt-2">
                                <li className="flex items-start gap-2.5">
                                    <span className="text-red-500 select-none mt-1 font-mono text-xs">▸</span>
                                    <span>Architecting scalable backend infrastructure and high-throughput RESTful APIs for real-time parking spot discovery.</span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <span className="text-red-500 select-none mt-1 font-mono text-xs">▸</span>
                                    <span>Developing cross-platform mobile application with live location mapping, parking search, and booking flows in React Native.</span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <span className="text-red-500 select-none mt-1 font-mono text-xs">▸</span>
                                    <span>Integrated Razorpay payment gateways, MSG91 verification pipelines, and Grafana + Loki telemetry.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Tech Stack Pills */}
                        <div className="pt-8 mt-8 border-t border-white/10">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="font-mono text-[10px] text-white/40 tracking-wider uppercase">TECH ARSENAL:</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    "React Native",
                                    "Node.js",
                                    "Express",
                                    "PostgreSQL",
                                    "Redis",
                                    "Grafana + Loki",
                                    "Razorpay",
                                    "MSG91",
                                    "Google Maps API"
                                ].map((tech) => (
                                    <span
                                        key={tech}
                                        className="font-mono text-xs text-white/80 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-lg hover:border-red-500/40 hover:text-white transition-colors"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

                {/* Architecture Highlights Section */}
                <div className="bg-[#0c0c0c] border border-white/10 rounded-3xl p-6 sm:p-10 mb-16 shadow-2xl">
                    <span className="font-mono text-xs text-red-500 tracking-[0.4em] uppercase block mb-2">
                        Architectural Highlights
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                        System Design & Technical Execution
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="border border-white/10 bg-white/[0.02] p-5 rounded-2xl">
                            <span className="font-mono text-xs text-white/40 block mb-2">01 / GEOSPATIAL SEARCH</span>
                            <h4 className="text-white font-bold text-sm mb-2">Real-Time Spot Discovery</h4>
                            <p className="text-xs text-white/60 leading-relaxed">
                                Efficient spatial radius queries in PostgreSQL using geo-indexing, combined with Redis cache keys for low-latency spot lookups.
                            </p>
                        </div>
                        <div className="border border-white/10 bg-white/[0.02] p-5 rounded-2xl">
                            <span className="font-mono text-xs text-white/40 block mb-2">02 / TRANSACTIONAL INTEGRITY</span>
                            <h4 className="text-white font-bold text-sm mb-2">Payment & Slot Reservation</h4>
                            <p className="text-xs text-white/60 leading-relaxed">
                                Atomic database transactions ensuring zero double-booking conditions during peak hours with Razorpay automated webhook reconciliation.
                            </p>
                        </div>
                        <div className="border border-white/10 bg-white/[0.02] p-5 rounded-2xl">
                            <span className="font-mono text-xs text-white/40 block mb-2">03 / TELEMETRY & LOGGING</span>
                            <h4 className="text-white font-bold text-sm mb-2">Observability Infrastructure</h4>
                            <p className="text-xs text-white/60 leading-relaxed">
                                Structured log streaming with Grafana + Loki to pinpoint API latency bottlenecks, track server health, and ensure 99.9% uptime.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer Navigation Dock */}
                <footer className="pt-8 pb-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 font-mono">
                    <div>
                        © 2026 ANSHUL PALIWAL — PORTFOLIO
                    </div>
                    <div className="flex items-center gap-6">
                        <Link href="/about" className="hover:text-red-400 transition-colors">
                            About →
                        </Link>
                        <Link href="/projects" className="hover:text-red-400 transition-colors">
                            Projects →
                        </Link>
                        <Link href="/contacts" className="hover:text-red-400 transition-colors">
                            Contacts →
                        </Link>
                    </div>
                </footer>

            </div>
        </main>
    );
}
