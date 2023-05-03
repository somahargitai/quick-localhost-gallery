import React from "react";
import "./App.css";

const ImageGallery = () => {
  let imageFolder;
  imageFolder = "../public/images";
  // imageFolder = "../public/imagesisometric";
  // get a list of all the image files in the public/images folder
  const images = require.context(
    // "../public/images", 
    "../public/imagesisometric",
    true,
    // false,
    /\.(png|jpe?g|svg)$/
  );
  const imageKeys = images.keys();
  const imageNames = imageKeys.map((imageKey) => {
    return imageKey.replace("./", "");
  });

  return (
    <div className="image-gallery">
      {imageNames.map((imageKey, index) => (
        <div className="img-fluid">
          <img
            key={index}
            src={images(`./${imageKey}`)}
            alt={imageKey}
            className="img-fluid"
            // lower zindex than the text
            style={{ zIndex: 0 }}
          />
          <p
            // red text
            style={{
              color: "red",
              // put it on top layer wit higher z-index
              zIndex: 1,
              // move up 20px
              position: "relative",
              top: "-20px",

              // make it 50% transparent
              opacity: 1,
            }}
          >
            {imageKey}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
