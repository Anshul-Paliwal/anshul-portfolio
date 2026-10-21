'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

interface Project {
    id: string;
    title: string;
    subtitle: string;
    category: 'Full-Stack' | 'Backend' | 'Mobile';
    status: string;
    description: string;
    highlights: string[];
    tech: string[];
    link?: string;
    github?: string;
}

const PROJECTS_DATA: Project[] = [
    {
        id: 'parkezy',
        title: 'ParkEzy',
        subtitle: 'Smart Parking & Real-Time Slot Reservation Platform',
        category: 'Full-Stack',
        status: 'PRODUCTION VENTURE',
        description: 'End-to-end intelligent parking discovery and slot booking ecosystem. Features live geospatial mapping, automated slot allocation, Razorpay payment processing, and SMS verification.',
        highlights: [
            'Architected scalable Node.js/Express backend capable of sub-50ms query responses using Redis caching.',
            'Implemented geospatial radius searches on PostgreSQL with spatial indexing.',
            'Engineered cross-platform mobile application in React Native with Google Maps navigation.'
        ],
        tech: ['React Native', 'Node.js', 'Express', 'PostgreSQL', 'Redis', 'Grafana + Loki', 'Razorpay', 'Google Maps API'],
        link: 'https://parkezy.com',
        github: 'https://github.com/anshulpaliwal'
    },
    {
        id: 'onlyclick',
        title: 'Only Click Mobile & Backend',
        subtitle: 'Production API Services & Mobile Application',
        category: 'Mobile',
        status: 'INTERNSHIP PROJECT',
        description: 'Commercial mobile application and backend services built during my software engineering internship at Only Click. Streamlined order routing and real-time client notifications.',
        highlights: [
            'Built and maintained authenticated REST endpoints with token-based security and schema validation.',
            'Integrated client-side mobile views in React Native with smooth navigation and state management.',
            'Collaborated within an agile development team utilizing Git workflows and CI/CD testing.'
        ],
        tech: ['React Native', 'Node.js', 'Express', 'REST APIs', 'JWT Auth', 'Git & GitHub'],
        github: 'https://github.com/anshulpaliwal'
    },
    {
        id: 'spring-rest-api',
        title: 'Enterprise Java Spring Boot Service',
        subtitle: 'Tested Layered REST Architecture & Database Core',
        category: 'Backend',
        status: 'BACKEND SPECIALIZATION',
        description: 'Enterprise-grade RESTful API built in Java with Spring Boot, demonstrating clean separation of concerns, transactional safety, and high-coverage automated unit and integration tests.',
        highlights: [
            'Implemented strict Controller-Service-Repository design pattern with Hibernate / Spring Data JPA.',
            'Configured Dockerized PostgreSQL database containers with automated migration scripts.',
            'Comprehensive testing suite using JUnit and Mockito, documented via Swagger / OpenAPI.'
        ],
        tech: ['Java', 'Spring Boot', 'PostgreSQL', 'Hibernate / JPA', 'Docker', 'Swagger', 'JUnit', 'Mockito'],
        github: 'https://github.com/anshulpaliwal'
    },
    {
        id: 'portfolio-engine',
        title: 'Editorial Portfolio & GSAP Experience',
        subtitle: 'High-Performance Next.js Personal Portfolio',
        category: 'Full-Stack',
        status: 'CURRENT SYSTEM',
        description: 'Ultra-modern dark-mode portfolio website engineered with Next.js 16 (App Router), GSAP scrub animations, responsive fluid clamp typography, and custom transparency shaders.',
        highlights: [
            'Zero layout shift, 100vh proportional hero scaling optimized for laptop and desktop displays.',
            'Sleek brutalist-editorial design system featuring Geist typography and dynamic lighting.',
            '100% TypeScript coverage with static pre-rendering and sub-second load times.'
        ],
        tech: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Turbopack'],
        github: 'https://github.com/anshulpaliwal'
    }
];

