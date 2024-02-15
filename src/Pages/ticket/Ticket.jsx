import React, { useState, useRef } from "react";
import logo from "./Ticket.png";
import "./ticket.css";
import Resizer from "react-image-file-resizer";

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
  const [selectedImage, setSelectedImage] = useState({
    image: ""
  });
  const imageRef = useRef();

  const handleInputChange = (event) => {
    setUserName(event.target.value);
  };

  const handleDisplayButtonClick = () => {
    setDisplayedName(userName);
    if(userName)
    alert("ticket generated")
  else{
    alert(" enter your name")
  }
  };
  const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        967,
        307,
        "JPG",
        100,
        0,
        (uri) => {
          resolve(uri);
        },
        "file"
      );
    });

  const handleDownloadButtonClick = () => {
    const tempCanvas = document.createElement("canvas");
    const tempContext = tempCanvas.getContext("2d");

    const originalImage = new Image();
    originalImage.src = imageRef.current.children[0].src;
    const userImage = new Image();
    userImage.src = imageRef.current.children[1].src;

    originalImage.onload = () => {
      tempCanvas.width = originalImage.width;
      tempCanvas.height = originalImage.height;

      tempContext.drawImage(userImage, 0, 0, 100, 100);
      tempContext.drawImage(originalImage, userImage.width, 0);

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



  const handleSubmit = () => {

  }
  const handleProfileImageChange = async (e) => {
    const file = e.target.files[0];
    const url = await resizeFile(file);
    setSelectedImage({ ...selectedImage, image: url });
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
              <input
                type="file"
                name="image"
                inputProps={{ accept: 'image/*' }}
                onChange={handleProfileImageChange}
              />
            </div>
            <div className="t3">
              <div className="t4">
                <button className="sb" onClick={handleDisplayButtonClick}>
                  Generate{" "}
                </button>
              </div>
              {displayedName && (
                <div>
                  <div
                    ref={imageRef}
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    <img
                      src={logo}
                      alt="User Display"
                      style={{ display: "none" }}
                    />
                    <img
                      src={URL.createObjectURL(selectedImage.image)}
                      alt="Selected Profile"
                      style={{
                        maxWidth: '50%',
                        maxHeight: '50%',
                        objectFit: 'contain',
                      }}
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
      </div >
    </>
  );
};

export default Ticket;