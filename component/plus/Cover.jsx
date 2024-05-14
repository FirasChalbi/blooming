'use client'
import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

function Cover() {
  const [showVideo, setShowVideo] = useState(false);

  const openVideo = () => {
    setShowVideo(true);
  };

  const closeVideo = () => {
    setShowVideo(false);
  };

  return (
    <section className="cover relative">
      <div className="container10">
        <div className="row10 items-center">
          <div className="col">
            <div className="title-content text-left">
              <h6 className="title-subw3hny">Découvrons ensemble</h6>
              <h3 className="title-w3l two pe-lg-5">
                Arroser l'avenir de l'agriculture avec Blooming AgriAfrica
              </h3>
              <a href="/product" className="btn btn-style btn-outline-light mt-sm-5 mt-4">
                Voir Plus
              </a>
            </div>
          </div>
          <div className="col-lg-5 history-info mt-5 ps-lg-5 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                  className="video-playicon"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  onClick={openVideo}
                >
                  <FaPlay className="text-black" />
                </span>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="video-modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="video-modal-content relative">
          <FaTimes 
  className="text-white cursor-pointer" 
  onClick={closeVideo} 
  style={{ fontSize: '24px' }}
/>
            {/* Your video goes here */}
            <video
              width="560"
              height="315"
              controls
              autoPlay
            >
              <source src="/videos/3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
}

export default Cover;
