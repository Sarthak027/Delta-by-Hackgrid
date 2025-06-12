import React from 'react';
import { UserPlus, Palette, Rocket, ArrowRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: UserPlus,
      title: 'Sign Up',
      description: 'Create your account in seconds with just your email address.',
      color: 'orange'
    },
    {
      icon: Palette,
      title: 'Customize',
      description: 'Choose from professional templates and customize with your brand.',
      color: 'red'
    },
    {
      icon: Rocket,
      title: 'Launch',
      description: 'Publish your portfolio and connect your custom domain instantly.',
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'orange':
        return {
          bg: 'bg-orange-100 dark:bg-orange-900',
          icon: 'text-orange-600 dark:text-orange-400',
          border: 'border-orange-200 dark:border-orange-700'
        };
      case 'red':
        return {
          bg: 'bg-red-100 dark:bg-red-900',
          icon: 'text-red-600 dark:text-red-400',
          border: 'border-red-200 dark:border-red-700'
        };
      case 'purple':
        return {
          bg: 'bg-purple-100 dark:bg-purple-900',
          icon: 'text-purple-600 dark:text-purple-400',
          border: 'border-purple-200 dark:border-purple-700'
        };
      default:
        return {
          bg: 'bg-gray-100 dark:bg-gray-900',
          icon: 'text-gray-600 dark:text-gray-400',
          border: 'border-gray-200 dark:border-gray-700'
        };
    }
  };

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get online in 3 simple steps
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From signup to launch in minutes. No technical knowledge required.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="flex justify-between items-center">
              <div className="w-1/3 h-px bg-gradient-to-r from-transparent via-orange-300 dark:via-orange-600 to-red-300 dark:to-red-600"></div>
              <div className="w-1/3 h-px bg-gradient-to-r from-red-300 dark:from-red-600 via-purple-300 dark:via-purple-600 to-transparent"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const colors = getColorClasses(step.color);
              return (
                <div key={index} className="relative">
                  {/* Step Number */}
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${colors.bg} ${colors.border} border-2 mb-4`}>
                      <step.icon className={`w-8 h-8 ${colors.icon}`} />
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                      Step {index + 1}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 text-center">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow for mobile */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-6">
                      <ArrowRight className="w-6 h-6 text-gray-400 dark:text-gray-600" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg">
            Start Building Your Portfolio
          </button>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
            No credit card required • Free 14-day trial
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;