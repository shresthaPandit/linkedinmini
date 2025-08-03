const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/database');
require('dotenv').config();

// Import routes
const authRoutes = require('./src/routes/auth');
const postRoutes = require('./src/routes/post');
const userRoutes = require('./src/routes/user');

const app = express();

// Connect to database
connectDB();

// Debug CORS origins
console.log('Allowed CORS origins:', [
  process.env.FRONTEND_URL || 'https://linkedinmini.vercel.app',
  'https://linkedinmini-pxciciuns-shresthapandits-projects.vercel.app',
  'http://localhost:3000'
]);

// Middleware
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    const allowedOrigins = [
      process.env.FRONTEND_URL || 'https://linkedinmini.vercel.app',
      'https://linkedinmini-pxciciuns-shresthapandits-projects.vercel.app',
      'http://localhost:3000'
    ];
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      console.log('CORS blocked origin:', origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  optionsSuccessStatus: 200
}));
app.use(express.json());

// Handle preflight requests
app.options('*', cors());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'LinkedIn Mini API is running!' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});