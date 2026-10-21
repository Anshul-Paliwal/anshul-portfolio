'use client';

import React from 'react';
import Link from 'next/link';

interface NavbarProps {
    currentPath?: string;
}

export default function Navbar({ currentPath = '/' }: NavbarProps) {
    const navItems = [
        { name: 'About', href: '/about' },
        { name: 'Experience', href: '/experience' },
        { name: 'Projects', href: '/projects' },
        { name: 'Contacts', href: '/contacts' },
    ];

    return (
        <header className="hero-nav shrink-0 relative z-30 flex items-center justify-between w-full">
            {/* Left: Brand Monogram + Navigation Bar */}
            <div className="flex items-center gap-6 sm:gap-8 lg:gap-10">
                <Link href="/" className="group flex items-center gap-1.5 cursor-pointer select-none">
                    <span className="font-mono text-xs text-red-500 font-bold tracking-widest">[</span>
                    <span className="font-black text-lg sm:text-xl tracking-tighter text-white group-hover:text-red-500 transition-colors duration-300">
                        ANSH
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 group-hover:scale-125 transition-transform duration-300"></span>
                    <span className="font-mono text-xs text-red-500 font-bold tracking-widest">]</span>
                </Link>

                <nav className="flex items-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm font-sans tracking-wide">
                    {navItems.map((item) => {
                        const isActive = currentPath === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`relative py-1 transition-colors duration-200 ${
                                    isActive
                                        ? 'text-white font-semibold'
                                        : 'text-white/70 hover:text-white'
                                }`}
                            >
                                <span>{item.name}</span>
                                {isActive && (
                                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600 rounded-full animate-in fade-in duration-300"></span>
                                )}
                            </Link>
                        );
                    })}
                </nav>
            </div>

            {/* Right: Let's Connect Button without green dot */}
            <div className="flex items-center">
                <Link
                    href="/contacts"
                    className="group relative inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-white/20 bg-white/[0.05] hover:bg-red-600 hover:border-red-600 text-xs sm:text-sm font-medium text-white transition-all duration-300 shadow-sm"
                >
                    <span>Let's Connect</span>
                    <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                </Link>
            </div>
        </header>
    );
}
