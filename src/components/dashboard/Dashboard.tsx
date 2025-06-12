import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { PortfolioService } from '../../services/portfolioService';
import { Portfolio } from '../../types/portfolio';
import { Plus, Eye, Edit, Download, Trash2, Globe } from 'lucide-react';
import toast from 'react-hot-toast';

const Dashboard: React.FC = () => {
  const { currentUser, userData } = useAuth();
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (currentUser) {
      loadPortfolios();
    }
  }, [currentUser]);

  const loadPortfolios = async () => {
    try {
      const userPortfolios = await PortfolioService.getUserPortfolios(currentUser!.uid);
      setPortfolios(userPortfolios);
    } catch (error) {
      toast.error('Failed to load portfolios');
    } finally {
      setLoading(false);
    }
  };

  const handleCreatePortfolio = async () => {
    if (!currentUser || !userData) return;

    const subscriptionLimits = {
      free: 1,
      starter: 1,
      professional: 5,
      agency: Infinity
    };

    const limit = subscriptionLimits[userData.subscription];
    if (portfolios.length >= limit) {
      toast.error(`Upgrade your plan to create more portfolios. Current limit: ${limit}`);
      return;
    }

    try {
      const portfolioData = {
        title: 'My Portfolio',
        description: 'A beautiful portfolio website',
        template: 'modern',
        isPublished: false,
        settings: {
          primaryColor: '#2563eb',
          secondaryColor: '#7c3aed',
          fontFamily: 'Inter',
          seoTitle: 'My Portfolio',
          seoDescription: 'Welcome to my portfolio',
          socialLinks: {}
        },
        sections: [
          {
            id: 'hero-1',
            type: 'hero' as const,
            title: 'Hero',
            content: {
              title: 'Welcome to My Portfolio',
              subtitle: 'I create amazing digital experiences',
              ctaText: 'Get In Touch',
              ctaLink: '#contact'
            },
            order: 1,
            isVisible: true
          },
          {
            id: 'about-1',
            type: 'about' as const,
            title: 'About',
            content: {
              description: 'I am a passionate developer with expertise in modern web technologies.',
              image: ''
            },
            order: 2,
            isVisible: true
          },
          {
            id: 'projects-1',
            type: 'projects' as const,
            title: 'Projects',
            content: {
              projects: []
            },
            order: 3,
            isVisible: true
          }
        ]
      };

      const portfolioId = await PortfolioService.createPortfolio(currentUser.uid, portfolioData);
      toast.success('Portfolio created successfully!');
      loadPortfolios();
    } catch (error) {
      toast.error('Failed to create portfolio');
    }
  };

  const handleDeletePortfolio = async (portfolioId: string) => {
    if (!confirm('Are you sure you want to delete this portfolio?')) return;

    try {
      await PortfolioService.deletePortfolio(portfolioId);
      toast.success('Portfolio deleted successfully');
      loadPortfolios();
    } catch (error) {
      toast.error('Failed to delete portfolio');
    }
  };

  const handleExportPortfolio = async (portfolio: Portfolio) => {
    try {
      toast.loading('Preparing your portfolio for download...');
      const zipBlob = await PortfolioService.exportPortfolioAsZip(portfolio);
      
      const url = URL.createObjectURL(zipBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${portfolio.title.replace(/\s+/g, '-').toLowerCase()}-portfolio.zip`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      toast.dismiss();
      toast.success('Portfolio exported successfully!');
    } catch (error) {
      toast.dismiss();
      toast.error('Failed to export portfolio');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Loading your portfolios...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            My Portfolios
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Manage and customize your portfolio websites
          </p>
        </div>

        {/* Subscription Info */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-8 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Current Plan: {userData?.subscription?.charAt(0).toUpperCase() + userData?.subscription?.slice(1)}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Portfolios: {portfolios.length} / {
                  userData?.subscription === 'agency' ? '∞' : 
                  userData?.subscription === 'professional' ? '5' : '1'
                }
              </p>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
              Upgrade Plan
            </button>
          </div>
        </div>

        {/* Portfolios Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Create New Portfolio Card */}
          <div 
            onClick={handleCreatePortfolio}
            className="bg-white dark:bg-gray-800 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 p-8 text-center cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors group"
          >
            <Plus className="w-12 h-12 text-gray-400 group-hover:text-blue-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Create New Portfolio
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Start building your next portfolio website
            </p>
          </div>

          {/* Portfolio Cards */}
          {portfolios.map((portfolio) => (
            <div key={portfolio.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {portfolio.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {portfolio.description}
                    </p>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    portfolio.isPublished 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                  }`}>
                    {portfolio.isPublished ? 'Published' : 'Draft'}
                  </div>
                </div>

                <div className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                  Updated {new Date(portfolio.updatedAt).toLocaleDateString()}
                </div>

                <div className="flex items-center space-x-2">
                  <button 
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center space-x-1"
                  >
                    <Edit className="w-4 h-4" />
                    <span>Edit</span>
                  </button>
                  
                  <button 
                    onClick={() => handleExportPortfolio(portfolio)}
                    className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    title="Export as ZIP"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                  
                  {portfolio.isPublished && (
                    <button 
                      className="p-2 text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                      title="View Live"
                    >
                      <Globe className="w-4 h-4" />
                    </button>
                  )}
                  
                  <button 
                    onClick={() => handleDeletePortfolio(portfolio.id)}
                    className="p-2 text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {portfolios.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No portfolios yet
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Create your first portfolio to get started
            </p>
            <button 
              onClick={handleCreatePortfolio}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Create Your First Portfolio
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;