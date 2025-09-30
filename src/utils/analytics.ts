// Analytics event tracking
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  console.log(`[Analytics] ${eventName}`, properties || {});
  
  // Here you would integrate with your analytics service
  // Example: window.gtag?.('event', eventName, properties);
  // Example: window.analytics?.track(eventName, properties);
};

export const analyticsEvents = {
  onboardingStart: () => trackEvent('onboarding_start'),
  authClick: () => trackEvent('auth_click'),
  authSuccess: () => trackEvent('auth_success'),
  authSkip: () => trackEvent('auth_skip'),
  featureView: (feature: string) => trackEvent('feature_view', { feature }),
  quizAnswer: (questionId: string, value: any) => trackEvent('quiz_answer', { questionId, value }),
  softCommit: (value: string) => trackEvent('soft_commit', { value }),
  socialProofView: () => trackEvent('social_proof_view'),
  timelineView3Months: () => trackEvent('timeline_view_3months'),
  paywallView: () => trackEvent('paywall_view'),
  paywallPlanSelect: (plan: string) => trackEvent('paywall_plan_select', { plan }),
  trialStart: () => trackEvent('trial_start'),
  purchaseComplete: (plan: string) => trackEvent('purchase_complete', { plan }),
  dismissBasic: () => trackEvent('dismiss_basic'),
};
