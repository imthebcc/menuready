'use client';

import { Check } from 'lucide-react';
import { OnboardingStep } from '@/types/onboarding';

interface StepperProps {
  currentStep: OnboardingStep;
  steps: Array<{ number: number; label: string }>;
}

export function Stepper({ currentStep, steps }: StepperProps) {
  return (
    <div className="w-full py-6 px-4 bg-white border-b">
      <div className="max-w-4xl mx-auto">
        {/* Mobile: Simple progress bar + current step */}
        <div className="md:hidden">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-medium text-slate-900">
              Step {currentStep} of {steps.length}
            </p>
            <p className="text-xs text-slate-600">
              {steps[currentStep - 1]?.label}
            </p>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div
              className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(currentStep / steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Desktop: Full stepper */}
        <div className="hidden md:flex items-center justify-between">
          {steps.map((step, index) => {
            const stepNumber = step.number;
            const isCompleted = currentStep > stepNumber;
            const isCurrent = currentStep === stepNumber;
            const isUpcoming = currentStep < stepNumber;

            return (
              <div key={stepNumber} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  {/* Step circle */}
                  <div
                    className={`
                      w-10 h-10 rounded-full flex items-center justify-center
                      font-semibold text-sm transition-all duration-300
                      ${
                        isCompleted
                          ? 'bg-green-600 text-white'
                          : isCurrent
                          ? 'bg-indigo-600 text-white ring-4 ring-indigo-100'
                          : 'bg-slate-200 text-slate-400'
                      }
                    `}
                  >
                    {isCompleted ? <Check className="w-5 h-5" /> : stepNumber}
                  </div>
                  
                  {/* Step label */}
                  <p
                    className={`
                      mt-2 text-xs font-medium text-center
                      ${
                        isCurrent
                          ? 'text-indigo-600'
                          : isCompleted
                          ? 'text-green-600'
                          : 'text-slate-400'
                      }
                    `}
                  >
                    {step.label}
                  </p>
                </div>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="flex-1 h-0.5 mx-2 mb-6">
                    <div
                      className={`
                        h-full transition-all duration-500
                        ${
                          currentStep > stepNumber
                            ? 'bg-green-600'
                            : 'bg-slate-200'
                        }
                      `}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
