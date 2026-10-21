'use client';

/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const BOOT_SEQUENCE = [
    "INITIALIZING KERNEL...",
    "LOADING DEPENDENCIES: REACT, SPRING BOOT, NODE.JS",
    "CHECKING DATABASES: POSTGRESQL & MONGODB ONLINE",
    "VERIFYING FULL-STACK AI MODULES...",
    "LOCATING TARGET: ANSHUL PALIWAL",
    "TARGET LOCKED",
    "MODE: DEVELOPER",
    "ACCESS GRANTED // ENTER"
];

const IMAGES = [
    { src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1333&auto=format&fit=crop", title: "FRONTEND" },
    { src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop", title: "BACKEND" },
    { src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop", title: "AI SYSTEMS" },
    { src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop", title: "DEPLOYMENT" },
];

const FEATURES = [
    { title: "FULL-STACK DEVELOPMENT", description: "End-to-end architecture using React, Next.js, and Java Spring Boot." },
    { title: "AI INTEGRATION", description: "Empowering applications with modern AI tools and intelligent backends." },
    { title: "DATABASE ARCHITECTURE", description: "Optimized storage solutions utilizing PostgreSQL and MongoDB." },
    { title: "UI/UX ENGINEERING", description: "Crafting pixel-perfect layouts with Tailwind CSS, Figma, and GSAP." }
];

const ABOUT_TEXT = "I AM ANSHUL PALIWAL, A FULL-STACK DEVELOPER WITH A FOCUS ON AI INTEGRATION. FROM REACT FRONTENDS TO SPRING BOOT BACKENDS, I BUILD INTUITIVE, HIGH-PERFORMANCE DIGITAL EXPERIENCES.";

const CONTACT_DETAILS = [
    {
        name: "Github",
        href: "https://github.com/anshulpaliwal",
        icon: (
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
        ),
    },
    {
        name: "LinkedIn",
        href: "https://linkedin.com/in/anshulpaliwal",
        icon: (
            <span className="font-bold text-[11px] bg-white text-black px-1 rounded-[2px] leading-none py-0.5 tracking-tighter">
                in
            </span>
        ),
    },
    {
        name: "anshulpaliwal0810@gmail.com",
        href: "mailto:anshulpaliwal0810@gmail.com",
        icon: (
            <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
        ),
    },
    {
        name: "+91 9389937668",
        href: "tel:+919389937668",
        icon: (
            <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
        ),
    },
];

const SlicedImage = ({ src, title, index }: { src: string; title: string; index: number }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const topSliceRef = useRef<HTMLDivElement>(null);
    const bottomSliceRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 0.5,
                }
            });

            tl.fromTo(topSliceRef.current,
                { xPercent: 10, scale: 1.1 },
                { xPercent: -10, scale: 1, ease: "none" },
                0
            );
            tl.fromTo(bottomSliceRef.current,
                { xPercent: -10, scale: 1.1 },
                { xPercent: 10, scale: 1, ease: "none" },
                0
            );

            tl.fromTo(titleRef.current,
                { opacity: 0, scale: 1.5, filter: "blur(10px)" },
                { opacity: 1, scale: 1, filter: "blur(0px)", ease: "power2.out", duration: 0.5 },
                0.2
            );
        }, el);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative w-full h-[80vh] md:h-screen flex items-center justify-center overflow-hidden my-24 group">
            <div className="relative w-[90%] md:w-[60%] h-[70%] md:h-[80%]">
                <div ref={topSliceRef} className="absolute inset-0 z-10 overflow-hidden" style={{ clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 55%)" }}>
                    <img src={src} alt="slice" className="w-full h-full object-cover grayscale contrast-125 brightness-75 group-hover:grayscale-0 transition-all duration-700" />
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 mix-blend-overlay pointer-events-none"></div>
                </div>

                <div ref={bottomSliceRef} className="absolute inset-0 z-10 overflow-hidden" style={{ clipPath: "polygon(0 55%, 100% 45%, 100% 100%, 0 100%)" }}>
                    <img src={src} alt="slice" className="w-full h-full object-cover grayscale contrast-125 brightness-75 group-hover:grayscale-0 transition-all duration-700" />
                </div>

                <div className="absolute top-[50%] left-[-10%] right-[-10%] h-[1px] bg-white/20 z-20 rotate-[-2deg] opacity-0 group-hover:opacity-100 transition-all duration-500 blur-[1px]"></div>

                <h2 ref={titleRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 text-[10vw] md:text-[8vw] leading-none font-bold text-white mix-blend-difference pointer-events-none font-mono">
                    {title}
                </h2>
            </div>

            <div className="absolute bottom-10 right-10 font-mono text-xs text-white/50">
                PROJECT ID: 00{index + 1}
            </div>
        </div>
    );
};

