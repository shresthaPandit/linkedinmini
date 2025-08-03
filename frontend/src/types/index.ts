// User types
export interface User {
    _id: string;
    name: string;
    email: string;
    bio: string;
    avatar?: string;
    createdAt: string;
    updatedAt: string;
  }
  
  // Post types
  export interface Post {
    _id: string;
    content: string;
    author: User;
    likes: string[];
    comments: Comment[];
    createdAt: string;
    updatedAt: string;
  }
  
  export interface Comment {
    _id: string;
    user: User;
    text: string;
    createdAt: string;
  }
  
  // Auth types
  export interface AuthResponse {
    success: boolean;
    data: {
      user: User;
      token: string;
    };
  }
  
  export interface LoginCredentials {
    email: string;
    password: string;
  }
  
  export interface RegisterCredentials {
    name: string;
    email: string;
    password: string;
    bio?: string;
  }
  
  // API Response types
  export interface ApiResponse<T> {
    success: boolean;
    data: T;
    error?: string;
  }