import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-9xl font-extrabold text-gray-200">404</h1>
      
      <h2 className="text-3xl font-bold text-slate-900 mt-4 mb-2">
        Page not found
      </h2>
      
      <p className="text-gray-500 mb-8 max-w-md">
        Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
      </p>

      <Link 
        to="/" 
        className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full font-medium hover:bg-slate-800 transition-colors"
      >
        <Home className="w-4 h-4" />
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;