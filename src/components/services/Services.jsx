import React from 'react';
import './services.css';
import appDevelopmentImg from '../../img/services-icon/app-devlopment.png';
import contentDevelopmentImg from '../../img/services-icon/content-development.png'
import translationImg from '../../img/services-icon/translation.png'
import videoDevelopmentImg from '../../img/services-icon/video-development.png';

export const Services = () => {
    return (
        <section id="services" class="services section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Services</h2>
          <p>We are techies at head and content creators at heart!</p>
        </div>

        <div class="row">
          <div class="col-md-6 my-4 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box">
              <div class="icon"><img src={contentDevelopmentImg} alt=""/></div>
              <h4><a href="">Content Development</a></h4>
              <p>We design and develop e-Learning, Website, Training and Marketing content to elevate your brand image and ethos.</p>
            </div>
          </div>

          <div class="col-md-6 my-4 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="200">
            <div class="icon-box">
              <div class="icon"><img src={videoDevelopmentImg} alt=""/></div>
              <h4><a href="">Video Development</a></h4>
              <p>We develop captivating and engaging 2D videos with stock character and illustrations. We also create new characters as per your requirements.</p>
            </div>
          </div>

          <div class="col-md-6 my-4 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
            <div class="icon-box">
              <div class="icon"><img src={translationImg} alt=""/></div>
              <h4><a href="">Translation and Voiceovers</a></h4>
              <p>We translate to localize your content making it personalized for your target audience.</p>
            </div>
          </div>

          <div class="col-md-6 my-4 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
            <div class="icon-box">
              <div class="icon"><img src={appDevelopmentImg} alt=""/></div>
              <h4><a href="">Bespoke Web and Mobile App</a></h4>
              <p>We design and develop bespoke web and mobile apps to suit your needs as per your target audience.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
    )
}

export default Services;