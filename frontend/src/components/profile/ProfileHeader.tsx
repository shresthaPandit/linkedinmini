import { User } from '@/types';
import { formatDistanceToNow } from 'date-fns';

interface ProfileHeaderProps {
  user: User;
  postCount: number;
  showEditButton?: boolean;
  onEditClick?: () => void;
}

export default function ProfileHeader({ 
  user, 
  postCount, 
  showEditButton = false, 
  onEditClick 
}: ProfileHeaderProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-6">
          {/* Avatar */}
          <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">
            {user.name.charAt(0).toUpperCase()}
          </div>
          
          {/* Profile Info */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{user.name}</h1>
            <p className="text-gray-600 mb-4">{user.email}</p>
            
            {user.bio && (
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">About</h3>
                <p className="text-gray-700 leading-relaxed">{user.bio}</p>
              </div>
            )}
            
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <span>Member since {formatDistanceToNow(new Date(user.createdAt), { addSuffix: true })}</span>
              <span>{postCount} posts</span>
            </div>
          </div>
        </div>

        {/* Edit Button */}
        {showEditButton && onEditClick && (
          <button
            onClick={onEditClick}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
} 