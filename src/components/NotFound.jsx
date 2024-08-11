import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-description">This page could not be found.</p>
      <div className="links-container">
        <Link to="/" className="link-button-destructive">
          Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
