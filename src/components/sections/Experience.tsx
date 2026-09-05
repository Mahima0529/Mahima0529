import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Calendar, MapPin, ExternalLink, CheckCircle2, TrendingUp, ShieldAlert } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-mono uppercase tracking-widest text-sky-400">
            Work Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Engineering Experience
          </h2>
          <div className="w-12 h-1 bg-sky-500 mx-auto rounded-full"></div>
          <p className="text-sm text-slate-400">
            Practical software engineering impact, bot mitigation, and production web systems.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {portfolioData.experience.map((exp, idx) => (
            <Card key={idx} className="p-6 sm:p-8 border-l-4 border-l-sky-500 relative">
              
              {/* Top Row: Title, Company, Date, Location */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-800/80">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <Badge variant="primary" size="sm">
                      {exp.type}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-2 mt-1">
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-semibold text-sky-400 hover:underline inline-flex items-center gap-1"
                      >
                        <span>{exp.company}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="text-base font-semibold text-sky-400">{exp.company}</span>
                    )}
                    <span className="text-slate-600">•</span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-800/60 px-3 py-1.5 rounded-lg border border-slate-700/60 self-start sm:self-center">
                  <Calendar className="w-3.5 h-3.5 text-sky-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Verified Metrics Strip */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
                <div className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                  <div className="p-2 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <ShieldAlert className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">15% Spam Reduction</div>
                    <div className="text-xs text-slate-400">Heuristic Bot Mitigation &amp; Verification</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                  <div className="p-2 rounded-md bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">~20% Operational Efficiency</div>
                    <div className="text-xs text-slate-400">Production Client MERN E-Commerce Platform</div>
                  </div>
                </div>
              </div>

              {/* Responsibilities list */}
              <div className="space-y-3 mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Key Technical Contributions:
                </h4>
                <ul className="space-y-2.5">
                  {exp.highlights.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Applied */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2.5">
                  Technologies &amp; Tools:
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 text-xs font-mono rounded bg-slate-800/80 text-slate-300 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
