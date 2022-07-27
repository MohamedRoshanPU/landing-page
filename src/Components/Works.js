import React from "react";
import "./Works.css";
import right from "./right.svg";
import left from "./left.svg";
import image1 from "./img1.jpg";
import image2 from "./img2.jpg";
import image3 from "./img3.jpg";
import image4 from "./img4.jpg";
import Aos from "aos";
import 'aos/dist/aos.css'

function Works() {
  const next = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const prev = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  
    Aos.init({duration:1000})


  return (
    <div>
      <div className="works-main-container" data-aos="fade-up">
        <h2>Dive Into the World of Brand Tracking</h2>
        <div className="works-container">
          <div className="left" id="prev">
            <img src={left} alt="left" onClick={prev} />
          </div>
          <div className="right">
            <img src={right} alt="right" onClick={next} />
          </div>
          <div className="work-wrapper" id="slider">
            <div className="work-cards">
              <div className="card-img">
                <img src={image1} alt="image1" />
              </div>
              <p className="badge red">BEAUTY</p>
              <h4>Brand Battles : Cosmetics</h4>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                vitae elementum sed sagittis risus, ultricies malesuada iaculis.
                Tellus at vitae enim tellus cras risus dignissim nunc. Id
                iaculis lectus neque aliquam velit sed mauris diam.
              </p>
            </div>
            <div className="work-cards">
              <div className="card-img">
                <img src={image2} alt="image1" />
              </div>
              <p className="badge yellow">BEAUTY</p>
              <h4>Brand Battles : Cosmetics</h4>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                vitae elementum sed sagittis risus, ultricies malesuada iaculis.
                Tellus at vitae enim tellus cras risus dignissim nunc. Id
                iaculis lectus neque aliquam velit sed mauris diam.
              </p>
            </div>
            <div className="work-cards">
              <div className="card-img">
                <img src={image3} alt="image1" />
              </div>
              <p className="badge blue">BEAUTY</p>
              <h4>Brand Battles : Cosmetics</h4>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                vitae elementum sed sagittis risus, ultricies malesuada iaculis.
                Tellus at vitae enim tellus cras risus dignissim nunc. Id
                iaculis lectus neque aliquam velit sed mauris diam.
              </p>
            </div>
            <div className="work-cards">
              <div className="card-img">
                <img src={image4} alt="image1" />
              </div>
              <p className="badge green">BEAUTY</p>
              <h4>Brand Battles : Cosmetics</h4>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                vitae elementum sed sagittis risus, ultricies malesuada iaculis.
                Tellus at vitae enim tellus cras risus dignissim nunc. Id
                iaculis lectus neque aliquam velit sed mauris diam.
              </p>
            </div>
            <div className="work-cards">
              <div className="card-img">
                <img src={image1} alt="image1" />
              </div>
              <p className="badge red">BEAUTY</p>
              <h4>Brand Battles : Cosmetics</h4>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                vitae elementum sed sagittis risus, ultricies malesuada iaculis.
                Tellus at vitae enim tellus cras risus dignissim nunc. Id
                iaculis lectus neque aliquam velit sed mauris diam.
              </p>
            </div>
            <div className="work-cards">
              <div className="card-img">
                <img src={image2} alt="image1" />
              </div>
              <p className="badge yellow">BEAUTY</p>
              <h4>Brand Battles : Cosmetics</h4>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                vitae elementum sed sagittis risus, ultricies malesuada iaculis.
                Tellus at vitae enim tellus cras risus dignissim nunc. Id
                iaculis lectus neque aliquam velit sed mauris diam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
