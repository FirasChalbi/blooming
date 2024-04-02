"use client"
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppButton = () => {
  const handleClick = () => {
    // Replace the phone number and message text with your own
    const phoneNumber = '58417802';
    const message = encodeURIComponent("Bonjour! Je voudrais plus d'informations sur Blooming.");
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`, '_blank');
  };

  return (
    <div className="float ">
      <button className="whatsapp-button" onClick={handleClick}>
        <FontAwesomeIcon icon={faWhatsapp} className="my-float" />
      </button>
    </div>
  );
};

export default WhatsAppButton;
