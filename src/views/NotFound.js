// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <h1 style={{ fontSize: "100px", marginBottom: "20px" }}>
            404
        </h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/">
        <button style={{ padding: "10px 26px", marginTop: "20px", cursor: "pointer", color: "white", backgroundColor: "#00428C",  border: "none", borderRadius: "5px"}}>
          Go Back to Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
