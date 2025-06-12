import React from 'react';
import { Check, Star } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { usePayment } from '../contexts/PaymentContext';

const Pricing: React.FC = () => {
  const { currentUser } = useAuth();
  const { initializePayment } = usePayment();

  const plans = [
    {
      name: 'Starter',
      price: 499,
      description: 'Perfect for individuals getting started',
      features: [
        '1 Portfolio website',
        'Custom subdomain',
        'Basic templates',
        'Email support',
        'SSL certificate',
        'Mobile responsive'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: 1499,
      description: 'For serious creators and freelancers',
      features: [
        '5 Portfolio websites',
        'Custom domains',
        'Premium templates',
        'Advanced customization',
        'Priority support',
        'Analytics dashboard',
        'SEO optimization',
        'Custom CSS/JS'
      ],
      popular: true
    },
    {
      name: 'Agency',
      price: 4999,
      description: 'For agencies and teams',
      features: [
        'Unlimited portfolios',
        'White-label solution',
        'Team collaboration',
        'Client management',
        'Advanced analytics',
        'Custom integrations',
        'Dedicated support',
        'API access'
      ],
      popular: false
    }
  ];

  const handleSubscribe = async (planName: string, price: number) => {
    if (!currentUser) {
      alert('Please sign in to subscribe');
      return;
    }

    try {
      await initializePayment(planName, price);
    } catch (error) {
      console.error('Payment error:', error);
    }
  };

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your needs. All plans include a 14-day free trial.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border-2 p-8 ${
                plan.popular
                  ? 'border-orange-500 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950 shadow-lg scale-105'
                  : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'
              } transition-transform hover:scale-105`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1 shadow-lg">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {plan.description}
                </p>
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    ₹{plan.price}
                  </span>
                  <span className="text-gray-600 dark:text-gray-300 ml-2">
                    /month
                  </span>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={() => handleSubscribe(plan.name, plan.price)}
                className={`w-full py-3 px-6 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg'
                    : 'bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900'
                }`}
              >
                {currentUser ? 'Subscribe Now' : 'Start Free Trial'}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Frequently asked questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Can I switch plans anytime?
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                What happens after the free trial?
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                After 14 days, you'll be charged for your selected plan. Cancel anytime during the trial.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Do you offer refunds?
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                We offer a 30-day money-back guarantee on all plans. No questions asked.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Is there a setup fee?
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                No setup fees ever. The price you see is the price you pay.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;