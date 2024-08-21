


import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Image from 'next/image';
import Loading from '../loading'; 

const Modal = ({ show, onClose, children, imageUrl }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [show]);

  if (!show) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full max-h-[90vh] relative overflow-auto">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl z-10 transition-shadow duration-300 ease-in-out hover:shadow-lg"
        >
          &times;
        </button>
        {loading ? (
          <Loading />
        ) : (
          <>
            {imageUrl && (
              <div className="relative mb-4 w-full h-80">
                <Image 
                  src={imageUrl} 
                  alt="Movie Poster" 
                  layout="fill" 
                  objectFit="cover" 
                  className="rounded-lg"
                />
              </div>
            )}
            <div className="text-black">
              {children}
            </div>
          </>
        )}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
