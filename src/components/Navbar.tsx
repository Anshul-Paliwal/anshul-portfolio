'use client';

import React from 'react';
import Link from 'next/link';
import GooeyNav from '@/components/GooeyNav';

interface NavbarProps {
    currentPath?: string;
}

export default function Navbar({ currentPath = '/' }: NavbarProps) {
    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Experience', href: '/experience' },
        { label: 'Projects', href: '/projects' },
        { label: 'Contacts', href: '/contacts' },
    ];

    const activeIndex = Math.max(
        0,
        navItems.findIndex((item) => item.href === currentPath)
    );

    return (
        <header className="hero-nav shrink-0 relative z-30 w-full">
            {/* Main Header Row: Left (Logo), Center (GooeyNav), Right (Connect Button) */}
            <div className="flex items-center justify-between w-full">
                {/* Left: Brand Monogram */}
                <div className="flex items-center justify-start sm:flex-1">
                    <Link href="/" className="group flex items-center gap-1.5 cursor-pointer select-none">
                        <span className="font-mono text-xs text-red-500 font-bold tracking-widest">[</span>
                        <span className="font-black text-lg sm:text-xl tracking-tighter text-white group-hover:text-red-500 transition-colors duration-300">
                            ANSH
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-red-600 group-hover:scale-125 transition-transform duration-300"></span>
                        <span className="font-mono text-xs text-red-500 font-bold tracking-widest">]</span>
                    </Link>
                </div>

                {/* Center: Desktop & Tablet GooeyNav centered in the middle */}
                <div className="hidden sm:flex items-center justify-center">
                    <GooeyNav
                        items={navItems}
                        activeIndex={activeIndex}
                        theme="dark"
                        size="sm"
                        frame={true}
                        color="#e7000b"
                        activeTextColor="#ffffff"
                        colors={['#e7000b', '#ff3b30', '#ff5252', '#d80018']}
                        particleCount={15}
                        spread={48}
                        animationTime={600}
                        timeVariance={280}
                        gooeyness={0.55}
                        wobble={0.5}
                        hoverEffect={true}
                    />
                </div>

                {/* Right: Let's Connect Action */}
                <div className="flex items-center justify-end sm:flex-1">
                    <Link
                        href="/contacts"
                        className="group relative inline-flex items-center gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2.5 rounded-full border border-white/20 bg-white/[0.05] hover:bg-red-600 hover:border-red-600 text-xs sm:text-sm font-medium text-white transition-all duration-300 shadow-sm whitespace-nowrap"
                    >
                        <span className="sm:inline hidden">Let's Connect</span>
                        <span className="sm:hidden inline">Connect</span>
                        <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </Link>
                </div>
            </div>

            {/* Mobile: Centered GooeyNav Row */}
            <div className="sm:hidden w-full flex justify-center overflow-x-auto no-scrollbar pt-2.5">
                <GooeyNav
                    items={navItems}
                    activeIndex={activeIndex}
                    theme="dark"
                    size="sm"
                    frame={true}
                    color="#e7000b"
                    activeTextColor="#ffffff"
                    colors={['#e7000b', '#ff3b30', '#ff5252', '#d80018']}
                    particleCount={12}
                    spread={36}
                    animationTime={500}
                    timeVariance={200}
                    gooeyness={0.55}
                    wobble={0.5}
                    hoverEffect={true}
                />
            </div>
        </header>
    );
}
