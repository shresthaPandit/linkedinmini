# 🚀 Complete Deployment Guide - LinkedIn Mini

## 📋 Prerequisites
- GitHub repository: `shresthaPandit/linkedinmini`
- MongoDB Atlas cluster
- Render account (free)
- Vercel account (free)

## 🔧 Step 1: Fix Code Issues

### **1.1 Commit Latest Changes**
```bash
git add .
git commit -m "Fix API base URL and CORS configuration"
git push
```

## 🌐 Step 2: Backend Deployment (Render)

### **2.1 Go to Render Dashboard**
1. Visit [dashboard.render.com](https://dashboard.render.com)
2. Sign in with GitHub
3. Click **"New +"** → **"Web Service"**

### **2.2 Connect Repository**
1. **Connect GitHub** (if not already connected)
2. **Select repository**: `shresthaPandit/linkedinmini`
3. **Click "Connect"**

### **2.3 Configure Service**
- **Name**: `linkedinmini-backend`
- **Root Directory**: `backend`
- **Runtime**: `Node`
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Plan**: Free

### **2.4 Add Environment Variables**
Click **"Environment"** tab and add:

```
MONGODB_URI=mongodb+srv://happygreat123411:Noobhappy1234@cluster0.bymdkbj.mongodb.net/mynewappdb?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=shrestha@123$
NODE_ENV=production
PORT=10000
FRONTEND_URL=https://linkedinmini.vercel.app
```

### **2.5 Deploy**
1. Click **"Create Web Service"**
2. Wait for deployment to complete
3. **Copy your Render URL** (e.g., `https://linkedinmini-blul.onrender.com`)

## 🎨 Step 3: Frontend Deployment (Vercel)

### **3.1 Go to Vercel Dashboard**
1. Visit [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click **"New Project"**

### **3.2 Import Repository**
1. **Find your repository**: `shresthaPandit/linkedinmini`
2. **Click "Import"**

### **3.3 Configure Project**
- **Framework Preset**: Next.js
- **Root Directory**: `frontend`
- **Build Command**: `npm run build`
- **Output Directory**: `.next`

### **3.4 Add Environment Variable**
Click **"Environment Variables"** and add:

```
NEXT_PUBLIC_API_URL=https://linkedinmini-blul.onrender.com
```

**Replace** `linkedinmini-blul.onrender.com` with your actual Render backend URL.

### **3.5 Deploy**
1. Click **"Deploy"**
2. Wait for build to complete
3. **Copy your Vercel URL** (e.g., `https://linkedinmini.vercel.app`)

## 🔄 Step 4: Update CORS (After Both Deployments)

### **4.1 Update Backend CORS**
Once you have both URLs, update your backend CORS:

```javascript
app.use(cors({
  origin: [
    'https://linkedinmini.vercel.app',
    'https://linkedinmini-git-main-shresthapandits-projects.vercel.app',
    'https://linkedinmini-bw8o4t7yr-shresthapandits-projects.vercel.app',
    'http://localhost:3000'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));
```

### **4.2 Commit and Push**
```bash
git add backend/server.js
git commit -m "Update CORS with production URLs"
git push
```

## ✅ Step 5: Test Your Deployment

### **5.1 Test Backend**
Visit your Render URL: `https://linkedinmini-blul.onrender.com`
Should show: `{"message":"LinkedIn Mini API is running!"}`

### **5.2 Test Frontend**
Visit your Vercel URL: `https://linkedinmini.vercel.app`
Should show the LinkedIn Mini homepage

### **5.3 Test Full Flow**
1. **Register** a new account
2. **Login** with your account
3. **Create a post**
4. **View your profile**

## 🔧 Environment Variables Summary

### **Render Backend:**
```
MONGODB_URI=mongodb+srv://happygreat123411:Noobhappy1234@cluster0.bymdkbj.mongodb.net/mynewappdb?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=shrestha@123$
NODE_ENV=production
PORT=10000
FRONTEND_URL=https://linkedinmini.vercel.app
```

### **Vercel Frontend:**
```
NEXT_PUBLIC_API_URL=https://linkedinmini-blul.onrender.com
```

## 🚨 Troubleshooting

### **CORS Errors:**
- Check if backend URL is correct in Vercel
- Verify CORS origins in backend code
- Ensure both services are deployed

### **Network Errors:**
- Check if backend is running (visit Render URL)
- Verify environment variables are set correctly
- Check Render logs for errors

### **Build Errors:**
- Check Vercel build logs
- Ensure all dependencies are installed
- Verify TypeScript compilation

## 🎯 Your Final URLs:
- **Frontend**: `https://linkedinmini.vercel.app`
- **Backend**: `https://linkedinmini-blul.onrender.com`

## 🚀 Quick Commands:

```bash
# Update code
git add .
git commit -m "Your commit message"
git push

# Check deployment status
# - Render: dashboard.render.com
# - Vercel: vercel.com/dashboard
```

**Your app should now be fully functional!** 🎉 