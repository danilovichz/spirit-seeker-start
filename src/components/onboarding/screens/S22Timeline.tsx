import { Button } from '@/components/ui/button';
import { Calendar, CheckCircle2 } from 'lucide-react';
import { analyticsEvents } from '@/utils/analytics';
import { topicResults } from '@/types/onboarding';

interface S22TimelineProps {
  onNext: () => void;
  dailyMinutes?: number;
  topicPrincipal?: string;
}

export const S22Timeline = ({ onNext, dailyMinutes = 10, topicPrincipal = 'fe' }: S22TimelineProps) => {
  const resultado = topicResults[topicPrincipal] || 'transformación';

  const timeline = [
    {
      month: 'Mes 1',
      title: 'Establecer el hábito diario',
      description: 'Oración y Biblia cada día.',
    },
    {
      month: 'Mes 2',
      title: `Profundizar en ${topicPrincipal}`,
      description: 'Pasajes explicados y prácticas sencillas.',
    },
    {
      month: 'Mes 3',
      title: `Sentir más ${resultado}`,
      description: 'Guiar a otros con tu ejemplo.',
    },
  ];

  const handleNext = () => {
    analyticsEvents.timelineView3Months();
    onNext();
  };

  return (
    <div className="animate-fade-in space-y-8 pt-12">
      <div className="text-center space-y-3 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
          En solo 3 meses, con {dailyMinutes} min/día podrás...
        </h1>
      </div>

      <div className="space-y-6">
        {timeline.map((item, index) => (
          <div
            key={index}
            className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-all"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  {index === timeline.length - 1 ? (
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  ) : (
                    <Calendar className="w-6 h-6 text-primary" />
                  )}
                </div>
              </div>
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                    {item.month}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center pt-8">
        <Button
          onClick={handleNext}
          variant="onboarding"
          size="xl"
          className="min-w-64"
        >
          Activar mi plan ahora
        </Button>
      </div>
    </div>
  );
};
