# Deployment Guide for Mini Ecommerce

## Environment Variables Required for Vercel Deployment

When deploying to Vercel, you need to set the following environment variables in your Vercel dashboard:

### Required Environment Variables:

1. **JWT_SECRET**
   - Value: `a9f3c4e1b6d2f8a7c3e9d1f4a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5`
   - Description: Secret key for JWT token generation

2. **EXPRESS_SESSION**
   - Value: `3bdb60e19918babe8708cd1c495b3714242f19113f5f183d12bfc078cf954282`
   - Description: Secret key for Express session management

3. **MONGODB_URI**
   - Value: `mongodb+srv://Test:CUHSb1Q37L0Na1JP@cluster0.ip1tc2f.mongodb.net/miniEcom?retryWrites=true&w=majority&appName=Cluster0`
   - Description: MongoDB connection string

4. **NODE_ENV**
   - Value: `production`
   - Description: Environment mode for production

5. **PORT** (Optional - Vercel handles this automatically)
   - Value: Will be set by Vercel automatically
   - Description: Port number for the application

## Deployment Steps:

1. Push your code to GitHub (✅ Already done)
2. Connect your GitHub repository to Vercel
3. Set the environment variables in Vercel dashboard
4. Deploy the application

## Default Owner Credentials:
- Email: OwnerAdmin@gmail.com
- Password: 123456

## Features Tested:
- ✅ User registration and login
- ✅ Owner registration and login  
- ✅ Product creation and management
- ✅ Shopping cart functionality
- ✅ Cart item removal with instant updates
- ✅ Pakistani Rupee currency display
- ✅ Responsive design with color panels