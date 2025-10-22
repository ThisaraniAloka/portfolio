import React, { useState, useEffect } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import arrow_icon from "../../assets/arrow_icon.svg";
import "./About.css";

// 🔹 Skill logos
import skill1 from "../../assets/skills/angular.svg";
import skill2 from "../../assets/skills/bootstrap.svg";
import skill3 from "../../assets/skills/css.svg";
import skill4 from "../../assets/skills/Expressjs.png";
import skill5 from "../../assets/skills/firebase.svg";
import skill6 from "../../assets/skills/html.svg";
import skill7 from "../../assets/skills/java.svg";
import skill8 from "../../assets/skills/mongoDB.svg";
import skill9 from "../../assets/skills/mysql.svg";
import skill10 from "../../assets/skills/nodejs.jpeg";
import skill11 from "../../assets/skills/nextJS.svg";
import skill12 from "../../assets/skills/php.svg";
import skill13 from "../../assets/skills/react.svg";
import skill14 from "../../assets/skills/tailwind.svg";

// 🔹 Certificates
import certificate1 from "../../assets/certificate1.jpg";
import certificate2 from "../../assets/certificate2.jpg";
import certificate3 from "../../assets/certificate3.jpg";
import certificate4 from "../../assets/certificate4.jpg";
import certificate5 from "../../assets/certificate5.jpg";
import certificate6 from "../../assets/certificate6.jpg";
import certificate7 from "../../assets/certificate7.jpg";
import certificate8 from "../../assets/certificate8.jpg";
import certificate9 from "../../assets/certificate9.jpg";

const About = () => {
  const skills = [
    skill1, skill2, skill3, skill4, skill5, skill6,
    skill7, skill8, skill9, skill10, skill11, skill12, skill13, skill14
  ];

  const skillNames = [
    "Angular", "Bootstrap", "CSS", "Express.js", "Firebase", "HTML",
    "Java", "MongoDB", "MySQL", "Node.js", "Next.js", "PHP", "React", "Tailwind"
  ];

  const certificates = [
    { image: certificate1, url: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI1MjYxIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODg5MjcxNl85MjcxNTU1MTc1NjcyNzc2MDE5NS5wbmciLCJ1c2VybmFtZSI6IlRoaXNhcmFuaSBBbG9rYSJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F8252%2FFree%2520Full%2520Stack%2520Developer%2520Course%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1509413190627268808&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVD%2FIvLk90T%2FTIDU%2ByrytKTUstKsrMS49PKsovL04tsnVNSU8FAOA4PZ09AAAA" },
    { image: certificate2, url: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIzMjM2IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODg1Nzg4NF85MjE2NTM1MTc1NjE3NjYwMDkyOS5wbmciLCJ1c2VybmFtZSI6IlRoaXNhcmFuaSBBbG9rYSBCYW5kYXJhIn0%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F6023%2FJava%2520Programming%2520for%2520Beginners%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1509413190627268808&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVz%2FIICzVI9vLIDU%2ByrytKTUstKsrMS49PKsovL04tsnVNSU8FAMX7v909AAAA" },
    { image: certificate3, url: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIzMzM3IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODg3MjE2OF85MjE2NTM1MTc1NjM4NDI0MDY4Ni5wbmciLCJ1c2VybmFtZSI6IlRoaXNhcmFuaSBBbG9rYSJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F6129%2FIntroduction-to-MERN-Stack%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1509413190627268808&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVT803SwnxTylLDk%2ByrytKTUstKsrMS49PKsovL04tsnVNSU8FAGh9G2Y9AAAA" },
    { image: certificate4, url: "https://simpli-web.app.link/e/NLSi5GoiFXb" },
    { image: certificate5, url: "https://www.hackerrank.com/certificates/iframe/5d0745db29f0" },
    { image: certificate6, url: "https://www.hackerrank.com/certificates/iframe/59994abedc5f" },
    { image: certificate7, url: "https://www.hackerrank.com/certificates/iframe/1a7c24a5882b" },
    { image: certificate8, url: "https://www.hackerrank.com/certificates/iframe/db66b9a3f511" },
    { image: certificate9, url: "https://www.hackerrank.com/certificates/iframe/6fee7445f842" }
  ];

  const [visibleCertificates, setVisibleCertificates] = useState(3);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);

  // 🔹 Thunder line cursor effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const newPos = { x: e.clientX, y: e.clientY, id: Date.now() };
      setCursorPos(newPos);
      
      // Add to trail for lightning effect
      setTrail(prev => {
        const newTrail = [newPos, ...prev].slice(0, 8); // Keep last 8 positions
        return newTrail;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // 🔹 Initialize visible certificates based on screen size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 1024 && width > 768) {
        // Tablet size: show 4 certificates initially
        setVisibleCertificates(4);
      } else {
        // Other sizes: show 3 certificates initially
        setVisibleCertificates(3);
      }
    };

    // Set initial value
    handleResize();

    // Add resize listener
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 🔹 Triplicated arrays for smooth infinite scroll
  const triplicatedSkills = [...skills, ...skills, ...skills];
  const triplicatedSkillNames = [...skillNames, ...skillNames, ...skillNames];

  const showMoreCertificates = () => {
    const width = window.innerWidth;
    let increment = 3; // Default increment
    
    if (width <= 1024 && width > 768) {
      // Tablet size: increment by 2
      increment = 2;
    }
    
    setVisibleCertificates((prev) => Math.min(prev + increment, certificates.length));
  };

  const handleCertificateClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div id="about" className="about">
      {/* 🔹 Thunder line cursor effect */}
      <div className="thunder-container">
        {trail.map((pos, index) => (
          <div
            key={pos.id}
            className="thunder-line"
            style={{
              left: `${pos.x}px`,
              top: `${pos.y}px`,
              opacity: 1 - (index * 0.12),
              transform: `scale(${1 - (index * 0.1)})`,
              filter: `blur(${index * 0.8}px)`,
            }}
          />
        ))}
        <div
          className="thunder-core"
          style={{
            left: `${cursorPos.x}px`,
            top: `${cursorPos.y}px`,
          }}
        />
      </div>

      <div className="about-content">
        <div className="about-title">
          <h1>About Me</h1>
        </div>

        {/* Skills Carousel */}
        <section className="skills-section">
          <h3>My Skills</h3>

          <div className="carousel-wrapper">
            <div className="carousel-container">
              <div className="carousel-track">
                {triplicatedSkills.map((skill, index) => (
                  <div className="skill-card" key={index}>
                    <img src={skill} alt={`Skill ${index + 1}`} />
                    <p className="carousel-skill-name">{triplicatedSkillNames[index]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Certificates Section */}
        <section className="certificates-section">
          <h3>Certificates</h3>
          <div className="certificates-container">
            {certificates.slice(0, visibleCertificates).map((cert, index) => (
              <div 
                key={index} 
                className="certificate-card"
              >
                <div className="certificate-image-wrapper">
                  <img src={cert.image} alt={`Certificate ${index + 1}`} className="certificate-img" />
                  
                  {/* Hover Overlay with Link Icon Only */}
                  <div className="certificate-overlay">
                    <div 
                      className="link-icon-container"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent event bubbling
                        handleCertificateClick(cert.url);
                      }}
                    >
                      <FaExternalLinkAlt className="link-icon" />
                    </div>
                  </div>
                </div>
                <div className="certificate-glow"></div>
              </div>
            ))}
          </div>

          {visibleCertificates < certificates.length && (
            <div className="about-showmore" onClick={showMoreCertificates}>
              <p>Show More</p>
              <img src={arrow_icon} alt="arrow" />
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default About;