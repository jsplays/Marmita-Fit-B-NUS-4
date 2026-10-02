import React, { useState } from 'react';
import { 
  Sparkles, CheckCircle2, ChevronRight, UtensilsCrossed, Clock, 
  ShoppingCart, ShieldAlert, AlertCircle, Droplets, Snowflake, 
  Flame, Package, Info, ArrowRight, ShieldCheck, Thermometer
} from 'lucide-react';
import { 
  GUIDE_BENEFITS, FIVE_POTS, POT_CARE_TIPS, VISUAL_FORMULA, 
  MEAL_COMBINATIONS, ANTI_DRY_TIPS, SALAD_STEPS, ANVISA_SAFETY_RULES,
  SPICE_BLENDS, QUICK_TOMATO_SAUCE 
} from '../data/guideData';
import { TabType } from './BottomNav';

interface HomeTabProps {
  onNavigateTab: (tab: TabType) => void;
  onOpenPlateBuilder: () => void;
  onOpenDisclaimer: () => void;
}

export const HomeTab: React.FC<HomeTabProps> = ({
  onNavigateTab,
  onOpenPlateBuilder,
  onOpenDisclaimer
}) => {
  const [activeSection, setActiveSection] = useState<'geral' | 'potes' | 'formula' | 'temperos' | 'seguranca'>('geral');
  const [selectedComboFilter, setSelectedComboFilter] = useState<string>('todos');

  return (
    <div className="space-y-6 pb-24 text-stone-800 animate-in fade-in duration-300">
      {/* Hero Cover Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-950 text-white p-6 shadow-xl border border-emerald-700/40">
        {/* Decorative blur spheres */}
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-44 h-44 rounded-full bg-amber-400/15 blur-2xl pointer-events-none" />

        <div className="relative z-10 space-y-3">
          <div className="flex items-center gap-2">
            <span className="bg-amber-400/25 border border-amber-300/40 text-amber-300 text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full tracking-wider">
              Bônus Exclusivo 4
            </span>
            <span className="text-emerald-300 text-xs font-semibold">
              Protocolo Verão 42
            </span>
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl font-black font-heading leading-tight tracking-tight text-white">
              Guia de Marmita Fit
            </h1>
            <p className="text-xs sm:text-sm text-emerald-100/90 font-medium mt-1 leading-snug">
              Comida prática, saborosa e equilibrada para a sua rotina. Prepare com antecedência, monte sem complicação e leve para onde precisar.
            </p>
          </div>

          {/* Key tags */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-stone-900">
            <div className="bg-white/90 backdrop-blur-xs rounded-xl p-2.5 text-center shadow-xs">
              <span className="block text-lg font-black text-emerald-800">10</span>
              <span className="text-[10px] font-bold text-stone-600 uppercase">Receitas</span>
            </div>
            <div className="bg-white/90 backdrop-blur-xs rounded-xl p-2.5 text-center shadow-xs">
              <span className="block text-lg font-black text-emerald-800">2 Horas</span>
              <span className="text-[10px] font-bold text-stone-600 uppercase">Meal Prep</span>
            </div>
            <div className="bg-white/90 backdrop-blur-xs rounded-xl p-2.5 text-center shadow-xs">
              <span className="block text-lg font-black text-emerald-800">5 Potes</span>
              <span className="text-[10px] font-bold text-stone-600 uppercase">Ideais</span>
            </div>
            <div className="bg-white/90 backdrop-blur-xs rounded-xl p-2.5 text-center shadow-xs">
              <span className="block text-lg font-black text-emerald-800">100%</span>
              <span className="text-[10px] font-bold text-stone-600 uppercase">Prático</span>
            </div>
          </div>

          {/* Quick CTA buttons */}
          <div className="pt-2 flex flex-wrap gap-2">
            <button
              onClick={() => onNavigateTab('recipes')}
              className="flex-1 min-w-[130px] py-2.5 px-3 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-1.5 active:scale-95 transition-all"
            >
              <span>Ver 10 Receitas</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onNavigateTab('mealprep')}
              className="flex-1 min-w-[130px] py-2.5 px-3 bg-emerald-700/80 hover:bg-emerald-600 text-white font-semibold text-xs rounded-xl border border-emerald-500/40 flex items-center justify-center gap-1.5 active:scale-95 transition-all"
            >
              <Clock className="w-3.5 h-3.5 text-amber-300" />
              <span>Meal Prep 2h</span>
            </button>
          </div>
        </div>
      </div>

      {/* Safety Banner Notice */}
      <div 
        onClick={onOpenDisclaimer}
        role="button"
        className="bg-amber-50 border border-amber-200/90 rounded-2xl p-3.5 text-xs text-amber-950 flex items-center justify-between gap-3 shadow-xs cursor-pointer hover:bg-amber-100/70 transition-all"
      >
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-amber-200/80 flex items-center justify-center shrink-0 text-amber-800">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <span className="font-bold block text-stone-900">Aviso Educativo de Saúde</span>
            <span className="text-[11px] text-stone-600 line-clamp-1">
              Diretrizes de segurança médica e adaptação individual. Toque para ler.
            </span>
          </div>
        </div>
        <ChevronRight className="w-4 h-4 text-amber-600 shrink-0" />
      </div>

      {/* Section Filter Pills */}
      <div className="flex gap-1.5 overflow-x-auto no-scrollbar py-1 text-xs font-semibold">
        {[
          { id: 'geral', label: 'Benefícios' },
          { id: 'potes', label: 'Os 5 Potes' },
          { id: 'formula', label: 'Fórmula Visual' },
          { id: 'temperos', label: 'Temperos & Molho' },
          { id: 'seguranca', label: 'Segurança Anvisa' }
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id as any)}
            className={`px-3 py-1.5 rounded-full shrink-0 transition-all ${
              activeSection === item.id
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'bg-white text-stone-600 hover:bg-stone-50 border border-stone-200'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* TAB 1: GERAL & BENEFÍCIOS */}
      {activeSection === 'geral' && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl p-5 border border-stone-200/80 shadow-xs space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xl">🥗</span>
              <h2 className="text-base font-bold text-stone-900 font-heading">
                Por que a marmita ajuda na rotina?
              </h2>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Quando você deixa a refeição pronta, fica mais fácil escolher com calma, controlar os ingredientes e evitar depender de opções gordurosas ou ultraprocessadas na rua.
            </p>
            <p className="text-xs text-stone-600 leading-relaxed">
              A marmita não precisa ser sem graça, minúscula ou baseada apenas em salada. Uma boa refeição deve ser saborosa, suficiente e compatível com a sua fome e sua realidade.
            </p>

            <div className="bg-emerald-50/70 border-l-4 border-emerald-600 p-3 rounded-r-xl text-xs text-emerald-950">
              <p className="font-semibold mb-0.5">Guia Alimentar para a População Brasileira:</p>
              <p className="text-stone-700">
                Recomenda priorizar alimentos <em>in natura</em> ou minimamente processados, planejar as refeições, cozinhar mais e reduzir radicalmente ultraprocessados.
              </p>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="bg-white rounded-3xl p-5 border border-stone-200/80 shadow-xs space-y-3">
            <h3 className="text-xs font-bold text-stone-500 uppercase tracking-wider">
              Benefícios Práticos Comprovados
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {GUIDE_BENEFITS.map((b, i) => (
                <div key={i} className="flex items-start gap-2 p-2 rounded-xl bg-stone-50 border border-stone-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-stone-700 font-medium">{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Method CASA Card */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-5 border border-amber-200/80 shadow-xs space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800">
              Protocolo Verão 42
            </span>
            <h3 className="text-sm font-bold text-stone-900 font-heading">
              Método C.A.S.A.
            </h3>
            <p className="text-xs text-stone-700 leading-relaxed">
              <strong>C</strong>onsistência, <strong>A</strong>ntecedência, <strong>S</strong>abor e <strong>A</strong>daptação. Marmita não é punição: é a liberdade de ter comida gostosa e balanceada pronta esperando por você!
            </p>
          </div>
        </div>
      )}

      {/* TAB 2: OS 5 POTES */}
      {activeSection === 'potes' && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl p-4 sm:p-5 border border-stone-200/80 shadow-xs">
            <h2 className="text-base font-bold text-stone-900 font-heading mb-1">
              Os 5 Potes Ideais
            </h2>
            <p className="text-xs text-stone-600 mb-4 leading-relaxed">
              Você não precisa comprar todos os recipientes de uma vez. Comece com o que já tem em casa, desde que esteja em boas condições de vedação e higiene.
            </p>

            <div className="space-y-3">
              {FIVE_POTS.map((pot) => (
                <div key={pot.id} className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{pot.icon}</span>
                      <div>
                        <h4 className="font-bold text-stone-900 text-xs sm:text-sm">
                          {pot.title}
                        </h4>
                        <span className="text-[10px] text-stone-500 font-medium">
                          Indicação: {pot.indication} • Cap.: {pot.capacity}
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      {pot.badge}
                    </span>
                  </div>

                  <ul className="space-y-1 text-xs text-stone-600 pl-8 list-disc">
                    {pot.bullets.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Pot Care Tips */}
          <div className="bg-amber-50/70 rounded-3xl p-5 border border-amber-200/80 shadow-xs space-y-2.5">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wide">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              <span>Cuidados Essenciais com os Recipientes</span>
            </div>
            <ul className="space-y-1.5 text-xs text-stone-700">
              {POT_CARE_TIPS.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-amber-600 font-bold">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* TAB 3: A FÓRMULA VISUAL */}
      {activeSection === 'formula' && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl p-5 border border-stone-200/80 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-bold text-stone-900 font-heading">
                  A Fórmula Visual do Prato
                </h2>
                <p className="text-xs text-stone-500">
                  Use o pote como referência geométrica simples
                </p>
              </div>
              <button
                onClick={onOpenPlateBuilder}
                className="px-3 py-1.5 bg-emerald-700 text-white rounded-xl text-xs font-semibold flex items-center gap-1 shadow-xs hover:bg-emerald-800 active:scale-95 transition-all"
              >
                <UtensilsCrossed className="w-3.5 h-3.5" />
                <span>Simulador</span>
              </button>
            </div>

            {/* Proportion Blocks */}
            <div className="space-y-2.5 pt-1">
              <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-emerald-900 text-xs sm:text-sm">
                    {VISUAL_FORMULA.vegetables.proportion}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                    {VISUAL_FORMULA.vegetables.name}
                  </span>
                </div>
                <p className="text-xs text-emerald-950">
                  {VISUAL_FORMULA.vegetables.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="p-3 rounded-2xl bg-rose-50 border border-rose-200">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-rose-900 text-xs sm:text-sm">
                      {VISUAL_FORMULA.protein.proportion}
                    </span>
                    <span className="text-[10px] uppercase font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-full">
                      {VISUAL_FORMULA.protein.name}
                    </span>
                  </div>
                  <p className="text-xs text-rose-950">
                    {VISUAL_FORMULA.protein.description}
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-amber-900 text-xs sm:text-sm">
                      {VISUAL_FORMULA.carbohydrate.proportion}
                    </span>
                    <span className="text-[10px] uppercase font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
                      {VISUAL_FORMULA.carbohydrate.name}
                    </span>
                  </div>
                  <p className="text-xs text-amber-950">
                    {VISUAL_FORMULA.carbohydrate.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Extras */}
            <div className="bg-stone-50 rounded-2xl p-3 border border-stone-200 space-y-2 text-xs">
              {VISUAL_FORMULA.extras.map((ex, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold mt-0.5">✦</span>
                  <div>
                    <span className="font-bold text-stone-900">{ex.title}: </span>
                    <span className="text-stone-600">{ex.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Practical Combinations Table */}
          <div className="bg-white rounded-3xl p-5 border border-stone-200/80 shadow-xs space-y-3">
            <h3 className="text-xs font-bold text-stone-500 uppercase tracking-wider">
              7 Combinações Práticas do Guia
            </h3>
            <div className="divide-y divide-stone-100 text-xs">
              {MEAL_COMBINATIONS.map((c, i) => (
                <div key={i} className="py-2.5 flex items-center justify-between gap-2">
                  <div>
                    <div className="font-semibold text-stone-900">
                      {c.protein} + {c.carb}
                    </div>
                    <div className="text-stone-500 text-[11px]">
                      Vegetais: {c.vegetables}
                    </div>
                  </div>
                  {c.note && (
                    <span className="text-[10px] font-medium bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full shrink-0">
                      {c.note}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Anti-Dry Marmita Tips */}
          <div className="bg-white rounded-3xl p-5 border border-stone-200/80 shadow-xs space-y-3">
            <div className="flex items-center gap-2">
              <Droplets className="w-5 h-5 text-teal-600" />
              <h3 className="text-sm font-bold text-stone-900 font-heading">
                Como Evitar Marmita Seca
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {ANTI_DRY_TIPS.map((tip, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-teal-50/50 border border-teal-100">
                  <span className="font-bold text-teal-950 block">{tip.title}</span>
                  <span className="text-stone-600 text-[11px] leading-relaxed">{tip.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Crisp Salad Secrets */}
          <div className="bg-emerald-50 rounded-3xl p-5 border border-emerald-200 shadow-xs space-y-2">
            <h3 className="text-xs font-bold text-emerald-900 uppercase tracking-wider">
              Segredos para a Salada Não Murchar
            </h3>
            <div className="space-y-1.5 text-xs text-stone-700">
              {SALAD_STEPS.map((step, idx) => (
                <p key={idx} className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{step}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: TEMPEROS & MOLHO */}
      {activeSection === 'temperos' && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl p-5 border border-stone-200/80 shadow-xs space-y-3">
            <h2 className="text-base font-bold text-stone-900 font-heading">
              Temperos que dão Sabor
            </h2>
            <p className="text-xs text-stone-600 leading-relaxed">
              Temperar bem ajuda a reduzir a dependência de molhos prontos, caldos industrializados e excesso de sal.
            </p>

            {/* Spice Blends */}
            <div className="space-y-3 pt-1">
              {SPICE_BLENDS.map((blend, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-amber-50/50 border border-amber-200/70 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-stone-900 text-xs sm:text-sm">
                      {blend.name}
                    </h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-200/80 text-amber-900">
                      {blend.category}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {blend.ingredients.map((ing, i) => (
                      <span key={i} className="text-[11px] bg-white border border-stone-200 px-2 py-0.5 rounded-lg text-stone-700 font-medium">
                        {ing}
                      </span>
                    ))}
                  </div>
                  <p className="text-[11px] text-stone-500 italic">
                    Dica: {blend.tips}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Tomato Sauce Recipe */}
          <div className="bg-gradient-to-br from-rose-50 to-red-50 rounded-3xl p-5 border border-rose-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700">
                  Receita Especial de Base
                </span>
                <h3 className="text-sm font-bold text-stone-900 font-heading">
                  {QUICK_TOMATO_SAUCE.title}
                </h3>
              </div>
              <span className="text-xs font-semibold text-rose-800 bg-rose-100 px-2.5 py-1 rounded-full">
                {QUICK_TOMATO_SAUCE.yield}
              </span>
            </div>

            <div>
              <span className="text-xs font-bold text-stone-700 block mb-1">Ingredientes:</span>
              <ul className="text-xs text-stone-600 space-y-1 list-disc pl-5">
                {QUICK_TOMATO_SAUCE.ingredients.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-xs font-bold text-stone-700 block mb-1">Preparo em 15 minutos:</span>
              <ol className="text-xs text-stone-600 space-y-1 list-decimal pl-5">
                {QUICK_TOMATO_SAUCE.steps.map((st, i) => (
                  <li key={i}>{st}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: SEGURANÇA ANVISA */}
      {activeSection === 'seguranca' && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl p-5 border border-stone-200/80 shadow-xs space-y-3">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-700" />
              <h2 className="text-base font-bold text-stone-900 font-heading">
                Manual Anvisa de Segurança
              </h2>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              {ANVISA_SAFETY_RULES.intro}
            </p>

            {/* Before Storing */}
            <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 space-y-1.5">
              <h4 className="font-bold text-stone-900 text-xs flex items-center gap-1.5">
                <Package className="w-4 h-4 text-emerald-700" />
                Antes de Guardar
              </h4>
              <ul className="text-xs text-stone-600 space-y-1 pl-5 list-disc">
                {ANVISA_SAFETY_RULES.beforeStoring.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>

            {/* Refrigerating */}
            <div className="p-3.5 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-1.5">
              <h4 className="font-bold text-blue-950 text-xs flex items-center gap-1.5">
                <Thermometer className="w-4 h-4 text-blue-700" />
                Para Refrigerar (Geladeira até 4 dias)
              </h4>
              <ul className="text-xs text-stone-600 space-y-1 pl-5 list-disc">
                {ANVISA_SAFETY_RULES.refrigerating.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>

            {/* Freezing */}
            <div className="p-3.5 rounded-2xl bg-cyan-50/60 border border-cyan-200 space-y-1.5">
              <h4 className="font-bold text-cyan-950 text-xs flex items-center gap-1.5">
                <Snowflake className="w-4 h-4 text-cyan-700" />
                Para Congelar (Freezer até 90 dias)
              </h4>
              <ul className="text-xs text-stone-600 space-y-1 pl-5 list-disc">
                {ANVISA_SAFETY_RULES.freezing.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>

            {/* Defrosting */}
            <div className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-1.5">
              <h4 className="font-bold text-amber-950 text-xs flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-amber-700" />
                Para Descongelar com Segurança
              </h4>
              <ul className="text-xs text-stone-600 space-y-1 pl-5 list-disc">
                {ANVISA_SAFETY_RULES.defrosting.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>

            {/* Transporting */}
            <div className="p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-1.5">
              <h4 className="font-bold text-emerald-950 text-xs flex items-center gap-1.5">
                <Package className="w-4 h-4 text-emerald-700" />
                Para Transportar na Bolsa Térmica
              </h4>
              <ul className="text-xs text-stone-600 space-y-1 pl-5 list-disc">
                {ANVISA_SAFETY_RULES.transporting.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Motivational Ending Card */}
      <div className="bg-stone-900 text-stone-100 rounded-3xl p-5 shadow-lg border border-stone-800 space-y-2">
        <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">
          Marmita é Autocuidado
        </span>
        <h3 className="text-base font-bold font-heading">
          Planeje. Prepare. Leve. Coma com tranquilidade.
        </h3>
        <p className="text-xs text-stone-300 leading-relaxed">
          Uma rotina alimentar sustentável não depende de perfeição, e sim de organização possível. Comece com 3 marmitas e celebre sua conquista!
        </p>
      </div>
    </div>
  );
};
