import React, { useState, useEffect } from 'react';
import { 
  Play, Pause, RotateCcw, CheckCircle2, Clock, 
  Sparkles, ChefHat, Check, Award, ArrowRight, Calendar 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { MEAL_PREP_ROUTINE, MealPrepPhase } from '../data/guideData';

export const MealPrepTab: React.FC = () => {
  // Timer: 120 minutes = 7200 seconds
  const [secondsLeft, setSecondsLeft] = useState<number>(7200);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('marmita_mealprep_tasks');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [activeView, setActiveView] = useState<'roteiro' | 'cardapio'>('roteiro');

  // Persist tasks
  useEffect(() => {
    try {
      localStorage.setItem('marmita_mealprep_tasks', JSON.stringify(completedTasks));
    } catch (e) {
      console.error(e);
    }
  }, [completedTasks]);

  // Timer interval
  useEffect(() => {
    let timer: any = null;
    if (isRunning && secondsLeft > 0) {
      timer = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (secondsLeft === 0 && isRunning) {
      setIsRunning(false);
      handleFinishPrep();
    }
    return () => clearInterval(timer);
  }, [isRunning, secondsLeft]);

  const handleFinishPrep = () => {
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      console.error(e);
    }
  };

  const toggleTask = (taskKey: string) => {
    setCompletedTasks((prev) => {
      const updated = { ...prev, [taskKey]: !prev[taskKey] };
      // Check if all tasks in all phases are done
      const allTasks = MEAL_PREP_ROUTINE.flatMap(p => p.tasks);
      const doneCount = allTasks.filter((t, i) => updated[`t-${i}`]).length;
      if (doneCount === allTasks.length) {
        handleFinishPrep();
      }
      return updated;
    });
  };

  const formatHoursMinutes = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const allTasksCount = MEAL_PREP_ROUTINE.reduce((acc, p) => acc + p.tasks.length, 0);
  const doneTasksCount = Object.values(completedTasks).filter(Boolean).length;
  const progressPercent = Math.round((doneTasksCount / allTasksCount) * 100);

  return (
    <div className="space-y-5 pb-24 text-stone-800 animate-in fade-in duration-300">
      {/* Top Banner */}
      <div className="bg-gradient-to-br from-emerald-900 via-teal-900 to-stone-900 rounded-3xl p-5 text-white shadow-xl border border-emerald-800 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="bg-amber-400 text-stone-950 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full">
              Página 11 do Guia
            </span>
            <span className="text-emerald-300 text-xs font-semibold">
              Domingo Estruturado
            </span>
          </div>
          <span className="text-xs text-stone-300 font-mono">
            {doneTasksCount}/{allTasksCount} tarefas
          </span>
        </div>

        <div>
          <h1 className="text-xl sm:text-2xl font-black font-heading tracking-tight leading-tight">
            Meal Prep de 2 Horas
          </h1>
          <p className="text-xs text-emerald-100/90 mt-1 leading-relaxed">
            O cronograma exato para preparar toda a comida da semana em apenas 120 minutos, sem estresse e sem bagunça.
          </p>
        </div>

        {/* Live Timer Console */}
        <div className="bg-stone-950/70 backdrop-blur-md rounded-2xl p-4 border border-stone-800 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
              isRunning ? 'bg-emerald-500/20 text-emerald-400 animate-pulse' : 'bg-stone-800 text-stone-400'
            }`}>
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block">
                Cronômetro do Prep (2h)
              </span>
              <span className="font-mono text-xl sm:text-2xl font-black text-amber-300 tracking-tight">
                {formatHoursMinutes(secondsLeft)}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsRunning(!isRunning)}
              className={`p-2.5 rounded-xl font-bold text-xs flex items-center gap-1 shadow-md active:scale-95 transition-all ${
                isRunning
                  ? 'bg-amber-500 hover:bg-amber-600 text-stone-950'
                  : 'bg-emerald-600 hover:bg-emerald-700 text-white'
              }`}
            >
              {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span className="hidden sm:inline">{isRunning ? 'Pausar' : 'Iniciar'}</span>
            </button>
            <button
              onClick={() => {
                setIsRunning(false);
                setSecondsLeft(7200);
              }}
              title="Reiniciar 2h"
              className="p-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 active:scale-95 transition-all"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Overall Progress Bar */}
        <div className="space-y-1.5 pt-1">
          <div className="flex items-center justify-between text-[11px] text-stone-300">
            <span>Progresso Geral do Preparo</span>
            <span className="font-bold text-amber-300">{progressPercent}%</span>
          </div>
          <div className="w-full h-2 rounded-full bg-stone-800 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* View Switcher: Roteiro vs Cardápio Planejamento */}
      <div className="flex bg-stone-200/80 p-1 rounded-2xl text-xs font-semibold">
        <button
          onClick={() => setActiveView('roteiro')}
          className={`flex-1 py-2 rounded-xl transition-all ${
            activeView === 'roteiro'
              ? 'bg-white text-emerald-900 shadow-xs font-bold'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          Roteiro das 6 Fases (2h)
        </button>
        <button
          onClick={() => setActiveView('cardapio')}
          className={`flex-1 py-2 rounded-xl transition-all ${
            activeView === 'cardapio'
              ? 'bg-white text-emerald-900 shadow-xs font-bold'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          Planejamento 2x2x4x1x2
        </button>
      </div>

      {activeView === 'roteiro' ? (
        /* ROTEIRO 6 PHASES */
        <div className="space-y-3">
          {MEAL_PREP_ROUTINE.map((phase, idx) => {
            const isCurrent = activePhaseIndex === idx;
            const phaseTasks = phase.tasks;
            const phaseDoneCount = phaseTasks.filter((_, tIdx) => completedTasks[`p${phase.id}-t${tIdx}`]).length;
            const phaseAllDone = phaseDoneCount === phaseTasks.length;

            return (
              <div
                key={phase.id}
                className={`bg-white rounded-3xl p-4 sm:p-5 border transition-all shadow-xs ${
                  phaseAllDone
                    ? 'border-emerald-300/80 bg-emerald-50/20'
                    : isCurrent
                    ? 'border-emerald-600 ring-2 ring-emerald-500/20'
                    : 'border-stone-200/80'
                }`}
              >
                {/* Phase Header */}
                <div
                  onClick={() => setActivePhaseIndex(isCurrent ? -1 : idx)}
                  className="flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center text-xl shrink-0 ${
                      phaseAllDone ? 'bg-emerald-100 text-emerald-800' : 'bg-stone-100 text-stone-700'
                    }`}>
                      {phaseAllDone ? '✓' : phase.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-extrabold uppercase text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                          {phase.timeRange}
                        </span>
                        <span className="text-[11px] text-stone-500 font-medium">
                          {phase.minutes}
                        </span>
                      </div>
                      <h3 className="font-bold text-stone-900 text-xs sm:text-sm font-heading mt-0.5">
                        {phase.title}
                      </h3>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[11px] font-bold text-stone-500">
                      {phaseDoneCount}/{phaseTasks.length}
                    </span>
                  </div>
                </div>

                {/* Phase Tasks (Always open if current, or expandable) */}
                <div className="mt-3 pt-3 border-t border-stone-100 space-y-2">
                  <p className="text-[11px] text-stone-500 italic mb-2">
                    {phase.description}
                  </p>

                  {phase.tasks.map((taskText, tIdx) => {
                    const taskKey = `p${phase.id}-t${tIdx}`;
                    const isDone = !!completedTasks[taskKey];

                    return (
                      <div
                        key={tIdx}
                        onClick={() => toggleTask(taskKey)}
                        className={`flex items-start gap-2.5 p-2.5 rounded-2xl border text-xs cursor-pointer transition-all ${
                          isDone
                            ? 'bg-emerald-50/50 border-emerald-200 text-stone-400 line-through'
                            : 'bg-stone-50/80 border-stone-200/60 text-stone-800 hover:bg-stone-100'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 mt-0.5 ${
                          isDone ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-stone-300 bg-white'
                        }`}>
                          {isDone && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="leading-snug font-medium">{taskText}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* Motivational rule of sustainability */}
          <div className="bg-amber-50 border border-amber-200 rounded-3xl p-4 sm:p-5 text-xs text-amber-950 space-y-1.5">
            <h4 className="font-bold font-heading text-stone-900 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-600" />
              Não cozinhe além da sua capacidade!
            </h4>
            <p className="text-stone-700 leading-relaxed">
              Se você não consegue preparar 5 dias de uma vez, faça apenas 3 marmitas e complete o restante durante a semana. <strong>O melhor planejamento é aquele que você consegue manter de verdade.</strong>
            </p>
          </div>
        </div>
      ) : (
        /* CARDÁPIO 2x2x4x1x2 */
        <div className="space-y-4">
          <div className="bg-white rounded-3xl p-5 border border-stone-200/80 shadow-xs space-y-3">
            <h2 className="text-base font-bold text-stone-900 font-heading">
              A Fórmula de Escolhas: 2x2x4x1x2
            </h2>
            <p className="text-xs text-stone-600 leading-relaxed">
              Para o Meal Prep render sem complicar a cozinha, escolha no máximo:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-3 rounded-2xl bg-rose-50 border border-rose-200">
                <span className="font-extrabold text-rose-800 block text-xs">2 Proteínas</span>
                <span className="text-stone-600 text-[11px]">Ex: Frango desfiado + Carne moída</span>
              </div>
              <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200">
                <span className="font-extrabold text-amber-800 block text-xs">2 Carboidratos</span>
                <span className="text-stone-600 text-[11px]">Ex: Arroz integral + Batatas cozidas</span>
              </div>
              <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200">
                <span className="font-extrabold text-emerald-800 block text-xs">4 Legumes / Vegetais</span>
                <span className="text-stone-600 text-[11px]">Ex: Cenoura, abobrinha, brócolis e couve</span>
              </div>
              <div className="p-3 rounded-2xl bg-purple-50 border border-purple-200">
                <span className="font-extrabold text-purple-800 block text-xs">1 Molho ou Caldo</span>
                <span className="text-stone-600 text-[11px]">Ex: Molho de tomate rápido com manjericão</span>
              </div>
              <div className="p-3 rounded-2xl bg-blue-50 border border-blue-200 sm:col-span-2">
                <span className="font-extrabold text-blue-800 block text-xs">2 Opções de Lanches / Frutas</span>
                <span className="text-stone-600 text-[11px]">Ex: Bananas + Maçãs + Pote de castanhas</span>
              </div>
            </div>
          </div>

          {/* Example of Weekly Menu from Book */}
          <div className="bg-white rounded-3xl p-5 border border-stone-200/80 shadow-xs space-y-3">
            <h3 className="text-xs font-bold text-stone-500 uppercase tracking-wider">
              Exemplo Oficial do Guia
            </h3>

            <div className="divide-y divide-stone-100 text-xs">
              <div className="py-2 flex items-center justify-between">
                <span className="font-bold text-stone-700">Proteínas:</span>
                <span className="text-stone-900 font-medium">Frango desfiado e carne moída</span>
              </div>
              <div className="py-2 flex items-center justify-between">
                <span className="font-bold text-stone-700">Carboidratos:</span>
                <span className="text-stone-900 font-medium">Arroz e batata</span>
              </div>
              <div className="py-2 flex items-center justify-between">
                <span className="font-bold text-stone-700">Leguminosa:</span>
                <span className="text-stone-900 font-medium">Feijão carioca</span>
              </div>
              <div className="py-2 flex items-center justify-between">
                <span className="font-bold text-stone-700">Legumes:</span>
                <span className="text-stone-900 font-medium">Cenoura, abobrinha, brócolis e couve</span>
              </div>
              <div className="py-2 flex items-center justify-between">
                <span className="font-bold text-stone-700">Frutas:</span>
                <span className="text-stone-900 font-medium">Banana, maçã e mamão</span>
              </div>
              <div className="py-2 flex items-center justify-between">
                <span className="font-bold text-stone-700">Molho base:</span>
                <span className="text-stone-900 font-medium">Tomate caseiro com ervas</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
