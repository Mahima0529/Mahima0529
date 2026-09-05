import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { ExternalLink, Trophy, Flame, CheckCircle2, Award } from 'lucide-react';

export const DSA: React.FC = () => {
  return (
    <section id="dsa" className="py-24 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-mono uppercase tracking-widest text-sky-400">
            Problem Solving &amp; Algorithms
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Data Structures &amp; Competitive Programming
          </h2>
          <div className="w-12 h-1 bg-sky-500 mx-auto rounded-full"></div>
          <p className="text-sm text-slate-400">
            Algorithmic efficiency, complexity analysis, and competitive coding milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LeetCode & Competitive Card */}
          <div className="lg:col-span-7">
            <Card className="p-6 sm:p-8 h-full flex flex-col justify-between border-slate-800 bg-slate-900/80">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      <Flame className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">LeetCode Profile</h3>
                      <p className="text-xs font-mono text-slate-400">@mahima__patel</p>
                    </div>
                  </div>

                  <Badge variant="amber" size="md">
                    250+ Problems Solved
                  </Badge>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Regularly solving algorithmic challenges focusing on time and space complexity optimizations. Core focus on dynamic programming, graph algorithms (BFS/DFS, Dijkstra), monotonic stacks, and sliding-window techniques.
                </p>

                {/* Algorithmic Topics Grid */}
                <div className="space-y-3 mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Core Algorithmic Focus Areas:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {portfolioData.dsa.topics.map((topic, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-xs font-mono rounded bg-slate-800/80 text-slate-300 border border-slate-700/60"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">
                  Verified LeetCode &amp; CodeChef
                </span>
                <Button
                  href={portfolioData.personal.leetcode}
                  external
                  variant="outline"
                  size="sm"
                  icon={<ExternalLink className="w-3.5 h-3.5" />}
                >
                  View LeetCode Profile
                </Button>
              </div>

            </Card>
          </div>

          {/* Nationwide Achievement: Arena Code2Career */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            <Card className="p-6 bg-slate-900/80 border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Arena Code2Career</h3>
                    <Badge variant="emerald" size="sm">
                      Rank 35 / 2,500+ Coders
                    </Badge>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Secured 35th rank nationwide in the highly competitive Arena Code2Career coding round organized by Let's Code Community, outperforming 2,500+ engineering participants.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified National Contest Rank</span>
              </div>
            </Card>

            <Card className="p-6 bg-slate-900/80 border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">GATE (CS) 2026</h3>
                    <Badge variant="primary" size="sm">
                      Qualified Exam
                    </Badge>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Qualified the Graduate Aptitude Test in Engineering for Computer Science, demonstrating theoretical mastery across Algorithms, Operating Systems, Database Systems, and Computer Networks.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 text-xs font-mono text-sky-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>National Level Qualification</span>
              </div>
            </Card>

          </div>

        </div>

      </div>
    </section>
  );
};
