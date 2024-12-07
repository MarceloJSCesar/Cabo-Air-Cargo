import React from "react";
import logo from "../../assets/default/logo.png";
import "./style.css";

const Preloader = () => {
  return (
    <div className="preloader-container">
      <img src={logo} alt="Logo" className="loading-logo" />
    </div>
  );
};

export default Preloader;
