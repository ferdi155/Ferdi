import React from "react";
import proImg from "../assets/pro.jpg";
import "animate.css";

const Profile = () => (
  <section className="pt-28 pb-16" id="profile">
    <div className="flex flex-col lg:flex-row items-center gap-12 px-12">
      <div className="relative animate__animated animate__fadeInLeft animate__delay-1s">
        <div className="absolute inset-0 bg-gradient-to-r from-black-500 via-gray-500 to-gray-500 rounded-4xl blur-md animate__pulse animate__infinite animate__slow opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black-500 via-gray-500 to-gray-500 rounded-4xl blur-md animate__pulse animate__infinite animate__slow animate__delay-2s opacity-60"></div>
        <img
          src={proImg}
          alt="Ferdi"
          className="relative w-72 h-82 object-cover rounded-3xl shadow-2xl "
        />
      </div>
      <div className="text-center lg:text-left animate__animated animate__fadeInRight animate__delay-1s max-w-2xl">
        <h2 className="text-3xl lg:text-4xl text-gray-600 mb-8 animate__animated animate__fadeInUp animate__delay-2s">
          <span className="font-semibold">Ferdi Alfiansah</span>
          <span className="block text-xl text-gray-600 mt-2">
            Front end Developer
          </span>
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed animate__animated animate__fadeInUp animate__delay-3s">
          I’m passionate about creating interactive and responsive web
          interfaces. With a strong focus on frontend development, I strive to
          deliver intuitive, aesthetic, and user-friendly experiences. For me,
          every detail — from layout and animation to performance — plays a
          vital role in shaping an enjoyable digital experience.
        </p>
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 animate__animated animate__fadeInUp animate__delay-4s">
          <a
            href="https://wa.me/6289517056813"
            target="_blank"
            rel="noreferrer"
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-xl inline-flex items-center justify-center font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <i className="ri-whatsapp-line mr-3 text-xl"></i> Let's Talk
          </a>
          <a
            href="https://drive.google.com/file/d/1SAZlTW118SPEX7ZWNRawfQFPUYr1bpIp/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white px-8 py-4 rounded-xl inline-flex items-center justify-center font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <i className="ri-download-line mr-3 text-xl"></i> Download CV
          </a>
        </div>
        <div className="mt-8 flex justify-center lg:justify-start gap-6 animate__animated animate__fadeInUp animate__delay-5s">
          <a
            href="#tech"
            className="text-gray-600 hover:text-purple-600 transition-colors duration-300"
          >
            <i className="ri-code-s-slash-line text-2xl"></i>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 hover:text-purple-600 transition-colors duration-300"
          >
            <i className="ri-github-line text-2xl"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 hover:text-purple-600 transition-colors duration-300"
          >
            <i className="ri-linkedin-line text-2xl"></i>
          </a>
          <a
            href="mailto:ferdialfiansah73@gmail.com?subject=Halo&body=Hai%20Ferdialfiansah,%0A%0ASaya%20ingin%20bertanya..."
            className="text-gray-600 hover:text-purple-600 transition-colors duration-300"
          >
            <i className="ri-mail-line text-2xl"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Profile;
