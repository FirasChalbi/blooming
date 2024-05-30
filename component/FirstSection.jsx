"use client"
import React, { useState, useEffect } from 'react';
import Button from "../component/common/buttons/Button"
import bvideo from '../public/videos/bvideo.mp4';
import placeholderImage from '../public/images/placeholder.jpg'; // Import your placeholder image here


function FirstSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false); // State to track video loading

  // Function to handle slide change
  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  // Function to handle automatic slide change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(activeSlide => (activeSlide + 1) % 3); // Change 5 to the number of slides you have
    }, 6000); // Change 5000 to the desired interval in milliseconds
    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  return (
    <section className="home">

      <video className={`video-slide ${activeSlide === 0 ? 'active' : ''}`} src="/videos/olivelow.mp4" autoPlay muted loop></video>
      {/* Add other video slides similarly */}
      <video className={`video-slide ${activeSlide === 1 ? 'active' : ''}`} src="/videos/2.mp4" autoPlay muted loop></video>
      <video className={`video-slide ${activeSlide === 2 ? 'active' : ''}`} src="/videos/olivelow.mp4" autoPlay muted loop></video>
      {/* <video className={`video-slide ${activeSlide === 3 ? 'active' : ''}`} src="/videos/bvideo.mp4" autoPlay muted loop></video>
      <video className={`video-slide ${activeSlide === 4 ? 'active' : ''}`} src="/videos/bvideo.mp4" autoPlay muted loop></video> */}
      <div className={`content ${activeSlide === 0 ? 'active' : ''}`}>
      <h1 style={{fontSize:"13px", letterSpacing:"3px", color:"#46C7C7"}}><span style={{fontSize:"13px", letterSpacing:"3px", color:"white", textTransform: "uppercase"}}>Bienvenue à</span> BLOOMING</h1>
      <h1>Agriculture Durable<br/><span>Rentable</span></h1>
      <a href="/propos" class="btn btn-style btn-outline-light mt-9" style={{backgroundColor:"#46C7C7", color:"white", borderColor:"#46C7C7"}}>Voir Plus</a>
      </div>
      <div className={`content ${activeSlide === 2 ? 'active' : ''}`}>
      <h1 style={{fontSize:"13px", letterSpacing:"3px", color:"#46C7C7"}}><span style={{fontSize:"13px", letterSpacing:"3px", color:"white", textTransform: "uppercase"}}>Bienvenue à</span> BLOOMING</h1>
      <h1>Agriculture Durable<br/><span>Rentable</span></h1>
      <a href="/propos" class="btn btn-style btn-outline-light mt-9" style={{backgroundColor:"#46C7C7", color:"white", borderColor:"#46C7C7"}}>Voir Plus</a>
      </div>
      <div className={`content ${activeSlide === 1 ? 'active' : ''}`}>
      <h1 style={{fontSize:"13px", letterSpacing:"3px", color:"#46C7C7"}}><span style={{fontSize:"13px", letterSpacing:"3px", color:"white", textTransform: "uppercase"}}>Bienvenue à</span> BLOOMING</h1>
      <h1>Agriculture Durable<br/><span>Rentable</span></h1>  
      <a href="/propos" class="btn btn-style btn-outline-light mt-9" style={{backgroundColor:"#46C7C7", color:"white", borderColor:"#46C7C7"}}>Voir Plus</a>
      </div>
      {/* <div className={`content ${activeSlide === 2 ? 'active' : ''}`}>
      <div class="container22 HomePageHeroHeader">
        <div class="main-content">
          <div class="w3lbanner-left">
            <h6>
              Welcome to Agrowfarm            </h6>
            <h4>
              Pure Organic Products            </h4>
            <a href="about" class="btn btn-style btn-secondary mt-md-5 mt-4">Read More</a>
          </div>
          <div class="w3lbanner-right">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus sapiente commodi maiores ullam.            </p>
          </div>
        </div>
      </div>
      </div> */}
      {/* <div className={`content ${activeSlide === 3 ? 'active' : ''}`}>
        <h1>Road Trip.<br /><span>Together</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <a href="#">Read More</a>
      </div>
      <div className={`content ${activeSlide === 4 ? 'active' : ''}`}>
        <h1>Feel Nature.<br /><span>Relax</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <a href="#">Read More</a>
      </div> */}

      <div className="media-icons">
        <a href="https://www.facebook.com/profile.php?id=61557158474316">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg>
        </a>
        <a href="#">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
        </a>
        <a href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        </a>
      </div>

      <div className="slider-navigation">
        {/* Slider navigation buttons */}
        {[...Array(3).keys()].map((_, index) => (
          <div className={`nav-btn ${activeSlide === index ? 'active' : ''}`} onClick={() => handleSlideChange(index)} key={index}></div>
        ))}
      </div>
      {/* <div id="accesbas" style={{ bottom: '52px', zIndex: '999' }}>
            <a href="#nos-biens" className="lieninterieur" style={{ minWidth: '267px' }}>
                <div className="carre" style={{ transform: 'translate(0px, 0px)', opacity: 1, visibility: 'inherit' }}>
                    <img src="Images/flbas.png" alt="" style={{ transform: 'translate3d(0px, 0px)' }} />
                    <img src="Images/flbas.png" alt="" style={{ transform: 'translate3d(0px, 44px)' }} />
                </div>
                <span style={{ transform: 'translate(0px, 0px)', opacity: 1, visibility: 'inherit' }}>Nos biens en vente</span>
            </a>
        </div> */}
    </section>
  );
}

export default FirstSection;

