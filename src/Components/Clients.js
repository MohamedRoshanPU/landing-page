import React from "react";
import './Clients.css'
import logo1 from './logo1.svg'
import logo2 from './logo2.svg'
import Aos from "aos";
import 'aos/dist/aos.css'

function Clients() {

    Aos.init({duration:1000})

  return (
    <div>
      <div className="clients-main-container" data-aos="fade-up">
        <div className="clients-container">
          <div className="client-heading">
            <p>Trusted by top clients</p>
          </div>
          <div className="client-logos">
            <img src={logo1} alt="logo1" />
            <img src={logo2} alt="logo2" />
            <img src={logo1} alt="logo1" />
            <img src={logo2} alt="logo2" />
            <img src={logo1} alt="logo1" />
            <img src={logo2} alt="logo2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
