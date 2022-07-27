import React from "react";
import "./Features.css";
import dashboard from "./dashboard.svg";
import data from "./data.svg";
import segment from "./segment.svg";
import Aos from "aos";
import 'aos/dist/aos.css'

function Features() {
    Aos.init({duration:1000})
  return (
    <div>
      <div className="features-main-container" data-aos="fade-up">
        <div className="features-container">
          <div className="features-heading">
            <h2>Our Features</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              deserunt numquam explicabo. Odit in, iure sequi mollitia,
              consectetur laudantium dolorem quam expedita facilis tempora,
              accusantium id quia quo consequatur. Aperiam?
            </p>
          </div>
          <div className="feature-cards">
            <div className="feature-card">
              <img src={dashboard} alt="dashboard" />
              <h3>
                Customizable <br /> Dashboard
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                delectus quo sint incidunt explicabo enim cumque nisi iusto
                nesciunt, quia quibusdam. Architecto laboriosam necessitatibus
                voluptas recusandae. Hic aliquam explicabo esse!
              </p>
            </div>
            <div className="feature-card">
              <img src={data} alt="dashboard" />
              <h3>Relatable <br/> Data</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                delectus quo sint incidunt explicabo enim cumque nisi iusto
                nesciunt, quia quibusdam. Architecto laboriosam necessitatibus
                voluptas recusandae. Hic aliquam explicabo esse!
              </p>
            </div>
            <div className="feature-card">
              <img src={segment} alt="dashboard" />
              <h3>Deep <br/> Segments</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                delectus quo sint incidunt explicabo enim cumque nisi iusto
                nesciunt, quia quibusdam. Architecto laboriosam necessitatibus
                voluptas recusandae. Hic aliquam explicabo esse!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
