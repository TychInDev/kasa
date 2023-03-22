import React from "react";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import "../styles/error.css";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <Header />
      <h1 className="error-title">404</h1>
      <p className="error-message">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="error-link">
        Retourner sur la page d'accueil
      </Link>
      <Footer />
    </div>
  );
}

export default Error;
