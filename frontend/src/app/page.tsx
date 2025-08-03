'use client';

import { useState, useEffect } from 'react';
import { postsAPI } from '@/lib/api';
import { authUtils } from '@/lib/auth';
import { Post } from '@/types';
import { useRouter } from 'next/navigation';
import PostForm from '@/components/posts/PostForm';
import PostCard from '@/components/posts/PostCard';
import Loading from '@/components/ui/Loading';
import ErrorMessage from '@/components/ui/ErrorMessage';

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      const isAuth = authUtils.isAuthenticated();
      setIsAuthenticated(isAuth);
      
      if (!isAuth) {
        router.push('/auth/login');
        return;
      }
    };

    checkAuth();
  }, [router]);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await postsAPI.getAllPosts();
      setPosts(response.data);
      setError('');
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to load posts';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchPosts();
    }
  }, [isAuthenticated]);

  const handlePostCreated = () => {
    fetchPosts(); // Refresh posts after creating a new one
  };

  if (loading) {
    return <Loading />;
  }

  if (!isAuthenticated) {
    return null; // Will redirect to login
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Feed</h1>
        <p className="text-gray-600">Connect with professionals and share your thoughts</p>
      </div>

      <PostForm onPostCreated={handlePostCreated} />

      {error && <ErrorMessage message={error} />}

      <div className="space-y-4">
        {posts.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">No posts yet. Be the first to share something!</p>
          </div>
        ) : (
          posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))
        )}
      </div>
    </div>
  );
}