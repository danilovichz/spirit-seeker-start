import { Button } from '@/components/ui/button';
import { Check, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { analyticsEvents } from '@/utils/analytics';
import { formatLabels, chatLabels } from '@/types/onboarding';
import { cn } from '@/lib/utils';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

interface S23PaywallProps {
  onComplete: () => void;
  data: any;
}

export const S23Paywall = ({ onComplete, data }: S23PaywallProps) => {
  const [selectedPlan, setSelectedPlan] = useState<'annual' | 'monthly'>('annual');
  const [showBasicConfirm, setShowBasicConfirm] = useState(false);

  const topicPrincipal = data.primary_need || data.topics?.[0] || 'fe';
  const dailyMinutes = data.daily_minutes || 10;
  const daypart = data.daypart || 'mañana';
  const formatPref = data.format_pref?.[0] || 'audio';
  const chatPref = data.chat_pref || '1to1';
  const topicsJoined = data.topics?.join(', ') || topicPrincipal;

  const benefits = [
    `Biblia interactiva (audio + explicaciones al toque)`,
    `Chat cristiano ${chatLabels[chatPref]}`,
    `Versículo diario (widget + fondo)`,
    `Planes guiados para ${topicsJoined}`,
  ];

  const handleStartTrial = () => {
    analyticsEvents.paywallPlanSelect(selectedPlan);
    analyticsEvents.trialStart();
    // In real app, process payment/trial here
    setTimeout(() => {
      analyticsEvents.purchaseComplete(selectedPlan);
      onComplete();
    }, 500);
  };

  const handleBasicClick = () => {
    setShowBasicConfirm(true);
  };

  const handleConfirmBasic = () => {
    analyticsEvents.dismissBasic();
    onComplete();
  };

  const handleActivateFree = () => {
    setShowBasicConfirm(false);
    handleStartTrial();
  };

  useEffect(() => {
    analyticsEvents.paywallView();
  }, []);

  return (
    <div className="animate-fade-in space-y-8 pt-12 pb-24">
      <div className="text-center space-y-3">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
          Tu plan '{topicPrincipal}' de {dailyMinutes} min/día está listo
        </h1>
        <p className="text-base text-muted-foreground max-w-xl mx-auto">
          Para {daypart}, con {formatLabels[formatPref]?.toLowerCase()} y versículos aplicados a tu vida.
        </p>
      </div>

      <div className="bg-card rounded-2xl p-6 border-2 border-primary/20 shadow-lg">
        <h3 className="text-lg font-bold text-foreground mb-4">Todo incluido:</h3>
        <div className="space-y-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-foreground">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <button
          onClick={() => setSelectedPlan('annual')}
          className={cn(
            'w-full p-5 rounded-xl border-2 text-left transition-all',
            'hover:shadow-md',
            selectedPlan === 'annual'
              ? 'border-primary bg-primary/5 shadow-md'
              : 'border-border bg-card'
          )}
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg font-bold text-foreground">Plan Anual</span>
                <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                  Ahorra 40%
                </span>
              </div>
              <p className="text-sm text-muted-foreground">$99/año · Recomendado</p>
            </div>
            <div className={cn(
              'w-6 h-6 rounded-full border-2 flex items-center justify-center',
              selectedPlan === 'annual' ? 'border-primary bg-primary' : 'border-border'
            )}>
              {selectedPlan === 'annual' && <Check className="w-4 h-4 text-primary-foreground" />}
            </div>
          </div>
        </button>

        <button
          onClick={() => setSelectedPlan('monthly')}
          className={cn(
            'w-full p-5 rounded-xl border-2 text-left transition-all',
            'hover:shadow-md',
            selectedPlan === 'monthly'
              ? 'border-primary bg-primary/5 shadow-md'
              : 'border-border bg-card'
          )}
        >
          <div className="flex items-center justify-between">
            <div>
              <span className="text-lg font-bold text-foreground block mb-1">Plan Mensual</span>
              <p className="text-sm text-muted-foreground">$14.99/mes</p>
            </div>
            <div className={cn(
              'w-6 h-6 rounded-full border-2 flex items-center justify-center',
              selectedPlan === 'monthly' ? 'border-primary bg-primary' : 'border-border'
            )}>
              {selectedPlan === 'monthly' && <Check className="w-4 h-4 text-primary-foreground" />}
            </div>
          </div>
        </button>
      </div>

      <div className="space-y-3 pt-4">
        <Button
          onClick={handleStartTrial}
          variant="onboarding"
          size="xl"
          className="w-full"
        >
          Comenzar prueba gratuita (7 días)
        </Button>

        <button
          onClick={handleBasicClick}
          className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors underline"
        >
          Seguir con versión básica
        </button>
      </div>

      <p className="text-xs text-center text-muted-foreground max-w-lg mx-auto">
        Cancela cuando quieras. Sin compromiso. Después de 7 días, se cobrará automáticamente según el plan elegido.
      </p>

      <AlertDialog open={showBasicConfirm} onOpenChange={setShowBasicConfirm}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
            <AlertDialogDescription className="space-y-2">
              <p>Perderás tu plan personalizado de <strong>{topicPrincipal}</strong> con:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Planes guiados adaptados a ti</li>
                <li>Chat de apoyo ilimitado</li>
                <li>Explicaciones interactivas</li>
              </ul>
              <p className="pt-2">¿Por qué no pruebas <strong>7 días gratis</strong> sin compromiso?</p>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleConfirmBasic}>
              Entrar sin plan
            </AlertDialogCancel>
            <AlertDialogAction onClick={handleActivateFree}>
              Activar gratis
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
