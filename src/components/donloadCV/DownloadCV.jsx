import React from "react";
import "./downloadCV.scss";
const DownloadButton = () => {
  const handleDownload = () => {
    const downloadUrl =
      process.env.PUBLIC_URL +
      "https://firebasestorage.googleapis.com/v0/b/javad-afshar-portfolio-fr.appspot.com/o/CV%20on%20English.pdf?alt=media&token=f0e78ab2-141d-4413-b942-1e778162070f";

    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "resume.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <button onClick={handleDownload} className="btndonload">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        My Resume
      </button>
    </>
  );
};

export default DownloadButton;
