import { Button } from '@/components/ui/button';
import { analyticsEvents } from '@/utils/analytics';

interface S1WelcomeProps {
  onNext: () => void;
  totalUsers?: number;
}

export const S1Welcome = ({ onNext, totalUsers = 50000 }: S1WelcomeProps) => {
  const handleStart = () => {
    analyticsEvents.onboardingStart();
    onNext();
  };

  return (
    <div className="animate-fade-in space-y-8 text-center pt-12">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
          Bienvenido a un nuevo capítulo en tu fe
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Has dado un paso importante. Aquí no estás solo: más de{' '}
          <span className="font-semibold text-primary">{totalUsers.toLocaleString()}</span>{' '}
          creyentes ya crecen cada día con nosotros.
        </p>
      </div>

      <div className="flex justify-center pt-8">
        <Button
          onClick={handleStart}
          variant="onboarding"
          size="xl"
          className="min-w-64"
        >
          Comenzar
        </Button>
      </div>
    </div>
  );
};
