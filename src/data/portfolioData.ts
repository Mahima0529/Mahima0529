export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Microservices' | 'Full-Stack' | 'Frontend & Analytics';
  type: string;
  description: string;
  highlights: string[];
  technologies: string[];
  githubUrl: string;
  backendGithubUrl?: string;
  liveUrl?: string;
  metricsBadge?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  company: string;
  companyUrl?: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level?: string; highlight?: boolean }[];
}

export interface Achievement {
  title: string;
  organization: string;
  date?: string;
  badge: string;
  description: string;
  icon: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  cgpa: string;
  location: string;
  coursework: string[];
}

export const portfolioData = {
  personal: {
    name: 'Mahima Patel',
    role: 'Software Engineer • Frontend, Backend & Full-Stack Developer',
    headline: 'Building scalable microservices, distributed architectures, and modern full-stack web applications.',
    bio: 'Software engineering undergraduate at IIIT Bhagalpur (8.68 CGPA) and GATE (CS) 2026 qualifier. Passionate about Full-Stack, Backend, and Frontend engineering — from distributed event streaming with Apache Kafka and in-memory Redis caching to responsive React/Next.js interfaces. Experienced in production systems, bot mitigation, and secure API architectures.',
    email: 'mahimaptel@gmail.com',
    phone: '+91 8602674248',
    location: 'IIIT Bhagalpur, India',
    github: 'https://github.com/Mahima0529',
    linkedin: 'https://www.linkedin.com/in/mahima-patel-07b797279/',
    leetcode: 'https://leetcode.com/u/mahima__patel/',
    resumeUrl: '/resume.pdf',
    status: 'Available for Frontend, Backend, Full-Stack & SDE Roles',
  },

  stats: [
    { label: 'Academic CGPA', value: '8.68 / 10', detail: 'IIIT Bhagalpur' },
    { label: 'Competitive Exam', value: 'GATE CS 2026', detail: 'Qualified' },
    { label: 'DSA Solved', value: '250+', detail: 'LeetCode & CodeChef' },
    { label: 'National Rank', value: 'AIR 35', detail: 'Among 2,500+ Coders' },
  ],

  experience: [
    {
      company: 'Itjobxs',
      companyUrl: 'https://itjobxs.com',
      role: 'Software Engineering Intern',
      period: 'January 2026 – June 2026',
      location: 'Remote, India',
      type: 'Internship',
      description: 'Engineered web infrastructure, platform security modules, and e-commerce client solutions.',
      highlights: [
        'Contributed to the design and development of fully responsive, fluid web interfaces for dedicated sections of itjobxs.com, optimizing mobile and desktop UX.',
        'Engineered bot mitigation heuristics and user verification mechanisms to detect and eliminate malicious bots, reducing spam registrations by 15%.',
        'Architected an end-to-end MERN E-Commerce solution for an ITJOBXS client, streamlining order lifecycle and CRUD workflows to boost operational management efficiency by ~20%.'
      ],
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Authentication', 'REST APIs', 'Bot Mitigation', 'Responsive UI']
    }
  ] as ExperienceItem[],

  projects: [
    {
      id: 'api-abuse-detection',
      title: 'API Abuse Detection Platform',
      subtitle: 'Real-Time Security & Telemetry Streaming Engine',
      category: 'Microservices',
      type: 'Distributed Microservices System',
      description: 'A microservices-based security platform that monitors live API traffic, enforces sliding-window rate limiting, computes dynamic behavioral risk scores, and streams telemetry through Apache Kafka.',
      highlights: [
        'Engineered Redis-based sliding-window rate limiting to detect abnormal traffic bursts, brute-force requests, and credential abuse.',
        'Formulated dynamic behavioral risk scoring algorithms to automatically identify suspicious entities and temporarily block high-risk IPs.',
        'Developed a real-time Security Analytics Dashboard tracking request throughput (RPM), failed authentication attempts, and Kafka-streamed audit telemetry.',
        'Orchestrated multi-service architecture containerized with Docker Compose for repeatable, isolated deployment.'
      ],
      technologies: ['Node.js', 'Express.js', 'React', 'Redis', 'Apache Kafka', 'Prisma', 'SQL', 'Docker', 'JWT'],
      githubUrl: 'https://github.com/Mahima0529/API-Abuse-Detection-Platform',
      liveUrl: 'https://frontend-two-roan-71.vercel.app',
      metricsBadge: 'Kafka Streaming • Redis Rate Limiting • Auto IP Blocking',
      featured: true
    },
    {
      id: 'primebid-auction',
      title: 'PrimeBid – Online Auction Engine',
      subtitle: 'Real-Time Multi-Role Auction & Settlement Engine',
      category: 'Full-Stack',
      type: 'Production Full-Stack Platform',
      description: 'An automated, transparent online auction system featuring 5+ specialized modules for live bidding, leaderboard tracking, automated cron lifecycle resolution, and commission settlement.',
      highlights: [
        'Eliminated unstructured campus hostel WhatsApp transactions with an automated, rule-governed bidding portal.',
        'Engineered role-based access control (Auctioneer, Bidder, Super Admin) with comprehensive permission boundaries.',
        'Implemented strict server-side bid validation, JWT & Bcrypt authentication, and automated cron jobs to finalize auctions and settle commissions automatically.'
      ],
      technologies: ['React.js', 'Redux Toolkit', 'Node.js', 'Express.js', 'MongoDB Atlas', 'JWT', 'Bcrypt', 'Cron Jobs', 'REST APIs'],
      githubUrl: 'https://github.com/Mahima0529/MERN_AUCTION_PLATFORM_2.0',
      backendGithubUrl: 'https://github.com/Mahima0529/mern_auction_backend',
      liveUrl: 'https://mern-auction-platform-2-0-u4k1.vercel.app/',
      metricsBadge: '5+ Core Modules • Automated Cron Engine • Multi-Role RBAC',
      featured: true
    },
    {
      id: 'next-gen-learning-dashboard',
      title: 'Next-Gen Learning Dashboard',
      subtitle: 'Animated Dark-Mode Student Analytics Platform',
      category: 'Frontend & Analytics',
      type: 'Modern Server-Rendered Web App',
      description: 'A responsive student analytics portal engineered with Next.js App Router, Supabase real-time backend, and fluid micro-interactions.',
      highlights: [
        'Utilized Next.js App Router Server Components for optimized initial load performance and SEO efficiency.',
        'Integrated course progress metrics, interactive telemetry charts, and Supabase-backed persistent storage.',
        'Crafted accessible animations with Framer Motion, spring hover states, and smooth layout transitions.'
      ],
      technologies: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Framer Motion', 'Lucide React'],
      githubUrl: 'https://github.com/Mahima0529/Next-Gen-Learning-Dasboard',
      liveUrl: 'https://next-gen-learning-dasboard.vercel.app',
      metricsBadge: 'Next.js App Router • Supabase Realtime • Framer Motion',
      featured: true
    },
    {
      id: 'careerlink',
      title: 'CareerLink – Job Portal with Automation',
      subtitle: 'Smart Recruitment & Candidate Pipeline Portal',
      category: 'Full-Stack',
      type: 'Full-Stack Recruitment System',
      description: 'A recruitment platform streamlining candidate job discovery, role-separated applicant/employer accounts, and automated application tracking.',
      highlights: [
        'Engineered dynamic filtering pipelines, resume management, and automated status alerts for candidate applications.',
        'Built secure RESTful endpoints protected with JWT role validation and structured MongoDB schemas.'
      ],
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs', 'JWT', 'Tailwind CSS'],
      githubUrl: 'https://github.com/Mahima0529/CarrerLink',
      liveUrl: 'https://carrer-link.vercel.app',
      metricsBadge: 'Role-Based Portals • Automated Workflow • Dynamic Filters',
      featured: false
    },
    {
      id: 'fintrack-dashboard',
      title: 'Fintrack – Personal Finance Dashboard',
      subtitle: 'Interactive Financial Analytics & Transaction Management',
      category: 'Frontend & Analytics',
      type: 'Financial Analytics Application',
      description: 'A responsive personal finance dashboard allowing users to track cash flow, visualize spending breakdowns with Chart.js, and organize transactions.',
      highlights: [
        'Interactive spending patterns visualization with responsive chart controls.',
        'Transaction management with filtering, sorting, and simulated multi-role user switching.'
      ],
      technologies: ['React 18', 'Chart.js', 'Tailwind CSS', 'JavaScript', 'Responsive UX'],
      githubUrl: 'https://github.com/Mahima0529/Finance-Dashboard',
      liveUrl: 'https://finance-dashboard-swart-omega.vercel.app',
      metricsBadge: 'Visual Spending Analytics • Role Switching • Clean UX',
      featured: false
    }
  ] as Project[],

  skillCategories: [
    {
      title: 'Languages',
      icon: 'Code2',
      skills: [
        { name: 'C++', highlight: true },
        { name: 'C', highlight: false },
        { name: 'JavaScript (ES6+)', highlight: true },
        { name: 'TypeScript', highlight: true }
      ]
    },
    {
      title: 'Backend & Microservices',
      icon: 'Server',
      skills: [
        { name: 'Node.js', highlight: true },
        { name: 'Express.js', highlight: true },
        { name: 'RESTful APIs', highlight: true },
        { name: 'Microservices Architecture', highlight: true },
        { name: 'JWT & Session Auth', highlight: true }
      ]
    },
    {
      title: 'Caching & Messaging',
      icon: 'Cpu',
      skills: [
        { name: 'Redis', highlight: true },
        { name: 'Apache Kafka', highlight: true }
      ]
    },
    {
      title: 'Databases & ORM',
      icon: 'Database',
      skills: [
        { name: 'MongoDB & Atlas', highlight: true },
        { name: 'PostgreSQL', highlight: true },
        { name: 'SQL', highlight: true },
        { name: 'Prisma ORM', highlight: true }
      ]
    },
    {
      title: 'Frontend Development',
      icon: 'Layout',
      skills: [
        { name: 'React.js', highlight: true },
        { name: 'Next.js', highlight: true },
        { name: 'Redux Toolkit', highlight: true },
        { name: 'Tailwind CSS', highlight: true },
        { name: 'HTML5 & CSS3', highlight: false }
      ]
    },
    {
      title: 'Cloud, DevOps & Tools',
      icon: 'Wrench',
      skills: [
        { name: 'Docker & Compose', highlight: true },
        { name: 'Git & GitHub', highlight: true },
        { name: 'Linux', highlight: true },
        { name: 'Postman', highlight: false },
        { name: 'Vercel & Render', highlight: false },
        { name: 'Monaco Editor', highlight: false }
      ]
    },
    {
      title: 'Core Computer Science',
      icon: 'Binary',
      skills: [
        { name: 'Data Structures & Algorithms', highlight: true },
        { name: 'Operating Systems', highlight: true },
        { name: 'DBMS Fundamentals', highlight: true },
        { name: 'Computer Networks', highlight: true },
        { name: 'Object-Oriented Programming (OOP)', highlight: true }
      ]
    }
  ] as SkillCategory[],

  dsa: {
    headline: 'Data Structures & Algorithmic Problem Solving',
    solvedCount: '250+',
    platforms: [
      {
        name: 'LeetCode',
        handle: 'mahima__patel',
        url: 'https://leetcode.com/u/mahima__patel/',
        stats: '250+ Problems Solved (Arrays, DP, Graphs, Trees, Strings)',
        highlight: 'Continuous problem solver with strong algorithmic intuition'
      },
      {
        name: 'Arena Code2Career',
        handle: 'Mahima Patel',
        url: 'https://leetcode.com/u/mahima__patel/',
        stats: 'Rank 35 / 2500+ Participants',
        highlight: 'Nationwide Coding Competition organized by Let’s Code Community'
      }
    ],
    topics: ['Dynamic Programming', 'Graph Theory', 'Trees & Tries', 'Sliding Window', 'Two Pointers', 'Binary Search', 'Hash Tables']
  },

  education: {
    institution: 'Indian Institute of Information Technology, Bhagalpur',
    shortName: 'IIIT Bhagalpur',
    degree: 'B.Tech in Mechatronics and Automation Engineering',
    period: '2023 – 2027',
    cgpa: '8.68 / 10',
    location: 'Bhagalpur, Bihar, India',
    coursework: [
      'Data Structures and Algorithms',
      'Object-Oriented Programming',
      'Database Management Systems',
      'Operating Systems',
      'Computer Networks'
    ]
  } as Education,

  achievements: [
    {
      title: 'Qualified GATE (CS) 2026',
      organization: 'GATE Committee / Ministry of Education, India',
      badge: 'National Gate Qualifier',
      description: 'Validated deep theoretical and applied mastery across core Computer Science subjects including Algorithms, OS, DBMS, Computer Networks, and Theory of Computation.',
      icon: 'Award'
    },
    {
      title: 'AIR 35 / 2,500+ Participants',
      organization: 'Let’s Code Community — Arena Code2Career',
      badge: 'National Rank',
      description: 'Ranked 35th nationwide out of 2,500+ competitive programmers in the Arena Code2Career national coding competition.',
      icon: 'Trophy'
    },
    {
      title: 'Certified ServiceNow Professional (CSA & CAD)',
      organization: 'ServiceNow',
      badge: 'Dual Certified',
      description: 'Officially certified as both Certified System Administrator (CSA) and Certified Application Developer (CAD), showcasing expertise in enterprise workflow architecture.',
      icon: 'CheckCircle'
    },
    {
      title: 'Smart India Hackathon (SIH 2023)',
      organization: 'Ministry of Education / AICTE',
      badge: 'Top 14 Institute Team',
      description: 'Ranked 14th out of 50 competitive engineering teams in the internal hackathon screening round for SIH-2023.',
      icon: 'Zap'
    }
  ] as Achievement[]
};
