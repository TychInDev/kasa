import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import "../styles/About.css";


function About() {
  return (
    <div>
        <Header />
        <Banner page="about" />
      <h1>Hello About</h1>
      <Footer />
    </div>
  );
}

export default About;
