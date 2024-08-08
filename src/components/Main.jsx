import React from "react";
import { Link, useParams } from "react-router-dom";
import Links from "./Links";

const Main = () => {
  const { id } = useParams();
  const response = Links.find((p) => p.id === id);
  return (
    <div className="main-container">
      <h1>{response.title}</h1>
      <img
        className="preview-image"
        src={response.image}
        alt={response.title}
      />
      {!response.ignoreWebRecommend && (
        <p>Recommended Browser: Chrome, Edge, FireFox, Vivaldi</p>
      )}
      <div className="links-container">
        {response.links.map((link) => (
          <Link
            key={link.name}
            to={link.url}
            className={link.variant ? link.variant : "link-button"}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Main;
