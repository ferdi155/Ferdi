import React from "react";
import "animate.css";

const morImg = new URL("../assets/morena.png", import.meta.url).href;

const experiences = [
  {
    logo: morImg ,
    position: "IT Internship Program",
    location: "PT Mandiri Cipta Sejahtera, Cibubur",
    start_date: "15 Maret 2024",
    end_date: "15 Mei 2024",
    description: [
      "Developed internal dashboard using Boststrap and Javascript",
      "Creating a Form Plan Management System to facilitate data entry",
      "Supporting the IT team in managing information systems"
    ],
    technologies: ["Boststrap", "Composer", "Javascript", "CSS" ]
  },

];

const Experience = () => (
  <section className="py-16 animate__animated animate__fadeInUp animate__delay-1s" id="experience">
    <h2 className="text-3xl font-bold text-gray-900  mb-8 animate__animated animate__slideInDown animate__delay-1s">
      Work Experiences:
    </h2>
    {experiences.map((exp, index) => (
      <div
        key={index}
        className="bg-white  rounded-xl shadow p-6 border border-gray-100  mt-6 animate__animated animate__slideInUp animate__delay-3s transform hover:scale-105 transition-transform duration-300 hover:shadow-xl"
        style={{ animationDelay: `${3 + index * 0.3}s` }}
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-start gap-4">
            <img src={exp.logo} alt={exp.position} className="w-12 h-12 object-contain mt-1 animate__animated animate__zoomIn" style={{ animationDelay: `${3.5 + index * 0.3}s` }} />
            <div>
              <h3 className="font-semibold text-lg text-gray-900 animate__animated animate__fadeInLeft" style={{ animationDelay: `${3.7 + index * 0.3}s` }}>
                {exp.position}
              </h3>
              <p className="text-green-600 text-sm mb-2 animate__animated animate__fadeInLeft" style={{ animationDelay: `${3.9 + index * 0.3}s` }}>{exp.location}</p>
              <ul className="list-disc list-inside text-sm text-gray-700  space-y-1 animate__animated animate__fadeInUp" style={{ animationDelay: `${4.1 + index * 0.3}s` }}>
                {exp.description.map((item, i) => (
                  <li key={i} className="animate__animated animate__fadeInLeft" style={{ animationDelay: `${4.3 + index * 0.3 + i * 0.1}s` }}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-sm text-gray-500 whitespace-nowrap animate__animated animate__fadeInRight" style={{ animationDelay: `${4.5 + index * 0.3}s` }}>
            {exp.start_date} - {exp.end_date}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-4 animate__animated animate__fadeInUp" style={{ animationDelay: `${4.7 + index * 0.3}s` }}>
          {exp.technologies.map((tech, i) => (
            <span
              key={i}
              className="bg-gray-100  text-sm px-3 py-1 rounded-full text-gray-800  animate__animated animate__bounceIn transform hover:scale-110 transition-transform duration-200"
              style={{ animationDelay: `${4.9 + index * 0.3 + i * 0.1}s` }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    ))}
  </section>
);

export default Experience;
