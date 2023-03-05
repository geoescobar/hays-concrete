import React from "react";
import Hero from "../components/home/Hero";
import Projects from "../components/home/Projetcs";
import Tagline from "../components/home/Tagline";
import Services from "../components/home/Services";
import Why from "../components/home/Why";
import Contact from "../components/home/Contact";
import Footer from "../components/home/Footer";

function Home() {
  return (
    <>
      <div>
        <Hero />
        <Tagline />
        <Services />
        <Why />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default Home;
