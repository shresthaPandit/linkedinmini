# LinkedIn Clone Deployment Guide - Render + Vercel

## Prerequisites
- MongoDB Atlas cluster (existing or new)
- Render account (free tier available)
- Vercel account (free tier available)

## Step 1: MongoDB Atlas Setup

### Using Existing Cluster:
1. Go to your MongoDB Atlas dashboard
2. Create a new database named `linkedinclone`
3. Create a new database user or use existing one
4. Get your connection string

### Connection String Format:
```
mongodb+srv://username:password@cluster.mongodb.net/linkedinclone
```

## Step 2: Backend Deployment (Render)

### Option A: Render Dashboard
1. Go to [render.com](https://render.com)
2. Sign up/Login with GitHub
3. Click "New +" → "Web Service"
4. Connect your GitHub repository
5. Configure the service:
   - **Name**: `linkedinclone-backend`
   - **Root Directory**: `backend`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free

### Option B: Render CLI
```bash
# Install Render CLI
npm install -g @render/cli

# Login to Render
render login

# Deploy backend
cd backend
render deploy
```

### Environment Variables (Render):
Add these in the Render dashboard:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/linkedinclone
JWT_SECRET=your-super-secret-jwt-key-here
NODE_ENV=production
PORT=10000
```

## Step 3: Frontend Deployment (Vercel)

### Option A: Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Configure the project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

### Option B: Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy frontend
cd frontend
vercel
```

### Environment Variables (Vercel):
Add in Vercel dashboard:
```env
NEXT_PUBLIC_API_URL=https://your-render-app.onrender.com
```

## Step 4: Update CORS Settings

In `backend/server.js`, update the CORS origin:
```javascript
app.use(cors({
  origin: [
    'https://your-vercel-app.vercel.app',
    'http://localhost:3000'
  ],
  credentials: true
}));
```

## Step 5: Render Configuration Files

### Create `render.yaml` in root directory:
```yaml
services:
  - type: web
    name: linkedinclone-backend
    env: node
    plan: free
    buildCommand: cd backend && npm install
    startCommand: cd backend && npm start
    envVars:
      - key: MONGODB_URI
        value: mongodb+srv://username:password@cluster.mongodb.net/linkedinclone
      - key: JWT_SECRET
        value: your-super-secret-jwt-key-here
      - key: NODE_ENV
        value: production
      - key: PORT
        value: 10000
```

## Step 6: Update Backend for Render

### Update `backend/server.js`:
```javascript
const port = process.env.PORT || 5000;
```

### Update `backend/package.json`:
```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}
```

## Step 7: Test Deployment

1. **Test Backend:**
   ```bash
   curl https://your-render-app.onrender.com
   ```

2. **Test Frontend:**
   - Visit your Vercel URL
   - Try registering/logging in
   - Test creating posts

## Troubleshooting

### Common Issues:

1. **Render Build Failures:**
   - Check build logs in Render dashboard
   - Ensure all dependencies are in `package.json`
   - Verify build command is correct

2. **Vercel Build Failures:**
   - Check build logs in Vercel dashboard
   - Ensure TypeScript compilation passes
   - Verify environment variables are set

3. **MongoDB Connection Error:**
   - Check connection string format
   - Ensure IP whitelist includes Render's IPs
   - Verify database user permissions

4. **CORS Errors:**
   - Update CORS origin in backend
   - Check frontend API URL
   - Ensure HTTPS is used

### Debug Commands:
```bash
# Check Render logs
render logs

# Check Vercel logs
vercel logs

# Test API endpoints
curl -X GET https://your-render-app.onrender.com/api/posts
```

## Cost Estimation

### Free Tier Limits:
- **Render**: 750 hours/month free
- **Vercel**: Unlimited static sites
- **MongoDB Atlas**: 512MB free cluster

### Estimated Monthly Cost:
- **Development**: $0/month
- **Production**: $7-15/month (if exceeding free limits)

## Render vs Railway Comparison

### Render Advantages:
- ✅ More generous free tier (750 hours vs $5 credits)
- ✅ Better for static sites
- ✅ Automatic HTTPS
- ✅ Custom domains

### Railway Advantages:
- ✅ Faster deployments
- ✅ Better for full-stack apps
- ✅ Database hosting
- ✅ More developer-friendly

## Security Checklist

- [ ] Strong JWT secret
- [ ] MongoDB user with minimal permissions
- [ ] CORS properly configured
- [ ] Environment variables secured
- [ ] HTTPS enabled
- [ ] Rate limiting (optional)

## Performance Optimization

1. **Database Indexes:**
   ```javascript
   // Add to User model
   userSchema.index({ email: 1 });
   
   // Add to Post model
   postSchema.index({ author: 1, createdAt: -1 });
   ```

2. **Render Optimizations:**
   - Use environment variables for configuration
   - Implement proper error handling
   - Add health check endpoints

3. **Vercel Optimizations:**
   - Enable Next.js optimizations
   - Use Image component for images
   - Implement proper caching

## Monitoring

1. **Render Dashboard:**
   - Monitor CPU/Memory usage
   - Check error logs
   - Set up alerts

2. **Vercel Analytics:**
   - Track page views
   - Monitor performance
   - Error tracking

## Backup Strategy

1. **Database:**
   - MongoDB Atlas provides automatic backups
   - Export data regularly

2. **Code:**
   - GitHub provides version control
   - Consider automated backups

## Scaling Considerations

1. **Database:**
   - Upgrade MongoDB Atlas plan
   - Implement read replicas

2. **Application:**
   - Render auto-scales
   - Consider load balancing

3. **CDN:**
   - Vercel provides global CDN
   - Consider additional CDN services 