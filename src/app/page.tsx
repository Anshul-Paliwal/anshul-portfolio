'use client';

/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState, useCallback } from 'react';
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

const SOCIALS = [
    {
        name: "Github",
        href: "https://github.com",
        icon: (
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
        ),
    },
    {
        name: "Linkedin",
        href: "https://linkedin.com",
        icon: (
            <span className="font-bold text-[11px] bg-white text-black px-1 rounded-[2px] leading-none py-0.5 tracking-tighter">
                in
            </span>
        ),
    },
    {
        name: "Telegram",
        href: "https://t.me",
        icon: (
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
        ),
    },
    {
        name: "Facebook",
        href: "https://facebook.com",
        icon: (
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
        ),
    },
    {
        name: "Instagram",
        href: "https://instagram.com",
        icon: (
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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
    const [locale, setLocale] = useState<'En' | 'Ge'>('En');
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

            tl.fromTo(".hero-title-top",
                { opacity: 0, y: 60, filter: "blur(10px)" },
                { opacity: 1, y: 0, filter: "blur(0px)", duration: 1 },
                "-=0.6"
            );

            tl.fromTo(".hero-badge",
                { opacity: 0, scale: 0.8, x: 20 },
                { opacity: 1, scale: 1, x: 0, duration: 0.8, ease: "back.out(1.5)" },
                "-=0.7"
            );

            tl.fromTo(".hero-tagline",
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.8 },
                "-=0.5"
            );

            tl.fromTo(".hero-title-bottom",
                { opacity: 0, y: 60, filter: "blur(10px)" },
                { opacity: 1, y: 0, filter: "blur(0px)", duration: 1 },
                "-=0.7"
            );

            tl.fromTo(".hero-social",
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 },
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

                {/* HERO SECTION MATCHING EXACT DESIGN */}
                <section ref={heroRef} className="min-h-screen p-3 sm:p-5 md:p-8 flex flex-col justify-center relative z-20">
                    <div className="hero-card relative w-full max-w-[1600px] mx-auto min-h-[92vh] lg:min-h-[90vh] bg-[#0c0c0c] border border-white/20 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] p-6 sm:p-10 md:p-14 lg:p-16 flex flex-col justify-between overflow-hidden shadow-2xl">

                        {/* Architectural Geometric Wireframe SVG Overlays */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none select-none" xmlns="http://www.w3.org/2000/svg">
                            {/* Top right arc intersecting the border and passing behind language selector */}
                            <circle cx="96%" cy="2%" r="160" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
                            <circle cx="96%" cy="2%" r="260" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                            {/* Right edge subtle secondary curve */}
                            <circle cx="103%" cy="66%" r="130" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
                        </svg>

                        {/* Top Navigation */}
                        <header className="hero-nav relative z-20 flex items-start justify-between">
                            {/* Left: Name */}
                            <div className="font-sans">
                                <span className="block text-white font-semibold text-base sm:text-lg md:text-xl leading-tight tracking-tight">Anshul</span>
                                <span className="block text-white/90 font-semibold text-base sm:text-lg md:text-xl leading-tight tracking-tight">Paliwal</span>
                                <div className="flex items-center gap-1.5 mt-1 font-mono text-[10px] text-white/40 tracking-wider">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                                    <span>IN // DEHRADUN</span>
                                </div>
                            </div>

                            {/* Center: Nav Links */}
                            <nav className="hidden md:flex items-center gap-8 lg:gap-14 text-sm lg:text-base text-white/60 font-sans tracking-wide">
                                <a href="#about" className="hover:text-white transition-colors duration-200">About</a>
                                <a href="#projects" className="hover:text-white transition-colors duration-200">Projects</a>
                                <a href="#skills" className="hover:text-white transition-colors duration-200">Articles</a>
                                <a href="#contact" className="hover:text-white transition-colors duration-200">Contacts</a>
                            </nav>

                            {/* Right: Language switch */}
                            <div className="text-right text-sm md:text-base font-sans tracking-tight select-none">
                                <button
                                    onClick={() => setLocale('En')}
                                    className={`block text-right transition-colors cursor-pointer ${locale === 'En' ? 'text-white font-semibold' : 'text-white/40 hover:text-white/70'}`}
                                >
                                    En
                                </button>
                                <button
                                    onClick={() => setLocale('Ge')}
                                    className={`block text-right transition-colors cursor-pointer ${locale === 'Ge' ? 'text-white font-semibold' : 'text-white/40 hover:text-white/70'}`}
                                >
                                    Ge
                                </button>
                            </div>
                        </header>

                        {/* Middle Content: Big Typographic Layout */}
                        <div className="relative z-10 my-auto py-8 sm:py-12 md:py-14 flex flex-col gap-6 md:gap-12">
                            {/* Row 1: Full-stack + Projects Pill Button */}
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <h1 className="hero-title-top text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[9.5rem] font-bold text-white tracking-[-0.035em] leading-[0.92]">
                                    Full-stack
                                </h1>

                                {/* Projects Pill + Circle Arrow Button */}
                                <a
                                    href="#projects"
                                    className="hero-badge group self-start md:self-center flex items-center gap-2.5 sm:gap-3 cursor-pointer shrink-0"
                                >
                                    <div className="bg-white text-black px-7 sm:px-9 py-3 sm:py-3.5 rounded-full font-serif italic text-lg sm:text-xl font-normal shadow-lg group-hover:bg-neutral-100 transition-all duration-300">
                                        Projects
                                    </div>
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-black flex items-center justify-center shadow-lg group-hover:scale-105 group-hover:translate-x-1 transition-all duration-300">
                                        <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                        </svg>
                                    </div>
                                </a>
                            </div>

                            {/* Row 2: Tagline + Developer */}
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                                <p className="hero-tagline text-white/75 text-sm sm:text-base md:text-lg max-w-sm sm:max-w-md font-sans leading-relaxed tracking-normal">
                                    My goal is to <span className="text-white italic font-normal">write maintainable, clean</span> and{" "}
                                    <span className="text-white italic font-normal">understandable code</span> to process development was enjoyable.
                                </p>

                                <div className="text-left md:text-right">
                                    <h2 className="hero-title-bottom text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[9.5rem] font-bold text-white tracking-[-0.035em] leading-[0.92]">
                                        Developer
                                    </h2>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Social Links Bar */}
                        <footer className="relative z-10 flex flex-wrap items-center justify-start md:justify-center gap-2 sm:gap-3 pt-6 border-t border-white/5 md:border-none">
                            {SOCIALS.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hero-social rounded-full border border-white/15 bg-white/[0.03] backdrop-blur-sm px-4 sm:px-5 py-2 sm:py-2.5 flex items-center gap-2.5 text-xs sm:text-sm text-white/80 hover:text-white hover:border-white/40 hover:bg-white/[0.08] hover:scale-105 transition-all duration-300 cursor-pointer shadow-sm"
                                >
                                    <span className="text-white/90">{social.icon}</span>
                                    <span className="font-sans font-medium">{social.name}</span>
                                </a>
                            ))}
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
