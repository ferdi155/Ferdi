import React from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import TechStack from "./components/TechStack";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Certificate from "./components/Certificate";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Profile />
        <TechStack />
        <Education />
        <Experience />
        <Certificate />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
