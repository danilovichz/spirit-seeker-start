import { Button } from '@/components/ui/button';

interface S2PurposeProps {
  onNext: () => void;
}

export const S2Purpose = ({ onNext }: S2PurposeProps) => {
  return (
    <div className="animate-fade-in space-y-8 text-center pt-12">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
          Tu fe, sin complicaciones
        </h1>
        <p className="text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Con solo <span className="font-semibold text-primary">10 minutos al día</span> podrás orar, comprender la Biblia y avanzar con claridad.
        </p>
      </div>

      <div className="flex justify-center pt-8">
        <Button
          onClick={onNext}
          variant="onboarding"
          size="xl"
          className="min-w-64"
        >
          Seguir
        </Button>
      </div>
    </div>
  );
};
