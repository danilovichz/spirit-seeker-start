import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { useState } from 'react';
import { analyticsEvents } from '@/utils/analytics';
import { cn } from '@/lib/utils';

export interface QuizOption {
  value: string;
  label: string;
}

interface QuizScreenProps {
  questionId: string;
  title: string;
  subtitle?: string;
  options: QuizOption[];
  multiSelect?: boolean;
  maxSelections?: number;
  onNext: (value: any) => void;
}

export const QuizScreen = ({
  questionId,
  title,
  subtitle,
  options,
  multiSelect = false,
  maxSelections,
  onNext,
}: QuizScreenProps) => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleSelect = (value: string) => {
    if (multiSelect) {
      setSelected(prev => {
        if (prev.includes(value)) {
          return prev.filter(v => v !== value);
        }
        if (maxSelections && prev.length >= maxSelections) {
          return [...prev.slice(1), value];
        }
        return [...prev, value];
      });
    } else {
      setSelected([value]);
    }
  };

  const handleNext = () => {
    const value = multiSelect ? selected : selected[0];
    analyticsEvents.quizAnswer(questionId, value);
    onNext(value);
  };

  const isSelected = (value: string) => selected.includes(value);
  const canProceed = selected.length > 0;

  return (
    <div className="animate-fade-in space-y-8 pt-12">
      <div className="space-y-3 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base text-muted-foreground">{subtitle}</p>
        )}
        {multiSelect && maxSelections && (
          <p className="text-sm text-primary font-medium">
            Selecciona hasta {maxSelections}
          </p>
        )}
      </div>

      <div className="space-y-3">
        {options.map((option, index) => (
          <button
            key={option.value}
            onClick={() => handleSelect(option.value)}
            className={cn(
              'w-full p-4 rounded-xl border-2 text-left transition-all duration-200',
              'hover:shadow-md active:scale-98',
              isSelected(option.value)
                ? 'border-primary bg-primary/5 shadow-md'
                : 'border-border bg-card hover:border-primary/50'
            )}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="flex items-center justify-between">
              <span className={cn(
                'text-base font-medium transition-colors',
                isSelected(option.value) ? 'text-primary' : 'text-foreground'
              )}>
                {option.label}
              </span>
              {isSelected(option.value) && (
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary-foreground" />
                </div>
              )}
            </div>
          </button>
        ))}
      </div>

      <div className="flex justify-center pt-8">
        <Button
          onClick={handleNext}
          variant="onboarding"
          size="xl"
          className="min-w-64"
          disabled={!canProceed}
        >
          Continuar
        </Button>
      </div>
    </div>
  );
};
