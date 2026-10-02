import React, { useState } from 'react';
import { X, Check, Sparkles, AlertCircle, RefreshCw } from 'lucide-react';
import { VISUAL_FORMULA } from '../data/guideData';

interface PlateBuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectRecipe?: (recipeId: number) => void;
}

export const PlateBuilderModal: React.FC<PlateBuilderModalProps> = ({
  isOpen,
  onClose
}) => {
  const [selectedVeg, setSelectedVeg] = useState<string>('Cenoura e Abobrinha refogadas');
  const [selectedProtein, setSelectedProtein] = useState<string>('Frango desfiado suculento');
  const [selectedCarb, setSelectedCarb] = useState<string>('Arroz integral ou branco');
  const [hasLegume, setHasLegume] = useState<boolean>(true);
  const [hasFat, setHasFat] = useState<boolean>(true);

  if (!isOpen) return null;

  const vegOptions = [
    'Cenoura e Abobrinha refogadas',
    'Brócolis no vapor com alho',
    'Couve fatiada refogada rápida',
    'Vagem com tomatinhos',
    'Salada fresca de folhas e pepino (pote separado)'
  ];

  const proteinOptions = [
    'Frango desfiado suculento',
    'Peito de frango em cubos com cúrcuma',
    'Carne moída magra refogada',
    'Almôndegas assadas ao molho',
    'Filé de peixe assado com limão',
    '2 Ovos caipiras mexidos ou cozidos',
    'Tofu grelhado temperado'
  ];

  const carbOptions = [
    'Arroz integral ou branco',
    'Batatas assadas em cubos',
    'Purê rústico de mandioca',
    'Purê aveludado de abóbora',
    'Macarrão grano duro com molho',
    'Batata-doce assada'
  ];

  const randomize = () => {
    setSelectedVeg(vegOptions[Math.floor(Math.random() * vegOptions.length)]);
    setSelectedProtein(proteinOptions[Math.floor(Math.random() * proteinOptions.length)]);
    setSelectedCarb(carbOptions[Math.floor(Math.random() * carbOptions.length)]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full max-h-[92vh] flex flex-col shadow-2xl border border-stone-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-800 to-teal-900 text-white p-4 sm:p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-xl shadow-inner">
              🥗
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                Fórmula Visual do Prato
              </span>
              <h2 className="text-base sm:text-lg font-bold font-heading">
                Montador de Marmita Fit
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-5 text-stone-800 text-sm">
          {/* Visual Plate Graphic */}
          <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 text-center">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                Visualização do seu pote
              </span>
              <button
                onClick={randomize}
                className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 bg-emerald-50 px-2 py-1 rounded-lg border border-emerald-200/60 active:scale-95 transition-all"
              >
                <RefreshCw className="w-3 h-3" />
                Sortear Combinação
              </button>
            </div>

            {/* Circular Plate Representation */}
            <div className="relative mx-auto w-56 h-56 rounded-full bg-white border-4 border-stone-200 shadow-md p-1.5 overflow-hidden flex flex-col">
              {/* Half: Vegetables */}
              <div className="h-1/2 w-full bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-t-full border-b border-emerald-300 p-2 flex flex-col items-center justify-center text-emerald-950 text-center transition-all">
                <span className="text-[10px] font-bold uppercase tracking-wide bg-emerald-700 text-white px-2 py-0.5 rounded-full">
                  ½ Vegetais & Verduras
                </span>
                <p className="text-[11px] font-semibold mt-1 line-clamp-2 px-1">
                  {selectedVeg}
                </p>
              </div>

              {/* Bottom half split into two quarters */}
              <div className="h-1/2 w-full flex">
                {/* 1/4 Protein */}
                <div className="w-1/2 h-full bg-gradient-to-br from-rose-100 to-amber-100 rounded-bl-full border-r border-rose-200 p-2 flex flex-col items-center justify-center text-rose-950 text-center transition-all">
                  <span className="text-[9px] font-bold uppercase tracking-wide bg-rose-700 text-white px-1.5 py-0.5 rounded-full">
                    ¼ Proteína
                  </span>
                  <p className="text-[10px] font-semibold mt-1 line-clamp-2 px-1">
                    {selectedProtein}
                  </p>
                </div>

                {/* 1/4 Carb */}
                <div className="w-1/2 h-full bg-gradient-to-br from-amber-100 to-yellow-200 rounded-br-full p-2 flex flex-col items-center justify-center text-amber-950 text-center transition-all">
                  <span className="text-[9px] font-bold uppercase tracking-wide bg-amber-600 text-white px-1.5 py-0.5 rounded-full">
                    ¼ Carboidrato
                  </span>
                  <p className="text-[10px] font-semibold mt-1 line-clamp-2 px-1">
                    {selectedCarb}
                  </p>
                </div>
              </div>
            </div>

            {/* Extras Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-3 text-xs">
              <label className="flex items-center gap-1.5 cursor-pointer bg-white px-2.5 py-1 rounded-full border border-stone-200 shadow-xs hover:border-emerald-400">
                <input
                  type="checkbox"
                  checked={hasLegume}
                  onChange={(e) => setHasLegume(e.target.checked)}
                  className="rounded text-emerald-600 focus:ring-emerald-500"
                />
                <span className="text-stone-700 font-medium">+ Feijão / Leguminosa</span>
              </label>

              <label className="flex items-center gap-1.5 cursor-pointer bg-white px-2.5 py-1 rounded-full border border-stone-200 shadow-xs hover:border-emerald-400">
                <input
                  type="checkbox"
                  checked={hasFat}
                  onChange={(e) => setHasFat(e.target.checked)}
                  className="rounded text-emerald-600 focus:ring-emerald-500"
                />
                <span className="text-stone-700 font-medium">+ Fio de Azeite / Gordura boa</span>
              </label>
            </div>
          </div>

          {/* Interactive Selectors */}
          <div className="space-y-4">
            {/* 1/2 Vegetables Selector */}
            <div>
              <label className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-1.5 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block"></span>
                1. Escolha a porção de Legumes e Verduras (½ do espaço)
              </label>
              <select
                value={selectedVeg}
                onChange={(e) => setSelectedVeg(e.target.value)}
                className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              >
                {vegOptions.map((v) => (
                  <option key={v} value={v}>{v}</option>
                ))}
              </select>
            </div>

            {/* 1/4 Protein Selector */}
            <div>
              <label className="text-xs font-bold text-rose-800 uppercase tracking-wider block mb-1.5 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-rose-600 inline-block"></span>
                2. Escolha a porção de Proteína (¼ do espaço)
              </label>
              <select
                value={selectedProtein}
                onChange={(e) => setSelectedProtein(e.target.value)}
                className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-rose-500 focus:outline-none"
              >
                {proteinOptions.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>

            {/* 1/4 Carb Selector */}
            <div>
              <label className="text-xs font-bold text-amber-800 uppercase tracking-wider block mb-1.5 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-amber-600 inline-block"></span>
                3. Escolha a porção de Carboidrato (¼ do espaço)
              </label>
              <select
                value={selectedCarb}
                onChange={(e) => setSelectedCarb(e.target.value)}
                className="w-full bg-stone-50 border border-stone-300 rounded-xl px-3 py-2 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-amber-500 focus:outline-none"
              >
                {carbOptions.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Golden Rule Callout */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-3.5 text-xs text-emerald-900 flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">A marmita perfeita não precisa ser rígida!</p>
              <p className="text-emerald-800 mt-0.5">
                Essa estrutura é uma bússola para o dia a dia. Adapte as quantidades à sua fome, aos seus gastos de energia e aos ingredientes disponíveis em sua casa.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex justify-end">
          <button
            onClick={onClose}
            className="w-full py-2.5 px-4 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs sm:text-sm rounded-xl shadow-md transition-all text-center"
          >
            Concluir Montagem
          </button>
        </div>
      </div>
    </div>
  );
};
