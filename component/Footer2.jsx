import React from 'react';

function Footer2() {
  return (
    <footer className="w3l-footer-29-main">
      <div className="footer-29-w3l py-5">
        <div className="container pt-md-5 AgrowfarmFooter">
          <div className="w3l-footer-text-style">
            <div className="footer-list-cont d-sm-flex align-items-center justify-content-between mb-5">
              <h2 className="w3logo">
                <a className="navbar-brand" href="https://wp.w3layouts.com/agrowfarm/">
                  Agrow<span className="sub-color">farm</span>
                </a>
              </h2>
              <div className="main-social-footer-29 FooterSocial">
                <ul>
                  <li className="w3follow mt-sm-0 mt-4">Follows On : </li>
                  <li><a href="https://www.facebook.com/w3layouts/" className="facebook"><i className="fab fa-facebook-f"></i></a></li>
                  
                  <li><a href="https://instagram.com/company/w3layouts" className="instagram"><i className="fab fa-instagram"></i></a></li>
                  <li><a href="https://linkedin.com/company/w3layouts" className="linkedin"><i className="fab fa-linkedin-in"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row footer-top-29 pt-lg-5 pt-sm-4">
            <div className="col-lg-3 col-sm-6">
              <div className="address-grid">
                <h5>10009 Agrofam st, 5th Avenue, 436 Honey <br/> London.</h5>
                <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mt-sm-0 mt-4 ps-lg-5">
              <div className="address-grid">
                <h5>Phone</h5>
                <h5 className="phone-number-text mt-2"><a href="tel:+1(21) 112 7368">+1(21) 112 7368</a></h5>
              </div>
              <div className="address-grid mt-sm-5 mt-4">
                <h5>E-mail</h5>
                <h5 className="email-cont-text mt-1"><a href="mailto:Agrowfarm@mail.com" className="mail">Agrowfarm@mail.com</a></h5>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-5 footer-list-menu ps-lg-5 mt-lg-0 mt-sm-5 mt-4">
              <div className="address-grid"></div>
            </div>
            <div className="address-grid col-lg-4 col-md-6 col-sm-7 ps-lg-5 mt-lg-0 mt-sm-5 mt-4 w3l-footer-16-main FooterNewsletter">
              <h5>Subscribe here</h5>
              <form action="" className="subscribe d-flex mt-4 pt-lg-2 mb-4" method="post">
                <input type="email" name="email" placeholder="Email Address" required="" />
                <button type="submit"><span className="fa fa-paper-plane" aria-hidden="true"></span></button>
              </form>
              <p>Subscribe to our mailing list and get updates to your email inbox.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer2;
