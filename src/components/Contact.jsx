import React from "react";
import "animate.css";

const Contact = () => (
  <section className="text-center py-16 animate__animated animate__fadeInUp animate__delay-1s" id="contact">
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 animate__animated animate__fadeInDown animate__delay-1s">
      Let's build something together
    </h2>
    <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-xl mx-auto animate__animated animate__fadeInUp animate__delay-2s">
      Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
    </p>

    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-gray-700 dark:text-gray-200 animate__animated animate__fadeInUp animate__delay-3s">
      <a href="mailto:ferdialfiansah73@gmail.com" className="flex items-center gap-2 transform hover:scale-105 transition-transform duration-200 hover:text-blue-500">
        <i className="fas fa-envelope text-gray-500 animate__animated animate__bounceIn animate__delay-4s"></i>
        <span>ferdialfiansah73@gmail.com</span>
      </a>
      <span className="hidden sm:inline animate__animated animate__fadeIn animate__delay-4s">|</span>
      <a href="https://wa.me/6289517056813" target="_blank" rel="noreferrer" className="flex items-center gap-2 transform hover:scale-105 transition-transform duration-200 hover:text-green-400">
        <i className="fab fa-whatsapp text-green-500 animate__animated animate__bounceIn animate__delay-4s"></i>
        <span>+62 895-170-56813</span>
      </a>
    </div>
  </section>
);

export default Contact;
