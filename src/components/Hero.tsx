import React from 'react';
import { ArrowRight, Sparkles, Globe, Zap, Triangle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900 dark:to-red-900 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-orange-200 dark:border-orange-700">
            <Sparkles className="w-4 h-4" />
            <span>Launch your portfolio in minutes</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Create stunning portfolios
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">without coding</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Build professional, SEO-optimized portfolio websites with custom domains and your own branding. 
            Perfect for designers, developers, and creatives.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 flex items-center space-x-2 group shadow-lg">
              <span>Start Building Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              View Examples
            </button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-orange-500" />
              <span>Custom Domains</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-orange-500" />
              <span>Lightning Fast</span>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span>SEO Optimized</span>
            </div>
          </div>
        </div>

        {/* Hero Image/Mockup */}
        <div className="mt-20">
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-1 shadow-2xl">
              <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden">
                <div className="flex items-center space-x-2 px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="ml-4 text-sm text-gray-500 dark:text-gray-400">portfolio.example.com</div>
                </div>
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900 dark:to-red-900 rounded-full flex items-center justify-center">
                        <Triangle className="w-8 h-8 text-orange-500 fill-orange-500" />
                      </div>
                      <div className="space-y-2">
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                        <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded w-full"></div>
                        <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded w-5/6"></div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="h-32 bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-700 rounded-lg border border-orange-100 dark:border-gray-600"></div>
                      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                      <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded w-4/5"></div>
                    </div>
                    <div className="space-y-4">
                      <div className="h-24 bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-700 rounded-lg border border-orange-100 dark:border-gray-600"></div>
                      <div className="h-24 bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-700 rounded-lg border border-orange-100 dark:border-gray-600"></div>
                      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;