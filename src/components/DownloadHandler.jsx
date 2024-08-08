import React from "react";
import { useParams } from "react-router-dom";
import links from "./Links";
import files from "./Files";
import Main from "./Main";
import DownloadFile from "./DownloadFile";

const DownloadHandler = () => {
  const { id } = useParams();

  const isLinkId = links.some((item) => item.id === id);
  const isFileId = files.some((item) => item.id === id);

  return isLinkId ? (
    <Main />
  ) : isFileId ? (
    <DownloadFile />
  ) : (
    <h1 className="main-container">404 NOT FOUND</h1>
  );
};

export default DownloadHandler;
