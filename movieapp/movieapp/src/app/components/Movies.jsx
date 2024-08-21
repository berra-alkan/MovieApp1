


"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Modal from './Modal';

const Movies = ({ dt }) => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const imageUrl = `https://image.tmdb.org/t/p/original/${dt?.backdrop_path || dt?.poster_path}`;

  return (
    <div className="relative cursor-pointer" onClick={handleModal}>
      <Image  width={400} height={250} src={imageUrl} alt={dt?.title} className="rounded-lg shadow-md object-cover" />
      <div className='absolute bottom-0 p-3 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity bg-gradient-to-t from-black via-transparent to-transparent'>
        <div className='text-xl font-bold text-white'>{dt?.title}</div>
        <div className='text-sm text-white'>{dt?.release_date}</div>
        <div className='text-yellow-400 text-sm'>{dt?.vote_average}</div>
      </div>

     
      <Modal show={showModal} onClose={handleModal} imageUrl={imageUrl} className="max-w-xs">
        <h2 className="text-lg font-bold mb-2">{dt?.title}</h2>
        <p className="text-sm mb-1"><strong>Çıkış Tarihi:</strong> {dt?.release_date}</p>
        <p className="text-sm mb-1"><strong>Oy Ortalaması:</strong> {dt?.vote_average}</p>
        <p className="text-sm"><strong>Özet:</strong> {dt?.overview}</p>
      </Modal>
    </div>
  );
};

export default Movies;