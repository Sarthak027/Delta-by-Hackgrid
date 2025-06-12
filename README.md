# Delta - Portfolio Maker by Hackgrid

A production-ready SAAS platform for creating beautiful portfolio websites with payment integration, user authentication, and portfolio management.

## Features

### 🚀 Core Features
- **Multi-tenant SAAS architecture**
- **Firebase Authentication** (Email/Password)
- **Razorpay Payment Integration**
- **Portfolio Builder** with drag-and-drop interface
- **ZIP Export** functionality
- **Custom Domain Support**
- **SEO Optimization**
- **Dark/Light Theme Toggle**

### 💼 Subscription Plans
- **Free**: 1 portfolio, basic features
- **Starter**: ₹499/month, 1 portfolio, custom subdomain
- **Professional**: ₹1499/month, 5 portfolios, custom domains
- **Agency**: ₹4999/month, unlimited portfolios, white-label

### 🛠 Tech Stack
- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Firebase (Auth, Firestore, Storage)
- **Payments**: Razorpay
- **Routing**: React Router DOM
- **State Management**: React Context API
- **UI Components**: Lucide React Icons
- **Build Tool**: Vite

## Setup Instructions

### 1. Environment Variables
Create a `.env` file in the root directory:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# Razorpay Configuration
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

### 2. Firebase Setup
1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com)
2. Enable Authentication with Email/Password provider
3. Create a Firestore database
4. Enable Storage
5. Copy your config values to the `.env` file

### 3. Razorpay Setup
1. Create a Razorpay account at [Razorpay Dashboard](https://dashboard.razorpay.com)
2. Get your API keys from the dashboard
3. Add the key ID to your `.env` file

### 4. Installation
```bash
npm install
npm run dev
```

## Project Structure

```
src/
├── components/
│   ├── auth/           # Authentication components
│   ├── dashboard/      # Dashboard components
│   └── ...            # Landing page components
├── contexts/          # React Context providers
├── services/          # API services
├── types/            # TypeScript type definitions
├── config/           # Configuration files
└── ...
```

## Key Features Implementation

### Authentication System
- Email/password authentication via Firebase Auth
- User profile management
- Protected routes
- Subscription tracking

### Payment Integration
- Razorpay payment gateway integration
- Subscription plan management
- Payment verification
- Automatic plan upgrades

### Portfolio Management
- Create/edit/delete portfolios
- Template-based portfolio creation
- Custom branding and styling
- SEO optimization settings

### Export Functionality
- Generate static HTML/CSS files
- ZIP file creation and download
- Responsive design export
- Asset management

## Deployment

### Frontend Deployment
The app can be deployed to any static hosting service:
- Vercel
- Netlify
- Firebase Hosting

### Environment Setup
Ensure all environment variables are properly configured in your deployment platform.

## Security Considerations

- Firebase Security Rules for Firestore
- User data isolation
- Payment verification
- Input validation and sanitization

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please contact [support@hackgrid.com](mailto:support@hackgrid.com)