import React from "react";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import Banner from "../components/Banner/banner";
import Card from "../components/Card/card";

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
