import React, { useState, useEffect } from 'react';
import { 
  Check, Plus, Trash2, Share2, Copy, RefreshCw, 
  ShoppingCart, CheckCheck, Sparkles, Filter 
} from 'lucide-react';
import { INITIAL_SHOPPING_LIST } from '../data/guideData';

export interface ShoppingItem {
  id: string;
  category: string;
  name: string;
  checked: boolean;
}

interface ShoppingListTabProps {
  externalItemsToAdd?: string[];
  onClearExternalItems?: () => void;
}

export const ShoppingListTab: React.FC<ShoppingListTabProps> = ({
  externalItemsToAdd,
  onClearExternalItems
}) => {
  const [items, setItems] = useState<ShoppingItem[]>(() => {
    try {
      const saved = localStorage.getItem('marmita_shopping_list');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return INITIAL_SHOPPING_LIST;
  });

  const [newItemName, setNewItemName] = useState('');
  const [newItemCategory, setNewItemCategory] = useState('Legumes e Verduras');
  const [selectedFilterCategory, setSelectedFilterCategory] = useState<string>('todas');
  const [copyFeedback, setCopyFeedback] = useState<string | null>(null);

  // Sync external items sent from recipe view
  useEffect(() => {
    if (externalItemsToAdd && externalItemsToAdd.length > 0) {
      setItems(prev => {
        const added: ShoppingItem[] = externalItemsToAdd.map((name, i) => ({
          id: `ext-${Date.now()}-${i}`,
          category: 'Receita Selecionada',
          name,
          checked: false
        }));
        return [...added, ...prev];
      });
      if (onClearExternalItems) onClearExternalItems();
    }
  }, [externalItemsToAdd, onClearExternalItems]);

  // Persist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('marmita_shopping_list', JSON.stringify(items));
    } catch (e) {
      console.error(e);
    }
  }, [items]);

  const toggleItem = (id: string) => {
    setItems(prev => prev.map(item => item.id === id ? { ...item, checked: !item.checked } : item));
  };

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemName.trim()) return;

    const newItem: ShoppingItem = {
      id: `custom-${Date.now()}`,
      category: newItemCategory,
      name: newItemName.trim(),
      checked: false
    };

    setItems(prev => [newItem, ...prev]);
    setNewItemName('');
  };

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(i => i.id !== id));
  };

  const handleClearChecked = () => {
    setItems(prev => prev.filter(i => !i.checked));
  };

  const handleResetDefault = () => {
    if (window.confirm("Deseja restaurar a lista oficial do Guia de Marmita Fit?")) {
      setItems(INITIAL_SHOPPING_LIST);
    }
  };

  const handleCopyList = () => {
    const categories = Array.from(new Set(items.map(i => i.category)));
    let text = `🛒 *MINHA LISTA DE COMPRAS - GUIA MARMITA FIT*\n_Protocolo Verão 42_\n\n`;

    categories.forEach(cat => {
      const catItems = items.filter(i => i.category === cat);
      if (catItems.length > 0) {
        text += `*${cat.toUpperCase()}*\n`;
        catItems.forEach(it => {
          text += `${it.checked ? '✅' : '⬜'} ${it.name}\n`;
        });
        text += `\n`;
      }
    });

    navigator.clipboard.writeText(text).then(() => {
      setCopyFeedback("Lista copiada para a área de transferência!");
      setTimeout(() => setCopyFeedback(null), 3000);
    }).catch(() => {
      setCopyFeedback("Não foi possível copiar automaticamente.");
      setTimeout(() => setCopyFeedback(null), 3000);
    });
  };

  const handleShareWhatsApp = () => {
    const pendingItems = items.filter(i => !i.checked);
    let text = `🛒 *LISTA DE COMPRAS - MARMITA FIT (A Comprar):*\n`;
    pendingItems.forEach(it => {
      text += `• ${it.name} (${it.category})\n`;
    });
    text += `\n_Protocolo Verão 42 - Método C.A.S.A._`;

    const encoded = encodeURIComponent(text);
    window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
  };

  const checkedCount = items.filter(i => i.checked).length;
  const totalCount = items.length;
  const progressPercent = totalCount > 0 ? Math.round((checkedCount / totalCount) * 100) : 0;

  const categories = Array.from(new Set(items.map(i => i.category)));

  const filteredItems = items.filter(item => {
    if (selectedFilterCategory === 'todas') return true;
    if (selectedFilterCategory === 'pendentes') return !item.checked;
    if (selectedFilterCategory === 'concluidos') return item.checked;
    return item.category === selectedFilterCategory;
  });

  return (
    <div className="space-y-4 pb-24 text-stone-800 animate-in fade-in duration-300">
      {/* Toast */}
      {copyFeedback && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 bg-stone-900 text-white text-xs px-4 py-2.5 rounded-full shadow-xl border border-stone-700 flex items-center gap-2">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{copyFeedback}</span>
        </div>
      )}

      {/* Header Card */}
      <div className="bg-white rounded-3xl p-5 border border-stone-200/80 shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
              Página 13 do Guia
            </span>
            <h1 className="text-lg sm:text-xl font-bold font-heading text-stone-900 mt-1">
              Lista de Compras Interativa
            </h1>
          </div>
          <span className="text-xs font-mono font-bold text-stone-600 bg-stone-100 px-2.5 py-1 rounded-xl">
            {checkedCount}/{totalCount} comprados
          </span>
        </div>

        {/* Progress Bar */}
        <div className="space-y-1">
          <div className="w-full h-2 rounded-full bg-stone-100 overflow-hidden">
            <div
              className="h-full bg-emerald-600 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          <button
            onClick={handleCopyList}
            className="flex items-center gap-1 px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold rounded-xl active:scale-95 transition-all"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>Copiar</span>
          </button>
          <button
            onClick={handleShareWhatsApp}
            className="flex items-center gap-1 px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-xl active:scale-95 transition-all"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </button>
          {checkedCount > 0 && (
            <button
              onClick={handleClearChecked}
              className="flex items-center gap-1 px-2.5 py-1.5 text-stone-500 hover:text-rose-600 text-xs font-medium rounded-xl transition-all"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Limpar comprados</span>
            </button>
          )}
          <button
            onClick={handleResetDefault}
            title="Restaurar padrão do guia"
            className="p-1.5 text-stone-400 hover:text-stone-700 ml-auto"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Add New Custom Item Form */}
      <form onSubmit={handleAddItem} className="bg-white rounded-3xl p-4 border border-stone-200/80 shadow-xs flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          placeholder="Ex: 500g de batata-doce, azeite..."
          className="flex-1 bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none"
        />
        <select
          value={newItemCategory}
          onChange={(e) => setNewItemCategory(e.target.value)}
          className="bg-stone-50 border border-stone-200 rounded-xl px-2.5 py-2 text-xs font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none"
        >
          <option value="Proteínas">Proteínas</option>
          <option value="Carboidratos">Carboidratos</option>
          <option value="Legumes e Verduras">Legumes e Verduras</option>
          <option value="Frutas">Frutas</option>
          <option value="Temperos e Complementos">Temperos</option>
          <option value="Materiais e Utensílios">Materiais/Potes</option>
        </select>
        <button
          type="submit"
          className="py-2 px-4 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-1 active:scale-95 transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Adicionar</span>
        </button>
      </form>

      {/* Category Filter Pills */}
      <div className="flex gap-1.5 overflow-x-auto no-scrollbar py-0.5 text-xs font-semibold">
        <button
          onClick={() => setSelectedFilterCategory('todas')}
          className={`px-3 py-1.5 rounded-full shrink-0 transition-all ${
            selectedFilterCategory === 'todas'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'bg-white text-stone-600 hover:bg-stone-50 border border-stone-200'
          }`}
        >
          Todas
        </button>
        <button
          onClick={() => setSelectedFilterCategory('pendentes')}
          className={`px-3 py-1.5 rounded-full shrink-0 transition-all ${
            selectedFilterCategory === 'pendentes'
              ? 'bg-emerald-800 text-white shadow-xs'
              : 'bg-white text-stone-600 hover:bg-stone-50 border border-stone-200'
          }`}
        >
          A Comprar ({totalCount - checkedCount})
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedFilterCategory(cat)}
            className={`px-3 py-1.5 rounded-full shrink-0 transition-all ${
              selectedFilterCategory === cat
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'bg-white text-stone-600 hover:bg-stone-50 border border-stone-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Items List */}
      <div className="space-y-2">
        {filteredItems.length === 0 ? (
          <div className="bg-white rounded-3xl p-8 text-center border border-stone-200 text-stone-400 space-y-1">
            <ShoppingCart className="w-8 h-8 mx-auto text-stone-300" />
            <p className="text-xs font-semibold text-stone-700">Nenhum item nesta visualização</p>
          </div>
        ) : (
          filteredItems.map((item) => (
            <div
              key={item.id}
              className={`p-3 rounded-2xl border flex items-center justify-between gap-2 transition-all ${
                item.checked
                  ? 'bg-emerald-50/50 border-emerald-200/80 text-stone-400'
                  : 'bg-white border-stone-200/80 text-stone-800 shadow-xs hover:border-emerald-300'
              }`}
            >
              <div
                onClick={() => toggleItem(item.id)}
                className="flex items-center gap-3 flex-1 cursor-pointer"
              >
                <div className={`w-5 h-5 rounded-lg border flex items-center justify-center shrink-0 transition-all ${
                  item.checked ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-stone-300 bg-stone-50'
                }`}>
                  {item.checked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
                <div>
                  <span className={`text-xs font-medium block leading-snug ${item.checked ? 'line-through' : ''}`}>
                    {item.name}
                  </span>
                  <span className="text-[10px] text-stone-400">
                    {item.category}
                  </span>
                </div>
              </div>

              <button
                onClick={() => removeItem(item.id)}
                className="p-1 text-stone-300 hover:text-rose-500 rounded-lg transition-colors"
                title="Remover"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
