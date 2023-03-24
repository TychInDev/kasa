import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Banner from "../components/banner/banner";
import AvailableHouse from "../components/availablehouse/availablehouse";

function Homepage() {
  return (
    <div>
      <Header />
      <Banner page="home" />
      <AvailableHouse />
      <Footer />
    </div>
  );
}

export default Homepage;