export default function ProjectsPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    const filteredProjects = selectedCategory === 'All'
        ? PROJECTS_DATA
        : PROJECTS_DATA.filter(p => p.category === selectedCategory);

    return (
        <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-red-600 selection:text-white relative overflow-hidden">
            {/* Background Texture */}
            <div
                className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]"
                style={{ backgroundImage: `url("https://raw.githubusercontent.com/devloop01/webgl-slider/main/src/img/noise.png")` }}
            ></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 flex flex-col min-h-screen justify-between">
                
                {/* Unified Top Navigation */}
                <Navbar currentPath="/projects" />

                {/* Main Hero Header */}
                <div className="pt-12 sm:pt-16 pb-8 text-center select-none">
                    <span className="font-mono text-xs sm:text-sm text-red-500 tracking-[0.4em] uppercase block mb-2">
                        Selected Works & Systems
                    </span>
                    <h1 className="text-[14vw] sm:text-[11vw] md:text-[8rem] font-black uppercase tracking-tight text-transparent stroke-text opacity-40 leading-none">
                        PROJECTS
                    </h1>
                    <p className="mt-4 text-white/60 max-w-xl mx-auto text-sm sm:text-base font-sans leading-relaxed">
                        A curation of commercial platforms, distributed backend architectures, and production full-stack code.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto no-scrollbar py-2">
                    {['All', 'Full-Stack', 'Backend', 'Mobile'].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 sm:px-5 py-2 rounded-full font-mono text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                                selectedCategory === cat
                                    ? 'bg-red-600 text-white font-bold shadow-lg shadow-red-600/20'
                                    : 'bg-white/[0.03] text-white/60 border border-white/10 hover:border-white/30 hover:text-white'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-16">
                    {filteredProjects.map((project, idx) => (
                        <div
                            key={project.id}
                            className="group bg-[#0c0c0c] border border-white/10 rounded-3xl p-6 sm:p-10 flex flex-col justify-between hover:border-white/25 transition-all duration-300 shadow-2xl relative overflow-hidden"
                        >
                            <div className="space-y-4">
                                {/* Top Meta */}
                                <div className="flex justify-between items-center">
                                    <span className="font-mono text-xs text-white/40 block">0{idx + 1}</span>
                                    <span className="font-mono text-[10px] text-red-400 border border-red-500/30 bg-red-500/10 px-2.5 py-0.5 rounded-full">
                                        {project.status}
                                    </span>
                                </div>

                                {/* Title & Subtitle */}
                                <div>
                                    <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight group-hover:text-red-500 transition-colors">
                                        {project.title}
                                    </h2>
                                    <p className="font-mono text-xs sm:text-sm text-white/50 mt-1">
                                        {project.subtitle}
                                    </p>
                                </div>

                                {/* Description */}
                                <p className="text-white/70 text-sm leading-relaxed pt-2">
                                    {project.description}
                                </p>

                                {/* Highlights */}
                                <ul className="space-y-2 text-xs sm:text-sm text-white/60 leading-relaxed pt-2">
                                    {project.highlights.map((h, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-red-500 font-mono text-xs mt-0.5">▸</span>
                                            <span>{h}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Tech Stack & Action Links */}
                            <div className="pt-8 mt-8 border-t border-white/10 space-y-4">
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="font-mono text-xs text-white/80 bg-white/[0.04] border border-white/10 px-2.5 py-1 rounded-md"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 pt-2">
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-xs font-mono text-red-400 hover:text-red-300 font-bold transition-colors"
                                        >
                                            <span>Live Platform</span>
                                            <span>↗</span>
                                        </a>
                                    )}
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-xs font-mono text-white/60 hover:text-white transition-colors"
                                        >
                                            <span>Source Code</span>
                                            <span>↗</span>
                                        </a>
                                    )}
                                </div>
                            </div>

                        </div>
                    ))}
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
                        <Link href="/experience" className="hover:text-red-400 transition-colors">
                            Experience →
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
