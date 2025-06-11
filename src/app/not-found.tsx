'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center relative bg-slate-900">
      <div className="max-w-4xl mx-auto px-6 text-center z-10">
        <h1 className="text-8xl font-bold text-white mb-6">404</h1>
        <h2 className="text-4xl font-semibold text-cyan-400 mb-8">Page Not Found</h2>
        <p className="text-xl text-gray-300 mb-12">
          Oops! The page you're looking for seems to have drifted into space.
        </p>
        <Link 
          href="/"
          className="inline-block bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
} 