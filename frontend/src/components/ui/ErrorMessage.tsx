interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

export default function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <div className="bg-red-50 border border-red-200 rounded-md p-4 text-center">
      <p className="text-red-600 mb-2">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="text-blue-600 hover:text-blue-800 underline"
        >
          Try Again
        </button>
      )}
    </div>
  );
}