import { Button } from '@/components/ui/button';
import { analyticsEvents } from '@/utils/analytics';

interface S4AuthProps {
  onNext: () => void;
  onUpdateData: (data: any) => void;
}

export const S4Auth = ({ onNext, onUpdateData }: S4AuthProps) => {
  const handleAuth = (provider: string) => {
    analyticsEvents.authClick();
    // Simulate auth - in real app, integrate with your auth provider
    setTimeout(() => {
      analyticsEvents.authSuccess();
      onUpdateData({ authenticated: true });
      onNext();
    }, 500);
  };

  const handleSkip = () => {
    analyticsEvents.authSkip();
    onUpdateData({ authenticated: false });
    onNext();
  };

  return (
    <div className="animate-fade-in space-y-8 text-center pt-12">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
          Tu camino es único
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Inicia sesión para guardar tu progreso y tu plan personalizado.
        </p>
      </div>

      <div className="space-y-4 pt-4">
        <Button
          onClick={() => handleAuth('google')}
          variant="onboarding"
          size="xl"
          className="w-full max-w-md"
        >
          Continuar con Google
        </Button>
        
        <Button
          onClick={handleSkip}
          variant="ghost"
          size="lg"
          className="w-full max-w-md"
        >
          Más tarde
        </Button>
      </div>
    </div>
  );
};
