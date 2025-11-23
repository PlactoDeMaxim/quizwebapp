import React from 'react';
import { cn } from '../../lib/utils';

const badgeVariants = {
  variant: {
    default: 'bg-slate-900 text-white',
    outline: 'border border-slate-200 bg-transparent',
  },
};

export function Badge({ className, variant = 'default', children, ...props }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors',
        badgeVariants.variant[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

