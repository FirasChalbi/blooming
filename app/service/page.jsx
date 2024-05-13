import React from 'react';
import Header from '../../component/Header2';
import Footer from '../../component/Footer';
import TopTitle from "../../component/common/fields/TopTitle"
import Index from "../../component/common/fields/Index"

function Page() {
  return (
    <div className="bg-gray-100">
      <Header />
      <TopTitle title="Service"/>
      <Index title="Service"/>
      
    <section id="about">
      <div class="about-wrapper container6">
        <div class="about-text">
          <p class="small">Blooming</p>
          <h2 style={{fontWeight:"700", color:"#016795"}}>Cultiver la qualité et la productivité en agriculture</h2>
          <p>
          Blooming propose une gamme complète de services agricoles, de l&apos;étude à l&apos;assistance technique. Nous offrons aux investisseurs une solution clé en main, avec un suivi personnalisé à chaque étape de leur projet.<br/>Nos équipes hautement qualifiées assurent une prise en charge totale et utilisent les dernières technologies pour améliorer les performances des exploitations agricoles, augmenter les rendements et réduire la consommation d&apos;énergie et de main-d&apos;œuvre.
          </p>
        </div>
        <div class="about-img">
          <img src="/images/serviceolive.jpg" alt="food" />
        </div>
      </div>
    
    
    <p class="mt-4 text-sm leading-7 text-gray-500 font-regular text-center">
          SERVICES
        </p>
    <h3 class="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900 text-center mb-10 sm:mb-16">
          Nos<span style={{color:"#46C7C7"}}> Services</span>
        </h3>
        <a href="#0" class="banner mb-7" aria-label="Shop now">
            <div class="banner__grid">
              <div aria-hidden="true">
                <figure class="banner__figure" style={{backgroundImage: "url(/images/service1.jpg)"}}></figure>
              </div>

              <div class="banner__text">
                <h2>Projets clé en main</h2>
                <p>Offrez des solutions complètes et sur mesure pour les projets agricoles, de la conception à la réalisation.</p>

                <p class="banner__link-wrapper">
                  <span class="banner__link">
                    <i>See More</i>
                  </span>
                </p>
              </div>
            </div>
          </a>
          <a href="#0" class="banner mb-7" aria-label="Shop now">
            <div class="banner__grid">
              <div aria-hidden="true">
                <figure class="banner__figure" style={{backgroundImage: "url(/images/service2.jpg)"}}></figure>
              </div>

              <div class="banner__text">
                <h2>Assistance technique</h2>
                <p>Avant et pendant la mise en œuvre du projet, basée sur des technologies avancées. </p>

                <p class="banner__link-wrapper">
                  <span class="banner__link">
                    <i>See More</i>
                  </span>
                </p>
              </div>
            </div>
          </a>
          <a href="#0" class="banner mb-7" aria-label="Shop now">
            <div class="banner__grid">
              <div aria-hidden="true">
                <figure class="banner__figure" style={{backgroundImage: "url(/images/service3.jpg)"}}></figure>
              </div>

              <div class="banner__text">
                <h2>Préparation de la terre</h2>
                <p>Par labourage en profondeur et analyse du sol. </p>

                <p class="banner__link-wrapper">
                  <span class="banner__link">
                    <i>See More</i>
                  </span>
                </p>
              </div>
            </div>
          </a>
          <a href="#0" class="banner mb-7" aria-label="Shop now">
            <div class="banner__grid">
              <div aria-hidden="true">
              <figure class="banner__figure" style={{backgroundImage: "url(/images/service4.jpg)"}}></figure>
              </div>

              <div class="banner__text">
                <h2>Installation de réseaux d&rsquo;irrigation souterrains.</h2>
                <p>Mettez en place des systèmes d&apos;irrigation sophistiqués et discrets pour assurer une distribution efficace de l&apos;eau aux cultures.</p>

                <p class="banner__link-wrapper">
                  <span class="banner__link">
                    <i>See More</i>
                  </span>
                </p>
              </div>
            </div>
          </a>
          <a href="#0" class="banner mb-7" aria-label="Shop now">
            <div class="banner__grid">
              <div aria-hidden="true">
                <figure class="banner__figure" style={{backgroundImage: "url(/images/service5.jpg)"}}></figure>
              </div>

              <div class="banner__text">
                <h2>Installation de stations de filtration d&rsquo;eau et de fertilisation.</h2>
                <p>Pour garantir la qualité de l&apos;eau et fournir des nutriments essentiels aux cultures.</p>

                <p class="banner__link-wrapper">
                  <span class="banner__link">
                    <i>See More</i>
                  </span>
                </p>
              </div>
            </div>
          </a>
      </section>  
      <Footer />
      
    </div>
  );
}

export default Page;