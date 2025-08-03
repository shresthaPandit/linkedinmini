# LinkedIn Mini - Professional Networking Platform

A full-stack LinkedIn clone built with modern technologies, featuring user authentication, post creation, profile management, and real-time interactions.

## 🚀 Live Demo

- **Frontend**: [https://linkedinmini-787ml7f56-shresthapandits-projects.vercel.app](https://linkedinmini-787ml7f56-shresthapandits-projects.vercel.app)
- **Backend API**: [https://linkedinmini-backend.onrender.com](https://linkedinmini-backend.onrender.com)

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Hooks
- **HTTP Client**: Axios
- **Authentication**: JWT with js-cookie
- **Deployment**: Vercel

### Backend
- **Runtime**: Node.js 18+
- **Framework**: Express.js 4.18.2
- **Database**: MongoDB Atlas
- **ORM**: Mongoose
- **Authentication**: JWT (jsonwebtoken)
- **Security**: bcryptjs, helmet, express-rate-limit
- **Deployment**: Render

### Database
- **Platform**: MongoDB Atlas
- **Features**: Cloud-hosted, automatic backups, scaling

## 📋 Features

### Core Features
- ✅ **User Authentication**: Register, login, logout with JWT
- ✅ **Profile Management**: View and edit user profiles
- ✅ **Post Creation**: Create, view, and manage posts
- ✅ **User Feed**: View all posts with author information
- ✅ **Responsive Design**: Mobile-first approach
- ✅ **Real-time Updates**: Dynamic content loading

### Security Features
- ✅ **JWT Authentication**: Secure token-based auth
- ✅ **Password Hashing**: bcryptjs for password security
- ✅ **Rate Limiting**: Protection against abuse
- ✅ **CORS Protection**: Secure cross-origin requests
- ✅ **Input Validation**: Server-side validation
- ✅ **Security Headers**: Helmet for security headers

### Performance Features
- ✅ **Code Splitting**: Automatic route-based splitting
- ✅ **Image Optimization**: Next.js Image component
- ✅ **Caching**: Static asset caching
- ✅ **Compression**: Gzip compression
- ✅ **SEO Optimized**: Meta tags, Open Graph

## 🚀 Quick Start

### Prerequisites
- Node.js >= 18.0.0
- npm >= 8.0.0
- MongoDB Atlas account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shresthaPandit/linkedinmini.git
   cd linkedinmini
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Set up environment variables**

   **Backend (.env)**
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database
   JWT_SECRET=your-super-secret-jwt-key
   NODE_ENV=production
   PORT=5000
   FRONTEND_URL=http://localhost:3000
   ```

   **Frontend (.env.local)**
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000
   ```

5. **Run the application**

   **Backend (Terminal 1)**
   ```bash
   cd backend
   npm start
   ```

   **Frontend (Terminal 2)**
   ```bash
   cd frontend
   npm run dev
   ```

6. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 👤 Demo Credentials

### Test User Account
- **Email**: `demo@linkedinmini.com`
- **Password**: `demo123`

### Admin Account
- **Email**: `admin@linkedinmini.com`
- **Password**: `admin123`

*Note: These are demo accounts. You can also register new accounts.*

## 📊 API Endpoints

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

### Health Check
- `GET /health` - Server health status

## 🏗️ Project Structure

```
linkedinmini/
├── backend/                 # Node.js/Express API
│   ├── src/
│   │   ├── config/         # Database configuration
│   │   ├── controller/     # Route controllers
│   │   ├── middleware/     # Auth middleware
│   │   ├── models/         # Mongoose models
│   │   └── routes/         # API routes
│   ├── server.js           # Express server
│   └── package.json
├── frontend/               # Next.js application
│   ├── src/
│   │   ├── app/           # Next.js app router
│   │   ├── components/    # React components
│   │   ├── lib/          # Utilities and API
│   │   └── types/        # TypeScript types
│   ├── public/           # Static assets
│   └── package.json
└── README.md
```

## 🔧 Development

### Available Scripts

**Backend**
```bash
npm start          # Start production server
npm run dev        # Start development server with nodemon
```

**Frontend**
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
npm run type-check # Run TypeScript check
```

### Environment Variables

**Backend**
- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT tokens
- `NODE_ENV`: Environment (development/production)
- `PORT`: Server port (default: 5000)
- `FRONTEND_URL`: Frontend URL for CORS

**Frontend**
- `NEXT_PUBLIC_API_URL`: Backend API URL

## 🚀 Deployment

### Backend (Render)
1. Connect GitHub repository to Render
2. Set environment variables
3. Deploy automatically on push

### Frontend (Vercel)
1. Connect GitHub repository to Vercel
2. Set environment variables
3. Deploy automatically on push

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcryptjs for password security
- **Rate Limiting**: Protection against abuse (100 requests/15min)
- **CORS Protection**: Secure cross-origin requests
- **Input Validation**: Server-side validation
- **Security Headers**: Helmet for security headers
- **Error Handling**: Comprehensive error responses

## 📱 Features

### User Experience
- **Responsive Design**: Mobile-first approach
- **Real-time Updates**: Dynamic content loading
- **Loading States**: Skeleton loaders and spinners
- **Error Handling**: User-friendly error messages
- **Form Validation**: Client and server-side validation

### Performance
- **Code Splitting**: Automatic route-based splitting
- **Image Optimization**: Next.js Image component
- **Caching**: Static asset caching
- **Compression**: Gzip compression
- **SEO Optimized**: Meta tags, Open Graph

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Shrestha Pandit**
- GitHub: [@shresthaPandit](https://github.com/shresthaPandit)
- LinkedIn: [Shrestha Pandit](https://linkedin.com/in/shresthapandit)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting and deployment
- Render for backend hosting
- MongoDB Atlas for database hosting
- Tailwind CSS for styling utilities

---

**Built with ❤️ using Next.js, Express.js, and MongoDB**
