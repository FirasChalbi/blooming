import React from 'react';

function WhyUs() {
  return (
    <section className="w3l-circles py-5 bg-white" id="assistance">
      <div className="container py-md-5 py-2 HomePageProgressCircles mt-16 mb-16">
        <div className="row3 w3l-circles">
          <div className="col-lg-6 circles-left">
            <img src="/images/olive10.jpg" alt="" className="radius-image img-fluid"/>
          </div>
          <div className="col-lg-6 circles-right mt-lg-0 mt-5 align-self position-relative pad">
            <h6 className="title-subw3hny">Pourquoi Nous</h6>
            <h3 className="title-w3l mb-4 text-black">Assistance technique</h3>
            <p className="mb-5 text-black" >
Notre équipe d'experts qualifiés se tient à disposition pour offrir conseils et assistance personnalisés aux clients et visiteurs dans le choix des solutions agricoles les mieux adaptées à leurs projets spécifiques. Blooming fournit un équipement de pointe et des fertilisants de qualité pour répondre aux besoins uniques de chaque exploitation, tout en garantissant l'efficacité et le succès des initiatives agricoles.</p>
            {/* <div className="progress-circles-grids">
              <div className="progress-circles">
                <div className="progress-left">
                  <div className="circle1">
                    <div 
                      data-dimension="80" 
                      data-text="85%" 
                      data-fontsize="18" 
                      data-percent="85" 
                      data-fgcolor="#006837" 
                      data-bgcolor="#f3f5f4" 
                      data-width="10" 
                      data-bordersize="4" 
                      data-animationstep="2" 
                      className="circliful" 
                      style={{ width: '80px' }} // Adjusted inline style
                    >
                      <span className="circle-text" style={{ lineHeight: '80px', fontSize: '18px' }}>85%</span>
                      <canvas width="80" height="80"></canvas>
                    </div>
                  </div>
                  <div className="progress-right">
                    <h4 className='text-black'>Organic Solutions</h4>
                    <p className="mb-lg-5 text-black">Lorem ipsum feugiat dolor sit amet.</p>
                  </div>
                </div>
              </div>
              <div className="progress-circles">
                <div className="progress-left">
                  <div className="circle1">
                    <div 
                      data-dimension="80" 
                      data-text="95%" 
                      data-fontsize="18" 
                      data-percent="95" 
                      data-fgcolor="#006837" 
                      data-bgcolor="#f3f5f4" 
                      data-width="10" 
                      data-bordersize="4" 
                      data-animationstep="2" 
                      className="circliful" 
                      style={{ width: '80px' }} // Adjusted inline style
                    >
                      <span className="circle-text" style={{ lineHeight: '80px', fontSize: '18px' }}>95%</span>
                      <canvas width="80" height="80"></canvas>
                    </div>
                  </div>
                  <div className="progress-right">
                    <h4 className='text-black'>Quality Agriculture</h4>
                    <p className="mb-lg-5 text-black">Lorem ipsum feugiat dolor sit amet.</p>
                  </div>
                </div>
              </div>
            </div> */}
            <a href="/contact" className="btn btn-style btn-outline-light mt-9" style={{backgroundColor:"#46C7C7", color:"white"}}>DEMANDEZ L'ASSISTANCE</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
