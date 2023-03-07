import React from "react";
import "../styles/banner.css";

function Banner(props) {
    let bannerTitle;
    let bannerClass;

    if (props.page === "home") {
        bannerTitle = "Chez vous, partout et ailleurs";
        bannerClass = "home";
    }
    else if (props.page === "about") {
        bannerTitle = "";
        bannerClass = "about";
    }

    return (
        <div className={`banner ${bannerClass}`}>
            <h1>{bannerTitle}</h1>
        </div>
    );
}

export default Banner;
