import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Github, ExternalLink, CheckCircle2, ArrowRight } from 'lucide-react';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Microservices' | 'Full-Stack' | 'Frontend & Analytics'>('All');

  const filteredProjects = portfolioData.projects.filter((p) => {
    if (filter === 'All') return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="py-24 bg-slate-950/60 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <p className="text-xs font-mono uppercase tracking-widest text-sky-400">
            Portfolio Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Systems &amp; Engineering Projects
          </h2>
          <div className="w-12 h-1 bg-sky-500 mx-auto rounded-full"></div>
          <p className="text-sm text-slate-400">
            Real production repositories, microservices architectures, live demos, and verified implementations.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {(['All', 'Microservices', 'Full-Stack', 'Frontend & Analytics'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                filter === tab
                  ? 'bg-sky-500 text-slate-950 font-semibold shadow-md shadow-sky-500/20'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="flex flex-col justify-between border-slate-800/90 hover:border-slate-700 bg-slate-900/70 p-6 sm:p-8"
            >
              <div>
                {/* Top badges */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono text-sky-400 font-semibold uppercase tracking-wider">
                    {project.type}
                  </span>
                  {project.metricsBadge && (
                    <Badge variant="emerald" size="sm">
                      {project.metricsBadge}
                    </Badge>
                  )}
                </div>

                {/* Project Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-sky-400 transition-colors mb-1">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-slate-400 mb-4">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {project.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 pt-4 mb-6 border-t border-slate-800/80">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 text-[11px] font-mono rounded bg-slate-800/80 text-slate-300 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links / CTAs */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <div className="flex items-center gap-2">
                    <Button
                      href={project.githubUrl}
                      external
                      variant="secondary"
                      size="sm"
                      icon={<Github className="w-3.5 h-3.5" />}
                    >
                      Repository
                    </Button>

                    {project.backendGithubUrl && (
                      <Button
                        href={project.backendGithubUrl}
                        external
                        variant="ghost"
                        size="sm"
                        icon={<Github className="w-3.5 h-3.5" />}
                      >
                        Backend
                      </Button>
                    )}
                  </div>

                  {project.liveUrl && (
                    <Button
                      href={project.liveUrl}
                      external
                      variant="primary"
                      size="sm"
                      icon={<ExternalLink className="w-3.5 h-3.5" />}
                    >
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>

            </Card>
          ))}
        </div>

        {/* View All Repositories CTA */}
        <div className="mt-14 text-center">
          <a
            href="https://github.com/Mahima0529?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-sm font-medium text-slate-300 hover:text-white border border-slate-800 transition-colors"
          >
            <Github className="w-4 h-4 text-sky-400" />
            <span>View All 25+ Public Repositories on GitHub</span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </a>
        </div>

      </div>
    </section>
  );
};
