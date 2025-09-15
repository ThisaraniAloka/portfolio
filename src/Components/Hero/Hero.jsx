// Hero.jsx
import React, { useState, useEffect } from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  const roles = ["Frontend Developer", "Backend Developer", "Full Stack Developer"];
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    if (typing) {
      if (charIndex < roles[roleIndex].length) {
        timeout = setTimeout(() => {
          setText((prev) => prev + roles[roleIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, 150);
      } else {
        timeout = setTimeout(() => setTyping(false), 1000);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }, 50);
      } else {
        setTyping(true);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [charIndex, typing, roleIndex, roles]);

  return (
    <div id="home" className="hero">
      <div className="hero-left">
        <img src={profile_img} alt="Profile" />
      </div>

      <div className="hero-right">
        <h1>I'm Thisarani Aloka</h1>
        <h2>
  <span className="typing">{text}</span>
  <span className="cursor">|</span>
</h2>


        <p>
          Aspiring Full Stack Developer and 3rd-year Computing & Information
          Systems student with skills in both front-end and back-end development.
        </p>

        <div className="hero-action">
          <div className="hero-connect">
            <AnchorLink className="anchor-link" offset={50} href="#contact">
              Connect With Me
            </AnchorLink>
          </div>
          <div className="hero-resume">
            <a href="/Thisarani_Aloka_CV.pdf" target="_blank" rel="noopener noreferrer">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
