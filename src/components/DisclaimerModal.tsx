import React from 'react';
import { AlertTriangle, CheckCircle, ShieldCheck, HeartPulse } from 'lucide-react';
import { HEALTH_DISCLAIMER_TEXT } from '../data/guideData';

interface DisclaimerModalProps {
  isOpen: boolean;
  onAccept: () => void;
  canCloseWithoutAccept?: boolean;
  onClose?: () => void;
}

export const DisclaimerModal: React.FC<DisclaimerModalProps> = ({
  isOpen,
  onAccept,
  canCloseWithoutAccept = false,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] flex flex-col shadow-2xl border border-amber-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-600 via-emerald-700 to-emerald-800 p-5 text-white flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
            <AlertTriangle className="w-6 h-6 text-amber-200" />
          </div>
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-amber-200 block">
              Diretrizes de Saúde & Segurança
            </span>
            <h2 className="text-lg font-bold font-heading">{HEALTH_DISCLAIMER_TEXT.title}</h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 overflow-y-auto space-y-4 text-sm text-stone-700 leading-relaxed">
          <div className="bg-amber-50 border-l-4 border-amber-500 p-3 rounded-r-lg text-amber-900 text-xs flex items-start gap-2">
            <HeartPulse className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>
              <strong>Finalidade Educativa:</strong> Este material não substitui consulta, diagnóstico ou tratamento profissional individualizado.
            </span>
          </div>

          <p className="whitespace-pre-line text-stone-600 font-normal">
            {HEALTH_DISCLAIMER_TEXT.fullText}
          </p>

          <div className="bg-stone-50 border border-stone-200 rounded-xl p-3 text-xs text-stone-500">
            Protocolo Verão 42 • Método C.A.S.A. — O foco é a consistência sustentável, sem radicalismos ou riscos à saúde.
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex flex-col sm:flex-row gap-2">
          {canCloseWithoutAccept && onClose && (
            <button
              onClick={onClose}
              className="py-2.5 px-4 text-xs font-semibold text-stone-600 hover:text-stone-800 rounded-xl transition-colors order-2 sm:order-1"
            >
              Fechar
            </button>
          )}
          <button
            onClick={onAccept}
            className="flex-1 py-3 px-5 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-semibold text-sm rounded-xl shadow-md flex items-center justify-center gap-2 transition-all order-1 sm:order-2"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Compreendi e concordo</span>
          </button>
        </div>
      </div>
    </div>
  );
};
