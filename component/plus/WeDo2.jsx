import React from 'react';

function WeDo2() {
  return (
    <section className="w3l-grids-3hny py-5 bg-[#f5f9f7] pt-14 pb-14" id="grids1">
      <div className="container py-lg-5 py-md-3 HomePageServices">
        <div className="wthree-header-section text-center">
          <h6 className="title-subw3hny"> Qu'est ce que en fait</h6>
          <h3 className="title-w3l mb-6 text-black cool">Nos Services</h3>
        </div>
        <div className=" text-center WeDoCard">
          <div className="col-lg-4 col-md-6 mt-5">
            <div className="grids3-info">
              <a href="#url" className="d-block zoom">
                <img src="https://wp.w3layouts.com/agrowfarm/wp-content/themes/agrowfarm/assets/images/a4.jpg" alt="" className="img-fluid radius-image"/>
              </a>
              <div className="grids-of-3-saas-info" >
                <h5>
                  <a href="#url" className="title" style={{ backgroundColor:"white", color:"black",fontSize:"large"}}>Projets clé en main</a>
                </h5>
                <p className="saas-para text-black"> Venenatis eros et, sed commodo risus. Nullam sit amet laoreet elit.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-5">
            <div className="grids3-info">
              <a href="#url" className="d-block zoom">
                <img src="https://wp.w3layouts.com/agrowfarm/wp-content/themes/agrowfarm/assets/images/a5.jpg" alt="" className="img-fluid radius-image"/>
              </a>
              <div className="grids-of-3-saas-info">
                <h5>
                  <a href="#url" className="title" style={{ backgroundColor:"white", color:"black",fontSize:"large"}}>Assistance technique</a>
                </h5>
                <p className="saas-para text-black">Avant et pendant la mise en œuvre du projet, basée sur des technologies avancées.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-5">
            <div className="grids3-info">
              <a href="#url" className="d-block zoom">
                <img src="https://wp.w3layouts.com/agrowfarm/wp-content/themes/agrowfarm/assets/images/a6.jpg" alt="" className="img-fluid radius-image"/>
              </a>
              <div className="grids-of-3-saas-info">
                <h5>
                  <a href="#url" className="title" style={{ backgroundColor:"white", color:"black",fontSize:"large"}}>Préparation de la terre</a>
                </h5>
                <p className="saas-para text-black">Par labourage en profondeur et analyse du sol.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="/service" >
      <p class="banner__link-wrapper text-center">
                  <span class="banner__link">
                    <i>Voir Plus</i>
                  </span>
                </p>
                </a>
    </section>
  );
}

export default WeDo2;
