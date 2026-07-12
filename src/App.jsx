import { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
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
import NotFound from "./components/NotFound";
import LandingPage from "./components/LandingPage";
import FloatingHubButton from "./components/FloatingHubButton";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function PortfolioPage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const target = location.state?.scrollTo;
    if (!target) return;

    const scrollToTarget = () => {
      const element = document.getElementById(target);
      if (!element) return false;

      const navOffset = 90;
      const targetTop = element.getBoundingClientRect().top + window.scrollY - navOffset;

      window.scrollTo({
        top: Math.max(targetTop, 0),
        behavior: "smooth",
      });

      return true;
    };

    requestAnimationFrame(() => {
      if (!scrollToTarget()) {
        setTimeout(scrollToTarget, 120);
      }
    });

    navigate("/portfolio", { replace: true, state: null });
  }, [location.state, navigate]);

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

function App() {
  const location = useLocation();
  const showPortfolioNav = location.pathname === "/portfolio" || location.pathname.startsWith("/project/");

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
      {showPortfolioNav && <Navigation />}
      {showPortfolioNav && <FloatingHubButton />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </LazyMotion>
  );
}

export default App;

