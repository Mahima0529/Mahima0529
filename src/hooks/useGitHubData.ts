import { useState, useEffect } from 'react';

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

export interface GitHubProfile {
  login: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  bio: string | null;
}

const FALLBACK_PROFILE: GitHubProfile = {
  login: 'Mahima0529',
  avatar_url: 'https://avatars.githubusercontent.com/u/182621739?v=4',
  html_url: 'https://github.com/Mahima0529',
  public_repos: 25,
  followers: 2,
  following: 3,
  bio: 'Final-year B.Tech student at IIIT Bhagalpur | Full-Stack & Backend Developer | Node.js, Express.js, React, MongoDB, SQL, Redis | 250+ LeetCode problems | GATE CS 2026',
};

const FALLBACK_REPOS: GitHubRepo[] = [
  {
    id: 1,
    name: 'API-Abuse-Detection-Platform',
    description: 'Microservices-based API security platform to detect API abuse, rate-limit violations, and malicious traffic in real time.',
    html_url: 'https://github.com/Mahima0529/API-Abuse-Detection-Platform',
    homepage: 'https://frontend-two-roan-71.vercel.app',
    language: 'JavaScript',
    stargazers_count: 2,
    forks_count: 0,
    updated_at: '2026-09-03T09:18:10Z',
  },
  {
    id: 2,
    name: 'MERN_AUCTION_PLATFORM_2.0',
    description: 'Real-time online auction engine with automated bidding lifecycles, cron settlements, and role-based permissions.',
    html_url: 'https://github.com/Mahima0529/MERN_AUCTION_PLATFORM_2.0',
    homepage: 'https://mern-auction-platform-2-0-u4k1.vercel.app/',
    language: 'JavaScript',
    stargazers_count: 1,
    forks_count: 0,
    updated_at: '2026-08-30T06:41:44Z',
  },
  {
    id: 3,
    name: 'Next-Gen-Learning-Dasboard',
    description: 'Dark-mode, animated student dashboard built with Next.js App Router, Supabase, Tailwind CSS, and Framer Motion.',
    html_url: 'https://github.com/Mahima0529/Next-Gen-Learning-Dasboard',
    homepage: 'https://next-gen-learning-dasboard.vercel.app',
    language: 'TypeScript',
    stargazers_count: 1,
    forks_count: 0,
    updated_at: '2026-06-19T20:30:39Z',
  },
  {
    id: 4,
    name: 'CarrerLink',
    description: 'Full-stack job portal with automated application tracking, dynamic filtering, and role-based accounts.',
    html_url: 'https://github.com/Mahima0529/CarrerLink',
    homepage: 'https://carrer-link.vercel.app',
    language: 'JavaScript',
    stargazers_count: 1,
    forks_count: 0,
    updated_at: '2026-04-17T04:00:10Z',
  },
  {
    id: 5,
    name: 'Finance-Dashboard',
    description: 'Responsive personal finance dashboard built with React 18, Chart.js visualizations, and role-based view switching.',
    html_url: 'https://github.com/Mahima0529/Finance-Dashboard',
    homepage: 'https://finance-dashboard-swart-omega.vercel.app',
    language: 'JavaScript',
    stargazers_count: 1,
    forks_count: 0,
    updated_at: '2026-04-05T07:07:51Z',
  }
];

export function useGitHubData(username: string = 'Mahima0529') {
  const [profile, setProfile] = useState<GitHubProfile>(FALLBACK_PROFILE);
  const [repos, setRepos] = useState<GitHubRepo[]>(FALLBACK_REPOS);
  const [loading, setLoading] = useState<boolean>(true);
  const [isLive, setIsLive] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`, {
            headers: { Accept: 'application/vnd.github.v3+json' },
          }),
          fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=50`, {
            headers: { Accept: 'application/vnd.github.v3+json' },
          }),
        ]);

        if (!isMounted) return;

        if (profileRes.ok) {
          const profileData = await profileRes.json();
          setProfile({
            login: profileData.login,
            avatar_url: profileData.avatar_url,
            html_url: profileData.html_url,
            public_repos: profileData.public_repos,
            followers: profileData.followers,
            following: profileData.following,
            bio: profileData.bio,
          });
          setIsLive(true);
        }

        if (reposRes.ok) {
          const reposData = await reposRes.json();
          if (Array.isArray(reposData) && reposData.length > 0) {
            const mappedRepos: GitHubRepo[] = reposData.map((r: any) => ({
              id: r.id,
              name: r.name,
              description: r.description,
              html_url: r.html_url,
              homepage: r.homepage,
              language: r.language,
              stargazers_count: r.stargazers_count,
              forks_count: r.forks_count,
              updated_at: r.updated_at,
            }));
            setRepos(mappedRepos);
          }
        }
      } catch (err) {
        // Silently fall back to cached verified values
        console.warn('GitHub API rate limited or unreachable, using verified data fallback.', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [username]);

  return { profile, repos, loading, isLive };
}
