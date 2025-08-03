'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { usersAPI, postsAPI } from '@/lib/api';
import { authUtils } from '@/lib/auth';
import { User, Post } from '@/types';
import PostCard from '@/components/posts/PostCard';
import ProfileHeader from '@/components/profile/ProfileHeader';
import Loading from '@/components/ui/Loading';
import ErrorMessage from '@/components/ui/ErrorMessage';

export default function ProfilePage() {
  const params = useParams();
  const router = useRouter();
  const userId = params.userId as string;
  
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const checkAuth = () => {
      const isAuth = authUtils.isAuthenticated();
      const userData = authUtils.getUser();
      setCurrentUser(userData);
    };

    checkAuth();
  }, []);

  useEffect(() => {
    const fetchProfileData = async () => {
      // Validate userId
      if (!userId || userId === 'undefined') {
        setError('Invalid user ID');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError('');

        // Fetch user profile
        const userResponse = await usersAPI.getUserProfile(userId);
        setUser(userResponse.data);

        // Fetch user posts
        const postsResponse = await postsAPI.getUserPosts(userId);
        setPosts(postsResponse.data);
      } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to load profile';
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchProfileData();
    }
  }, [userId]);

  const isOwnProfile = currentUser?._id === userId;

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (!user) {
    return <ErrorMessage message="User not found" />;
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Profile Header */}
      <ProfileHeader 
        user={user}
        postCount={posts.length}
        showEditButton={isOwnProfile}
        onEditClick={() => router.push('/profile/edit')}
      />

      {/* Posts Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {user.name}&apos;s Posts
        </h2>
        
        {posts.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-500 text-lg">
              {user.name} hasn&apos;t posted anything yet.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}