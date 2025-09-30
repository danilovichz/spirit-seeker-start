import { TOTAL_SCREENS } from '@/types/onboarding';

interface ProgressBarProps {
  currentStep: number;
}

export const ProgressBar = ({ currentStep }: ProgressBarProps) => {
  const progress = (currentStep / TOTAL_SCREENS) * 100;

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="h-1 bg-secondary/30">
        <div
          className="h-full bg-primary transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="absolute top-4 right-4 bg-card/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-muted-foreground border border-border">
        {currentStep} / {TOTAL_SCREENS}
      </div>
    </div>
  );
};
