import React from "react";
import "./index.css";

// image imports
import image1 from "./html-icon.png";
import image2 from "./css-icon.png";
import image3 from "./figma-icon.png";
import image4 from "./git-icon.png";
import image5 from "./github-icon.png";
import image6 from "./react-icon.png";
import image7 from "./nextjs-icon.png";
import image8 from "./solidity-icon.png";
import image9 from "./etherjs-icon.png";

function Skills() {
  return (
    <>
      <div className="container">
        <div className="image__container">
          <img
            className="image"
            src={image3}
            alt="figma"
            width={40}
            height={40}
          />
          <img
            className="image"
            src={image1}
            alt="html"
            width={40}
            height={40}
          />
          <img
            className="image"
            src={image2}
            alt="css"
            width={40}
            height={40}
          />
          <img
            className="image"
            src={image4}
            alt="git"
            width={40}
            height={40}
          />
          <img
            className="image"
            src={image5}
            alt="github"
            width={40}
            height={40}
          />
          <img
            className="image"
            src={image6}
            alt="react"
            width={40}
            height={40}
          />
          <img
            className="image"
            src={image7}
            alt="nextjs"
            width={40}
            height={40}
          />
          <img
            className="image"
            src={image8}
            alt="solidity"
            width={40}
            height={40}
          />
          <img
            className="image"
            src={image9}
            alt="ethersjs"
            width={40}
            height={40}
          />
        </div>
      </div>
    </>
  );
}

export default Skills;