const Preloader = ({ onComplete, bootSequence }: { onComplete: () => void; bootSequence: string[] }) => {
    const [lines, setLines] = useState<string[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const completedRef = useRef(false);

    const finishEarly = useCallback(() => {
        if (completedRef.current) return;
        completedRef.current = true;
        gsap.to(".preloader-overlay", {
            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
            duration: 0.5,
            ease: "power4.inOut",
            onComplete
        });
    }, [onComplete]);

    useEffect(() => {
        let delay = 0;
        const timeouts: NodeJS.Timeout[] = [];

        bootSequence.forEach((line) => {
            delay += Math.random() * 200 + 70;
            const timer = setTimeout(() => {
                if (completedRef.current) return;
                setLines(prev => [...prev, line]);
                if (containerRef.current) {
                    containerRef.current.scrollTop = containerRef.current.scrollHeight;
                }
            }, delay);
            timeouts.push(timer);
        });

        const finishTimer = setTimeout(() => {
            finishEarly();
        }, delay + 600);
        timeouts.push(finishTimer);

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') finishEarly();
        };
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            timeouts.forEach(clearTimeout);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [finishEarly, bootSequence]);

    return (
        <div className="preloader-overlay fixed inset-0 bg-black z-[9999] flex flex-col p-8 md:p-16 font-mono text-sm md:text-base text-green-500 overflow-hidden">
            <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                <span className="text-xs text-white/50">SYSTEM_INITIALIZER_v2.4</span>
                <button
                    onClick={finishEarly}
                    className="text-xs text-white/70 hover:text-white px-3 py-1 border border-white/20 rounded-full hover:border-white transition-all cursor-pointer"
                >
                    SKIP [ESC]
                </button>
            </div>

            <div ref={containerRef} className="flex-1 overflow-y-auto no-scrollbar space-y-2">
                {lines.map((line, i) => (
                    <div key={i} className="flex">
                        <span className="mr-4 text-white/30">{`>0${i + 1}`}</span>
                        <span className="typing-effect text-white">{line}</span>
                    </div>
                ))}
                <div className="animate-pulse text-red-500 mt-4">_</div>
            </div>

            <div className="absolute bottom-8 right-8 text-right">
                <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter opacity-20">ANSHUL</h1>
                <p className="text-xs text-white/40">PORTFOLIO v1.0</p>
            </div>

            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
            <div className="absolute inset-0 border-[20px] border-transparent border-t-black/50 border-b-black/50 pointer-events-none" style={{ background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))', backgroundSize: '100% 2px, 3px 100%' }}></div>
        </div>
    );
};

const TypeReveal = ({ text, className = "" }: { text: string; className?: string }) => {
    const containerRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const chars = el.querySelectorAll('.type-char');
        const ctx = gsap.context(() => {
            gsap.fromTo(chars,
                { opacity: 0, y: 15, filter: "blur(5px)" },
                {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    duration: 0.8,
                    stagger: 0.02,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                    }
                }
            );
        }, el);

        return () => ctx.revert();
    }, [text]);

    return (
        <span ref={containerRef} className={`inline-block ${className}`}>
            {text.split('').map((char, i) => (
                <span key={i} className="type-char opacity-0 inline-block">
                    {char === ' ' ? '\u00A0' : char}
                </span>
            ))}
        </span>
    );
};

const RevealUp = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(el,
                { opacity: 0, y: 40, filter: "blur(10px)" },
                {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    duration: 1.2,
                    delay: delay,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                    }
                }
            );
        }, el);

        return () => ctx.revert();
    }, [delay]);

    return (
        <div ref={containerRef} className={`opacity-0 ${className}`}>
            {children}
        </div>
    );
};

