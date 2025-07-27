import React from 'react';
import Button from '@/components/common/Button'; // ✅ Required import

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">About Page</h1>
      <p className="text-lg text-gray-700 mb-6">Welcome to the About page!</p>
      
      {/* ✅ Use Button component */}
      <Button>
        Click Me
      </Button>
    </div>
  );
}