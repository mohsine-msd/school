export default function LoadingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
      <div className="text-center">
        {/* Spinner */}
        <div className="relative inline-block">
          <div className="w-20 h-20 border-4 border-blue-200 rounded-full"></div>
          <div className="w-20 h-20 border-4 border-blue-600 rounded-full border-t-transparent animate-spin absolute top-0 left-0"></div>
        </div>
        
        {/* Loading Text */}
        <h2 className="mt-8 text-2xl font-semibold text-blue-900">Loading</h2>
        <p className="mt-2 text-blue-600">Please wait while we prepare everything...</p>
        
        {/* Pulsing Dots */}
        <div className="flex justify-center items-center space-x-2 mt-6">
          <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
}