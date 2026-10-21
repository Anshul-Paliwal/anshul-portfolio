'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function ContactsPage() {
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('anshulpaliwal0810@gmail.com');
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormSubmitted(true);
    };

    return (
        <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-red-600 selection:text-white relative overflow-hidden">
            {/* Background Texture */}
            <div
                className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]"
                style={{ backgroundImage: `url("https://raw.githubusercontent.com/devloop01/webgl-slider/main/src/img/noise.png")` }}
            ></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 flex flex-col min-h-screen justify-between">
                
                {/* Unified Top Navigation */}
                <Navbar currentPath="/contacts" />

                {/* Main Hero Header */}
                <div className="pt-12 sm:pt-16 pb-8 text-center select-none">
                    <span className="font-mono text-xs sm:text-sm text-red-500 tracking-[0.4em] uppercase block mb-2">
                        Get In Touch
                    </span>
                    <h1 className="text-[14vw] sm:text-[11vw] md:text-[8rem] font-black uppercase tracking-tight text-transparent stroke-text opacity-40 leading-none">
                        CONTACTS
                    </h1>
                    <p className="mt-4 text-white/60 max-w-xl mx-auto text-sm sm:text-base font-sans leading-relaxed">
                        Available for software engineering roles, distributed backend consulting, and startup collaboration.
                    </p>
                </div>

                {/* 2-Column Contact Hub */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
                    
                    {/* Left Column: Direct Communication Channels */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        
                        {/* Availability Pill */}
                        <div className="bg-[#0c0c0c] border border-white/10 rounded-2xl p-4 flex items-center justify-between">
                            <div className="flex items-center gap-2.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                <span className="font-mono text-xs text-white/80 font-medium">STATUS: READY TO BUILD</span>
                            </div>
                            <span className="font-mono text-[11px] text-white/40">INDIA (IST)</span>
                        </div>

                        {/* Email Card */}
                        <div className="bg-[#0c0c0c] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-4 hover:border-white/20 transition-all shadow-2xl">
                            <span className="font-mono text-xs text-red-400 block uppercase tracking-wider">
                                Direct Email
                            </span>
                            <h2 className="text-lg sm:text-xl font-bold text-white break-all">
                                anshulpaliwal0810@gmail.com
                            </h2>
                            <div className="flex gap-3 pt-2">
                                <button
                                    onClick={handleCopyEmail}
                                    className="px-4 py-2.5 rounded-xl border border-white/15 bg-white/[0.04] hover:bg-white/10 font-mono text-xs text-white transition-colors cursor-pointer flex items-center gap-2"
                                >
                                    <span>{copiedEmail ? '✓ Copied' : 'Copy Email'}</span>
                                </button>
                                <a
                                    href="mailto:anshulpaliwal0810@gmail.com"
                                    className="px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 font-mono text-xs text-white transition-colors flex items-center gap-1.5"
                                >
                                    <span>Open Mail</span>
                                    <span>↗</span>
                                </a>
                            </div>
                        </div>

                        {/* Phone Card */}
                        <div className="bg-[#0c0c0c] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-4 hover:border-white/20 transition-all shadow-2xl">
                            <span className="font-mono text-xs text-red-400 block uppercase tracking-wider">
                                Phone & WhatsApp
                            </span>
                            <h2 className="text-lg sm:text-xl font-bold text-white">
                                +91 9389937668
                            </h2>
                            <div className="pt-2">
                                <a
                                    href="tel:+919389937668"
                                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/15 bg-white/[0.04] hover:bg-white/10 font-mono text-xs text-white transition-colors"
                                >
                                    <span>Call Directly</span>
                                    <span>↗</span>
                                </a>
                            </div>
                        </div>

                        {/* Social / Developer Handles */}
                        <div className="bg-[#0c0c0c] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-4 shadow-2xl">
                            <span className="font-mono text-xs text-white/40 block uppercase tracking-wider">
                                Developer Networks
                            </span>
                            <div className="grid grid-cols-2 gap-3 pt-1">
                                <a
                                    href="https://github.com/anshulpaliwal"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-red-500/40 hover:bg-red-600/10 transition-all flex flex-col gap-1 group"
                                >
                                    <span className="text-white font-bold text-sm group-hover:text-red-400 transition-colors flex items-center justify-between">
                                        GitHub <span>↗</span>
                                    </span>
                                    <span className="font-mono text-[11px] text-white/40">Repositories & Code</span>
                                </a>
                                <a
                                    href="https://linkedin.com/in/anshulpaliwal"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-red-500/40 hover:bg-red-600/10 transition-all flex flex-col gap-1 group"
                                >
                                    <span className="text-white font-bold text-sm group-hover:text-red-400 transition-colors flex items-center justify-between">
                                        LinkedIn <span>↗</span>
                                    </span>
                                    <span className="font-mono text-[11px] text-white/40">Professional Profile</span>
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Direct Message Form */}
                    <div className="lg:col-span-7">
                        <div className="bg-[#0c0c0c] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
                            
                            <div className="mb-6">
                                <span className="font-mono text-xs text-red-500 tracking-[0.3em] uppercase block mb-1">
                                    Send An Inquiry
                                </span>
                                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                                    Let's build something together.
                                </h3>
                                <p className="text-white/60 text-xs sm:text-sm mt-2 leading-relaxed">
                                    Leave a message below, and I'll get back to you within 24 hours.
                                </p>
                            </div>

                            {formSubmitted ? (
                                <div className="py-16 text-center space-y-4">
                                    <div className="w-16 h-16 rounded-full bg-red-600/10 border border-red-500/40 text-red-500 flex items-center justify-center mx-auto text-2xl font-bold">
                                        ✓
                                    </div>
                                    <h4 className="text-xl font-bold text-white">Message Transmitted</h4>
                                    <p className="text-sm text-white/60 max-w-sm mx-auto">
                                        Thank you, {formData.name || 'friend'}. I've received your note and will be in touch shortly.
                                    </p>
                                    <button
                                        onClick={() => {
                                            setFormSubmitted(false);
                                            setFormData({ name: '', email: '', subject: '', message: '' });
                                        }}
                                        className="mt-4 px-6 py-2.5 rounded-full border border-white/20 bg-white/[0.04] text-xs font-mono hover:bg-white hover:text-black transition-all cursor-pointer"
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label className="font-mono text-xs text-white/60 block">YOUR NAME</label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                placeholder="e.g. John Doe"
                                                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-red-500 focus:bg-white/[0.05] transition-all"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="font-mono text-xs text-white/60 block">EMAIL ADDRESS</label>
                                            <input
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                placeholder="e.g. john@company.com"
                                                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-red-500 focus:bg-white/[0.05] transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="font-mono text-xs text-white/60 block">SUBJECT</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.subject}
                                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                            placeholder="e.g. Full-Stack Role / Project Collaboration"
                                            className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-red-500 focus:bg-white/[0.05] transition-all"
                                        />
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="font-mono text-xs text-white/60 block">MESSAGE</label>
                                        <textarea
                                            required
                                            rows={5}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            placeholder="Briefly describe your team, project, or what you'd like to build together..."
                                            className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-4 text-sm text-white placeholder-white/20 focus:outline-none focus:border-red-500 focus:bg-white/[0.05] transition-all resize-none"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-3.5 sm:py-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm tracking-wide transition-all duration-300 shadow-xl shadow-red-600/20 cursor-pointer flex items-center justify-center gap-2 group"
                                    >
                                        <span>Dispatch Message</span>
                                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                        </svg>
                                    </button>
                                </form>
                            )}

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
                        <Link href="/experience" className="hover:text-red-400 transition-colors">
                            Experience →
                        </Link>
                        <Link href="/projects" className="hover:text-red-400 transition-colors">
                            Projects →
                        </Link>
                    </div>
                </footer>

            </div>
        </main>
    );
}
