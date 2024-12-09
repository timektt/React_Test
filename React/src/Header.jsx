import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <h1>Time KTT</h1>
      <h2>Software Engineer</h2>
      <p>
        I am a highly motivated software engineer with expertise in developing scalable applications. Passionate about solving complex problems and contributing to innovative projects.
      </p>
      <button
        onClick={() => window.open('path_to_resume.pdf', '_blank')}
        className="resume-button"
      >
        View Resume
      </button>
    </div>
  );
};

export default Header;