export interface PortfolioPageProps {
    bootSequence?: string[];
    images?: { src: string; title: string }[];
    aboutText?: string;
    features?: { title: string; description: string }[];
    footerTitle?: string;
    footerSubtitle?: string;
}

export default function PortfolioPage({
    bootSequence = BOOT_SEQUENCE,
    images = IMAGES,
    aboutText = ABOUT_TEXT,
    features = FEATURES,
    footerTitle = "END OF PORTFOLIO",
    footerSubtitle = "AVAILABLE FOR COLLABORATION"
}: PortfolioPageProps = {}) {
    const [loading, setLoading] = useState(true);
    const heroRef = useRef<HTMLDivElement>(null);

    const handlePreloaderComplete = useCallback(() => {
        setLoading(false);
    }, []);

    // Animate hero elements on load
    useEffect(() => {
        if (loading || !heroRef.current) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            tl.fromTo(".hero-card",
                { opacity: 0, scale: 0.98 },
                { opacity: 1, scale: 1, duration: 1 }
            );

            tl.fromTo(".hero-nav",
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, duration: 0.8 },
                "-=0.6"
            );

            tl.fromTo(".hero-left",
                { opacity: 0, x: -30, filter: "blur(8px)" },
                { opacity: 1, x: 0, filter: "blur(0px)", duration: 0.9 },
                "-=0.5"
            );

            tl.fromTo(".hero-portrait",
                { opacity: 0, scale: 0.85, filter: "blur(10px)" },
                { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1, ease: "back.out(1.2)" },
                "-=0.7"
            );

            tl.fromTo(".hero-right",
                { opacity: 0, x: 30, filter: "blur(8px)" },
                { opacity: 1, x: 0, filter: "blur(0px)", duration: 0.9 },
                "-=0.7"
            );

            tl.fromTo(".hero-bottom-bar",
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.7 },
                "-=0.5"
            );
        }, heroRef);

        return () => ctx.revert();
    }, [loading]);

    return (
        <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-red-600 selection:text-white">

            {loading && <Preloader bootSequence={bootSequence} onComplete={handlePreloaderComplete} />}

            {/* Background Texture */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]" style={{ backgroundImage: `url("https://raw.githubusercontent.com/devloop01/webgl-slider/main/src/img/noise.png")` }}></div>

            <div className={`transition-opacity duration-700 ${loading ? 'opacity-0' : 'opacity-100'}`}>

                {/* HERO SECTION MATCHING REFERENCE DESIGN WITH CENTER PORTRAIT */}
                <section ref={heroRef} className="h-screen max-h-[100dvh] w-full p-2 sm:p-3.5 md:p-5 lg:p-6 flex flex-col justify-center items-center relative z-20 overflow-hidden box-border">
                    <div className="hero-card relative w-full max-w-[1560px] h-full max-h-full bg-[#0c0c0c] border border-white/20 rounded-[1.75rem] sm:rounded-[2.25rem] md:rounded-[2.75rem] p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-between overflow-hidden shadow-2xl box-border">

                        {/* Architectural Geometric Wireframe Arcs */}
                        <div className="absolute -top-16 -right-16 sm:-top-20 sm:-right-20 md:-top-24 md:-right-24 w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full border border-white/15 pointer-events-none"></div>
                        <div className="absolute top-[60%] -right-20 sm:-right-28 md:-right-36 w-52 h-52 sm:w-68 sm:h-68 md:w-80 md:h-80 rounded-full border border-white/10 pointer-events-none"></div>

                        {/* Top Navigation with GooeyNav */}
                        <Navbar currentPath="/" />

                        {/* Middle Content: Big Typographic Backdrop + Flanking Columns + Central Transparent Cutout */}
                        <div className="relative z-10 my-auto flex-1 min-h-0 flex flex-col justify-center py-2 sm:py-3 w-full">
                            
                            {/* Giant Background Text visible through the transparent image */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
                                <span className="text-[13vw] sm:text-[12vw] lg:text-[11vw] font-black uppercase tracking-tighter text-white/[0.07] leading-none whitespace-nowrap">
                                    FULL-STACK
                                </span>
                                <span className="text-[13vw] sm:text-[12vw] lg:text-[11vw] font-black uppercase tracking-tighter text-white/[0.07] leading-none whitespace-nowrap -mt-2 sm:-mt-4">
                                    DEVELOPER
                                </span>
                            </div>

                            {/* Center Cutout Portrait: Background completely removed, standing in front of text */}
                            <div className="hero-portrait absolute inset-x-0 bottom-0 top-0 z-10 pointer-events-none flex justify-center items-end pt-1 sm:pt-2">
                                <img
                                    src="/anshul-white-shirt-fade.png"
                                    alt="Anshul Paliwal"
                                    className="w-auto h-full max-h-full object-contain object-bottom drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)] select-none"
                                />
                            </div>

                            {/* Flanking Content Columns */}
                            <div className="relative z-20 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10 w-full px-2 sm:px-4">

                                {/* Left Column: Identity & Bio Summary */}
                                <div className="hero-left relative z-20 w-full lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl flex flex-col justify-center space-y-2.5 sm:space-y-3.5 text-left">
                                    <div className="flex items-center gap-2.5">
                                        <span className="font-serif italic text-lg sm:text-xl md:text-2xl text-red-500 font-normal tracking-wide">
                                            I'm
                                        </span>
                                        <span className="h-px w-8 sm:w-10 bg-red-600/50"></span>
                                    </div>

                                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.5rem] 2xl:text-[7.5rem] font-black text-white tracking-tighter leading-[0.9]">
                                        Anshul <br />
                                        <span className="text-transparent stroke-text">Paliwal</span>
                                    </h1>

                                    <div className="w-24 h-1 sm:h-1.5 bg-red-600 rounded-full"></div>

                                    <p className="text-white/80 text-xs sm:text-sm md:text-base leading-relaxed max-w-sm font-sans drop-shadow-md">
                                        Backend-focused Computer Science student with hands-on experience building tested{" "}
                                        <span className="text-white italic font-normal">REST APIs</span> and{" "}
                                        <span className="text-white italic font-normal">full-stack features</span> in Java, Spring Boot, and Node.js.
                                    </p>
                                </div>

                                {/* Right Column: Core Services & Action Button */}
                                <div className="hero-right relative z-20 w-full lg:max-w-sm xl:max-w-md flex flex-col justify-center space-y-4 text-left lg:text-right lg:items-end">
                                    <div className="space-y-1.5">
                                        <span className="font-mono text-[11px] sm:text-xs text-red-500 tracking-[0.2em] uppercase block">
                                            Services & Focus
                                        </span>
                                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-white leading-snug drop-shadow-md">
                                            Let's build scalable digital products and tested backend architectures.
                                        </h3>
                                    </div>

                                    <p className="text-white/65 text-xs sm:text-sm leading-relaxed max-w-sm drop-shadow-md">
                                        Specializing in robust API design, database optimization, and high-performance full-stack web applications.
                                    </p>

                                    {/* Projects Action Button */}
                                    <div className="pt-1">
                                        <Link
                                            href="/projects"
                                            className="hero-badge group inline-flex items-center gap-2.5 cursor-pointer"
                                        >
                                            <div className="bg-white text-black px-6 sm:px-7 py-2.5 sm:py-3 rounded-full font-serif italic text-base sm:text-lg font-normal shadow-lg group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                                                Projects
                                            </div>
                                            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-black flex items-center justify-center shadow-lg group-hover:bg-red-600 group-hover:text-white group-hover:scale-105 group-hover:translate-x-1 transition-all duration-300">
                                                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                                </svg>
                                            </div>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Bottom Bar: Core Tech Stack Dock & Contact Links */}
                        <footer className="hero-bottom-bar shrink-0 relative z-30 w-full pt-2 sm:pt-3">
                            <div className="w-full bg-white/[0.02] border border-white/10 rounded-2xl p-2 sm:p-2.5 flex flex-col md:flex-row items-center justify-between gap-2.5">
                                
                                {/* Core Tech Pillars - Yellow dots removed */}
                                <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 sm:gap-2">
                                    {[
                                        { name: "Java • Spring Boot" },
                                        { name: "React • Next.js" },
                                        { name: "Node.js • REST APIs" },
                                        { name: "PostgreSQL • MongoDB" }
                                    ].map((tech) => (
                                        <div
                                            key={tech.name}
                                            className="bg-white/[0.04] border border-white/10 hover:border-red-500/40 rounded-xl px-3.5 py-1.5 flex items-center transition-all"
                                        >
                                            <span className="font-mono font-medium text-[11px] sm:text-xs text-white/90">{tech.name}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Contact Links */}
                                <div className="flex flex-wrap items-center justify-center md:justify-end gap-1.5 sm:gap-2">
                                    {CONTACT_DETAILS.map((contact) => (
                                        <a
                                            key={contact.name}
                                            href={contact.href}
                                            target={contact.href.startsWith("http") ? "_blank" : undefined}
                                            rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                            className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-1.5 flex items-center gap-2 text-xs text-white/70 hover:text-white hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-300 cursor-pointer shadow-sm"
                                        >
                                            <span className="text-white/90">{contact.icon}</span>
                                            <span className="font-sans font-medium text-[11px] sm:text-xs">{contact.name}</span>
                                        </a>
                                    ))}
                                </div>

                            </div>
                        </footer>

                    </div>
                </section>

                {/* ABOUT SECTION */}
                <section id="about" className="min-h-[50vh] flex items-center justify-center relative z-10 px-8 py-24">
                    <div className="max-w-5xl mx-auto text-center space-y-8 flex flex-col items-center">
                        <RevealUp delay={0}>
                            <div className="w-16 h-1 bg-red-600 mx-auto"></div>
                        </RevealUp>
                        <h3 className="text-2xl md:text-5xl font-mono text-white/90 leading-tight uppercase font-medium tracking-tight">
                            <TypeReveal text={aboutText} />
                        </h3>
                    </div>
                </section>

                {/* EXPERIENCE SECTION MATCHING REFERENCE DESIGN */}
                <section id="experience" className="relative z-10 px-4 sm:px-6 md:px-8 py-24 max-w-7xl mx-auto w-full">
                    
                    {/* Big Hollow Headline Matching Reference */}
                    <div className="w-full text-center mb-8 sm:mb-12 overflow-hidden select-none">
                        <h2 className="text-[13vw] sm:text-[11vw] md:text-[8rem] lg:text-[9.5rem] font-black uppercase tracking-tight text-transparent stroke-text opacity-40 leading-none">
                            EXPERIENCE
                        </h2>
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
                        
                        {/* Card 1: Full Stack Developer Intern (Only Click) */}
                        <div className="group bg-[#0c0c0c] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-white/25 transition-all duration-300 shadow-2xl relative overflow-hidden">
                            <div className="space-y-4">
                                <span className="font-mono text-xs text-white/40 block">01</span>
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-red-500 transition-colors">
                                        Full Stack Developer Intern
                                    </h3>
                                    <p className="text-base sm:text-lg text-white/70 font-normal mt-1">
                                        Only Click
                                    </p>
                                </div>

                                <p className="text-white/60 text-sm leading-relaxed pt-2">
                                    Worked on backend and mobile app for Only Click.
                                </p>

                                <ul className="space-y-2 text-sm text-white/70 leading-relaxed pt-1">
                                    <li className="flex items-start gap-2">
                                        <span className="text-white/40 select-none mt-0.5">•</span>
                                        <span>Built and maintained backend services and REST APIs.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-white/40 select-none mt-0.5">•</span>
                                        <span>Contributed to mobile application features and API integrations.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Tech Stack Pills */}
                            <div className="pt-8 mt-6 border-t border-white/5">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="font-mono text-[10px] text-white/40 tracking-wider uppercase">TECH:</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {["React Native", "Node.js", "Express", "REST APIs", "Git & GitHub"].map((tech) => (
                                        <span
                                            key={tech}
                                            className="font-mono text-xs text-white/80 bg-white/[0.03] border border-white/10 px-3 py-1.5 rounded-lg hover:border-red-500/40 hover:text-white transition-colors"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Technical Co-Founder (ParkEzy) */}
                        <div className="group bg-[#0c0c0c] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-white/25 transition-all duration-300 shadow-2xl relative overflow-hidden">
                            <div className="space-y-4">
                                <span className="font-mono text-xs text-white/40 block">02</span>
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-red-500 transition-colors">
                                        Technical Co-Founder
                                    </h3>
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

                                <ul className="space-y-2 text-sm text-white/70 leading-relaxed pt-1">
                                    <li className="flex items-start gap-2">
                                        <span className="text-white/40 select-none mt-0.5">•</span>
                                        <span>Architecting scalable backend infrastructure and RESTful APIs for real-time parking spot discovery.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-white/40 select-none mt-0.5">•</span>
                                        <span>Developing cross-platform mobile application with live location mapping, parking search, and booking flows.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Tech Stack Pills */}
                            <div className="pt-8 mt-6 border-t border-white/5">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="font-mono text-[10px] text-white/40 tracking-wider uppercase">TECH:</span>
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
                                            className="font-mono text-xs text-white/80 bg-white/[0.03] border border-white/10 px-3 py-1.5 rounded-lg hover:border-red-500/40 hover:text-white transition-colors"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* PROJECTS SECTION */}
                <section id="projects" className="relative z-10 py-24">
                    <div className="max-w-7xl mx-auto px-8 mb-12 flex justify-between items-end">
                        <div>
                            <span className="font-mono text-red-500 text-sm tracking-[0.5em] uppercase block">Selected Works</span>
                            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mt-2">Projects</h2>
                        </div>
                        <div className="font-mono text-xs text-white/40">SCROLL TO EXPLORE ↓</div>
                    </div>
                    {images.map((img, i) => (
                        <SlicedImage key={i} src={img.src} title={img.title} index={i} />
                    ))}
                </section>

                {/* TECHNICAL EXPERTISE / ARTICLES SECTION */}
                <section id="skills" className="min-h-screen relative z-10 py-24 px-8 flex flex-col justify-center">
                    <div className="max-w-7xl mx-auto w-full">
                        <h2 className="text-4xl md:text-6xl font-black uppercase mb-16 text-center tracking-tighter">
                            TECHNICAL EXPERTISE <br />
                            <span className="text-sm font-mono text-red-500 tracking-[0.5em] block mt-4">CORE COMPETENCIES</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {features.map((feature, i) => (
                                <div key={i} className="group relative border border-white/10 p-8 md:p-12 hover:bg-white/[0.02] transition-colors duration-500 overflow-hidden cursor-default">
                                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-0 translate-x-[-100%] group-hover:opacity-100 group-hover:translate-x-[100%] transition-all duration-1000 ease-in-out"></div>
                                    <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-red-600 to-transparent opacity-0 translate-y-[-100%] group-hover:opacity-100 group-hover:translate-y-[100%] transition-all duration-1000 ease-in-out delay-100"></div>

                                    <h4 className="text-2xl md:text-4xl font-black uppercase mb-6 text-white group-hover:text-red-500 transition-colors duration-500">
                                        <TypeReveal text={feature.title} />
                                    </h4>
                                    <p className="font-mono text-sm md:text-base text-white/50 group-hover:text-white/80 transition-colors duration-500">
                                        <TypeReveal text={feature.description} />
                                    </p>
                                    <div className="mt-12 text-xs font-mono text-white/20 group-hover:text-red-500/50 transition-colors duration-500">
                                        <RevealUp delay={0.4}>
                                            MODULE ACCESS [0{i + 1}]
                                        </RevealUp>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CONTACT / FOOTER */}
                <footer id="contact" className="h-[50vh] flex items-center justify-center bg-white text-black relative overflow-hidden">
                    <div className="text-center">
                        <h2 className="text-4xl md:text-8xl font-black uppercase mb-4">
                            <TypeReveal text={footerTitle} />
                        </h2>
                        <div className="font-mono text-sm tracking-widest">
                            <TypeReveal text={footerSubtitle} />
                        </div>
                    </div>
                </footer>

            </div>
        </main>
    );
}
