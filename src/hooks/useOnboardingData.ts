import { useState, useEffect } from 'react';
import { OnboardingData } from '@/types/onboarding';

const STORAGE_KEY = 'fe_activa_onboarding';

export const useOnboardingData = () => {
  const [data, setData] = useState<OnboardingData>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  });

  const [currentStep, setCurrentStep] = useState<number>(() => {
    const stored = localStorage.getItem(`${STORAGE_KEY}_step`);
    return stored ? parseInt(stored) : 1;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY}_step`, currentStep.toString());
  }, [currentStep]);

  const updateData = (newData: Partial<OnboardingData>) => {
    setData(prev => ({ ...prev, ...newData }));
  };

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(1, prev - 1));
  };

  const resetOnboarding = () => {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(`${STORAGE_KEY}_step`);
    setData({});
    setCurrentStep(1);
  };

  return {
    data,
    updateData,
    currentStep,
    setCurrentStep,
    nextStep,
    prevStep,
    resetOnboarding,
  };
};
