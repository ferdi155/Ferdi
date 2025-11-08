import React from "react";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";
import "animate.css";

const feImg = new URL("../assets/fe.jpg", import.meta.url).href;
const soImg = new URL("../assets/solo.jpg", import.meta.url).href;
const diImg = new URL("../assets/dig.jpg", import.meta.url).href;
const pkImg = new URL("../assets/pkl.jpg", import.meta.url).href;

const certificates = [
  {
    title: "Fundamental FullStack",
    issuer: "Dumbways Indonesia",
    issue_date: "2025",
    description: "Comprehensive web development course covering HTML, CSS, JavaScript, and modern frameworks",
    skills: ["Express", "Tailwind", "JavaScript", "React", "Node.js", "PostgreSQL", "Github"],
    credential_url: "https://dumbways.id/certificate?u=686a879400aa57003d4277c5&t=r",
    image: feImg
  },
  {
    title: "Introduction to JavaScript",
    issuer: "SoloLearn",
    issue_date: "2024",
    description: "Completed JavaScript algorithms and data structures certification",
    skills: ["JavaScript", "Algorithms", "Data Structures"],
    credential_url: "",
    image: soImg
  },
  {
    title: "programming concept",
    issuer: "Digitalent",
    issue_date: "2025",
    description: "Understanding the fundamentals of programming, algorithms, data types, variables, control structures, procedural programming and object-oriented programming, as well as error handling.",
    skills: ["Algoritma", "Tipe data","Variabel", "Struktur kontrol"],
    credential_url: "",
    image: diImg
  },
  {
    title: "IT Intership Program",
    issuer: "PT Mandiri Cipta Sejahtera",
    issue_date: "2024",
    description: "Completed a 3-month internship program",
    skills: ["Boststrap", "Composer", "Javascript", "CSS"],
    credential_url: "",
    image: pkImg
  }
];

const Certificate = () => (
  <section id="certificates" className="py-16 animate__animated animate__fadeInUp animate__delay-1s">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3 animate__animated animate__bounceIn animate__delay-2s">
        <FaCertificate className="text-blue-500 animate__animated animate__bounceIn animate__delay-3s" /> Certificates
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden animate__animated animate__zoomIn transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
            style={{ animationDelay: `${3 + index * 0.2}s` }}
          >
            <div className="relative">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-cover animate__animated animate__fadeIn"
                style={{ animationDelay: `${3.5 + index * 0.2}s` }}
              />
              <div className="absolute top-4 right-4">
                <a
                  href={cert.credential_url}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full transform hover:scale-110 transition-transform duration-200 shadow-lg"
                >
                  <FaExternalLinkAlt className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 animate__animated animate__fadeInUp" style={{ animationDelay: `${3.7 + index * 0.2}s` }}>
                {cert.title}
              </h3>

              <div className="mb-3">
                <p className="text-blue-600 dark:text-blue-400 font-medium animate__animated animate__fadeInLeft" style={{ animationDelay: `${3.9 + index * 0.2}s` }}>
                  {cert.issuer}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 animate__animated animate__fadeInLeft" style={{ animationDelay: `${4.1 + index * 0.2}s` }}>
                  Issued {cert.issue_date}
                </p>
              </div>

              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 animate__animated animate__fadeInUp" style={{ animationDelay: `${4.3 + index * 0.2}s` }}>
                {cert.description}
              </p>

              <div className="flex flex-wrap gap-2 animate__animated animate__fadeInUp" style={{ animationDelay: `${4.5 + index * 0.2}s` }}>
                {cert.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-3 py-1 rounded-full animate__animated animate__bounceIn transform hover:scale-110 transition-transform duration-200"
                    style={{ animationDelay: `${4.7 + index * 0.2 + i * 0.1}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to action for more certificates */}
      <div className="text-center mt-12 animate__animated animate__fadeInUp animate__delay-5s">
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          More certificates available on LinkedIn
        </p>
        <a
          href="https://www.linkedin.com/in/ferdi-alf/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transform hover:scale-105 transition-transform duration-200"
        >
          <FaExternalLinkAlt /> View on LinkedIn
        </a>
      </div>
    </div>
  </section>
);

export default Certificate;
