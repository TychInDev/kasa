import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import "../styles/error.css";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <Header />
      <h1 className="error_title">404</h1>
      <p className="error_message">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="error_link">
        Retourner sur la page d'accueil
      </Link>
      <Footer />
    </div>
  );
}

export default Error;
