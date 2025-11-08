import React from "react";
import { FaLock, FaExternalLinkAlt } from "react-icons/fa";
import "animate.css";

const projects = [

];

const Projects = () => (
  <section className="py-16 animate__animated animate__fadeInUp animate__delay-1s" id="projects">
    <h2 className="text-3xl font-bold text-gray-900  mb-8 animate__animated animate__zoomIn animate__delay-2s">
      My Projects:
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-white  rounded-xl shadow border border-gray-200  overflow-hidden animate__animated animate__zoomIn animate__delay-3s transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
          style={{ animationDelay: `${3 + index * 0.2}s` }}
        >
          <img
            src={project.image_url}
            alt={project.project_name}
            className="w-full h-64 object-cover animate__animated animate__fadeIn"
            style={{ animationDelay: `${3.5 + index * 0.2}s` }}
          />
          <div className="p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-2 animate__animated animate__fadeInUp" style={{ animationDelay: `${3.7 + index * 0.2}s` }}>
              {project.project_name}
            </h3>
            <p className="text-sm text-gray-700  mb-4 animate__animated animate__fadeInUp" style={{ animationDelay: `${3.9 + index * 0.2}s` }}>
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4 animate__animated animate__fadeInUp" style={{ animationDelay: `${4.1 + index * 0.2}s` }}>
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm rounded-full bg-gray-100  text-gray-800  animate__animated animate__bounceIn transform hover:scale-110 transition-transform duration-200"
                  style={{ animationDelay: `${4.3 + index * 0.2 + i * 0.1}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-600  animate__animated animate__fadeInUp" style={{ animationDelay: `${4.5 + index * 0.2}s` }}>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-gray-600 hover:text-gray-800 transform hover:scale-105 transition-transform duration-200"
              >
                <FaLock /> Public Repository
              </a>
              <a
                href={project.live_demo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-blue-500 hover:underline transform hover:scale-105 transition-transform duration-200"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
