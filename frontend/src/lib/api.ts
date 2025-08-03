import axios from 'axios';
import Cookies from 'js-cookie';
import { AuthResponse, LoginCredentials, RegisterCredentials, Post, User, ApiResponse } from '@/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://linkedinmini-backend.onrender.com/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = Cookies.get('auth_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle response errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Clear token and redirect to login
      Cookies.remove('auth_token');
      window.location.href = '/auth/login';
    }
    return Promise.reject(error);
  }
);

// Auth API calls
export const authAPI = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const { data } = await api.post('/auth/login', credentials);
    return data;
  },

  register: async (credentials: RegisterCredentials): Promise<AuthResponse> => {
    const { data } = await api.post('/auth/register', credentials);
    return data;
  },
};

// Posts API calls
export const postsAPI = {
  getAllPosts: async (): Promise<ApiResponse<Post[]>> => {
    const { data } = await api.get('/posts');
    return data;
  },

  createPost: async (content: string): Promise<ApiResponse<Post>> => {
    const { data } = await api.post('/posts', { content });
    return data;
  },

  getUserPosts: async (userId: string): Promise<ApiResponse<Post[]>> => {
    const { data } = await api.get(`/posts/user/${userId}`);
    return data;
  },
};

// Users API calls
export const usersAPI = {
  getUserProfile: async (userId: string): Promise<ApiResponse<User>> => {
    const { data } = await api.get(`/users/${userId}`);
    return data;
  },

  updateProfile: async (profileData: { name: string; bio: string }): Promise<ApiResponse<User>> => {
    const { data } = await api.put('/users/profile', profileData);
    return data;
  },
};

export default api;