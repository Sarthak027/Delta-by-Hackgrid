import React, { createContext, useContext } from 'react';
import { useAuth } from './AuthContext';
import toast from 'react-hot-toast';

interface PaymentContextType {
  initializePayment: (planName: string, amount: number) => Promise<void>;
  verifyPayment: (paymentId: string, orderId: string, signature: string) => Promise<boolean>;
}

const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

export const usePayment = () => {
  const context = useContext(PaymentContext);
  if (context === undefined) {
    throw new Error('usePayment must be used within a PaymentProvider');
  }
  return context;
};

declare global {
  interface Window {
    Razorpay: any;
  }
}

export const PaymentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentUser, userData, updateUserData } = useAuth();

  const loadRazorpayScript = (): Promise<boolean> => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const initializePayment = async (planName: string, amount: number) => {
    if (!currentUser || !userData) {
      toast.error('Please login to continue');
      return;
    }

    const scriptLoaded = await loadRazorpayScript();
    if (!scriptLoaded) {
      toast.error('Failed to load payment gateway');
      return;
    }

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: amount * 100, // Amount in paise
      currency: 'INR',
      name: 'Create Portfolio',
      description: `${planName} Plan Subscription`,
      image: '/logo.png',
      handler: async (response: any) => {
        try {
          const verified = await verifyPayment(
            response.razorpay_payment_id,
            response.razorpay_order_id,
            response.razorpay_signature
          );

          if (verified) {
            const subscriptionMap: { [key: string]: 'starter' | 'professional' | 'agency' } = {
              'Starter': 'starter',
              'Professional': 'professional',
              'Agency': 'agency'
            };

            await updateUserData({
              subscription: subscriptionMap[planName] || 'starter'
            });

            toast.success('Payment successful! Your subscription has been activated.');
          } else {
            toast.error('Payment verification failed');
          }
        } catch (error) {
          toast.error('Payment processing failed');
        }
      },
      prefill: {
        name: userData.displayName,
        email: userData.email,
      },
      theme: {
        color: '#2563eb'
      }
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  const verifyPayment = async (paymentId: string, orderId: string, signature: string): Promise<boolean> => {
    try {
      // In a real application, you would verify the payment on your backend
      // For demo purposes, we'll simulate successful verification
      console.log('Payment verification:', { paymentId, orderId, signature });
      return true;
    } catch (error) {
      console.error('Payment verification error:', error);
      return false;
    }
  };

  const value = {
    initializePayment,
    verifyPayment
  };

  return (
    <PaymentContext.Provider value={value}>
      {children}
    </PaymentContext.Provider>
  );
};