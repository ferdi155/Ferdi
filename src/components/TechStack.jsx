import React, { useEffect, useRef } from "react";
import "animate.css";
// replace invalid bare imports with Vite URLs
const expressImg = new URL("../assets/tools/expe.png", import.meta.url).href;
const jsImg = new URL("../assets/tools/js.png", import.meta.url).href;
const pgImg = new URL("../assets/tools/postgresqljpg.jpg", import.meta.url).href;
const reactImg = new URL("../assets/tools/reactjs.png", import.meta.url).href;
const twImg = new URL("../assets/tools/tailwind.png", import.meta.url).href;
const nodeImg = new URL("../assets/tools/nodejs.png", import.meta.url).href;
const codeImg = new URL("../assets/tools/vscode.png", import.meta.url).href;
const booImg = new URL("../assets/tools/bootstrap.png", import.meta.url).href;
const phImg = new URL("../assets/tools/php.png", import.meta.url).href;
const laraImg = new URL("../assets/tools/lara.png", import.meta.url).href;

const techs = [
  { name: "Express.js", img: expressImg },
  { name: "JavaScript", img: jsImg },
  { name: "PostgreSQL", img: pgImg },
  { name: "React", img: reactImg },
  { name: "Tailwind", img: twImg },
  { name: "Node.js", img: nodeImg },
  { name: "VSCode", img: codeImg },
  { name: "Boststrap", img: booImg },
  { name: "PHP", img: phImg },
  { name: "Laravel", img: laraImg }
];

const TechStack = () => {
  const scrollerRef = useRef(null);
  const rafRef = useRef(null);
  const speed = 0.8; // increased speed for continuous flow

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    let running = true;

    const step = () => {
      if (!running) return;

      // increment scroll continuously
      el.scrollLeft += speed;

      // when we have scrolled past the first set, reset to start (smooth loop)
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = el.scrollLeft - el.scrollWidth / 2;
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      running = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section id="tech" className="py-16 text-center animate__animated animate__fadeInUp animate__delay-1s">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 animate__animated animate__fadeInDown animate__delay-2s">
        Tech Stack - Tools I Use Everyday
      </h2>

      {/* horizontal, non-wrapping row with scroll; duplicated items to allow seamless auto-scroll */}
      <div
        ref={scrollerRef}
        className="overflow-x-auto py-4 px-4 animate__animated animate__slideInUp animate__delay-3s"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex flex-nowrap items-center gap-6">
          {techs.concat(techs).map((tech, i) => (
            <div key={i} className="flex-none text-center w-28 animate__animated animate__zoomIn" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="h-20 w-20 mx-auto flex items-center justify-center bg-white shadow-xl rounded-xl transform hover:scale-110 transition-transform duration-300 hover:shadow-2xl">
                <img src={tech.img} alt={tech.name} className="h-12 object-contain" />
              </div>
              <p className="mt-2 text-sm text-gray-700">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
