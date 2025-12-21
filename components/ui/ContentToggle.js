'use client';

import { useState } from 'react';

const ContentToggle = ({ onToggle, initialView = 'blog' }) => {
  const [activeView, setActiveView] = useState(initialView);

  const handleToggle = (view) => {
    setActiveView(view);
    onToggle(view);
  };

  return (
    <div className="flex items-center justify-center mb-12">
      <div className="flex items-center bg-gray-100 rounded-full p-1">
        <button
          onClick={() => handleToggle('blog')}
          className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
            activeView === 'blog'
              ? 'bg-white text-gray-900 shadow-md'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Blog
        </button>
        <button
          onClick={() => handleToggle('projects')}
          className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
            activeView === 'projects'
              ? 'bg-white text-gray-900 shadow-md'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Projects
        </button>
      </div>
    </div>
  );
};

export default ContentToggle;
