import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import TwitterIcon from "@material-ui/icons/Twitter";
import DescriptionIcon from "@material-ui/icons/Description";
import examplePdf from "../../";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";

export const About = () => {
  return (
    <>
      <div className="about center aboutPadding">
        <h1 data-aos="fade-right" className="mobileHead">
          Hello, I am <span className="about__name">Faisal Khan</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
          Full Stack Developer , who have a passion for technology and love
          working on new and exciting technologies emerging nowadays. I'm a
          passionate Developer with good communication skills, good attention to
          details and the ability to write efficient code using MERN Stack .
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/faisalk2"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:faisal.z.khan5538@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+8087842960"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/faisal-khan-190929171"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
