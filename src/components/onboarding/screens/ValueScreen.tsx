import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';
import { analyticsEvents } from '@/utils/analytics';

interface ValueScreenProps {
  icon: LucideIcon;
  title: string;
  description: string;
  ctaText: string;
  featureName: string;
  onNext: () => void;
}

export const ValueScreen = ({
  icon: Icon,
  title,
  description,
  ctaText,
  featureName,
  onNext,
}: ValueScreenProps) => {
  const handleNext = () => {
    analyticsEvents.featureView(featureName);
    onNext();
  };

  return (
    <div className="animate-fade-in space-y-8 text-center pt-12">
      <div className="flex justify-center mb-8">
        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
          <Icon className="w-12 h-12 text-primary" />
        </div>
      </div>

      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
          {title}
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>

      <div className="flex justify-center pt-8">
        <Button
          onClick={handleNext}
          variant="onboarding"
          size="xl"
          className="min-w-64"
        >
          {ctaText}
        </Button>
      </div>
    </div>
  );
};
