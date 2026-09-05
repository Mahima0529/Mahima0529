import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Card } from '../ui/Card';
import { Server, Award, Zap, BookOpen } from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: <Award className="w-5 h-5 text-sky-400" />,
      title: 'GATE (CS) 2026 Qualified',
      desc: 'Deep theoretical grounding in Data Structures, OS, DBMS, Computer Networks & Algorithms.',
    },
    {
      icon: <Server className="w-5 h-5 text-emerald-400" />,
      title: 'Distributed Systems & Microservices',
      desc: 'Architecting resilient backends with Kafka event streams, Redis sliding-window limiters, and Docker.',
    },
    {
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      title: 'Algorithmic Problem Solving',
      desc: '250+ solved challenges across LeetCode & CodeChef. Nationwide AIR 35 out of 2,500+ participants.',
    },
    {
      icon: <BookOpen className="w-5 h-5 text-purple-400" />,
      title: 'Dual ServiceNow Certified',
      desc: 'Certified System Administrator (CSA) & Certified Application Developer (CAD).',
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-mono uppercase tracking-widest text-sky-400">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering High-Throughput &amp; Resilient Systems
          </h2>
          <div className="w-12 h-1 bg-sky-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Narrative Content */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base">
            <p>
              I am an undergraduate in Mechatronics &amp; Automation Engineering at the{' '}
              <strong className="text-white">Indian Institute of Information Technology (IIIT), Bhagalpur</strong> (CGPA:{' '}
              <strong className="text-sky-300">8.68 / 10</strong>). My passion is focused on{' '}
              <strong className="text-white">backend engineering, microservices architectures, and distributed systems</strong>.
            </p>

            <p>
              Qualifying <strong className="text-white">GATE (CS) 2026</strong> reinforced my rigor across theoretical and practical computer science:
              analyzing complexity, concurrency bottlenecks, memory hierarchies, and database indexing. I apply these fundamentals when building production-ready platforms that handle high request volumes and defend against malicious traffic.
            </p>

            <p>
              During my internship at <strong className="text-white">Itjobxs</strong>, I solved real-world engineering challenges by implementing bot mitigation mechanisms that curtailed spam account sign-ups by <strong className="text-emerald-400">15%</strong> and architected an end-to-end MERN e-commerce engine that boosted order processing efficiency by <strong className="text-emerald-400">~20%</strong>.
            </p>

            <p>
              I thrive on building software that balances high throughput with clean abstractions: event-driven messaging with{' '}
              <span className="text-sky-300 font-mono text-sm">Apache Kafka</span>, atomic rate-limiting and caching using{' '}
              <span className="text-sky-300 font-mono text-sm">Redis</span>, and robust REST APIs paired with relational and document stores.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-900">
              {portfolioData.stats.map((stat, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-center">
                  <span className="text-xl sm:text-2xl font-bold text-white block">{stat.value}</span>
                  <span className="text-[11px] font-mono text-sky-400 block mt-0.5">{stat.label}</span>
                  <span className="text-[10px] text-slate-400 block">{stat.detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {highlights.map((item, idx) => (
              <Card key={idx} className="p-5 flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-normal">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
