# LinkedIn Mini Frontend

A modern, production-ready Next.js frontend for the LinkedIn Mini application.

## 🚀 Features

- **Modern UI**: Built with Next.js 15, React 19, and Tailwind CSS
- **TypeScript**: Full type safety and better development experience
- **PWA Ready**: Progressive Web App capabilities
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Performance**: Optimized images, code splitting, and caching
- **Responsive**: Mobile-first design approach
- **Security**: Security headers and best practices

## 📋 Prerequisites

- Node.js >= 18.0.0
- npm >= 8.0.0
- Backend API running (Render deployment)

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env.local
```

## ⚙️ Environment Variables

Create a `.env.local` file in the frontend directory:

```env
# Backend API URL
NEXT_PUBLIC_API_URL=https://your-backend.onrender.com
```

## 🏃‍♂️ Running Locally

```bash
# Development mode
npm run dev

# Production build
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Linting
npm run lint
```

## 🚀 Deployment on Vercel

### Option 1: One-Click Deployment

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Production ready frontend"
   git push
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure settings:
     - **Framework Preset**: Next.js
     - **Root Directory**: `frontend`
     - **Build Command**: `npm run build`
     - **Output Directory**: `.next`

3. **Environment Variables**:
   ```
   NEXT_PUBLIC_API_URL=https://your-backend.onrender.com
   ```

4. **Deploy**: Click "Deploy"

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

## 📊 Performance Optimizations

### Built-in Optimizations

- **Image Optimization**: Next.js Image component with WebP/AVIF
- **Code Splitting**: Automatic route-based code splitting
- **Tree Shaking**: Unused code elimination
- **Minification**: SWC-based minification
- **Compression**: Gzip compression enabled
- **Caching**: Static asset caching

### Custom Optimizations

- **Font Optimization**: Inter font with display swap
- **Security Headers**: XSS protection, content type sniffing
- **PWA Features**: Service worker ready
- **SEO**: Meta tags, Open Graph, Twitter Cards

## 🔒 Security Features

- **Security Headers**: X-Frame-Options, X-Content-Type-Options
- **CSP Ready**: Content Security Policy compatible
- **HTTPS Only**: Production HTTPS enforcement
- **Input Validation**: Client-side validation
- **Error Boundaries**: React error boundaries

## 📱 PWA Features

- **Manifest**: Web app manifest for app-like experience
- **Icons**: Multiple icon sizes for different devices
- **Theme Colors**: Brand-consistent theme colors
- **Offline Ready**: Service worker ready for offline support

## 🎨 UI/UX Features

- **Responsive Design**: Mobile-first approach
- **Dark Mode Ready**: CSS variables for theming
- **Loading States**: Skeleton loaders and spinners
- **Error Handling**: User-friendly error messages
- **Accessibility**: ARIA labels and keyboard navigation

## 📈 Analytics & Monitoring

### Vercel Analytics

- **Performance Monitoring**: Core Web Vitals tracking
- **Error Tracking**: Automatic error reporting
- **User Analytics**: Page views and user behavior

### Custom Analytics

Add your preferred analytics:

```typescript
// Google Analytics
export const GA_TRACKING_ID = 'G-XXXXXXXXXX'

// Google Tag Manager
export const GTM_ID = 'GTM-XXXXXXXX'
```

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**:
   - Check TypeScript errors: `npm run type-check`
   - Verify environment variables
   - Check for missing dependencies

2. **API Connection Errors**:
   - Verify `NEXT_PUBLIC_API_URL` is correct
   - Check backend is running
   - Test API endpoints directly

3. **Performance Issues**:
   - Use Vercel Analytics to identify bottlenecks
   - Check bundle size with `npm run analyze`
   - Optimize images and assets

### Development Tips

- **Hot Reload**: Changes reflect immediately in development
- **Type Checking**: Run `npm run type-check` for type errors
- **Linting**: Run `npm run lint` for code quality
- **Build Analysis**: Run `npm run analyze` for bundle analysis

## 🔄 Updates

To update your deployment:

```bash
# Make changes locally
git add .
git commit -m "Update frontend"
git push

# Vercel will auto-deploy
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript check
- `npm run analyze` - Analyze bundle size

## 🎯 Performance Targets

- **Lighthouse Score**: 90+ on all metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 📝 License

MIT License 