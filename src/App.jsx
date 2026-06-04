import { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { LazyMotion, domMax } from "motion/react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetail from "./components/ProjectDetail";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change if not a hash target
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

function App() {
  useEffect(() => {
    // Scroll to top button
    const scrollTopBtn = document.createElement("div");
    scrollTopBtn.className = "scroll-top";
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollTopBtn);

    const handleScroll = () => {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.add("visible");
      } else {
        scrollTopBtn.classList.remove("visible");
      }
    };

    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      scrollTopBtn.remove();
    };
  }, []);

  return (
    <LazyMotion features={domMax} strict>
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Experience />
              <Skills />
              <Projects />
              <Contact />
            </>
          }
        />
        <Route path="/project/:id" element={<ProjectDetail />} />
        {/* Wildcard redirect fallback for unmatched routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </LazyMotion>
  );
}

export default App;

