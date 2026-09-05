import { Menu, PanelLeftClose } from 'lucide-react';
import ThemeToggle from '@/components/shared/ThemeToggle';

interface AppHeaderProps {
  sidebarCollapsed: boolean;
  onToggleSidebar: () => void;
  onMobileOpen: () => void;
}

const AppHeader = ({ sidebarCollapsed, onToggleSidebar, onMobileOpen }: AppHeaderProps) => {
  return (
    <header className="h-14 bg-background border-b border-border flex items-center justify-between px-4 shrink-0">
      <div className="flex items-center gap-2">
        {/* Mobile hamburger */}
        <button
          onClick={onMobileOpen}
          className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Desktop collapse */}
        <button
          onClick={onToggleSidebar}
          className="hidden lg:flex p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
          aria-label="Toggle sidebar"
        >
          <PanelLeftClose className={`w-4.5 h-4.5 transition-transform ${sidebarCollapsed ? 'rotate-180' : ''}`} />
        </button>
      </div>

      <div className="flex items-center gap-2">
        <ThemeToggle compact />
        <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-primary-foreground text-xs font-bold">
          A
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
