import { Link, useLocation } from 'react-router-dom';
import { Home, FileText, BookOpen, Calendar, Bell, Settings, LogOut, ClipboardList } from 'lucide-react';
import { cn } from '@/lib/utils';

const menuItems = [
  { icon: Home, label: 'Dashboard', href: '/dashboard' },
  { icon: ClipboardList, label: 'Form Pendaftaran', href: '/app/form-pendaftaran' },
  { icon: FileText, label: 'Status Pendaftaran', href: '/app/status' },
  { icon: BookOpen, label: 'Akademik', href: '/app/akademik' },
  { icon: Calendar, label: 'Jadwal', href: '/app/jadwal' },
  { icon: Bell, label: 'Notifikasi', href: '/app/notifikasi' },
  { icon: Settings, label: 'Pengaturan', href: '/app/pengaturan' },
];

interface AppSidebarProps {
  collapsed: boolean;
  onClose?: () => void;
}

const AppSidebar = ({ collapsed, onClose }: AppSidebarProps) => {
  const location = useLocation();

  return (
    <aside
      className={cn(
        'h-full bg-sidebar border-r border-sidebar-border flex flex-col transition-all duration-300',
        collapsed ? 'w-16' : 'w-60'
      )}
    >
      {/* Logo */}
      <div className="h-14 flex items-center px-4 border-b border-sidebar-border shrink-0">
        <Link to="/" className="flex items-center gap-2.5" onClick={onClose}>
          <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center font-arabic text-primary-foreground font-bold text-sm shrink-0">
            ر
          </div>
          {!collapsed && (
            <span className="text-sm font-bold tracking-tight text-sidebar-foreground whitespace-nowrap">
              Raudhatussalam
            </span>
          )}
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-3 px-2 space-y-0.5 overflow-y-auto">
        {menuItems.map((item) => {
          const active = location.pathname === item.href;
          return (
            <Link
              key={item.href}
              to={item.href}
              onClick={onClose}
              className={cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                active
                  ? 'gradient-primary text-primary-foreground shadow-glow'
                  : 'text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent'
              )}
            >
              <item.icon className="w-4.5 h-4.5 shrink-0" />
              {!collapsed && <span className="whitespace-nowrap">{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-2 border-t border-sidebar-border">
        <Link
          to="/"
          onClick={onClose}
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-sidebar-foreground/70 hover:text-destructive hover:bg-destructive/10 transition-colors"
        >
          <LogOut className="w-4.5 h-4.5 shrink-0" />
          {!collapsed && <span>Keluar</span>}
        </Link>
      </div>
    </aside>
  );
};

export default AppSidebar;
