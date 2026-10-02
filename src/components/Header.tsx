import React from 'react';
import { ShieldAlert, UtensilsCrossed, Smartphone, Monitor } from 'lucide-react';

interface HeaderProps {
  onOpenDisclaimer: () => void;
  onOpenPlateBuilder: () => void;
  isDesktopFrame: boolean;
  onToggleFrame: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenDisclaimer,
  onOpenPlateBuilder,
  isDesktopFrame,
  onToggleFrame
}) => {
  return (
    <header className="sticky top-0 z-30 bg-emerald-900/95 backdrop-blur-md text-white border-b border-emerald-800 shadow-sm transition-all">
      <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-amber-400 p-0.5 shadow-md flex items-center justify-center">
            <span className="text-xl">🍱</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="font-bold text-base leading-tight font-heading tracking-tight text-white">
                Marmita Fit
              </h1>
              <span className="bg-amber-400/20 text-amber-300 text-[10px] font-bold px-1.5 py-0.5 rounded border border-amber-300/30">
                BÔNUS 4
              </span>
            </div>
            <p className="text-[11px] text-emerald-200/90 font-medium">
              Protocolo Verão 42 • Método C.A.S.A.
            </p>
          </div>
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-1.5">
          {/* Visual plate builder quick button */}
          <button
            onClick={onOpenPlateBuilder}
            title="Montador de Marmita"
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-emerald-800/80 hover:bg-emerald-700 text-emerald-100 text-xs font-semibold border border-emerald-700/60 active:scale-95 transition-all"
          >
            <UtensilsCrossed className="w-3.5 h-3.5 text-amber-300" />
            <span className="hidden sm:inline">Montador</span>
          </button>

          {/* Safety warning notice */}
          <button
            onClick={onOpenDisclaimer}
            title="Aviso de Saúde Importante"
            className="p-1.5 rounded-lg bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 border border-amber-400/30 active:scale-95 transition-all flex items-center gap-1 text-xs"
          >
            <ShieldAlert className="w-4 h-4 text-amber-400" />
            <span className="sr-only sm:not-sr-only text-[11px] font-medium hidden xs:inline">Aviso</span>
          </button>

          {/* Device frame toggle (useful for desktop preview) */}
          <button
            onClick={onToggleFrame}
            title={isDesktopFrame ? "Expandir tela cheia" : "Modo celular (390px)"}
            className="p-1.5 rounded-lg bg-emerald-800/40 hover:bg-emerald-700/60 text-emerald-300 border border-emerald-700/40 text-xs active:scale-95 transition-all hidden md:flex items-center"
          >
            {isDesktopFrame ? (
              <Monitor className="w-3.5 h-3.5" />
            ) : (
              <Smartphone className="w-3.5 h-3.5" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
