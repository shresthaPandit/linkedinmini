# 🚀 LinkedIn Mini Clone

A modern, full-stack LinkedIn clone built with Next.js, Node.js, and MongoDB. Connect, share posts, and build your professional network!

## ✨ Features

- 🔐 **User Authentication** - Secure login/register with JWT
- 📝 **Post Creation** - Share your thoughts and updates
- 👥 **User Profiles** - View and edit professional profiles
- 💬 **Real-time Feed** - See posts from all users
- 🎨 **Modern UI** - Beautiful, responsive design with Tailwind CSS
- 📱 **Mobile Friendly** - Works perfectly on all devices

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Modern styling
- **Axios** - HTTP client for API calls

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **JWT** - Authentication
- **bcryptjs** - Password hashing

## 🚀 Live Demo

- **Frontend**: [https://linkedinmini.vercel.app](https://linkedinmini.vercel.app)
- **Backend API**: [https://linkedinmini-backend.onrender.com](https://linkedinmini-backend.onrender.com)

## 📦 Quick Start

### Prerequisites
- Node.js 18+
- MongoDB Atlas account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shresthaPandit/linkedinmini.git
   cd linkedinmini
   ```

2. **Install dependencies**
   ```bash
   # Backend
   cd backend
   npm install
   
   # Frontend
   cd ../frontend
   npm install
   ```

3. **Environment Setup**
   ```bash
   # Backend (.env)
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5000
   
   # Frontend (.env.local)
   NEXT_PUBLIC_API_URL=http://localhost:5000
   ```

4. **Run the application**
   ```bash
   # Backend (Terminal 1)
   cd backend
   npm run dev
   
   # Frontend (Terminal 2)
   cd frontend
   npm run dev
   ```

5. **Open your browser**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Posts
- `GET /api/posts` - Get all posts
- `POST /api/posts` - Create new post
- `GET /api/posts/user/:userId` - Get user posts

### Users
- `GET /api/users/:userId` - Get user profile
- `PUT /api/users/profile` - Update profile

## 🎯 Key Features

### User Management
- Secure registration and login
- JWT-based authentication
- Profile management with bio updates

### Post System
- Create and share posts
- View all posts in chronological order
- User-specific post feeds

### Modern UI/UX
- Responsive design for all devices
- Clean, professional interface
- Smooth animations and transitions

## 🚀 Deployment

This project is deployed using:
- **Frontend**: Vercel (Next.js optimized)
- **Backend**: Render (Node.js hosting)
- **Database**: MongoDB Atlas (Cloud database)

<<<<<<< HEAD
## 📱 Screenshots

![Home Page](https://via.placeholder.com/800x400/3B82F6/FFFFFF?text=LinkedIn+Mini+Home)
![Profile Page](https://via.placeholder.com/800x400/10B981/FFFFFF?text=User+Profile)
![Post Creation](https://via.placeholder.com/800x400/F59E0B/FFFFFF?text=Create+Post)

=======

>>>>>>> 2d78a74c160fe786d45c61592c54c730bcbbfdab
## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with ❤️ using Next.js and Node.js
- Inspired by LinkedIn's professional networking features
- Deployed on Vercel and Render for optimal performance

---

<<<<<<< HEAD
**Ready to build your professional network?** [Try the live demo!](https://linkedinmini.vercel.app) 
=======
**Ready to build your professional network?** [Try the live demo!](https://linkedinmini.vercel.app)
>>>>>>> 2d78a74c160fe786d45c61592c54c730bcbbfdab
