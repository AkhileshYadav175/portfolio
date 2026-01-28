import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/stats";
import About from "../components/About";
import Skills from "../components/Skills";
import Services from "../components/Services";
import Projects from "../components/Projects";
import OurProjects from "../components/OurProjects";
import Testimonials from "../components/Testimonials";
import Blog from "../components/Blog";
import Contact from "../components/Contact";

import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />

      <Hero />
      <Stats />
      <About />
      <Skills />
      <Services />
      <Projects />
      <OurProjects />
      <Testimonials/>
      <Blog />
      <Contact />
    
      <Footer />
    </>
  );
};

export default Home;
