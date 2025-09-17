# Deployment Guide for Mini Ecommerce

## Environment Variables Required for Vercel Deployment

When deploying to Vercel, you need to set the following environment variables in your Vercel dashboard:

⚠️ **Security Note**: Never commit sensitive credentials to your repository. Always use environment variables for sensitive data like database connections, API keys, and secrets.

### Required Environment Variables:

1. **JWT_SECRET**
   - Value: `[Your JWT Secret Key - Generate a secure random string]`
   - Description: Secret key for JWT token generation

2. **EXPRESS_SESSION**
   - Value: `[Your Express Session Secret - Generate a secure random string]`
   - Description: Secret key for Express session management

3. **MONGODB_URI**
   - Value: `[Your MongoDB Connection String]`
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
⚠️ **Security Warning**: Change these default credentials immediately after deployment!
- Email: OwnerAdmin@gmail.com
- Password: 123456

**Important**: After your first login, please:
1. Change the default password to a strong, unique password
2. Consider implementing two-factor authentication
3. Use a different email address for production environments

## Features Tested:
- ✅ User registration and login
- ✅ Owner registration and login  
- ✅ Product creation and management
- ✅ Shopping cart functionality
- ✅ Cart item removal with instant updates
- ✅ Pakistani Rupee currency display
- ✅ Responsive design with color panels