import React from "react";
import { Link, useParams } from "react-router-dom";
import icon from "../assets/icon.jpg";
import Links from "./Links";
import files from "./Files";
import DownloadFile from "./DownloadFile";
import NotFound from "./NotFound";

const Main = () => {
  const { id } = useParams();

  if (!id) {
    return (
      <div className="main-container">
        <h1>Andromedarius Download Pages</h1>
        <img
          className="preview-image"
          src={icon}
          alt="Andromedarius Download Pages"
        />
        <div className="links-container">
          {Links.map(({ id, title }) => (
            <Link key={id} to={`/download/${id}`} className="link-button">
              {title}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  const response = Links.find((p) => p.id === id);
  if (response) {
    const { title, image, ignoreWebRecommend, links } = response;
    return (
      <div className="main-container">
        <h1>{title}</h1>
        <img className="preview-image" src={image} alt={title} />
        {!ignoreWebRecommend && (
          <p>Recommended Browser: Chrome, Edge, FireFox, Vivaldi</p>
        )}
        <div className="links-container">
          {links.map(({ name, url, variant }) => (
            <Link key={name} to={url} className={variant || "link-button"}>
              {name}
            </Link>
          ))}
          <Link to="/" className="link-button-destructive">
            Home
          </Link>
        </div>
      </div>
    );
  }

  if (files.some((item) => item.id === id)) {
    return <DownloadFile />;
  }

  return <NotFound />;
};

export default Main;
