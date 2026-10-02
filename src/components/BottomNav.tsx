import React from 'react';
import { Home, BookOpen, Clock, ShoppingCart, CheckSquare } from 'lucide-react';

export type TabType = 'home' | 'recipes' | 'mealprep' | 'shopping' | 'checklist';

interface BottomNavProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  shoppingCount?: number;
  checklistProgress?: number;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeTab,
  onTabChange,
  shoppingCount = 0,
  checklistProgress = 0
}) => {
  const tabs = [
    { id: 'home' as TabType, label: 'Início', icon: Home },
    { id: 'recipes' as TabType, label: 'Receitas', icon: BookOpen, badge: '10' },
    { id: 'mealprep' as TabType, label: 'Meal Prep', icon: Clock, badge: '2h' },
    { id: 'shopping' as TabType, label: 'Compras', icon: ShoppingCart, countBadge: shoppingCount > 0 ? shoppingCount : undefined },
    { id: 'checklist' as TabType, label: 'Checklist', icon: CheckSquare, dotBadge: checklistProgress > 0 && checklistProgress < 100 }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200/80 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] pb-[env(safe-area-inset-bottom,0px)]">
      <div className="max-w-md mx-auto flex items-center justify-around px-2 py-1.5">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex-1 py-1.5 px-1 flex flex-col items-center justify-center relative transition-all duration-150 rounded-xl ${
                isActive
                  ? 'text-emerald-700 font-semibold'
                  : 'text-stone-400 hover:text-stone-600 font-medium'
              }`}
            >
              <div className="relative">
                <div
                  className={`p-1 rounded-xl transition-all duration-200 ${
                    isActive ? 'bg-emerald-100/80 text-emerald-800 scale-110' : ''
                  }`}
                >
                  <Icon className="w-5 h-5 transition-transform" />
                </div>

                {/* Text badge */}
                {tab.badge && !isActive && (
                  <span className="absolute -top-1 -right-2 text-[9px] font-bold px-1 bg-amber-400 text-stone-900 rounded-full leading-tight shadow-xs">
                    {tab.badge}
                  </span>
                )}

                {/* Count badge */}
                {tab.countBadge !== undefined && (
                  <span className="absolute -top-1 -right-2.5 text-[9px] font-bold px-1.5 min-w-4 h-4 flex items-center justify-center bg-emerald-600 text-white rounded-full leading-tight shadow-xs">
                    {tab.countBadge}
                  </span>
                )}

                {/* Dot badge */}
                {tab.dotBadge && (
                  <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-white" />
                )}
              </div>

              <span className={`text-[11px] mt-0.5 tracking-tight ${isActive ? 'text-emerald-800 font-bold' : 'text-stone-500'}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
