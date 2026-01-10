import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';
import type { Level } from '../../types';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info' | 'level';
  level?: Level;
  size?: 'sm' | 'md' | 'lg';
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', level, size = 'md', children, ...props }, ref) => {
    const sizeClass = size === 'sm' ? 'badge-sm' : size === 'lg' ? 'badge-lg' : '';

    let variantClass = '';
    if (variant === 'level' && level) {
      variantClass = `badge-${level}`;
    } else {
      variantClass = `badge-${variant}`;
    }

    return (
      <span
        ref={ref}
        className={cn('badge', variantClass, sizeClass, className)}
        {...props}
      >
        {children || (level && level.toUpperCase())}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export { Badge };
