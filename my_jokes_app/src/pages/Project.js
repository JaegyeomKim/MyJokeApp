import React from 'react';
import "../component/Project.css"


const projects = [
  {
    title: 'The Inventory – web-Based Mobile Application',
    date: '01/2023 - PRESENT',
    description:
      'Developed a web-based mobile application allowing users to save dynamic product data, access detailed information via QR codes, and successfully managed back-end operations including URL parameter generation for each product.',
    techStack: 'C#, ASP.NET API, MongoDB, Firebase, and React.js',
    githubLink: 'https://github.com/ADerangedTeddyBear/ISIT2023Capstone',
    image: `${process.env.PUBLIC_URL}/Inventory.png`,
  },
  {
    title: 'CSPORT - Web Application',
    date: '09/2022 - 12/2022',
    description:
      'Created a web application for sports centers to manage exercise classes with separate admin and user routes.',
    techStack: 'Angular, Node.js, MongoDB, and Firebase',
    githubLink: 'https://github.com/JaegyeomKim/ISIT422-CSport',
    image: `${process.env.PUBLIC_URL}/Csport.png`,
  },
  {
    title: 'DATA INTEGRATION AND ANALYSIS - Web Application',
    date: '05/2022 - 08/2022',
    description:
      "Utilized Apache Hadoop to integrate two extensive public datasets on military spending and world university rankings, while investigating the correlation between defense expenditure and education levels. Processed orders, determined charges, and oversaw billing and payments.",
    techStack: 'Hadoop, ASP.NET API',
    githubLink: 'https://github.com/JaegyeomKim/country-military-spending-college-ranking',
    image: `${process.env.PUBLIC_URL}/Dataintergration.png`,
  },
  {
    title: 'CLIMBING BUDDY – Mobile Application',
    date: '04/2022 - 06/2022',
    description:
      "Developed a mobile application to track climbers' locations using Android sensors and store performance data (time, distance, location)",
    techStack: ' Kotlin, Lite SQL, and Android Studio',
    githubLink: 'https://github.com/JaegyeomKim/ISIT322_TeamProject-Climbing-Buddy-',
    image: `${process.env.PUBLIC_URL}/ClimbingBuddy004453.png`,
  },
  // Add more projects here
];

const Project = ({ title, date, description, techStack, githubLink, image }) => (
  <div className="project">
    <h3 className="project-title">{title}</h3>
    <p className="project-date">{date}</p>
    <p className="project-description">{description}</p>
    <div className="image-container">
          <img className="project-image" src={image} alt={title} />
        </div>
        <p className="project-tech-stack">Tech Stack: {techStack}</p>

            <a className="project-link" href={githubLink} target="_blank" rel="noopener noreferrer">
      GitHub Link
    </a>
  </div>
);

const ProjectsList = () => (
  <div className="projects-list">
    {projects.map((project, index) => (
      <Project key={index} {...project} />
    ))}
  </div>
);

export default ProjectsList;
