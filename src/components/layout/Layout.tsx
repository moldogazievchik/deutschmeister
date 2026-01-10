import { useState, type ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="layout">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="layout-backdrop lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`layout-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="lg:ml-64">
        <Navbar
          showMenuButton
          onMenuClick={() => setSidebarOpen(true)}
        />
        <main className="layout-main">{children}</main>
      </div>
    </div>
  );
}
