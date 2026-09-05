import React from 'react';
import { useGitHubData } from '../../hooks/useGitHubData';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Star, ExternalLink, GitBranch, Code } from 'lucide-react';

export const GitHubStats: React.FC = () => {
  const { profile, repos, isLive } = useGitHubData('Mahima0529');

  // Exclude non-software CAD projects, profile readme, and duplicate meta repos
  const excludedNames = new Set([
    'mahima0529',
    'my_portfolio',
    'injection-mould-rd',
    'connecting_rod_assembly',
    'portfolio',
    'basicapp',
    'basic_app',
    'blood--bank',
  ]);

  const displayRepos = repos.filter(
    (r) =>
      r.name &&
      !excludedNames.has(r.name.toLowerCase()) &&
      r.language !== null &&
      r.language !== 'null'
  ).slice(0, 6);

  return (
    <section id="github" className="py-24 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-mono uppercase tracking-widest text-sky-400">
            Open Source &amp; Code Activity
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            GitHub Activity &amp; Highlights
          </h2>
          <div className="w-12 h-1 bg-sky-500 mx-auto rounded-full"></div>
          <p className="text-sm text-slate-400">
            Live public repositories, contributions, and verified open-source activity.
          </p>
        </div>

        {/* Profile Card & Stats Bar */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="p-6 sm:p-8 bg-slate-900/80 border-slate-800">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              
              <div className="flex items-center gap-4 text-center sm:text-left">
                <img
                  src={profile.avatar_url}
                  alt={profile.login}
                  className="w-16 h-16 rounded-full border-2 border-sky-400/40 shadow-md shadow-sky-500/10 object-cover"
                />
                <div>
                  <div className="flex items-center gap-2 justify-center sm:justify-start">
                    <h3 className="text-lg font-bold text-white">
                      {profile.login}
                    </h3>
                    <Badge variant={isLive ? 'emerald' : 'primary'} size="sm">
                      {isLive ? 'Live Sync' : 'Verified API'}
                    </Badge>
                  </div>
                  <p className="text-xs font-mono text-slate-400 mt-0.5">
                    github.com/{profile.login}
                  </p>
                  <p className="text-xs text-slate-300 mt-1 max-w-md">
                    {profile.bio || 'Full-Stack & Backend Developer | IIIT Bhagalpur'}
                  </p>
                </div>
              </div>

              {/* Stats Counters */}
              <div className="flex items-center gap-6 border-t sm:border-t-0 sm:border-l border-slate-800 pt-4 sm:pt-0 sm:pl-8 text-center">
                <div>
                  <span className="text-2xl font-bold text-white block">
                    {profile.public_repos}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    Public Repos
                  </span>
                </div>
                <div>
                  <span className="text-2xl font-bold text-sky-400 block">
                    250+
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    DSA Solved
                  </span>
                </div>
                <div>
                  <Button
                    href={profile.html_url}
                    external
                    variant="outline"
                    size="sm"
                    icon={<ExternalLink className="w-3.5 h-3.5" />}
                  >
                    View GitHub
                  </Button>
                </div>
              </div>

            </div>
          </Card>
        </div>

        {/* Top Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayRepos.map((repo) => (
            <Card
              key={repo.id}
              className="p-5 flex flex-col justify-between bg-slate-900/60 border-slate-800/80 hover:border-slate-700 transition-all"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-white hover:text-sky-400 transition-colors flex items-center gap-1.5 break-all"
                  >
                    <GitBranch className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>{repo.name}</span>
                  </a>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                </div>

                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                  {repo.description || 'Public engineering repository and system implementation.'}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1 text-slate-300">
                  <Code className="w-3.5 h-3.5 text-sky-400" />
                  {repo.language || 'Code'}
                </span>

                <div className="flex items-center gap-3">
                  {repo.stargazers_count > 0 && (
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-400" />
                      {repo.stargazers_count}
                    </span>
                  )}
                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-400 hover:underline"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
