import React, { useState } from 'react';
import { 
  Search, Clock, Flame, Users, Check, Plus, Minus, 
  ChevronRight, ArrowLeft, Bookmark, ShoppingBag, Sparkles, 
  Play, Pause, RotateCcw, AlertCircle, Share2, CheckCircle2 
} from 'lucide-react';
import { RECIPES_DATA, Recipe, Ingredient } from '../data/recipesData';

interface RecipesTabProps {
  onAddIngredientsToShopping: (items: string[]) => void;
}

export const RecipesTab: React.FC<RecipesTabProps> = ({
  onAddIngredientsToShopping
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('todas');
  const [activeRecipe, setActiveRecipe] = useState<Recipe | null>(null);

  // Detail view state
  const [portionScale, setPortionScale] = useState<number>(4);
  const [checkedIngredients, setCheckedIngredients] = useState<Record<string, boolean>>({});
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [isCookingMode, setIsCookingMode] = useState<boolean>(false);
  const [timerSeconds, setTimerSeconds] = useState<number>(600); // 10 min default
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Timer interval effect
  React.useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0 && isTimerRunning) {
      setIsTimerRunning(false);
      triggerToast("Tempo esgotado para esta etapa!");
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSeconds]);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleOpenRecipe = (recipe: Recipe) => {
    setActiveRecipe(recipe);
    setPortionScale(recipe.yieldDefault);
    setCheckedIngredients({});
    setActiveStepIndex(0);
    setIsCookingMode(false);
    setIsTimerRunning(false);
    setTimerSeconds(600);
  };

  const filteredRecipes = RECIPES_DATA.filter((recipe) => {
    const matchesCategory = 
      selectedCategory === 'todas' || 
      (selectedCategory === 'frango' && recipe.category === 'frango') ||
      (selectedCategory === 'carne' && recipe.category === 'carne') ||
      (selectedCategory === 'peixe' && recipe.category === 'peixe') ||
      (selectedCategory === 'veggie' && (recipe.category === 'vegetariano' || recipe.category === 'pratico'));

    const matchesSearch = 
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.ingredients.some(i => i.name.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const scaleValue = (val: number, baseYield: number, currentScale: number) => {
    const ratio = currentScale / baseYield;
    const result = val * ratio;
    // Format nicely
    if (Number.isInteger(result)) return result.toString();
    if (result < 1) {
      if (Math.abs(result - 0.5) < 0.05) return '½';
      if (Math.abs(result - 0.25) < 0.05) return '¼';
      if (Math.abs(result - 0.75) < 0.05) return '¾';
    }
    return result.toFixed(1).replace('.0', '');
  };

  const toggleIngredientCheck = (ingName: string) => {
    setCheckedIngredients(prev => ({
      ...prev,
      [ingName]: !prev[ingName]
    }));
  };

  const handleSendToShoppingList = () => {
    if (!activeRecipe) return;
    const items = activeRecipe.ingredients.map(ing => {
      const scaled = scaleValue(ing.amount, activeRecipe.yieldDefault, portionScale);
      return `${scaled} ${ing.unit} de ${ing.name}`;
    });

    if (activeRecipe.accompanimentIngredients) {
      activeRecipe.accompanimentIngredients.forEach(ing => {
        const scaled = scaleValue(ing.amount, activeRecipe.yieldDefault, portionScale);
        items.push(`${scaled} ${ing.unit} de ${ing.name}`);
      });
    }

    onAddIngredientsToShopping(items);
    triggerToast("Ingredientes adicionados à sua Lista de Compras!");
  };

  const formatTimer = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-4 pb-24 text-stone-800 animate-in fade-in duration-300">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 bg-stone-900 text-white text-xs px-4 py-2.5 rounded-full shadow-xl border border-stone-700 flex items-center gap-2 animate-in fade-in slide-in-from-top-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* If Viewing Recipe Details */}
      {activeRecipe ? (
        <div className="space-y-4">
          {/* Back button & top bar */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => setActiveRecipe(null)}
              className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 p-1.5 -ml-1.5 rounded-xl hover:bg-emerald-50 active:scale-95 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar para as 10 receitas</span>
            </button>
            <span className="text-[11px] font-bold text-stone-500 bg-stone-100 px-2.5 py-1 rounded-full">
              Receita {activeRecipe.id} de 10
            </span>
          </div>

          {/* Recipe Hero Card */}
          <div className="bg-white rounded-3xl p-5 border border-stone-200/80 shadow-xs space-y-3">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-stone-100 flex items-center justify-center text-3xl shadow-inner border border-stone-200/60">
                  {activeRecipe.imageEmoji}
                </div>
                <div>
                  <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full border ${activeRecipe.badgeColor}`}>
                    {activeRecipe.categoryLabel}
                  </span>
                  <h1 className="text-lg sm:text-xl font-bold font-heading text-stone-900 leading-tight mt-1">
                    {activeRecipe.title}
                  </h1>
                </div>
              </div>
            </div>

            <p className="text-xs text-stone-600 leading-relaxed">
              {activeRecipe.subtitle}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {activeRecipe.tags.map((t, idx) => (
                <span key={idx} className="text-[10px] font-semibold bg-stone-100 text-stone-600 px-2 py-0.5 rounded-md">
                  #{t}
                </span>
              ))}
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-stone-100 text-center">
              <div className="p-2 rounded-xl bg-stone-50">
                <span className="text-[10px] text-stone-500 block uppercase font-medium">Preparo</span>
                <span className="text-xs font-bold text-stone-800">{activeRecipe.prepTime}</span>
              </div>
              <div className="p-2 rounded-xl bg-stone-50">
                <span className="text-[10px] text-stone-500 block uppercase font-medium">Cozimento</span>
                <span className="text-xs font-bold text-stone-800">{activeRecipe.cookTime}</span>
              </div>
              <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-200/60">
                <span className="text-[10px] text-emerald-700 block uppercase font-medium">Rendimento</span>
                <span className="text-xs font-bold text-emerald-900">{portionScale} {activeRecipe.yieldUnit}</span>
              </div>
            </div>
          </div>

          {/* Dynamic Portion Scaler Tool */}
          <div className="bg-emerald-50/80 rounded-2xl p-3.5 border border-emerald-200/80 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-emerald-950 block">
                Ajustar Porções / Marmitas
              </span>
              <span className="text-[11px] text-emerald-800">
                Os ingredientes se ajustam automaticamente
              </span>
            </div>

            <div className="flex items-center gap-2 bg-white rounded-xl border border-emerald-300 p-1 shadow-xs">
              <button
                onClick={() => setPortionScale(prev => Math.max(1, prev - 1))}
                className="w-7 h-7 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 flex items-center justify-center font-bold text-sm active:scale-95 transition-all"
                disabled={portionScale <= 1}
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="text-xs font-extrabold text-stone-900 px-2 min-w-[28px] text-center">
                {portionScale}
              </span>
              <button
                onClick={() => setPortionScale(prev => Math.min(12, prev + 1))}
                className="w-7 h-7 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white flex items-center justify-center font-bold text-sm active:scale-95 transition-all"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Ingredients Section */}
          <div className="bg-white rounded-3xl p-5 border border-stone-200/80 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm font-bold font-heading text-stone-900">
                  Ingredientes Necessários
                </h2>
                <span className="text-[11px] text-stone-500">
                  Toque para riscar o que você já separou
                </span>
              </div>
              <button
                onClick={handleSendToShoppingList}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-xl shadow-xs active:scale-95 transition-all"
              >
                <ShoppingBag className="w-3.5 h-3.5 text-amber-300" />
                <span>+ Compras</span>
              </button>
            </div>

            <div className="space-y-1.5 pt-1">
              {activeRecipe.ingredients.map((ing, idx) => {
                const isChecked = !!checkedIngredients[ing.name];
                return (
                  <div
                    key={idx}
                    onClick={() => toggleIngredientCheck(ing.name)}
                    className={`flex items-center justify-between p-2.5 rounded-xl border text-xs cursor-pointer transition-all ${
                      isChecked
                        ? 'bg-emerald-50/60 border-emerald-200 text-stone-400 line-through'
                        : 'bg-stone-50/70 border-stone-200/70 text-stone-800 hover:bg-stone-100'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-4 h-4 rounded-md border flex items-center justify-center ${
                        isChecked ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-stone-300 bg-white'
                      }`}>
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className="font-medium">{ing.name}</span>
                    </div>
                    <span className="font-bold text-stone-700 bg-white/80 px-2 py-0.5 rounded-md border border-stone-200/50">
                      {scaleValue(ing.amount, activeRecipe.yieldDefault, portionScale)} {ing.unit}
                    </span>
                  </div>
                );
              })}

              {/* Accompaniments if any */}
              {activeRecipe.accompanimentIngredients && (
                <div className="pt-2">
                  <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block mb-1.5">
                    Acompanhamento / Massa / Molho:
                  </span>
                  {activeRecipe.accompanimentIngredients.map((ing, idx) => {
                    const isChecked = !!checkedIngredients[ing.name];
                    return (
                      <div
                        key={idx}
                        onClick={() => toggleIngredientCheck(ing.name)}
                        className={`flex items-center justify-between p-2.5 rounded-xl border text-xs cursor-pointer mb-1.5 transition-all ${
                          isChecked
                            ? 'bg-emerald-50/60 border-emerald-200 text-stone-400 line-through'
                            : 'bg-stone-50/70 border-stone-200/70 text-stone-800 hover:bg-stone-100'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <div className={`w-4 h-4 rounded-md border flex items-center justify-center ${
                            isChecked ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-stone-300 bg-white'
                          }`}>
                            {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <span className="font-medium">{ing.name}</span>
                        </div>
                        <span className="font-bold text-stone-700 bg-white/80 px-2 py-0.5 rounded-md border border-stone-200/50">
                          {scaleValue(ing.amount, activeRecipe.yieldDefault, portionScale)} {ing.unit}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Interactive Cooking Mode / Timer */}
          <div className="bg-gradient-to-br from-stone-900 to-stone-950 text-white rounded-3xl p-5 shadow-lg space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                  Modo Cozinha
                </span>
                <h3 className="text-sm font-bold font-heading">
                  Passo a Passo Guiado
                </h3>
              </div>
              <div className="flex items-center gap-2 bg-stone-800 px-3 py-1.5 rounded-xl border border-stone-700">
                <Clock className="w-3.5 h-3.5 text-amber-300" />
                <span className="text-xs font-mono font-bold">{formatTimer(timerSeconds)}</span>
                <button
                  onClick={() => setIsTimerRunning(!isTimerRunning)}
                  className="p-1 rounded bg-stone-700 hover:bg-stone-600 text-amber-300"
                >
                  {isTimerRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                </button>
                <button
                  onClick={() => {
                    setIsTimerRunning(false);
                    setTimerSeconds(600);
                  }}
                  className="p-1 rounded bg-stone-700 hover:bg-stone-600 text-stone-300"
                >
                  <RotateCcw className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Steps list */}
            <div className="space-y-2 pt-1 text-xs">
              {activeRecipe.steps.map((st, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-3 rounded-2xl border transition-all cursor-pointer ${
                    activeStepIndex === idx
                      ? 'bg-emerald-950/80 border-emerald-500 text-white shadow-sm'
                      : 'bg-stone-800/60 border-stone-800 text-stone-300 hover:bg-stone-800'
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5 ${
                      activeStepIndex === idx ? 'bg-emerald-500 text-stone-950' : 'bg-stone-700 text-stone-300'
                    }`}>
                      {idx + 1}
                    </span>
                    <p className="leading-relaxed font-normal">{st}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Assembly Tips */}
          <div className="bg-white rounded-3xl p-5 border border-stone-200/80 shadow-xs space-y-2.5">
            <h3 className="text-xs font-bold text-stone-500 uppercase tracking-wider">
              Orientação de Montagem no Pote
            </h3>
            <ul className="space-y-1.5 text-xs text-stone-700">
              {activeRecipe.assemblyTips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Conservation and Chef Tip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="bg-blue-50/70 rounded-2xl p-3.5 border border-blue-200/70 space-y-1">
              <span className="font-bold text-blue-950 block">Conservação & Validade:</span>
              <p className="text-blue-900 leading-relaxed">{activeRecipe.conservationTip}</p>
            </div>
            {activeRecipe.chefTip && (
              <div className="bg-amber-50/70 rounded-2xl p-3.5 border border-amber-200/70 space-y-1">
                <span className="font-bold text-amber-950 block">Dica de Chef:</span>
                <p className="text-amber-900 leading-relaxed">{activeRecipe.chefTip}</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* RECIPE LIST VIEW */
        <div className="space-y-4">
          {/* Search Box */}
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por receita ou ingrediente..."
              className="w-full bg-white border border-stone-200 rounded-2xl pl-10 pr-4 py-2.5 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none shadow-xs"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex gap-1.5 overflow-x-auto no-scrollbar py-0.5 text-xs font-semibold">
            {[
              { id: 'todas', label: 'Todas (10)' },
              { id: 'frango', label: '🍗 Frango (4)' },
              { id: 'carne', label: '🥩 Carne (2)' },
              { id: 'peixe', label: '🐟 Peixe & Atum (2)' },
              { id: 'veggie', label: '🍳 Ovos & Práticas (2)' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-full shrink-0 transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'bg-white text-stone-600 hover:bg-stone-50 border border-stone-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Recipe List */}
          <div className="space-y-3">
            {filteredRecipes.length === 0 ? (
              <div className="bg-white rounded-3xl p-8 text-center border border-stone-200 text-stone-500 space-y-2">
                <span className="text-3xl block">🔍</span>
                <p className="text-sm font-bold text-stone-800">Nenhuma receita encontrada</p>
                <p className="text-xs">Tente buscar por outro termo ou categoria.</p>
              </div>
            ) : (
              filteredRecipes.map((recipe) => (
                <div
                  key={recipe.id}
                  onClick={() => handleOpenRecipe(recipe)}
                  className="bg-white rounded-3xl p-4 border border-stone-200/80 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all cursor-pointer flex items-center justify-between gap-3 active:scale-[0.99]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-13 h-13 rounded-2xl bg-stone-50 border border-stone-200/60 flex items-center justify-center text-3xl shrink-0">
                      {recipe.imageEmoji}
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5">
                        <span className={`text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full border ${recipe.badgeColor}`}>
                          Receita {recipe.id}
                        </span>
                        <span className="text-[10px] text-stone-400 font-medium">
                          {recipe.prepTime}
                        </span>
                      </div>
                      <h3 className="font-bold text-stone-900 text-xs sm:text-sm line-clamp-1 font-heading">
                        {recipe.title}
                      </h3>
                      <p className="text-[11px] text-stone-500 line-clamp-1">
                        {recipe.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 shrink-0">
                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-1 rounded-xl hidden xs:inline">
                      {recipe.yieldDefault} marmitas
                    </span>
                    <div className="w-7 h-7 rounded-xl bg-stone-50 flex items-center justify-center text-stone-400">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};
