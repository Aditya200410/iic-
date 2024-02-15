import React, { useState, useRef } from "react";
import logo from "./Ticket.png";
import "./ticket.css";
const Ticket = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log("Uploading file:", selectedFile);

      const reader = new FileReader();
      reader.onloadend = () => {
        const dataUrl = reader.result;
        console.log("Data URL:", dataUrl);
      };
      reader.readAsDataURL(selectedFile);
    }
  };
  const [userName, setUserName] = useState("");
  const [displayedName, setDisplayedName] = useState("");
  const imageRef = useRef();

  const handleInputChange = (event) => {
    setUserName(event.target.value);
  };

  const handleDisplayButtonClick = () => {
    setDisplayedName(userName);
  };

  const handleDownloadButtonClick = () => {
    const tempCanvas = document.createElement("canvas");
    const tempContext = tempCanvas.getContext("2d");
  
    const originalImage = new Image();
    originalImage.src = imageRef.current.src;
  
    originalImage.onload = () => {
      tempCanvas.width = originalImage.width;
      tempCanvas.height = originalImage.height;
  
      tempContext.drawImage(originalImage, 0, 0);
  
      tempContext.fillStyle = "white";
      tempContext.font = "bold 48px sans-serif";
      tempContext.textAlign = "center";
      tempContext.textBaseline = "middle";
      tempContext.fillText(displayedName, 1100, 475);
  
      const dataUrl = tempCanvas.toDataURL("image/png");
  
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "output_photo.png";
  
      link.click();
    };
  };  

  return (
    <>
      <div className="t">
        <div className="tmain">
          <div className="tleft">
            <div className="horizontal-text">TICKETS</div>
          </div>
          <div className="tright">
            <div className="t1">
              <p className="tp">CIELO INIFINITO-2024</p>
            </div>
            <div className="t2">
              <input
                type="text"
                className="tf"
                placeholder="enter your name"
                value={userName}
                onChange={handleInputChange}
              />
              <input
                type="email"
                className="tf"
                placeholder="enter your mail"
              />
            </div>
            <div className="t3">
              <div className="t4">
                <button className="sb" onClick={handleDisplayButtonClick}>
                  Display{" "}
                </button>
              </div>
              {displayedName && (
                <div>
                  <div
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    <img
                      ref={imageRef}
                      src={logo}
                      alt="User Display"
                      style={{ display: "none" }}
                    />
                  </div>
                  <button className="d1" onClick={handleDownloadButtonClick}>
                    Download
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ticket;
