import { type ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  glow?: boolean;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, glow = false, className = '', hover = true }: GlassCardProps) {
  return (
    <div
      className={`glass rounded-2xl p-6 md:p-8 transition-all duration-500 ${
        hover ? 'hover:scale-[1.02] hover:border-lime/30 hover:shadow-glow-lime' : ''
      } ${glow ? 'border-lime/30 shadow-glow-lime' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
