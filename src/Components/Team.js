import React, { useState } from "react";
import "./Team.css";
import right from "./right.svg";
import left from "./left.svg";
import { Images } from "./ImageData";
import Aos from "aos";
import 'aos/dist/aos.css'

function Team() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current === Images.length - 1 ? 0 : current + 1);
  };
  console.log(current);

  const prev = () => {
    setCurrent(current === 0 ? Images.length : current - 1);
  };

  
 Aos.init({duration:1000})


  return (
    <div>
      <div className="team-main-container" data-aos = "fade-up">
        <div className="team-container">
          <h2>Team Members</h2>
          <div className="team-image">
            {Images.map((image, index) => {
              return (
                <div className={current === index ? "images active" : "images" }>
                  {current === index && (
                    <img src={image.image} alt="Images" key = {index}/>
                  )}
                </div>
              );
            })}
            <div className="left-button">
              <img src={left} alt="left" onClick={prev} />
            </div>
            <div className="right-button">
              <img src={right} alt="right" onClick={next} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
