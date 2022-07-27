import React, { useEffect } from "react";
import "./Banner.css";
import image from "./banner-image.svg";
import Button from "./Button";
import Aos from "aos";
import 'aos/dist/aos.css'

function Banner() {

  useEffect(()=>{
        Aos.init({duration:1000})
  },[])
  
  return (
    <div>
      <div className="banner-main-container" data-aos="fade-up">
        <div className="banner-container">
          <div className="banner-text">
            <h1><span>AI</span>-Powered Brand Tracking</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque iusto aperiam voluptates laboriosam omnis magni aspernatur debitis ad quas, architecto tenetur exercitationem quae. Tenetur, sapiente eveniet? Ducimus quam quaerat ratione?</p>
            <Button />
          </div>
          <div className="banner-image">
            <img src={image} alt="banner" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
