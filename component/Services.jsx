import React from 'react';
import "./service.scss"; // Assuming you have a CSS file named service.css with the corresponding styles

function Services() {
  return (
    <section className="min-h-screen bg-gray-900 text-center py-20 px-8 xl:px-0 flex flex-col justify-center">
  <span className="text-gray-400 text-lg max-w-lg mx-auto mb-2 capitalize flex items-center">what we're offering <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-indigo-600 ml-3 w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
    </svg>
  </span>
  <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-semibold max-w-3xl mx-auto mb-16 leading-snug">Services Built Specifically for your Business</h1>
  <div className="grid-offer text-left grid sm:grid-cols-2 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
    <div className="card bg-gray-800 p-10 relative">
      <div className="circle">
      </div>
      <div className="relative lg:pr-52">
        <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">Assistance technique</h2>
        <p className="text-gray-400">Assistance technique avant et pendant la mise en œuvre du projet, basée sur des technologies avancées.</p>
      </div>
      
    </div>
    <div className="card bg-gray-800 p-10 relative">
      <div className="circle">
      </div>
      <div className="relative lg:pl-48">
        <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">Préparation<br />de la terre</h2>
        <p className="text-gray-400">Préparation de la terre par labourage en profondeur et analyse du sol.</p>
      </div>
    </div>
    <div className="card bg-gray-800 p-10 relative">
      <div className="circle">
      </div>
      <div className="relative lg:pr-44">
        <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">Mise<br />à disposition</h2>
        <p className="text-gray-400">Mise à disposition de réservoirs d'eau.</p>
      </div>
    </div>
    <div className="card bg-gray-800 p-10 relative">
      <div className="circle">
      </div>
      <div className="relative lg:pl-48">
        <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl">Installation<br />de stations</h2>
        <p className="text-gray-400">Installation de stations de filtration d'eau et de fertilisation.</p>
      </div>
    </div>
  </div>
</section>
  );
}

export default Services;
