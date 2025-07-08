import React from "react";
import "./About.css";
import AboutImage from "../assets/about-img.webp";
import WorkingEmoji from "../assets/working-emoji.png";
import Text2 from "../assets/text2.svg";

function About() {
  return (
    <div id="about">
      <div className="about-container">
        <div className="about-content">
          <div className="img-side">
            <img src={AboutImage} alt="mee" className="img-side__main-img" />
            <span>
              <img src={WorkingEmoji} alt="emoji" className="work-emoji" />
              <img src={Text2} alt="text" className="text-image" />
            </span>
          </div>
          <div className="text-side">
            <h3>About me</h3>
            <h4>
              Full Stack Developer <br /> based in Hyderabad, India 📍
            </h4>
            <p>
              Hey, my name is Saikumar, and I'm a Full Stack Developer. My
              passion is to designing, developing, and deploying scalable
              applications. I specialize in both frontend and backend
              development.
              <br />
              <br />
              My main tech stack includes React, Node.js (Koa Js), and
              PostgreSQL. I'm always eager to learn new technologies and improve
              my skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
