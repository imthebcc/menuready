'use client';

import { OnboardingLayout } from '@/components/OnboardingLayout';
import { Step1Identify } from '@/components/steps/Step1Identify';
import { Step2Sources } from '@/components/steps/Step2Sources';
import { Step3ReviewMenu } from '@/components/steps/Step3ReviewMenu';
import { Step4Customize } from '@/components/steps/Step4Customize';
import { Step5Share } from '@/components/steps/Step5Share';
import { useOnboardingStore } from '@/lib/store';

export default function OnboardingPage() {
  const { currentStep } = useOnboardingStore();

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1Identify />;
      case 2:
        return <Step2Sources />;
      case 3:
        return <Step3ReviewMenu />;
      case 4:
        return <Step4Customize />;
      case 5:
        return <Step5Share />;
      default:
        return <Step1Identify />;
    }
  };

  return (
    <OnboardingLayout showBackButton={currentStep > 1}>
      {renderStep()}
    </OnboardingLayout>
  );
}
