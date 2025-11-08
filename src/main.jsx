import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css';
import App from "./App.jsx";

import "remixicon/fonts/remixicon.css";
// import PreLoader from "./components/PreLoader.jsx";
import "animate.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <PreLoader /> */}
    <div className=" bg-gray-50 ">
      <App />
    </div>
  </StrictMode>
);
