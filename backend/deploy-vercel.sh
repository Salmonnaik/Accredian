#!/bin/bash

# Backend Deployment on Vercel
echo "🚀 Backend Deployment on Vercel"
echo "================================="

# Check if we're in the backend directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run from backend directory."
    exit 1
fi

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

echo "✅ Dependencies installed successfully!"

# Test the application locally
echo "🧪 Testing application locally..."
timeout 10s npm start &
PID=$!
sleep 5

# Check if server is running
if curl -s http://localhost:5000/health > /dev/null; then
    echo "✅ Health check passed!"
    kill $PID
else
    echo "❌ Health check failed!"
    kill $PID
    exit 1
fi

echo ""
echo "🌐 Deploying to Vercel..."
echo ""
echo "📋 Steps to deploy:"
echo ""
echo "1. Login to Vercel:"
echo "   vercel login"
echo ""
echo "2. Link your project:"
echo "   vercel link"
echo ""
echo "3. Deploy to production:"
echo "   vercel --prod"
echo ""
echo "4. Set environment variables in Vercel dashboard:"
echo "   - NODE_ENV=production"
echo "   - CORS_ORIGIN=https://your-frontend-domain.vercel.app"
echo ""
echo "🔍 After deployment, test your API:"
echo "curl https://your-backend-domain.vercel.app/health"
echo ""
echo "📝 Update your frontend .env.local:"
echo "NEXT_PUBLIC_API_URL=https://your-backend-domain.vercel.app"
echo ""
echo "⚠️  Important Notes:"
echo "- Vercel has a 10-second function timeout"
echo "- Free tier has limitations"
echo "- For production, consider Render or Railway for better performance"
