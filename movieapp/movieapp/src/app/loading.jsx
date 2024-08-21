import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 border-4 border-t-transparent border-pink-500 border-solid rounded-full animate-spin"></div>
        <span className="text-xl font-semibold text-gray-100">Yükleniyor...</span>
      </div>
    </div>
  );
};

export default Loading;
