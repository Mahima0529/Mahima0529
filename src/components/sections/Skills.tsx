import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Card } from '../ui/Card';
import { Code2, Server, Cpu, Database, Layout, Wrench, Binary } from 'lucide-react';

export const Skills: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-sky-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-emerald-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-indigo-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-amber-400" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-cyan-400" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-rose-400" />;
      case 'Binary':
        return <Binary className="w-5 h-5 text-purple-400" />;
      default:
        return <Code2 className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-mono uppercase tracking-widest text-sky-400">
            Technical Proficiency
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills &amp; Technical Capabilities
          </h2>
          <div className="w-12 h-1 bg-sky-500 mx-auto rounded-full"></div>
          <p className="text-sm text-slate-400">
            Categorized technical stack verified from real production repositories, coursework, and systems projects.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.skillCategories.map((cat, idx) => (
            <Card
              key={idx}
              className="p-6 bg-slate-900/60 border-slate-800/80 hover:border-slate-700/80 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-800/80">
                  <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/50">
                    {getIcon(cat.icon)}
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-colors ${
                        skill.highlight
                          ? 'bg-sky-500/10 text-sky-300 border border-sky-500/30 font-medium'
                          : 'bg-slate-800/60 text-slate-300 border border-slate-700/50 hover:border-slate-600'
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-900 text-[11px] text-slate-500 font-mono">
                {cat.skills.length} verified technologies
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
