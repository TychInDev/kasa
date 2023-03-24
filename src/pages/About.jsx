import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Banner from "../components/banner/banner";
import Collapse from "../components/collapse/collapse";
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
