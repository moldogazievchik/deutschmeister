import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  GraduationCap,
  BookOpen,
  BookType,
  Dumbbell,
  FileCheck,
  Building2,
  Settings,
  Flame,
} from 'lucide-react';
import { useUserStore } from '../../store/userStore';
import { Badge } from '../ui/Badge';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Уровни', href: '/levels', icon: GraduationCap },
  { name: 'Словарь', href: '/vocabulary', icon: BookOpen },
  { name: 'Грамматика', href: '/grammar', icon: BookType },
  { name: 'Тренировка', href: '/practice', icon: Dumbbell },
  { name: 'Экзамены', href: '/exams', icon: FileCheck },
  { name: 'Академический', href: '/academic', icon: Building2 },
];

export function Sidebar() {
  const { name, currentLevel, streak } = useUserStore();

  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="sidebar-header">
        <NavLink to="/dashboard" className="sidebar-logo">
          <div className="sidebar-logo-icon" />
          <div>
            <h1 className="sidebar-logo-text">DeutschMeister</h1>
            <p className="text-xs text-gray-500">Немецкий для магистратуры</p>
          </div>
        </NavLink>
      </div>

      {/* User Info */}
      <div style={{ padding: 'var(--spacing-4)', borderBottom: '1px solid var(--gray-100)' }}>
        <div className="flex items-center gap-3">
          <div
            style={{
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '50%',
              backgroundColor: 'var(--primary-100)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <span style={{ color: 'var(--primary-600)', fontWeight: 600 }}>
              {name ? name[0].toUpperCase() : 'U'}
            </span>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p className="font-medium text-gray-900 truncate">{name || 'Студент'}</p>
            <div className="flex items-center gap-2">
              <Badge variant="level" level={currentLevel} size="sm" />
              {streak > 0 && (
                <span className="flex items-center text-sm" style={{ color: 'var(--orange-500)' }}>
                  <Flame style={{ width: '1rem', height: '1rem' }} className="animate-flame" />
                  {streak}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
          >
            <item.icon className="sidebar-link-icon" />
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* Settings */}
      <div className="sidebar-footer">
        <NavLink
          to="/settings"
          className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
        >
          <Settings className="sidebar-link-icon" />
          Настройки
        </NavLink>
      </div>
    </aside>
  );
}
