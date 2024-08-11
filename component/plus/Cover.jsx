'use client'
import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import Script from 'next/script';

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
        <div className="fixed inset-0 bg-black bg-opacity-75 z-99}">
          <div className="video-modal-content relative mx-[10%] mt-[50%] md:mx-[20%] md:mt-[10%]">
            <FaTimes 
              className="text-white cursor-pointer" 
              onClick={closeVideo} 
              style={{ fontSize: '24px' }}
            />
            {/* Embed Wistia Video */}
            <div className="wistia_responsive_padding" style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
              <div className="wistia_responsive_wrapper" style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}>
                <div className="wistia_embed wistia_async_hkdu5i5heu seo=true videoFoam=true" style={{ height: '100%', position: 'relative', width: '100%' }}>
                  <div className="wistia_swatch" style={{ height: '100%', left: 0, opacity: 0, overflow: 'hidden', position: 'absolute', top: 0, transition: 'opacity 200ms', width: '100%' }}>
                    <img src="https://fast.wistia.com/embed/medias/hkdu5i5heu/swatch" style={{ filter: 'blur(5px)', height: '100%', objectFit: 'contain', width: '100%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Load Wistia Scripts */}
      {showVideo && (
        <>
          <Script src="https://fast.wistia.com/embed/medias/hkdu5i5heu.jsonp" strategy="lazyOnload" />
          <Script src="https://fast.wistia.com/assets/external/E-v1.js" strategy="lazyOnload" />
        </>
      )}
    </section>
  );
}

export default Cover;
