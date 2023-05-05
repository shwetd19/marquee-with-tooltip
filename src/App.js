import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import img1 from "./images/01.png";
import img2 from "./images/02.png";
import img3 from "./images/03.png";
import arrow from "./images/arrow.png";
import "./App.css";

function MarqueeExample() {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipX, setTooltipX] = useState(0);
  const [tooltipY, setTooltipY] = useState(0);

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
      default:
        break;
    }
  }

  function handleMouseEnter(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    setTooltipX(mouseX);
    setTooltipY(mouseY);
    setTooltipVisible(true);
  }

  function handleMouseMove(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    setTooltipX(mouseX);
    setTooltipY(mouseY);
  }

  function handleMouseLeave() {
    setTooltipVisible(false);
  }

  return (
    <div className="marquee-container">
      <Marquee gradient={false} speed={40} direction="up">
        <div
          className="marquee-item"
          onClick={() => handleClick(0)}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="marquee-item-box">
            <img src={img1} alt="example" />
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
            {tooltipVisible && (
              <div
                className="tooltip"
                style={{ left: tooltipX, top: tooltipY }}
              >
                <img
                  className="tooltip-arrow"
                  src={arrow}
                  alt="Tooltip arrow"
                  style={{ top: "-15px", left: "10px" }}
                />
                <span className="tooltip-text">Click to learn more</span>
              </div>
            )}
          </div>
        </div>
        <div
          className="marquee-item"
          onClick={() => handleClick(1)}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="marquee-item-box">
            <img src={img2} alt="example" />
            <span>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
            {tooltipVisible && (
              <div
                className="tooltip"
                style={{ left: tooltipX, top: tooltipY }}
              >
                <img
                  className="tooltip-arrow"
                  src={arrow}
                  alt="Tooltip arrow"
                  style={{ top: "-15px", left: "10px" }}
                />
                <span className="tooltip-text">Click to learn more</span>
              </div>
            )}
          </div>
        </div>
        <div
          className="marquee-item"
          onClick={() => handleClick(1)}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="marquee-item-box">
            <img src={img2} alt="example" />
            <span>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
            {tooltipVisible && (
              <div
                className="tooltip"
                style={{ left: tooltipX, top: tooltipY }}
              >
                <img
                  className="tooltip-arrow"
                  src={arrow}
                  alt="Tooltip arrow"
                  style={{ top: "-15px", left: "10px" }}
                />
                <span className="tooltip-text">Click to learn more</span>
              </div>
            )}
          </div>
        </div>
      </Marquee>
    </div>
  );
}

export default MarqueeExample;
