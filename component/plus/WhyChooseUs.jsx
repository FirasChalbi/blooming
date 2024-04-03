import React from 'react';
import { BiPhoneCall } from "react-icons/bi";
import { Flex } from '@chakra-ui/react';

export default function WhyChooseUs() {
  return (
    <section className="w3l-blog-se-3" id="ab-grids">
      <div className="containe AboutPageWCU">
        <div className="inner-sec-w3ls py-lg-5 py-md-4 py-2">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="manager-img mb-lg-0 mb-md-5 mb-4 lg:pe-lg-5">
              <h6 className="title-subw3hny">POURQUOI NOUS</h6>
              <h3 className="title-w3l text-black">Cultiver des aliments sains</h3>
              <p className="card-text mt-3">Nous sommes déterminés à cultiver des aliments sains tout en préservant l&apos;environnement pour un avenir durable.</p>
              <a href="tel:+44-123-456-78" className="btn btn-style btn-primary mt-lg-5 mt-4 bg-[#46C7C7]">
              <Flex color="white" gap="4"><BiPhoneCall />+216 23 411 941</Flex>
              </a>
            </div>
            <div className="about-in blog-grid-info text-left">
              <div className="card img">
                <div className="card-body img">
                  <a href="#url" className="d-block zoom radius-image">
                    <img src="https://wp.w3layouts.com/agrowfarm/wp-content/themes/agrowfarm/assets/images/a2.jpg" alt="" className="img-fluid radius-image" />
                  </a>
                  <div className="blog-des mt-4">
                    <h5 className="card-title mt-4">Nos Missions</h5>
                    <p className="card-text">Notre mission est de fournir des solutions intégrées et de haute qualité pour une agriculture intelligente et hautement productive. Nous offrons un soutien et des conseils à toutes les étapes de la mise en œuvre du projet, dans le but d&apos;améliorer la qualité de production et d&apos;augmenter la productivité, tout en garantissant des rendements financiers pour nos investisseurs.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-in blog-grid-info text-left">
              <div className="card img">
                <div className="card-body img">
                  <a href="#url" className="d-block zoom radius-image">
                    <img src="https://wp.w3layouts.com/agrowfarm/wp-content/themes/agrowfarm/assets/images/a3.jpg" alt="" className="img-fluid radius-image" />
                  </a>
                  <div className="blog-des mt-3">
                    <h5 className="card-title mt-4">Notre Vision</h5>
                    <p className="card-text ">Nous aspirons à être des pionniers dans la promotion d&apos;une agriculture intelligente et durable, fournissant des solutions de haute qualité pour une alimentation saine. En améliorant la qualité de production et en augmentant la productivité, nous visons à nourrir le monde tout en préservant notre planète pour les générations futures.</p>
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
