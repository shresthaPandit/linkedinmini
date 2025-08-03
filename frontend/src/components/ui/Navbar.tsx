'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { authUtils } from '@/lib/auth';
import { User } from '@/types';

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      const isAuth = authUtils.isAuthenticated();
      const userData = authUtils.getUser();
      setIsAuthenticated(isAuth);
      setUser(userData);
      setIsLoading(false);
    };

    checkAuth();

    // Listen for storage changes (login/logout events)
    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  const handleLogout = () => {
    authUtils.clearAuth();
    setIsAuthenticated(false);
    setUser(null);
    window.location.href = '/auth/login';
  };

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-blue-600">
            LinkedIn Mini
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-4">
            {isLoading ? (
              <div className="text-gray-500">Loading...</div>
            ) : isAuthenticated ? (
              <>
                <Link 
                  href="/" 
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md"
                >
                  Home
                </Link>
                <Link 
                  href={user?._id ? `/profile/${user._id}` : '#'} 
                  className={`px-3 py-2 rounded-md ${
                    user?._id 
                      ? 'text-gray-700 hover:text-blue-600' 
                      : 'text-gray-400 cursor-not-allowed'
                  }`}
                  onClick={(e) => {
                    if (!user?._id) {
                      e.preventDefault();
                    }
                  }}
                >
                  Profile
                </Link>
                <span className="text-gray-500">
                  Welcome, {user?.name}
                </span>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link 
                  href="/auth/login" 
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md"
                >
                  Login
                </Link>
                <Link 
                  href="/auth/register" 
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}