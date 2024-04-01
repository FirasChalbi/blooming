import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin,FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container3">
          <div className="row3">
            <div className="col-lg-3 col-md-2 footer-info">
              <h3>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "left", paddingBottom: "20px" }}>
                  <Image
                    src="/images/logo.png"
                    width={90}
                    height={90}
                    alt="Picture of the author"
                  />
                </div>
              </h3>
              <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
            </div>

            {/* <div className="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><FaChevronRight /> <a href="#" >Home</a></li>
                <li><FaChevronRight /> <a href="#">About us</a></li>
                <li><FaChevronRight /> <a href="#">Services</a></li>
                <li><FaChevronRight /> <a href="#">Terms of service</a></li>
                <li><FaChevronRight /> <a href="#">Privacy policy</a></li>
              </ul>
            </div> */}

            <div className="col-lg-3 col-md-6 footer-contact">
              <h4>Contact Us</h4>
              <p>
                A108 Street <br />
                Sfax, 535022<br />
                Tunisia <br />
                <strong>Phone:</strong> +1 5589 55488 55<br />
                <strong>Email:</strong> info@example.com<br />
              </p>

              <div className="social-links">
                <a href="#" className="twitter"><FaTwitter /></a>
                <a href="#" className="facebook"><FaFacebook /></a>
                <a href="#" className="instagram"><FaInstagram /></a>        
                <a href="#" className="linkedin"><FaLinkedin /></a>
              </div>

            </div>

            <div className="col-lg-3 col-md-6 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna veniam enim veniam illum dolore legam minim quorum culpa amet magna export quem marada parida nodela caramase seza.</p>
              <form action="" method="post">
                <input type="email" name="email" /><input type="submit" value="Subscribe" />
              </form>
            </div>

          </div>
        </div>
      </div>

      {/* <div className="container3">
        <div className="copyright">
          &copy; Copyright <strong>Page</strong>. All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="https://a.com/">Page</a>
        </div>
      </div> */}
    </footer>
  );
}

export default Footer;
