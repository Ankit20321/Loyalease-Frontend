import React from 'react'
import './Homepage.css'

const Homepage = () => {
  return (
    <div className="homepage-container">
    <div className="content">
      <h1>Ankit Mourya</h1>
      <div className="introduction">
        <p className="intro-text">
          Hi, I'm a passionate Full Stack Developer specializing in building robust web applications.
          With expertise in React.js, Node.js, and modern web technologies, I transform complex
          problems into elegant solutions. Currently focused on creating scalable applications
          and exploring cloud technologies.
        </p>
        <div className="skills-section">
          <h2>Technical Skills</h2>
          <div className="skills-list">
            <span className="skill-tag">React.js</span>
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">MongoDB</span>
            <span className="skill-tag">AWS</span>
          </div>
        </div>
        <div className="social-links">
          <a href="https://github.com/yourusername" className="social-link github">
            <i className="fab fa-github"></i> GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" className="social-link linkedin">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="/portfolio" className="social-link portfolio">
            <i className="fas fa-briefcase"></i> Portfolio
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Homepage;
 