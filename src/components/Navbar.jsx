import React, { useState, useEffect } from "react";
const proImg = new URL("../assets/log (2).png", import.meta.url).href;


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <a href="/" className="font-bold text-gray-800">
           <img src={proImg} alt="Logo" className="h-16" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="#tech" className="nav-link">
            Tech Stack
          </a>
          <a href="#experience" className="nav-link">
            Experience
          </a>
          <a href="#certificates" className="nav-link">
            Certificates
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a
            href="https://wa.me/6289517056813"
            target="_blank"
            rel="noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg inline-flex items-center"
          >
            <i className="ri-whatsapp-line mr-2"></i> Let's Talk
          </a>
          <a
            href="https://drive.google.com/file/d/1SAZlTW118SPEX7ZWNRawfQFPUYr1bpIp/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium"
          >
            Download CV
          </a>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-md text-gray-600"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div className="absolute top-16 right-0 w-105 bg-white shadow-lg p-4 space-y-2 md:hidden">
            <a href="#tech" className="nav-link block">
              Tech Stack
            </a>
            <a href="#experience" className="nav-link block">
              Experience
            </a>
            <a href="#certificates" className="nav-link block">
              Certificates
            </a>
            <a href="#projects" className="nav-link block">
              Projects
            </a>
            <a
              href="https://wa.me/6289517056813"
              target="_blank"
              rel="noreferrer"
              className=" block bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-md  text-center"
            >
              <i className="ri-whatsapp-line mr-2"></i> Let's Talk
            </a>
            <a
              href="https://drive.google.com/file/d/1SAZlTW118SPEX7ZWNRawfQFPUYr1bpIp/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="block bg-black text-white px-3 py-2 rounded-md text-center"
            >
              Download CV
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
