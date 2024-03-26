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
          <h2>Cultivating Quality and Productivity in Agriculture</h2>
          <p>
          Notre mission est de fournir des solutions intégrées et de haute qualité pour une agriculture intelligente et hautement productive. Nous offrons un soutien et des conseils à toutes les étapes de la mise en œuvre du projet, dans le but d&rsquo;améliorer la qualité de production et d&rsquo;augmenter la productivité, tout en garantissant des rendements financiers pour nos investisseurs.
          </p>
        </div>
        <div class="about-img">
          <img src="https://i.postimg.cc/mgpwzmx9/about-photo.jpg" alt="food" />
        </div>
      </div>
    
    
    <p class="mt-4 text-sm leading-7 text-gray-500 font-regular text-center">
          SERVICES
        </p>
    <h3 class="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900 text-center mb-10 sm:mb-16">
          Our<span style={{color:"#46C7C7"}}> Services</span>
        </h3>
        <a href="#0" class="banner mb-7" aria-label="Shop now">
            <div class="banner__grid">
              <div aria-hidden="true">
                <figure class="banner__figure" style={{backgroundImage: "url(/images/service1.jpg)"}}></figure>
              </div>

              <div class="banner__text">
                <h2>Projets clé en main</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>

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
                <p>Assistance technique avant et pendant la mise en œuvre du projet, basée sur des technologies avancées. </p>

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
                <p>Préparation de la terre par labourage en profondeur et analyse du sol. </p>

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
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>

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
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>

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