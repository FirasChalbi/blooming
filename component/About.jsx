import React from 'react'
import Button from "../component/common/buttons/Button"

function About() {
  return (
    <section className="about-section">
        <div className="container">
            <div className="row">                
                <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                    <div className="inner-column">
                        <div className="sec-title">
                            <span className="title">About Company</span>
                            <h2>We are leader in <br/>Industrial market Since 1992</h2>
                        </div>
                        <div className="text">Lorem ipsum dolor sit amet, con</div>
                        <ul className="list-style-one">
                            <li>Lorem Ipsum is simply dummy tex</li>
                            <li>Consectetur adipisicing elit</li>
                            <li>Sed do eiusmod tempor incididunt</li>
                        </ul>
                        <div className="btn-box">
                            <Button />
                        </div>
                    </div>
                </div>

                
                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column wow fadeInLeft">
                        <figure className="image-1"><a href="#" className="lightbox-image" data-fancybox="images"><img src="https://i.ibb.co/QP6Nmpf/image-1-about.jpg" alt=""/></a></figure>
                        <figure className="image-2"><a href="#" className="lightbox-image" data-fancybox="images"><img src="https://i.ibb.co/JvN0NVB/image-2-about.jpg" alt=""/></a></figure>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About