import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { GraduationCap, CheckCircle, Calendar, MapPin, BookOpen } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-mono uppercase tracking-widest text-sky-400">
            Academics &amp; Credentials
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education &amp; Certifications
          </h2>
          <div className="w-12 h-1 bg-sky-500 mx-auto rounded-full"></div>
          <p className="text-sm text-slate-400">
            Formal university education, national qualifications, and professional platform credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Education Card */}
          <div className="lg:col-span-6">
            <Card className="p-6 sm:p-8 border-sky-500/30 bg-slate-900/80">
              <div className="flex items-center gap-3.5 mb-6">
                <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <Badge variant="primary" size="sm">
                    Undergraduate Degree
                  </Badge>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {portfolioData.education.institution}
                  </h3>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <div className="text-base font-semibold text-sky-300">
                    {portfolioData.education.degree}
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400 mt-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {portfolioData.education.period}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {portfolioData.education.location}
                    </span>
                  </div>
                </div>

                {/* CGPA Box */}
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                      Cumulative GPA
                    </span>
                    <span className="text-2xl font-extrabold text-white">
                      {portfolioData.education.cgpa}
                    </span>
                  </div>
                  <Badge variant="emerald" size="md">
                    First Class Distinction
                  </Badge>
                </div>
              </div>

              {/* Coursework */}
              <div className="pt-4 border-t border-slate-800">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-sky-400" />
                  Key Coursework &amp; Core Fundamentals:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.education.coursework.map((course, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs font-mono rounded bg-slate-800/80 text-slate-300 border border-slate-700/60"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

            </Card>
          </div>

          {/* Certifications & Key Achievements */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-2">
              Verified Certifications &amp; Honors:
            </h3>

            {portfolioData.achievements.map((ach, idx) => (
              <Card key={idx} className="p-5 bg-slate-900/70 border-slate-800/90 hover:border-slate-700">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-sky-400 shrink-0">
                    <CheckCircle className="w-5 h-5 text-sky-400" />
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-sm font-bold text-white">{ach.title}</h4>
                      <Badge variant="primary" size="sm">
                        {ach.badge}
                      </Badge>
                    </div>
                    <p className="text-xs font-mono text-sky-400/90">{ach.organization}</p>
                    <p className="text-xs text-slate-400 leading-relaxed pt-1">{ach.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
