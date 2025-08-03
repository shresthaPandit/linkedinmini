# LinkedIn Mini - Professional Networking Platform

A modern professional networking platform built with Next.js, Node.js/Express, and MongoDB.

## Features

- 🔐 User authentication (register/login)
- 👤 User profiles with bio
- 📝 Create and view text posts
- 🌐 Public feed
- 👥 Individual profile pages
- 📱 Responsive design

## Tech Stack

- **Frontend**: Next.js 15 (TypeScript), Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: JWT tokens
- **Database**: MongoDB with Mongoose ODM

## Quick Start

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or cloud)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd linkedinclone
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Environment Setup**

   **Backend (.env)**
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/linkedin-mini
   JWT_SECRET=your-super-secret-jwt-key
   NODE_ENV=development
   ```

   **Frontend (.env.local)**
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   ```

4. **Start the application**
   ```bash
   # Start backend (from backend directory)
   npm run dev

   # Start frontend (from frontend directory, in new terminal)
   npm run dev
   ```

5. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## Deployment Options

### Option 1: Vercel + Railway (Recommended)

#### Frontend Deployment (Vercel)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Connect your GitHub repository
   - Import the project
   - Set environment variables:
     ```
     NEXT_PUBLIC_API_URL=https://your-backend-url.railway.app/api
     ```
   - Deploy

#### Backend Deployment (Railway)

1. **Prepare for Railway**
   ```bash
   cd backend
   ```

2. **Deploy to Railway**
   - Go to [railway.app](https://railway.app)
   - Connect your GitHub repository
   - Select the backend directory
   - Add environment variables:
     ```
     PORT=5000
     MONGODB_URI=your-mongodb-atlas-uri
     JWT_SECRET=your-super-secret-jwt-key
     NODE_ENV=production
     ```
   - Deploy

### Option 2: Render (Alternative)

#### Frontend Deployment

1. **Create render.yaml in root**
   ```yaml
   services:
     - type: web
       name: linkedin-mini-frontend
       env: node
       buildCommand: cd frontend && npm install && npm run build
       startCommand: cd frontend && npm start
       envVars:
         - key: NEXT_PUBLIC_API_URL
           value: https://your-backend-url.onrender.com/api
   ```

2. **Deploy to Render**
   - Connect GitHub repository
   - Set environment variables
   - Deploy

#### Backend Deployment

1. **Create render.yaml in backend**
   ```yaml
   services:
     - type: web
       name: linkedin-mini-backend
       env: node
       buildCommand: npm install
       startCommand: npm start
       envVars:
         - key: PORT
           value: 5000
         - key: MONGODB_URI
           value: your-mongodb-atlas-uri
         - key: JWT_SECRET
           value: your-super-secret-jwt-key
         - key: NODE_ENV
           value: production
   ```

### Option 3: Heroku

#### Backend Deployment

1. **Install Heroku CLI**
   ```bash
   npm install -g heroku
   ```

2. **Deploy backend**
   ```bash
   cd backend
   heroku create your-app-name
   heroku config:set MONGODB_URI=your-mongodb-atlas-uri
   heroku config:set JWT_SECRET=your-super-secret-jwt-key
   heroku config:set NODE_ENV=production
   git push heroku main
   ```

#### Frontend Deployment

1. **Deploy to Vercel** (same as Option 1)
   - Update `NEXT_PUBLIC_API_URL` to your Heroku backend URL

## Database Setup

### MongoDB Atlas (Recommended for Production)

1. **Create MongoDB Atlas account**
   - Go to [mongodb.com/atlas](https://mongodb.com/atlas)
   - Create free cluster

2. **Get connection string**
   - Click "Connect"
   - Choose "Connect your application"
   - Copy the connection string

3. **Update environment variables**
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/linkedin-mini
   ```

### Local MongoDB

1. **Install MongoDB**
   ```bash
   # macOS (using Homebrew)
   brew install mongodb-community

   # Ubuntu
   sudo apt-get install mongodb

   # Windows
   # Download from mongodb.com
   ```

2. **Start MongoDB**
   ```bash
   # macOS
   brew services start mongodb-community

   # Ubuntu
   sudo systemctl start mongod

   # Windows
   # Start MongoDB service
   ```

## Environment Variables

### Backend (.env)
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/linkedin-mini
JWT_SECRET=your-super-secret-jwt-key
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## Production Checklist

- [ ] Set up MongoDB Atlas database
- [ ] Generate strong JWT_SECRET
- [ ] Update CORS settings for production domain
- [ ] Set NODE_ENV=production
- [ ] Configure environment variables on hosting platform
- [ ] Test API endpoints
- [ ] Test authentication flow
- [ ] Test post creation and viewing
- [ ] Test profile functionality

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Users
- `GET /api/users/:userId` - Get user profile
- `PUT /api/users/profile` - Update user profile

### Posts
- `GET /api/posts` - Get all posts
- `POST /api/posts` - Create new post
- `GET /api/posts/user/:userId` - Get user posts

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Check if MongoDB is running
   - Verify connection string
   - Check network access (for Atlas)

2. **CORS Errors**
   - Update CORS_ORIGIN in backend
   - Check frontend API URL

3. **JWT Token Issues**
   - Verify JWT_SECRET is set
   - Check token expiration

4. **Build Errors**
   - Clear node_modules and reinstall
   - Check TypeScript errors
   - Verify all dependencies

### Development Commands

```bash
# Backend
npm run dev          # Start development server
npm run build        # Build for production
npm start           # Start production server

# Frontend
npm run dev         # Start development server
npm run build       # Build for production
npm start          # Start production server
npm run lint        # Run ESLint
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For issues and questions:
- Create an issue on GitHub
- Check the troubleshooting section
- Review the API documentation 