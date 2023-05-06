import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import "./App.css";

function importImages() {
  const images = {};
  for (let i = 1; i <= 6; i++) {
    const image = require(`./images/0${i}.png`);
    images[`img${i}`] = { src: image, text: `Text for image ${i}` };
  }
  return images;
}

const images = importImages();

function MarqueeExample() {
  const [isHovered, setIsHovered] = useState(false);

  function handleClick(imageIndex) {
    window.location.href = `page${imageIndex + 1}.html`;
  }

  return (
    <div className="marquee-container">
      <Marquee
        gradient={false}
        speed={40}
        direction="left"
        pauseOnHover={true}
        // clickOnHover={true}
        pauseOnClick={true}
      >
        {Object.entries(images).map(([key, value], index) => (
          <div
            key={index}
            className="marquee-item"
            
            // onClick={() => handleClick(index)}
          >
            <div className="marquee-item-box" >
              <img src={value.src} alt="example" />
              <span>
                <p>{value.text}</p>
              </span>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default MarqueeExample;
