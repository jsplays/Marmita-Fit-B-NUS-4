/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { BottomNav, TabType } from './components/BottomNav';
import { HomeTab } from './components/HomeTab';
import { RecipesTab } from './components/RecipesTab';
import { MealPrepTab } from './components/MealPrepTab';
import { ShoppingListTab } from './components/ShoppingListTab';
import { ChecklistTab } from './components/ChecklistTab';
import { DisclaimerModal } from './components/DisclaimerModal';
import { PlateBuilderModal } from './components/PlateBuilderModal';
import { INITIAL_SHOPPING_LIST } from './data/guideData';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState<boolean>(false);
  const [isPlateBuilderOpen, setIsPlateBuilderOpen] = useState<boolean>(false);
  const [isDesktopFrame, setIsDesktopFrame] = useState<boolean>(true);
  const [externalShoppingItems, setExternalShoppingItems] = useState<string[]>([]);
  const [shoppingBadgeCount, setShoppingBadgeCount] = useState<number>(0);

  // Check health disclaimer acceptance
  useEffect(() => {
    try {
      const accepted = localStorage.getItem('marmita_health_disclaimer_accepted');
      if (!accepted) {
        setIsDisclaimerOpen(true);
      }
    } catch {
      setIsDisclaimerOpen(true);
    }
  }, []);

  // Update shopping pending badge
  useEffect(() => {
    const updateBadge = () => {
      try {
        const saved = localStorage.getItem('marmita_shopping_list');
        if (saved) {
          const items = JSON.parse(saved);
          const pending = items.filter((i: any) => !i.checked).length;
          setShoppingBadgeCount(pending);
        } else {
          setShoppingBadgeCount(INITIAL_SHOPPING_LIST.length);
        }
      } catch {
        setShoppingBadgeCount(0);
      }
    };

    updateBadge();
    const interval = setInterval(updateBadge, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleAcceptDisclaimer = () => {
    try {
      localStorage.setItem('marmita_health_disclaimer_accepted', 'true');
    } catch (e) {
      console.error(e);
    }
    setIsDisclaimerOpen(false);
  };

  const handleAddIngredientsToShopping = (items: string[]) => {
    setExternalShoppingItems(items);
    setActiveTab('shopping');
  };

  return (
    <div className="min-h-screen bg-stone-200 flex flex-col items-center justify-start p-0 md:py-6 selection:bg-emerald-200 selection:text-emerald-950 font-sans">
      {/* Container: Smartphone mockup on large screens, native fluid on mobile */}
      <div
        className={`w-full transition-all duration-300 flex flex-col bg-stone-100 ${
          isDesktopFrame
            ? 'max-w-[430px] md:rounded-[40px] md:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] md:border-[10px] md:border-stone-850 md:overflow-hidden md:min-h-[880px]'
            : 'max-w-2xl min-h-screen'
        }`}
      >
        {/* Top Speaker/Camera notch on desktop frame */}
        {isDesktopFrame && (
          <div className="hidden md:flex justify-center items-center py-2 bg-emerald-900 border-b border-emerald-950">
            <div className="w-20 h-4 bg-stone-950 rounded-full flex items-center justify-end px-2">
              <div className="w-2 h-2 rounded-full bg-emerald-700/60" />
            </div>
          </div>
        )}

        {/* Mobile Header */}
        <Header
          onOpenDisclaimer={() => setIsDisclaimerOpen(true)}
          onOpenPlateBuilder={() => setIsPlateBuilderOpen(true)}
          isDesktopFrame={isDesktopFrame}
          onToggleFrame={() => setIsDesktopFrame(!isDesktopFrame)}
        />

        {/* Scrollable Content Body */}
        <main className="flex-1 overflow-y-auto px-4 pt-4">
          <div className="max-w-md mx-auto">
            {activeTab === 'home' && (
              <HomeTab
                onNavigateTab={(tab) => setActiveTab(tab)}
                onOpenPlateBuilder={() => setIsPlateBuilderOpen(true)}
                onOpenDisclaimer={() => setIsDisclaimerOpen(true)}
              />
            )}

            {activeTab === 'recipes' && (
              <RecipesTab
                onAddIngredientsToShopping={handleAddIngredientsToShopping}
              />
            )}

            {activeTab === 'mealprep' && <MealPrepTab />}

            {activeTab === 'shopping' && (
              <ShoppingListTab
                externalItemsToAdd={externalShoppingItems}
                onClearExternalItems={() => setExternalShoppingItems([])}
              />
            )}

            {activeTab === 'checklist' && <ChecklistTab />}
          </div>
        </main>

        {/* Bottom Nav Bar */}
        <BottomNav
          activeTab={activeTab}
          onTabChange={(tab) => {
            setActiveTab(tab);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          shoppingCount={shoppingBadgeCount}
        />
      </div>

      {/* Health Disclaimer Modal */}
      <DisclaimerModal
        isOpen={isDisclaimerOpen}
        onAccept={handleAcceptDisclaimer}
        canCloseWithoutAccept={localStorage.getItem('marmita_health_disclaimer_accepted') === 'true'}
        onClose={() => setIsDisclaimerOpen(false)}
      />

      {/* Visual Plate Builder Modal */}
      <PlateBuilderModal
        isOpen={isPlateBuilderOpen}
        onClose={() => setIsPlateBuilderOpen(false)}
      />
    </div>
  );
}
