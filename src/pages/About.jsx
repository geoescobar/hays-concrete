import React from "react";
import Hero from "../components/aboutUs/Hero";
import AboutUs from "../components/aboutUs/AboutUs";
import Carousel from "../components/aboutUs/Carousel";
import Footer from "../components/home/Footer";

function About() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Carousel />
      <Footer />
    </div>
  );
}

export default About;
