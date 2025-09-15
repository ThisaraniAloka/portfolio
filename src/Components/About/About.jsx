import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // animations
import "./About.css";

// Certificates
import certificate1 from "../../assets/certificate1.jpg";
import certificate2 from "../../assets/certificate2.jpg";
import certificate3 from "../../assets/certificate3.jpg";
import certificate4 from "../../assets/certificate4.jpg";

const About = () => {
  const [activeTab, setActiveTab] = useState("education");

  // ===== EDUCATION =====
  const educationItems = [
    {
      title: "BSc (Hons) in Computing & Information Systems",
      date: "Jul 2023 – Present",
      place: "Sabaragamuwa University of Sri Lanka",
    },
    {
      title: "G.C.E. Advanced Level in Physical Sciences Stream – 1A, 1C, 1S",
      date: "2021 (2022)",
      place: "Kuli/Bingiriya Sri-Saranankara National College",
    },
  ];
  const [educationIndex, setEducationIndex] = useState(0);
  const nextEducation = () =>
    setEducationIndex((prev) => (prev + 1) % educationItems.length);
  const prevEducation = () =>
    setEducationIndex(
      (prev) => (prev - 1 + educationItems.length) % educationItems.length
    );

  const [skillIndex, setSkillIndex] = useState(0);
  const nextSkill = () => setSkillIndex((prev) => (prev + 1) % 2);
  const prevSkill = () => setSkillIndex((prev) => (prev - 1 + 2) % 2);

  const technicalSkills = [
    "Programming: JavaScript, Java, PHP",
    "Web: HTML, CSS, Angular, React, Node, MERN Stack",
    "Databases: MySQL, MongoDB",
    "Version Control: Git, GitHub",
    "Tools: Figma, VS Code, Postman",
  ];

  const softSkills = [
    "Team Collaboration",
    "Leadership",
    "Problem Solving",
    "Quick Learning",
    "Communication",
  ];

  const certificates = [certificate1, certificate2, certificate3, certificate4];
  const [certificateIndex, setCertificateIndex] = useState(0);
  const nextCertificate = () =>
    setCertificateIndex((prev) => (prev + 1) % certificates.length);
  const prevCertificate = () =>
    setCertificateIndex(
      (prev) => (prev - 1 + certificates.length) % certificates.length
    );

  const renderContent = () => {
    switch (activeTab) {
case "education":
  return (
    <div className="about-content">
      <h2>Education</h2>
      <div className="single-box">
        <button onClick={prevEducation} className="nav-btn">‹</button>

        <AnimatePresence mode="wait">
          <motion.div
            key={educationIndex} 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="edu-card single"
          >
            <h3>{educationItems[educationIndex].title}</h3>
            <p>{educationItems[educationIndex].date}</p>
            <p>{educationItems[educationIndex].place}</p>
          </motion.div>
        </AnimatePresence>

        <button onClick={nextEducation} className="nav-btn">›</button>
      </div>
    </div>
  );

case "skills": {
  const skillsToShow = skillIndex === 0 ? technicalSkills : softSkills;
  return (
    <div id="about" className="about-content">
      <h2>Skills</h2>
      <div className="skills-slider">
        <button onClick={prevSkill} className="nav-btn">‹</button>
        <div className="skills-card">
          <h3>{skillIndex === 0 ? "Technical Skills" : "Soft Skills"}</h3>

          <motion.ul
            className="animated-list"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {skillsToShow.map((skill, i) => (
              <motion.li
                key={i}
                variants={{
                  hidden: { opacity: 0, x: 30 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                {skill}
              </motion.li>
            ))}
          </motion.ul>
        </div>
        <button onClick={nextSkill} className="nav-btn">›</button>
      </div>
    </div>
  );
}

case "certifications":
  return (
    <div className="about-content">
      <h2>Certifications</h2>
      <div className="certificate-box">
        <button onClick={prevCertificate} className="nav-btn">‹</button>

        <AnimatePresence mode="wait">
          <motion.img
            key={certificateIndex} 
            src={certificates[certificateIndex]}
            alt={`Certificate ${certificateIndex + 1}`}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="certificate-img"
          />
        </AnimatePresence>

        <button onClick={nextCertificate} className="nav-btn">›</button>
      </div>
    </div>
  );

      default:
        return null;
    }
  };

  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>

<div className="about-sections">
  {/* Left */}
  <div
    className="about-left"
    data-aos="fade-right"   
  >
    <h2 className="why-hire-me">Why Hire Me?</h2>
    <div className="about-buttons">
      <button
        className={activeTab === "education" ? "active" : ""}
        onClick={() => setActiveTab("education")}
      >
        Education
      </button>
      <button
        className={activeTab === "skills" ? "active" : ""}
        onClick={() => setActiveTab("skills")}
      >
        Skills
      </button>
      <button
        className={activeTab === "certifications" ? "active" : ""}
        onClick={() => setActiveTab("certifications")}
      >
        Certifications
      </button>
    </div>
  </div>

  <div
    className="about-right"
    data-aos="fade-left"   
  >
    <AnimatePresence mode="wait">
      <motion.div
        key={activeTab + skillIndex}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {renderContent()}
      </motion.div>
    </AnimatePresence>
  </div>
</div>

    </div>
  );
};

export default About;
