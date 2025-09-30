import { Button } from '@/components/ui/button';
import { TrendingUp } from 'lucide-react';

interface S21TargetedSocialProps {
  onNext: () => void;
  primaryNeed?: string;
}

export const S21TargetedSocial = ({ onNext, primaryNeed }: S21TargetedSocialProps) => {
  const getStatMessage = () => {
    switch (primaryNeed) {
      case 'ansiedad':
        return 'El 82% de personas que trabajan la ansiedad con nosotros reportan más paz en 4 semanas.';
      case 'familia':
        return 'Miles de familias ya oran juntas a diario con nuestros planes.';
      case 'tentaciones':
        return 'El 78% de usuarios superan tentaciones diarias con nuestro sistema de apoyo.';
      case 'constancia':
        return 'El 85% mantiene su hábito diario después de 3 semanas con nosotros.';
      default:
        return 'Más de 50,000 personas ya transforman su vida de fe cada día.';
    }
  };

  return (
    <div className="animate-fade-in space-y-8 text-center pt-12">
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
          <TrendingUp className="w-10 h-10 text-primary" />
        </div>
      </div>

      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
          Resultados reales
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {getStatMessage()}
        </p>
      </div>

      <div className="flex justify-center pt-8">
        <Button
          onClick={onNext}
          variant="onboarding"
          size="xl"
          className="min-w-64"
        >
          Ver mi plan
        </Button>
      </div>
    </div>
  );
};
