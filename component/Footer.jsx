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
                    src="/images/logob.png"
                    width={90}
                    height={90}
                    alt="Picture of the author"
                  />
                </div>
              </h3>
              <p>Blooming Agri Africa est une entreprise opérant dans le secteur agricole, notamment dans des projets intégrés.</p>
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
                Route de gabes km 1.5<br />
                Sfax 3000,
                Tunisie <br />
                <strong>Phone:</strong> +216 58 417 803<strong style={{color:"#46C7C7"}}>|</strong> +216 52 962 066<br />
                <strong>Email:</strong> direction@blooming-agriafrica.tn<br />
              </p>

              <div className="social-links">
                <a href="https://www.facebook.com/profile.php?id=61557158474316" className="facebook"><FaFacebook /></a>
                <a href="#" className="instagram"><FaInstagram /></a>        
                <a href="#" className="linkedin"><FaLinkedin /></a>
              </div>

            </div>

            <div className="col-lg-3 col-md-6 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>Inscrivez-vous à notre Newsletter et recevez nos offres exclusives.</p>
              <form action="" method="post">
                <input type="email" name="email" /><input type="submit" value="S'INSCRIRE" />
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
