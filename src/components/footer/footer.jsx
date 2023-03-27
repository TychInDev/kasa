import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <img
        src={process.env.PUBLIC_URL + "/Logo2.png"}
        alt="Logo footer de KASA"
      />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
