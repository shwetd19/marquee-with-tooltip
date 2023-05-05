import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import img1 from "./images/01.png";
import img2 from "./images/02.png";
import img3 from "./images/03.png";
import img4 from "./images/04.png";
import "./App.css";

function MarqueeExample() {
  const [isHovered, setIsHovered] = useState(false);

  function handleClick(imageIndex) {
    switch (imageIndex) {
      case 0:
        window.location.href = "page1.html";
        break;
      case 1:
        window.location.href = "page2.html";
        break;
      case 2:
        window.location.href = "page3.html";
        break;
      case 3:
        window.location.href = "page4.html";
        break;
      default:
        break;
    }
  }

  return (
    <div className="marquee-container">
      <Marquee
        gradient={false}
        speed={40}
        direction="left"
        stop={isHovered}
        pauseOnHover={true}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="marquee-item"
          onClick={() => handleClick(0)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="marquee-item-box">
            <img src={img1} alt="example" />
            <span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </span>
          </div>
        </div>
        <div
          className="marquee-item"
          onClick={() => handleClick(1)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="marquee-item-box">
            <img src={img2} alt="example" />
            <span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </span>
          </div>
        </div>
        <div
          className="marquee-item"
          onClick={() => handleClick(2)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="marquee-item-box">
            <img src={img3} alt="example" />
            <span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </span>
          </div>
        </div>
        <div
          className="marquee-item"
          onClick={() => handleClick(2)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="marquee-item-box">
            <img src={img4} alt="example" />
            <span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </span>
          </div>
        </div>
      </Marquee>
    </div>
  );
}

export default MarqueeExample;
