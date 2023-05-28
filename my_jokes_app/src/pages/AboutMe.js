import React from 'react';
import "../component/AboutMe.css"
const AboutMe = () => {
  const handleDownloadResume = () => {
    // Replace 'resume.pdf' with the actual file name and path of your resume
    const resumePath = process.env.PUBLIC_URL + '/resume.pdf';
    window.open(resumePath, '_blank');
  };
  return (
    <div className="about-me">
      <h1>About Me</h1>
      <p>
      I am a student majoring in BS-Software Development and I am currently seeking an entry-level software development position. I will be graduating in June 2023 and have acquired valuable experience in both front-end and back-end development through various group projects.      </p>
      <p>
      Throughout my projects, I have learned that customer satisfaction is of utmost importance and that effective communication within the team is crucial for success.</p>
    <p>
    If you are seeking a motivated and dedicated employee who is eager to continue growing professionally, please feel free to contact me.     </p>



    <h1>My Skills</h1>

    <div class="skills-container">
  <div class="skill-category">
    <h3 class="skill-title">Programming Languages</h3>
    <ul class="skill-list">
      <li>C#</li>
      <li>Python</li>
      <li>JavaScript</li>
      <li>TypeScript</li>
    </ul>
  </div>

  <div class="skill-category">
    <h3 class="skill-title">Relevant Skills</h3>
    <ul class="skill-list">
      <li>ASP.NET</li>
      <li>React</li>
      <li>Azure</li>
      <li>Git</li>
      <li>Docker</li>

    </ul>
  </div>

  <div class="skill-category">
    <h3 class="skill-title">Database</h3>
    <ul class="skill-list">
      <li>MS SQL</li>
      <li>MongoDB</li>
      <li>Lite SQL</li>
    </ul>
  </div>

</div>

  <div className="social-links">
          <a href="https://www.linkedin.com/in/jaegyeom-kim-53aab81a0/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a onClick={handleDownloadResume}>Resume</a>
        </div>
      </div>
  );
};

export default AboutMe;
