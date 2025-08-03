import Cookies from 'js-cookie';
import { User } from '@/types';

const TOKEN_KEY = 'auth_token';
const USER_KEY = 'user_data';

export const authUtils = {
  setAuth: (token: string, user: User) => {
    console.log('Setting auth:', { token: token.substring(0, 20) + '...', user });
    Cookies.set(TOKEN_KEY, token, { expires: 30 }); // 30 days
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    // Trigger storage event for other components
    window.dispatchEvent(new Event('storage'));
  },

  getToken: (): string | null => {
    return Cookies.get(TOKEN_KEY) || null;
  },

  getUser: (): User | null => {
    if (typeof window === 'undefined') return null;
    try {
      const userData = localStorage.getItem(USER_KEY);
      const parsed = userData ? JSON.parse(userData) : null;
      console.log('Getting user:', parsed);
      return parsed;
    } catch (error) {
      console.error('Error parsing user data:', error);
      return null;
    }
  },

  clearAuth: () => {
    console.log('Clearing auth');
    Cookies.remove(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    // Trigger storage event for other components
    window.dispatchEvent(new Event('storage'));
  },

  isAuthenticated: (): boolean => {
    const token = Cookies.get(TOKEN_KEY);
    const user = authUtils.getUser();
    const isAuth = !!(token && user);
    console.log('Checking auth:', { hasToken: !!token, hasUser: !!user, isAuth });
    return isAuth;
  },

  // Update user data (for profile updates)
  updateUser: (userData: User) => {
    console.log('Updating user:', userData);
    localStorage.setItem(USER_KEY, JSON.stringify(userData));
    window.dispatchEvent(new Event('storage'));
  }
};