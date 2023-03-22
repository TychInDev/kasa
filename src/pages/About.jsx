import React from "react";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import Banner from "../components/Banner/banner";
import Collapse from "../components/Collapse/collapse";
import aboutContent from "../assets/aboutContent.json";
import "../styles/about.css";

function About() {
  const sections = aboutContent;

  return (
    <div>
      <Header />
      <Banner page="about" />
      <Collapse sections={sections} page="about" />
      <Footer />
    </div>
  );
}

export default About;
