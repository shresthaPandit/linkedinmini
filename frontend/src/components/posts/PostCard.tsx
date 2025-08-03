import Link from 'next/link';
import { Post } from '@/types';
import { formatDistanceToNow } from 'date-fns';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <div className="flex items-start space-x-3 mb-4">
        <Link href={`/profile/${post.author._id}`} className="flex-shrink-0">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold hover:bg-blue-600 transition-colors">
            {post.author.name.charAt(0).toUpperCase()}
          </div>
        </Link>
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <Link 
              href={`/profile/${post.author._id}`}
              className="font-semibold text-gray-900 hover:text-blue-600 transition-colors"
            >
              {post.author.name}
            </Link>
            <span className="text-sm text-gray-500">
              {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
            </span>
          </div>
          {post.author.bio && (
            <p className="text-sm text-gray-600 mt-1">{post.author.bio}</p>
          )}
        </div>
      </div>
      
      <div className="mb-4">
        <p className="text-gray-900 leading-relaxed">{post.content}</p>
      </div>
      
      <div className="flex items-center space-x-4 text-sm text-gray-500">
        <button className="flex items-center space-x-1 hover:text-blue-600 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
          </svg>
          <span>Like ({post.likes.length})</span>
        </button>
        
        <button className="flex items-center space-x-1 hover:text-blue-600 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span>Comment ({post.comments.length})</span>
        </button>
      </div>
    </div>
  );
}