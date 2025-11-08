import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "animate.css";

const Footer = () => (
  <footer className="text-center text-sm py-6 px-4 bg-white text-gray-500 animate__animated animate__fadeInUp animate__delay-1s">
    <p className="animate__animated animate__fadeIn animate__delay-1s">
      © 2025 Coded with{" "}
      <span className="text-pink-500 animate__animated animate__heartBeat animate__infinite animate__slow">♥</span> by{" "}
      <strong className="animate__animated animate__pulse animate__delay-2s">Ferdi Alfiansah</strong>
    </p>

    <div className="mt-3 flex justify-center gap-4 text-xl animate__animated animate__fadeInUp animate__delay-3s">
      <a
        href="https://github.com/ferdi155"
        target="_blank"
        rel="noreferrer"
        className="hover:text-black transform hover:scale-110 transition-transform duration-200 animate__animated animate__bounceIn animate__delay-4s"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/ferdi-alf/"
        target="_blank"
        rel="noreferrer"
        className="hover:text-blue-700 transform hover:scale-110 transition-transform duration-200 animate__animated animate__bounceIn animate__delay-4s"
      >
        <FaLinkedin />
      </a>
    </div>
  </footer>
);

export default Footer;
