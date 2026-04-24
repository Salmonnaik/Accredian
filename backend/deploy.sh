#!/bin/bash

# Backend Deployment Script
echo "🚀 Backend Deployment Script"
echo "=========================="

# Check if we're in the backend directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run from backend directory."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "❌ Error: Dependencies installation failed."
    exit 1
fi

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

echo "🎯 Choose deployment platform:"
echo "1) Render (Recommended - Free)"
echo "2) Railway (Easy - Free)"
echo "3) Heroku (Classic - Free tier available)"
echo "4) Docker (Flexible)"
echo "5) AWS Elastic Beanstalk"
echo "6) DigitalOcean App Platform"
echo "7) Google Cloud Platform"

read -p "Enter your choice (1-7): " choice

case $choice in
    1)
        echo "🌐 Deploying to Render..."
        echo "Please follow these steps:"
        echo "1. Go to https://render.com"
        echo "2. Sign up with GitHub"
        echo "3. Click 'New' → 'Web Service'"
        echo "4. Select your repository: Salmonnaik/Accredian"
        echo "5. Configure:"
        echo "   - Name: saas-backend"
        echo "   - Runtime: Node"
        echo "   - Build Command: npm install"
        echo "   - Start Command: npm start"
        echo "   - Root Directory: backend"
        echo "6. Add environment variables:"
        echo "   - NODE_ENV=production"
        echo "   - PORT=5000"
        echo "7. Click 'Create Web Service'"
        ;;
    2)
        echo "🚂 Deploying to Railway..."
        echo "Please follow these steps:"
        echo "1. Go to https://railway.app"
        echo "2. Sign up with GitHub"
        echo "3. Click 'Deploy from GitHub repo'"
        echo "4. Select: Salmonnaik/Accredian"
        echo "5. Railway will auto-detect the backend"
        echo "6. Add environment variables:"
        echo "   - NODE_ENV=production"
        echo "   - PORT=5000"
        echo "7. Click 'Deploy'"
        ;;
    3)
        echo "🟣 Deploying to Heroku..."
        if ! command -v heroku &> /dev/null; then
            echo "Installing Heroku CLI..."
            npm install -g heroku
        fi
        echo "Please run these commands:"
        echo "heroku login"
        echo "heroku create saas-backend"
        echo "heroku config:set NODE_ENV=production"
        echo "heroku config:set PORT=5000"
        echo "git subtree push --prefix backend heroku main"
        ;;
    4)
        echo "🐳 Deploying with Docker..."
        if ! command -v docker &> /dev/null; then
            echo "❌ Docker not found. Please install Docker first."
            exit 1
        fi
        echo "Building Docker image..."
        docker build -t saas-backend .
        echo "✅ Docker image built successfully!"
        echo "To run locally: docker run -p 5000:5000 saas-backend"
        echo "To push to registry: docker tag saas-backend your-registry/saas-backend"
        ;;
    5)
        echo "🟠 Deploying to AWS Elastic Beanstalk..."
        echo "Please follow these steps:"
        echo "1. Install AWS CLI and EB CLI"
        echo "2. Run: eb init saas-backend"
        echo "3. Run: eb create production"
        echo "4. Run: eb deploy"
        ;;
    6)
        echo "🔵 Deploying to DigitalOcean..."
        echo "Please follow these steps:"
        echo "1. Go to https://cloud.digitalocean.com/apps"
        echo "2. Click 'Create App'"
        echo "3. Connect GitHub repository"
        echo "4. Select backend folder"
        echo "5. Configure build and run commands"
        ;;
    7)
        echo "☁️ Deploying to Google Cloud..."
        echo "Please follow these steps:"
        echo "1. Install Google Cloud SDK"
        echo "2. Run: gcloud app deploy"
        ;;
    *)
        echo "❌ Invalid choice!"
        exit 1
        ;;
esac

echo ""
echo "🎉 Deployment guide complete!"
echo "📚 After deployment, update your frontend .env.local:"
echo "NEXT_PUBLIC_API_URL=https://your-backend-url.com"
echo ""
echo "🔍 Test your deployed backend:"
echo "curl https://your-backend-url.com/health"
