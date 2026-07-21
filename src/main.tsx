import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import App from "./App";

function Root() {
  useEffect(() => {
    const id = setTimeout(() => {
      AOS.init({
        duration: 700,
        easing: "ease-out-cubic",
        once: true,
        offset: 60,
      });
    }, 50);
    return () => clearTimeout(id);
  }, []);

  return <App />;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
