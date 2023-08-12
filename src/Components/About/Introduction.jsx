import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/faisal.jpg";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section introPadding" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Faisal Khan </span> and I am from{" "}
                <span className="different">
                  {" "}
                  Bhusawal, Maharashtra (India)
                </span>
                . I have completed my graduation in B.E (Mech. Engineering)
                from{" "}
                <span className="different">
                  SSGB College of Engineering {"&"} Tech, Bhusawal (MH)
                </span>
                . Then I joined full stack development course by{" "}
                <span className="different">Masai School</span> a military type
                coding school.
              </h4>
              <h4>apart form Coding some other activities that I love to do! :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Swimming{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Fitness{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Travelling{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
               Watching Movies {" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
