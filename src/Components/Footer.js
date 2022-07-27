import React from "react";
import './Footer.css'
import logo from "./logo.png";
import instagram from "./insta.svg";
import facebook from "./facebook.svg";
import linkedin from "./linkedin.svg";
import whatsapp from "./whatsapp.svg";
import Aos from "aos";
import 'aos/dist/aos.css'

function Footer() {
        Aos.init({duration:1000})
    
  return (
    <div>
      <div className="footer-main-container" data-aos="fade-up">
        <div className="footer-container">
          <div className="about-company">
            <img src={logo} alt="company-logo"/>
            <p>
              We're here to help brands make better marketing decisions by
              delivering world-class, scalable insights.
            </p>
          </div>
          <div className="products">
            <ul>
              <li className="heading">Products</li>
              <li className="sub-heading">Features</li>
              <li className="sub-heading">MRP</li>
              <li className="sub-heading">Book Demo</li>
              <li className="sub-heading">Measure Brand Awareness</li>
              <li className="sub-heading">Data Reach</li>
              <li className="sub-heading">Audience Segmentation</li>
            </ul>
          </div>
          <div className="products">
            <ul>
              <li className="heading">Company</li>
              <li className="sub-heading">About us</li>
              <li className="sub-heading">Careers</li>
              <li className="sub-heading">Press room</li>
              <li className="sub-heading">Contact us</li>
              <li className="sub-heading">Knowledge centre</li>
            </ul>
          </div>
          <div className="social">
            <h3 className="heading">Socials</h3>
            <div className="social-medias">
              <div className="facebook">
                <img src={facebook} alt="" />
              </div>
              <div className="instagram">
                <img src={instagram} alt="" />
              </div>
              <div className="linkedin">
                <img src={linkedin} alt="" />
              </div>
              <div className="whatsapp">
                <img src={whatsapp} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
