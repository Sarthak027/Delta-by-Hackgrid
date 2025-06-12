import React from 'react';
import { 
  Palette, 
  Globe, 
  Zap, 
  Shield, 
  Search, 
  Smartphone,
  Code,
  Users
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Palette,
      title: 'Custom Branding',
      description: 'Use your own colors, fonts, and logo to match your brand perfectly.'
    },
    {
      icon: Globe,
      title: 'Custom Domains',
      description: 'Connect your own domain or use our free subdomain hosting.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized for speed with global CDN and modern web technologies.'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee.'
    },
    {
      icon: Search,
      title: 'SEO Optimized',
      description: 'Built-in SEO tools to help your portfolio rank higher in search results.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Responsive',
      description: 'Beautiful on all devices with responsive design out of the box.'
    },
    {
      icon: Code,
      title: 'No Code Required',
      description: 'Drag-and-drop builder with advanced customization options.'
    },
    {
      icon: Users,
      title: 'Multi-tenant',
      description: 'Create multiple portfolios for different clients or projects.'
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Powerful features designed to help you create stunning portfolios that convert visitors into clients.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-900/20"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105">
            Start Your Free Trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;