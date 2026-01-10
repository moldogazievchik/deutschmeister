import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'success' | 'warning' | 'danger';
  showLabel?: boolean;
  animated?: boolean;
}

const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value, max = 100, size = 'md', color = 'primary', showLabel = false, animated = true, ...props }, ref) => {
    const percentage = Math.min(100, Math.max(0, (value / max) * 100));
    const sizeClass = size === 'sm' ? 'progress-sm' : size === 'lg' ? 'progress-lg' : '';
    const colorClass = `progress-bar-${color}`;

    return (
      <div ref={ref} className={className} style={{ width: '100%' }} {...props}>
        {showLabel && (
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
            <span className="text-sm font-medium text-gray-700">{Math.round(percentage)}%</span>
          </div>
        )}
        <div className={cn('progress', sizeClass)}>
          <div
            className={cn('progress-bar', colorClass, animated ? 'animate-progress' : '')}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    );
  }
);

Progress.displayName = 'Progress';

export { Progress };
