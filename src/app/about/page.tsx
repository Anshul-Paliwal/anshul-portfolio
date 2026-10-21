'use client';

/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Lanyard from '@/components/Lanyard';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-red-600 selection:text-white relative overflow-hidden">
            {/* Background Texture */}
            <div
                className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]"
                style={{ backgroundImage: `url("https://raw.githubusercontent.com/devloop01/webgl-slider/main/src/img/noise.png")` }}
            ></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 flex flex-col min-h-screen justify-between">
                
                {/* Unified Top Navigation */}
                <Navbar currentPath="/about" />

                {/* Main Hero Header */}
                <div className="pt-12 sm:pt-16 pb-8 text-center select-none">
                    <span className="font-mono text-xs sm:text-sm text-red-500 tracking-[0.4em] uppercase block mb-2">
                        Profile & Philosophy
                    </span>
                    <h1 className="text-[14vw] sm:text-[11vw] md:text-[8rem] font-black uppercase tracking-tight text-transparent stroke-text opacity-40 leading-none">
                        ABOUT ME
                    </h1>
                </div>

                {/* 2-Column Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
                    
                    {/* Left Column: Portrait Card & Key Facts */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        <div className="bg-[#0c0c0c] border border-white/10 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl group hover:border-white/20 transition-all duration-300">
                            
                            {/* Ambient Top Glow */}
                            <div className="absolute -top-24 -left-24 w-48 h-48 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

                            {/* Center Portrait - Interactive 3D Lanyard Badge */}
                            <div className="relative w-full h-80 sm:h-[420px] rounded-2xl overflow-hidden bg-black/40 border border-white/5 mb-6">
                                <Lanyard
                                    frontImage="/anshul-black-tee.jpg"
                                    backImage="/card-back.svg"
                                    cardColor="#0a0a0a"
                                    strapColor="#e7000b"
                                    metal="silver"
                                    finish="glossy"
                                    orientation="portrait"
                                    size={0.65}
                                    strapLength={0.45}
                                    strapWidth={0.65}
                                    gravity={1}
                                    damping={0.5}
                                    elasticity={0.55}
                                    breeze={0.4}
                                    interactive={true}
                                    intro={true}
                                />
                                <div className="absolute top-3 left-3 pointer-events-none bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-3 py-1 flex items-center gap-2 z-10">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                                    <span className="font-mono text-[11px] text-white/90">AVAILABLE FOR ROLES</span>
                                </div>
                                <div className="absolute bottom-3 right-3 pointer-events-none bg-black/50 backdrop-blur-md border border-white/5 rounded-full px-2.5 py-0.5 flex items-center gap-1.5 z-10 opacity-70">
                                    <span className="font-mono text-[10px] text-white/60">INTERACTIVE BADGE</span>
                                </div>
                            </div>

                            {/* Identity Title */}
                            <div>
                                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                                    Anshul Paliwal
                                </h2>
                                <p className="font-mono text-xs sm:text-sm text-red-500 mt-1 uppercase tracking-wider">
                                    Full-Stack & Backend Developer
                                </p>
                            </div>

                            {/* Quick Specs */}
                            <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 gap-4 text-xs font-mono">
                                <div>
                                    <span className="text-white/40 block">LOCATION</span>
                                    <span className="text-white/90 font-medium">India (IST)</span>
                                </div>
                                <div>
                                    <span className="text-white/40 block">EDUCATION</span>
                                    <span className="text-white/90 font-medium">Computer Science</span>
                                </div>
                                <div>
                                    <span className="text-white/40 block">CORE EXPERTISE</span>
                                    <span className="text-white/90 font-medium">Java, Spring, Node.js</span>
                                </div>
                                <div>
                                    <span className="text-white/40 block">SPECIALIZATION</span>
                                    <span className="text-white/90 font-medium">REST APIs & Architecture</span>
                                </div>
                            </div>

                            {/* Direct Connect Buttons */}
                            <div className="mt-8 flex gap-3">
                                <Link
                                    href="/contacts"
                                    className="flex-1 text-center py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-medium text-xs sm:text-sm transition-colors duration-200 shadow-lg"
                                >
                                    Get in Touch
                                </Link>
                                <a
                                    href="https://github.com/anshulpaliwal"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-3 rounded-xl border border-white/15 bg-white/[0.04] hover:bg-white/10 text-white font-mono text-xs flex items-center justify-center transition-colors"
                                >
                                    GitHub ↗
                                </a>
                            </div>

                        </div>
                    </div>

                    {/* Right Column: Bio Narrative & Technical Architecture */}
                    <div className="lg:col-span-7 flex flex-col gap-8">
                        
                        {/* Narrative Section */}
                        <div className="bg-[#0c0c0c] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="font-serif italic text-xl text-red-500 font-normal">I'm</span>
                                <span className="h-px w-10 bg-red-600/50"></span>
                            </div>

                            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug mb-6">
                                Passionate about architecting tested, resilient backend systems and intuitive digital products.
                            </h3>

                            <div className="space-y-4 text-sm sm:text-base text-white/70 leading-relaxed font-sans">
                                <p>
                                    I am a backend-focused Computer Science developer and Technical Co-Founder with hands-on experience delivering commercial-grade RESTful APIs, distributed microservices, and cross-platform applications.
                                </p>
                                <p>
                                    My approach to engineering centers on reliability, speed, and architectural discipline. Whether optimizing query performance in PostgreSQL, architecting Redis caching layers, or designing reactive state flows in React and Next.js, I strive for clean, maintainable code that scales seamlessly under load.
                                </p>
                            </div>

                            {/* Core Pillars */}
                            <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="space-y-2">
                                    <span className="font-mono text-xs text-red-500 font-bold">01 // BACKEND</span>
                                    <h4 className="text-white font-bold text-sm">Tested REST APIs</h4>
                                    <p className="text-xs text-white/50 leading-relaxed">
                                        Layered Controller-Service-Repo pattern, JWT authentication, and automated endpoint tests.
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <span className="font-mono text-xs text-red-500 font-bold">02 // DATA</span>
                                    <h4 className="text-white font-bold text-sm">Databases & Caching</h4>
                                    <p className="text-xs text-white/50 leading-relaxed">
                                        Relational modeling in PostgreSQL, NoSQL in MongoDB, and sub-50ms cache with Redis.
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <span className="font-mono text-xs text-red-500 font-bold">03 // FRONTEND</span>
                                    <h4 className="text-white font-bold text-sm">Next.js & React</h4>
                                    <p className="text-xs text-white/50 leading-relaxed">
                                        Modern UX engineering with Next.js App Router, Tailwind CSS, and smooth GSAP micro-interactions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Technical Arsenal Matrix */}
                        <div className="bg-[#0c0c0c] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6">
                            <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                <h3 className="font-bold text-lg sm:text-xl text-white tracking-tight">
                                    Technical Arsenal
                                </h3>
                                <span className="font-mono text-xs text-white/40">CORE STACK</span>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <span className="font-mono text-xs text-red-400 block mb-2 uppercase tracking-wider">
                                        Languages & Core
                                    </span>
                                    <div className="flex flex-wrap gap-2">
                                        {['Java', 'TypeScript', 'JavaScript', 'SQL', 'HTML5/CSS3'].map((item) => (
                                            <span key={item} className="font-mono text-xs text-white/80 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-lg hover:border-red-500/40 transition-colors">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <span className="font-mono text-xs text-red-400 block mb-2 uppercase tracking-wider">
                                        Backend & Architecture
                                    </span>
                                    <div className="flex flex-wrap gap-2">
                                        {['Spring Boot', 'Node.js', 'Express.js', 'REST APIs', 'Hibernate / JPA', 'Microservices'].map((item) => (
                                            <span key={item} className="font-mono text-xs text-white/80 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-lg hover:border-red-500/40 transition-colors">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <span className="font-mono text-xs text-red-400 block mb-2 uppercase tracking-wider">
                                        Frontend & Mobile
                                    </span>
                                    <div className="flex flex-wrap gap-2">
                                        {['React', 'Next.js 16', 'React Native', 'Tailwind CSS', 'GSAP', 'TypeScript'].map((item) => (
                                            <span key={item} className="font-mono text-xs text-white/80 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-lg hover:border-red-500/40 transition-colors">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <span className="font-mono text-xs text-red-400 block mb-2 uppercase tracking-wider">
                                        Databases, Cloud & DevOps
                                    </span>
                                    <div className="flex flex-wrap gap-2">
                                        {['PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Git & GitHub', 'Grafana + Loki', 'Razorpay API'].map((item) => (
                                            <span key={item} className="font-mono text-xs text-white/80 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-lg hover:border-red-500/40 transition-colors">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                {/* Footer Navigation Dock */}
                <footer className="pt-8 pb-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 font-mono">
                    <div>
                        © 2026 ANSHUL PALIWAL — PORTFOLIO
                    </div>
                    <div className="flex items-center gap-6">
                        <Link href="/experience" className="hover:text-red-400 transition-colors">
                            Experience →
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
