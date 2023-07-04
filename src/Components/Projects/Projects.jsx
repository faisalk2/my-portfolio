import React from "react";
import "./Projects.css";
import { FaReact } from "react-icons/fa";
import {
  SiHtml5,
  SiJavascript,
  SiChakraui,
  SiRedux,
  SiCss3,
} from "react-icons/si";
import { DiCss3, DiReact } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";

export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.pinimg.com/736x/99/3d/ed/993ded2e4a4959e5e03c5c5071f1cd8f--my-name-so-happy.jpg"
                    alt="Rockstar Games"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Clone of myglamm.com</h2>
                <p>
                  Clone of myglamm.com website. which is an E-commerce beauty
                  related products Website.
                </p>
                <div>
                  <SiChakraui />
                  <SiRedux />
                  <FaReact />
                  <SiJavascript />
                  <SiCss3 />
                  <SiHtml5 />
                </div>
                <div>
                  <a
                    href="https://myglammprojectunit5.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/faisalk2/potent-voyaga-8716"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://tse4.explicit.bing.net/th?id=OIP.jWcPMYB-MetEeF0j3UfnbgHaEW&pid=Api&P=0"
                    alt="Sk-Weather-App"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Clone of www.asos.com</h2>
                <p>
                  Clone of asos.com. which is an E-commerce website mens and
                  women related products
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                  <SiChakraui />
                  <DiReact />
                  <SiRedux />
                </div>
                <div>
                  <a
                    href="https://asos-one.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/CYNO28/ASOS/tree/main/asos"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://tse2.mm.bing.net/th?id=OIP.H6ahWBv2sd9VbMaRa4ckiAEsC3&pid=Api&P=0"
                    alt=""
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Clone of theoutnet.com</h2>
                <p>
                  Clone of theoutnet.com. which is an E-commerce website mens
                  and women related products
                </p>
                <div>
                  <SiJavascript />
                  <SiHtml5 />
                  <SiCss3 />
                </div>
                <div>
                  <a
                    href="https://gorgeous-sopapillas-340399.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/satyamkumarjha2002/Unit-3-project"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
