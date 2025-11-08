import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import "animate.css";

const education = [

  {
    school: "SMK  Fatahillah Cileungsi",
    degree: "Software engineering",
    period: "2022 - 2025",
    location: "Bogor, Indonesia",
    details: ["Web fundamentals, networking basics, hands-on projects"]
  },
  {
    school: "Dumbways Indonesia",
    degree: "Fullstack Development",
    period: "2025",
    location: "Bogor, Indonesia",
    details: ["Web fundamentals, Fremawork basics, hands-on projects"]
  }
];

const Education = () => (
  <section id="education" className="py-16 animate__animated animate__fadeInUp animate__delay-1s">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3 animate__animated animate__bounceIn animate__delay-1s">
        <FaGraduationCap className="text-pink-500 animate__animated animate__bounceIn animate__delay-2s" /> Education
      </h2>

      <div className="space-y-8">
        {education.map((edu, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm animate__animated animate__slideInLeft animate__delay-4s transform hover:scale-105 transition-transform duration-300 hover:shadow-lg"
            style={{ animationDelay: `${4 + idx * 0.2}s` }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 animate__animated animate__fadeInUp" style={{ animationDelay: `${4.5 + idx * 0.2}s` }}>
                  {edu.degree}
                </h3>
                <p className="text-sm text-gray-600 animate__animated animate__fadeInUp" style={{ animationDelay: `${4.7 + idx * 0.2}s` }}>{edu.school}</p>
              </div>
              <div className="text-sm text-gray-500 animate__animated animate__fadeInRight" style={{ animationDelay: `${4.9 + idx * 0.2}s` }}>
                <div>{edu.period}</div>
                <div>{edu.location}</div>
              </div>
            </div>

            {edu.details && (
              <ul className="mt-4 list-disc list-inside text-sm text-gray-700 space-y-1 animate__animated animate__fadeInUp" style={{ animationDelay: `${5.1 + idx * 0.2}s` }}>
                {edu.details.map((d, i) => (
                  <li key={i} className="animate__animated animate__fadeInLeft" style={{ animationDelay: `${5.3 + idx * 0.2 + i * 0.1}s` }}>{d}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;