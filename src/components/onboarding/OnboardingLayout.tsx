import { ReactNode } from 'react';
import { ProgressBar } from './ProgressBar';

interface OnboardingLayoutProps {
  children: ReactNode;
  currentStep: number;
}

export const OnboardingLayout = ({ children, currentStep }: OnboardingLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 relative">
      <ProgressBar currentStep={currentStep} />
      <div className="max-w-2xl mx-auto px-6 pt-20 pb-12">
        {children}
      </div>
    </div>
  );
};
