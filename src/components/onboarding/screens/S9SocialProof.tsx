import { Button } from '@/components/ui/button';
import { Quote } from 'lucide-react';
import { analyticsEvents } from '@/utils/analytics';

interface S9SocialProofProps {
  onNext: () => void;
}

export const S9SocialProof = ({ onNext }: S9SocialProofProps) => {
  const testimonials = [
    { text: 'Ahora oramos en familia cada noche.', author: 'Ana, 34' },
    { text: 'Vivo con más paz y propósito.', author: 'David, 27' },
    { text: 'Por fin entiendo lo que leo.', author: 'Marta, 41' },
  ];

  const handleNext = () => {
    analyticsEvents.socialProofView();
    onNext();
  };

  return (
    <div className="animate-fade-in space-y-8 pt-12">
      <h2 className="text-3xl font-bold text-center text-foreground mb-8">
        Historias reales
      </h2>

      <div className="space-y-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-all"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <Quote className="w-8 h-8 text-primary/40 mb-4" />
            <p className="text-lg font-serif italic text-foreground mb-4 leading-relaxed">
              "{testimonial.text}"
            </p>
            <p className="text-sm font-medium text-muted-foreground">
              — {testimonial.author}
            </p>
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
          Quiero lo mismo
        </Button>
      </div>
    </div>
  );
};
