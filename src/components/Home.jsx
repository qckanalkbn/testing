import React from "react";
import { Link } from "react-router-dom";
import icon from "../assets/icon.jpg";
import Links from "./Links";

const Home = () => {
  return (
    <div className="main-container">
      <h1>Andromedarius Download Pages</h1>
      <img
        className="preview-image"
        src={icon}
        alt="Andromedarius Download Pages"
      />
      <div className="links-container">
        {Links.map((data) => (
          <Link
            key={data.id}
            to={`/download/${data.id}`}
            className="link-button"
          >
            {data.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
