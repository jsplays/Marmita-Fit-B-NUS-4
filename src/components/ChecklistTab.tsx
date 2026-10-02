import React, { useState, useEffect } from 'react';
import { 
  Check, CheckSquare, Sparkles, Tag, Calendar, 
  UserCheck, Award, Printer, Copy, RotateCcw, AlertCircle 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { INITIAL_CHECKLIST_PHASES } from '../data/guideData';

export const ChecklistTab: React.FC = () => {
  const [phases, setPhases] = useState(() => {
    try {
      const saved = localStorage.getItem('marmita_checklist_phases');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return INITIAL_CHECKLIST_PHASES;
  });

  // Weekly Goal states
  const [marmitasGoal, setMarmitasGoal] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('marmita_goal_count');
      return saved ? Number(saved) : 4;
    } catch {
      return 4;
    }
  });

  const [prepDay, setPrepDay] = useState<string>(() => {
    try {
      return localStorage.getItem('marmita_goal_day') || 'Domingo à tarde';
    } catch {
      return 'Domingo à tarde';
    }
  });

  const [firstMeal, setFirstMeal] = useState<string>(() => {
    try {
      return localStorage.getItem('marmita_goal_firstmeal') || 'Frango colorido com legumes';
    } catch {
      return 'Frango colorido com legumes';
    }
  });

  const [signature, setSignature] = useState<string>(() => {
    try {
      return localStorage.getItem('marmita_goal_signature') || '';
    } catch {
      return '';
    }
  });

  // Label generator states
  const [labelMealName, setLabelMealName] = useState<string>('Frango com Purê de Abóbora');
  const [labelPrepDate, setLabelPrepDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [copyFeedback, setCopyFeedback] = useState<string | null>(null);

  // Persist phases
  useEffect(() => {
    try {
      localStorage.setItem('marmita_checklist_phases', JSON.stringify(phases));
    } catch (e) {
      console.error(e);
    }
  }, [phases]);

  // Persist goal
  useEffect(() => {
    try {
      localStorage.setItem('marmita_goal_count', marmitasGoal.toString());
      localStorage.setItem('marmita_goal_day', prepDay);
      localStorage.setItem('marmita_goal_firstmeal', firstMeal);
      localStorage.setItem('marmita_goal_signature', signature);
    } catch (e) {
      console.error(e);
    }
  }, [marmitasGoal, prepDay, firstMeal, signature]);

  const toggleCheck = (phaseIndex: number, itemIndex: number) => {
    setPhases((prev: any) => {
      const next = JSON.parse(JSON.stringify(prev));
      next[phaseIndex].items[itemIndex].checked = !next[phaseIndex].items[itemIndex].checked;

      // Check all done
      const allItems = next.flatMap((p: any) => p.items);
      const allDone = allItems.every((it: any) => it.checked);
      if (allDone) {
        try {
          confetti({ particleCount: 90, spread: 60, origin: { y: 0.6 } });
        } catch {}
      }
      return next;
    });
  };

  const handleResetChecklist = () => {
    if (window.confirm("Deseja desmarcar todos os itens do checklist para iniciar uma nova semana?")) {
      const reset = INITIAL_CHECKLIST_PHASES.map(p => ({
        ...p,
        items: p.items.map(it => ({ ...it, checked: false }))
      }));
      setPhases(reset);
    }
  };

  // Label calculations
  const calculateExpiry = (dateStr: string, daysToAdd: number) => {
    const d = new Date(dateStr);
    d.setDate(d.getDate() + daysToAdd);
    return d.toLocaleDateString('pt-BR');
  };

  const handleCopyLabel = () => {
    const text = `🏷️ *ETIQUETA DE MARMITA FIT*\nRefeição: ${labelMealName}\nData de Preparo: ${new Date(labelPrepDate).toLocaleDateString('pt-BR')}\nValidade Geladeira (3 dias): ${calculateExpiry(labelPrepDate, 3)}\nValidade Freezer (60 dias): ${calculateExpiry(labelPrepDate, 60)}\nAquecimento: Aquecer sem tampa ou entreaberta`;
    navigator.clipboard.writeText(text).then(() => {
      setCopyFeedback("Etiqueta copiada para impressão!");
      setTimeout(() => setCopyFeedback(null), 3000);
    });
  };

  const allItems = phases.flatMap((p: any) => p.items);
  const doneCount = allItems.filter((i: any) => i.checked).length;
  const progressPercent = Math.round((doneCount / allItems.length) * 100);

  return (
    <div className="space-y-5 pb-24 text-stone-800 animate-in fade-in duration-300">
      {/* Toast */}
      {copyFeedback && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 bg-stone-900 text-white text-xs px-4 py-2.5 rounded-full shadow-xl border border-stone-700 flex items-center gap-2">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{copyFeedback}</span>
        </div>
      )}

      {/* Header Banner */}
      <div className="bg-white rounded-3xl p-5 border border-stone-200/80 shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
              Página 14 do Guia
            </span>
            <h1 className="text-lg sm:text-xl font-bold font-heading text-stone-900 mt-1">
              Checklist Semanal da Marmita
            </h1>
          </div>
          <span className="text-xs font-mono font-bold text-stone-600 bg-stone-100 px-2.5 py-1 rounded-xl">
            {doneCount}/{allItems.length} verificados
          </span>
        </div>

        {/* Progress Bar */}
        <div className="space-y-1">
          <div className="flex justify-between text-[11px] text-stone-500 font-medium">
            <span>Segurança e Organização</span>
            <span className="font-bold text-emerald-800">{progressPercent}%</span>
          </div>
          <div className="w-full h-2 rounded-full bg-stone-100 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {doneCount > 0 && (
          <div className="flex justify-end pt-1">
            <button
              onClick={handleResetChecklist}
              className="text-[11px] text-stone-400 hover:text-stone-700 flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Limpar para nova semana</span>
            </button>
          </div>
        )}
      </div>

      {/* 4 Phases List */}
      <div className="space-y-4">
        {phases.map((phase: any, pIdx: number) => {
          const phaseDone = phase.items.filter((it: any) => it.checked).length;
          const isAllDone = phaseDone === phase.items.length;

          return (
            <div
              key={phase.phaseId}
              className={`bg-white rounded-3xl p-4 sm:p-5 border transition-all shadow-xs ${
                isAllDone ? 'border-emerald-300 bg-emerald-50/15' : 'border-stone-200/80'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{phase.icon}</span>
                  <h3 className="font-bold text-stone-900 text-xs sm:text-sm font-heading">
                    {phase.title}
                  </h3>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-stone-100 text-stone-600">
                  {phaseDone}/{phase.items.length}
                </span>
              </div>

              <div className="space-y-1.5">
                {phase.items.map((item: any, iIdx: number) => (
                  <div
                    key={item.id}
                    onClick={() => toggleCheck(pIdx, iIdx)}
                    className={`flex items-start gap-2.5 p-2.5 rounded-xl border text-xs cursor-pointer transition-all ${
                      item.checked
                        ? 'bg-emerald-50/60 border-emerald-200 text-stone-400 line-through'
                        : 'bg-stone-50/70 border-stone-200/70 text-stone-800 hover:bg-stone-100'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 mt-0.5 ${
                      item.checked ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-stone-300 bg-white'
                    }`}>
                      {item.checked && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <span className="font-medium leading-snug">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* SECTION: Minha Meta para Esta Semana */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-5 border border-amber-200 shadow-xs space-y-4">
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-amber-700" />
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block">
              Compromisso Pessoal
            </span>
            <h2 className="text-sm sm:text-base font-bold text-stone-900 font-heading">
              Minha Meta para Esta Semana
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div>
            <label className="font-bold text-stone-700 block mb-1">
              Vou preparar quantas marmitas?
            </label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min="1"
                max="20"
                value={marmitasGoal}
                onChange={(e) => setMarmitasGoal(Number(e.target.value))}
                className="w-20 bg-white border border-stone-300 rounded-xl px-3 py-2 font-bold text-stone-900 text-center"
              />
              <span className="text-stone-500 font-medium">marmitas planejadas</span>
            </div>
          </div>

          <div>
            <label className="font-bold text-stone-700 block mb-1">
              Dia e horário do preparo:
            </label>
            <input
              type="text"
              value={prepDay}
              onChange={(e) => setPrepDay(e.target.value)}
              placeholder="Ex: Domingo às 16h"
              className="w-full bg-white border border-stone-300 rounded-xl px-3 py-2 text-stone-900 font-medium"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="font-bold text-stone-700 block mb-1">
              Primeira refeição planejada:
            </label>
            <input
              type="text"
              value={firstMeal}
              onChange={(e) => setFirstMeal(e.target.value)}
              placeholder="Ex: Frango desfiado com purê de abóbora"
              className="w-full bg-white border border-stone-300 rounded-xl px-3 py-2 text-stone-900 font-medium"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="font-bold text-stone-700 block mb-1">
              Assinatura / Meu Nome de Compromisso:
            </label>
            <input
              type="text"
              value={signature}
              onChange={(e) => setSignature(e.target.value)}
              placeholder="Digite seu nome para assinar seu compromisso..."
              className="w-full bg-white border border-stone-300 rounded-xl px-3 py-2 font-serif text-emerald-900 italic font-semibold text-sm"
            />
          </div>
        </div>

        {signature && (
          <div className="p-3 bg-white/80 rounded-2xl border border-amber-200/60 text-xs text-amber-950 flex items-center gap-2">
            <UserCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              Compromisso firmado por <strong>{signature}</strong>: {marmitasGoal} marmitas no dia <strong>{prepDay}</strong>!
            </span>
          </div>
        )}
      </div>

      {/* SECTION: Gerador de Etiquetas de Marmita */}
      <div className="bg-white rounded-3xl p-5 border border-stone-200/80 shadow-xs space-y-4">
        <div className="flex items-center gap-2">
          <Tag className="w-5 h-5 text-emerald-700" />
          <div>
            <h2 className="text-sm sm:text-base font-bold text-stone-900 font-heading">
              Gerador de Etiquetas para Potes
            </h2>
            <p className="text-xs text-stone-500">
              Gere a etiqueta de identificação recomendada pela Anvisa
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          <div>
            <label className="font-bold text-stone-700 block mb-1">Nome do Prato:</label>
            <input
              type="text"
              value={labelMealName}
              onChange={(e) => setLabelMealName(e.target.value)}
              className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 text-stone-900 font-medium"
            />
          </div>
          <div>
            <label className="font-bold text-stone-700 block mb-1">Data de Preparo:</label>
            <input
              type="date"
              value={labelPrepDate}
              onChange={(e) => setLabelPrepDate(e.target.value)}
              className="w-full bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 text-stone-900 font-medium"
            />
          </div>
        </div>

        {/* Visual Label Card */}
        <div className="border-2 border-dashed border-emerald-300 rounded-2xl p-4 bg-emerald-50/30 space-y-2 text-xs">
          <div className="flex items-center justify-between border-b border-emerald-200 pb-1.5">
            <span className="font-extrabold uppercase text-[10px] text-emerald-800">
              MARMITA FIT • PROTOCOLO VERÃO 42
            </span>
            <span className="text-[10px] font-bold text-stone-500">
              {new Date(labelPrepDate).toLocaleDateString('pt-BR')}
            </span>
          </div>

          <h4 className="font-bold text-sm text-stone-900 font-heading">
            {labelMealName}
          </h4>

          <div className="grid grid-cols-2 gap-2 pt-1 text-[11px]">
            <div className="p-1.5 rounded-lg bg-blue-50 text-blue-900 border border-blue-200">
              <span className="block font-bold text-[10px] uppercase">Geladeira</span>
              <span>Até {calculateExpiry(labelPrepDate, 3)} (3 dias)</span>
            </div>
            <div className="p-1.5 rounded-lg bg-cyan-50 text-cyan-900 border border-cyan-200">
              <span className="block font-bold text-[10px] uppercase">Congelador</span>
              <span>Até {calculateExpiry(labelPrepDate, 60)} (60 dias)</span>
            </div>
          </div>

          <div className="text-[10px] text-stone-500 flex items-center justify-between pt-1">
            <span>Aquecimento: tampa entreaberta</span>
            <button
              onClick={handleCopyLabel}
              className="font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1"
            >
              <Copy className="w-3 h-3" />
              <span>Copiar Dados</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
