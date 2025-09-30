import { Button } from '@/components/ui/button';
import { BookOpen, MessageCircle, Calendar, ListChecks } from 'lucide-react';

interface S3FeaturesProps {
  onNext: () => void;
}

export const S3Features = ({ onNext }: S3FeaturesProps) => {
  const features = [
    { icon: BookOpen, text: 'Biblia interactiva' },
    { icon: MessageCircle, text: 'Chat de apoyo' },
    { icon: Calendar, text: 'Versículo diario' },
    { icon: ListChecks, text: 'Planes guiados' },
  ];

  return (
    <div className="animate-fade-in space-y-8 pt-12">
      <div className="bg-accent/20 rounded-2xl p-6 mb-8">
        <p className="text-lg text-foreground leading-relaxed">
          Si te cuesta ser constante o entender un pasaje, aquí te llevamos de la mano.
        </p>
      </div>

      <div className="space-y-4">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:shadow-md transition-all"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-lg font-medium text-foreground">{feature.text}</span>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center pt-8">
        <Button
          onClick={onNext}
          variant="onboarding"
          size="xl"
          className="min-w-64"
        >
          Descubrir cómo
        </Button>
      </div>
    </div>
  );
};
