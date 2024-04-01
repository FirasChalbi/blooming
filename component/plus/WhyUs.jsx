import React from 'react';

function WhyUs() {
  return (
    <section className="w3l-circles py-5 bg-white" id="circles">
      <div className="container py-md-5 py-2 HomePageProgressCircles mt-16 mb-16">
        <div className="row3 w3l-circles">
          <div className="col-lg-6 circles-left">
            <img src="https://wp.w3layouts.com/agrowfarm/wp-content/themes/agrowfarm/assets/images/a5.jpg" alt="" className="radius-image img-fluid"/>
          </div>
          <div className="col-lg-6 circles-right mt-lg-0 mt-5 align-self position-relative pad">
            <h6 className="title-subw3hny">Why Us</h6>
            <h3 className="title-w3l mb-4 text-black">Growing Healthy Food</h3>
            <p className="mb-5 text-black" >Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet elit. Non quae, fugiat nihil ad. Lorem ipsum dolor sit amet.</p>
            <div className="progress-circles-grids">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
