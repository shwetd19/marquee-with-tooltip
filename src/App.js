import React from "react";
import Marquee from "react-fast-marquee";
import Tooltip from "./Tooltip"; // Import Tooltip component
import img1 from "./images/one.png";
import img2 from "./images/two.png";
import img3 from "./images/three.png";
import img4 from "./images/four.png";
import img6 from "./images/six.png";
import img7 from "./images/seven.png";
import img8 from "./images/eight.png";
import img9 from "./images/nine.png";
import img10 from "./images/ten.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>Marquee With Tooltip</h1>
        <h2>Enhancing Marquee Components with Customized Tooltip Features</h2>

      </div>

      <div>
        <Marquee direction="left" speed={20} delay={5}>
          {/* Wrap each image with Tooltip component */}
          <Tooltip text="Image 1">
            <div className="image_wrapper">
              <img src={img1} alt="" />
            </div>
          </Tooltip>

          <Tooltip text="Image 2">
            <div className="image_wrapper">
              <img src={img2} alt="" />
            </div>
          </Tooltip>

          <Tooltip text="Image 3">
            <div className="image_wrapper">
              <img src={img3} alt="" />
            </div>
          </Tooltip>

          <Tooltip text="Image 4">
            <div className="image_wrapper">
              <img src={img4} alt="" />
            </div>
          </Tooltip>

          <Tooltip text="Image 6">
            <div className="image_wrapper">
              <img src={img6} alt="" />
            </div>
          </Tooltip>

          <Tooltip text="Image 7">
            <div className="image_wrapper">
              <img src={img7} alt="" />
            </div>
          </Tooltip>

          <Tooltip text="Image 8">
            <div className="image_wrapper">
              <img src={img8} alt="" />
            </div>
          </Tooltip>

          <Tooltip text="Image 9">
            <div className="image_wrapper">
              <img src={img9} alt="" />
            </div>
          </Tooltip>

          <Tooltip text="Image 10">
            <div className="image_wrapper">
              <img src={img10} alt="" />
            </div>
          </Tooltip>
        </Marquee>
      </div>
    </div>
  );
}

export default App;
