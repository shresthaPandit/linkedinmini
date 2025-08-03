# LinkedIn Mini Backend API

A production-ready Node.js/Express backend for the LinkedIn Mini application.

## 🚀 Features

- **Authentication**: JWT-based user registration and login
- **Posts**: Create, read, and manage posts
- **User Profiles**: Get and update user profiles
- **Security**: Helmet, rate limiting, CORS protection
- **Production Ready**: Error handling, logging, health checks

## 📋 Prerequisites

- Node.js >= 18.0.0
- MongoDB Atlas cluster
- Environment variables configured

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env
```

## ⚙️ Environment Variables

Create a `.env` file in the backend directory:

```env
# MongoDB Connection
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-here

# Server Configuration
NODE_ENV=production
PORT=10000

# Frontend URL (for CORS)
FRONTEND_URL=https://linkedinmini.vercel.app
```

## 🏃‍♂️ Running Locally

```bash
# Development mode
npm run dev

# Production mode
npm start
```

## 🚀 Deployment on Render

### Option 1: Using render.yaml (Recommended)

1. **Push your code to GitHub**
2. **Connect to Render**:
   - Go to [dashboard.render.com](https://dashboard.render.com)
   - Click "New +" → "Blueprint"
   - Connect your GitHub repository
   - Render will automatically detect `render.yaml`

### Option 2: Manual Setup

1. **Create Web Service**:
   - Name: `linkedinmini-backend`
   - Root Directory: `backend`
   - Runtime: `Node`
   - Build Command: `npm install`
   - Start Command: `npm start`

2. **Environment Variables**:
   ```
   MONGODB_URI=mongodb+srv://happygreat123411:Noobhappy1234@cluster0.bymdkbj.mongodb.net/mynewappdb?retryWrites=true&w=majority&appName=Cluster0
   JWT_SECRET=shrestha@123$
   NODE_ENV=production
   PORT=10000
   FRONTEND_URL=https://linkedinmini.vercel.app
   ```

## 📊 API Endpoints

### Health Check
- `GET /health` - Server health status

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Posts
- `GET /api/posts` - Get all posts
- `POST /api/posts` - Create new post (auth required)
- `GET /api/posts/user/:userId` - Get user's posts

### Users
- `GET /api/users/:userId` - Get user profile
- `PUT /api/users/profile` - Update profile (auth required)

## 🔒 Security Features

- **Helmet**: Security headers
- **Rate Limiting**: 100 requests per 15 minutes per IP
- **CORS**: Configured for production domains
- **Input Validation**: Request body validation
- **Error Handling**: Comprehensive error responses

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**:
   - Check `MONGODB_URI` environment variable
   - Verify network connectivity
   - Check MongoDB Atlas IP whitelist

2. **CORS Errors**:
   - Verify `FRONTEND_URL` is set correctly
   - Check allowed origins in server.js

3. **Rate Limiting**:
   - Default: 100 requests per 15 minutes
   - Adjust in server.js if needed

### Logs

Check Render logs for detailed error information:
- Render Dashboard → Your Service → Logs

## 📈 Monitoring

- **Health Check**: `https://your-app.onrender.com/health`
- **Uptime**: Monitor through Render dashboard
- **Logs**: Real-time logs in Render dashboard

## 🔄 Updates

To update your deployment:

```bash
# Make changes locally
git add .
git commit -m "Update backend"
git push

# Render will auto-deploy
```

## 📝 License

ISC License 