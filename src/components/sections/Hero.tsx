import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, ShieldCheck, Terminal as TermIcon } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import { Button } from '../ui/Button';
import { Terminal } from '../ui/Terminal';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-grid-pattern">
      {/* Radial ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[350px] h-[300px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Personal introduction & high-impact positioning */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-sky-500/30 text-xs text-sky-300 font-mono shadow-md shadow-sky-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Frontend • Backend • Full-Stack • SDE Roles</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <p className="text-slate-400 text-sm sm:text-base font-mono">
                Hi, I'm <span className="text-sky-400 font-semibold">Mahima Patel</span>
              </p>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Software Engineer &amp;{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-300">
                  Full-Stack Developer
                </span>
              </h1>
            </div>

            {/* Value Proposition */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              B.Tech undergraduate at <strong className="text-white">IIIT Bhagalpur</strong> and{' '}
              <strong className="text-sky-300">GATE (CS) 2026 Qualified</strong>. Ready to deliver impact across{' '}
              <strong className="text-white">Frontend, Backend, Full-Stack, and SDE roles</strong> — from scalable microservices (Kafka, Redis, Node.js) to reactive, high-performance web applications (React, Next.js, TypeScript).
            </p>

            {/* Quick credentials badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-xs font-mono text-slate-300">
              <span className="px-2.5 py-1 rounded bg-slate-900/80 border border-slate-800 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                GATE CS 2026
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900/80 border border-slate-800">
                CGPA: <strong className="text-white">8.68/10</strong>
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900/80 border border-slate-800">
                LeetCode: <strong className="text-amber-400">250+ Solved</strong>
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900/80 border border-slate-800">
                Rank: <strong className="text-emerald-400">AIR 35</strong>
              </span>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Button
                href="#projects"
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                View Projects
              </Button>

              <Button
                href={portfolioData.personal.resumeUrl}
                download="Mahima_Patel_Resume.pdf"
                variant="outline"
                size="md"
                icon={<Download className="w-4 h-4" />}
              >
                Download Resume
              </Button>
            </div>

            {/* Social & Contact Strip */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 border-t border-slate-900 text-slate-400">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500">Profiles:</span>
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={portfolioData.personal.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs hover:text-amber-400 transition-colors"
              >
                <TermIcon className="w-4 h-4" />
                <span>LeetCode</span>
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="flex items-center gap-1 text-xs hover:text-sky-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Code Terminal & Systems Visual */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full">
              <Terminal />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
