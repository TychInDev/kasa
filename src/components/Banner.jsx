import React from "react";
import "../styles/banner.css";

function Banner(props) {
const bannerClass = props.page === "home" ? "home" : "about";
const bannerTitle = props.page === "home" ? "Chez vous, partout et ailleurs" : "";

return (
<div className={`banner ${bannerClass}`}>
<h1>{bannerTitle}</h1>
</div>
);
}

export default Banner;

