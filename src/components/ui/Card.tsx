import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: 'cyan' | 'emerald' | 'none';
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
  glow = 'none',
}) => {
  const glowStyles = {
    cyan: 'hover:border-sky-500/50 hover:shadow-lg hover:shadow-sky-500/10',
    emerald: 'hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10',
    none: '',
  };

  const hoverStyles = hover
    ? 'transition-all duration-300 hover:-translate-y-1 hover:border-slate-600/80'
    : '';

  return (
    <div
      className={`bg-slate-900/60 backdrop-blur-md border border-slate-800/80 rounded-xl p-6 relative overflow-hidden ${hoverStyles} ${glowStyles[glow]} ${className}`}
    >
      {children}
    </div>
  );
};
