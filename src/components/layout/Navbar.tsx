import { Search, Menu } from 'lucide-react';
import { useActivityStore } from '../../store/activityStore';
import { useUserStore } from '../../store/userStore';
import { formatMinutes } from '../../lib/utils';

interface NavbarProps {
  onMenuClick?: () => void;
  showMenuButton?: boolean;
}

export function Navbar({ onMenuClick, showMenuButton = false }: NavbarProps) {
  const { dailyGoalMinutes } = useUserStore();
  const getTodayActivity = useActivityStore((state) => state.getTodayActivity);
  const todayActivity = getTodayActivity();

  const goalProgress = Math.min(100, (todayActivity.minutesStudied / dailyGoalMinutes) * 100);

  return (
    <header className="navbar">
      <div className="navbar-left">
        {showMenuButton && (
          <button
            onClick={onMenuClick}
            className="navbar-icon-btn mobile-menu-btn"
          >
            <Menu style={{ width: '1.25rem', height: '1.25rem', color: 'var(--gray-600)' }} />
          </button>
        )}

        {/* Search - hidden on mobile */}
        <div className="navbar-search" style={{ display: 'none' }}>
          <Search className="navbar-search-icon" />
          <input
            type="text"
            placeholder="Поиск слов, тем..."
            className="navbar-search-input"
          />
        </div>
      </div>

      <div className="navbar-right">
        {/* Daily Progress */}
        <div className="flex items-center gap-3" style={{ padding: 'var(--spacing-2) var(--spacing-4)', backgroundColor: 'var(--gray-50)', borderRadius: 'var(--radius-lg)' }}>
          <div style={{ textAlign: 'right' }}>
            <p className="text-xs text-gray-500">Сегодня</p>
            <p className="text-sm font-medium text-gray-900">
              {formatMinutes(todayActivity.minutesStudied)} / {formatMinutes(dailyGoalMinutes)}
            </p>
          </div>
          <div style={{ width: '6rem', height: '0.5rem', backgroundColor: 'var(--gray-200)', borderRadius: '9999px', overflow: 'hidden' }}>
            <div
              style={{
                height: '100%',
                backgroundColor: 'var(--primary-500)',
                borderRadius: '9999px',
                transition: 'all 500ms',
                width: `${goalProgress}%`
              }}
            />
          </div>
        </div>

      </div>
    </header>
  );
}
