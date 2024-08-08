import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Files from "./Files";

const DownloadFile = () => {
  const { id } = useParams();
  const col = Files.find((p) => p.id === id);
  const navigate = useNavigate();
  useEffect(() => {
    const serialNumber = () => {
      const today = new Date();
      const year = today.getFullYear().toString().slice(-2);
      const month = (today.getMonth() + 1).toString().padStart(2, "0");
      const day = today.getDate().toString().padStart(2, "0");
      const serialNumber = `${day}${month}${year}`;
      return serialNumber;
    };

    const downloadFile = async () => {
      try {
        const response = await fetch(
          `/downloads/${col.fileName}.${col.formatFile}`
        );
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);

        const downloadLink = document.createElement("a");
        downloadLink.href = url;
        downloadLink.type = "application/octet-stream";
        downloadLink.download = `${col.fileName}-${serialNumber()}.${
          col.formatFile
        }`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        URL.revokeObjectURL(url);
        navigate(
          `/redirect/${"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
            /[xy]/g,
            (c) => {
              const r = (Math.random() * 16) | 0,
                v = c === "x" ? r : (r & 0x3) | 0x8;
              return v.toString(16);
            }
          )}`
        );
      } catch (error) {
        console.error("Error downloading file:", error);
      }
    };

    downloadFile();
  }, [navigate, col]);

  return (
    <div className="main-container">
      <center>
        <p>
          Downloading file..., <br />
          If download error please use browser: Chrome, Edge,FireFox, Vivaldi
        </p>
      </center>
    </div>
  );
};

export default DownloadFile;
