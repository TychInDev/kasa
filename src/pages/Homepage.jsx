import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Card from "../components/Card";

function Homepage() {
  return (
    <div>
        <Header />
        <Banner page="home" />
        <Card />
      <Footer />
    </div>
  );
}

export default Homepage;
