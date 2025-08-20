import React, { useEffect } from "react";
import "../src/styling/Projects.css"; 

const projects = [
  {
    id: 1,
    title: "Durlassa | Women Safety WebApp",
    image: "/assets/Banner-1.png",
    description: "An app for women's safety with SOS, live location, and safe route features.",
    link: "https://durlassa.netlify.app/",
    github: "https://github.com/Kaushal171205/WomenSafetyWebApp.git",
    tech: ["React", "Javascript", "Firebase", "MapBoxAPI"]
  },
  {
    id: 2,
    title: "DeshDuniya | Tour Booking System",
    image: "/assets/Banner-2.png",
    description: "Find the most relevant trip locations in India.",
    link: "https://deshduniya.netlify.app/",
    github: "https://github.com/Kaushal171205/Travel-Website",
    tech: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: 3,
    title: "Portfolio Website",
    image: "/assets/Banner-3.png",
    description: "A personal portfolio showcasing skills and projects.",
    link: "#",
    github: "https://github.com/Kaushal171205/Portfolio-Website",
    tech: ["React", "CSS", "Vite"]
  },
  {
    id: 4,
    title: "ZenYukti | Community to Connect",
    image: "/assets/Banner-4.png",
    description: "A community platform to connect people, share ideas, and collaborate effectively.",
    link: "https://zenyukti.github.io/",
    github: "https://github.com/Kaushal171205/zenyukti.github.io",
    tech: ["Reactjs", "CSS", "JavaScript", "ExpressJS", "NodeJS", "MongoDB"]
  }
];

const Projects = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".project-card");
    const revealOnScroll = () => {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
          card.classList.add("reveal");
        }
      });
    };
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <section className="projects-section" id="projects">
      <h1 className="projects-title">PROJECTS</h1>
      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-img-wrapper">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <ul className="tech-stack">
                {project.tech.map((techItem, index) => (
                  <li key={index}>{techItem}</li>
                ))}
              </ul>
              <div className="btn">
                <a href={project.link} className="project-btn" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
                <a href={project.github} className="project-btn" target="_blank" rel="noopener noreferrer">
                  Github
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
