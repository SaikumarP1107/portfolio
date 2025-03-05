import React from 'react'
import './About.css';
import AboutImage from '../assets/about-img.webp';
import WorkingEmoji from '../assets/working-emoji.png';
import Text2 from '../assets/text2.svg';

function About() {
  return (
    <div id = 'about'>
        <div className="about-container">
            <div className="about-content">
                <div class="img-side">
                    <img src={WorkingEmoji} alt="emoji" className="work-emoji" />
                    <img src={AboutImage} alt="mee" className="img-side__main-img" />
                    <span>
                        <img src={Text2} alt="text" className='text-image' />
                    </span>
                </div>
                <div className="text-side">
                    <h3>About me</h3>
                    <h4>Front-end Developer <br /> based in Belgrade, Serbia 📍</h4>
                    <p>Hey, my name is Stefan, and I'm a Frontend Developer. My passion is to create and develop a clean UI/UX for my users.<br /><br />My main stack currently is React/Next.js in combination with Tailwind CSS and TypeScript.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
