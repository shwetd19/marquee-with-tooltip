# Marquee With Tooltip

[React Marquee-With-Tooltip](https://www.npmjs.com/marquee-with-tooltip) is a lightweight React component that harnesses the power of CSS animations to create silky smooth animations.

Welcome to Marquee With Tooltip, a `npm` React component that enhances marquee elements with customized tooltip features. This component allows you to create a dynamic and interactive scrolling experience with tooltips for each image. Below is a step-by-step guide outlining the process of using this  `npx` package:
## Demo

Check out the demo [here](https://shwetd19.github.io/) and play around with some sample marquees.

## Installation

If you're using `npm`, in the command prompt run:

```bash
npm install react-marquee-with-tooltip --save
```

If you're using `yarn`, run:

```bash
yarn add react-marquee-with-tooltip
```

## Usage

To use the component, import Marquee into your file:

```jsx
import Marquee from "marquee-with-tooltip";
```
A sample file might look like this (e.g., App.js):

```jsx
import React from "react";
import Marquee from "react-fast-marquee";
import Tooltip from "./Tooltip"; // Import Tooltip component
import img1 from "./images/one.png";
// ... (import other images)

function App() {
  return (
    <div className="App">
      {/* ... (other content) */}
      <Marquee direction="left" speed={20} delay={5}>
        {/* Wrap each image with Tooltip component */}
        <Tooltip text="Image 1">
          <div className="image_wrapper">
            <img src={img1} alt="" />
          </div>
        </Tooltip>
        {/* ... (other images with tooltips) */}
      </Marquee>
    </div>
  );
}
export default App;
```

## Props

- `direction` : The direction of the marquee scroll (e.g., "left", "right", "up", "down").
- `speed` : The speed of the marquee scroll.
- `delay` : The delay before the marquee starts scrolling.
- `tooltipAnimation` : The animation type for the tooltip (e.g., "fade-in", "slide-up", "scale"). Default is "fade-in"
- `tooltipImage` : An optional image to be displayed within the tooltip. This can be used for additional visual context.
- `cursorVisible` : A boolean prop to control the visibility of the cursor when interacting with tooltips. Default is true.
- `uniqueTooltip` : A boolean prop that, when set to true, ensures that each image has its own unique tooltip.
- `linkTo` : The URL or path to navigate when the tooltip is clicked. Enables linking to a new page or a specific route.

## Tooltip Component

The Tooltip component enhances your Marquee With Tooltip project by providing interactive and customizable tooltips. Here's how you can use it:

### Basic Usage of Tooltip Component 

```jsx
<Tooltip
  text="Your Customized Tooltip Content"
  tooltipAnimation="slide-up"
  tooltipColor="#3498db"
  tooltipImage={yourOptionalImage}
  cursorVisible={false}
  uniqueTooltip={true}
  linkTo="/your-custom-page"
>
  <div className="image_wrapper">
    <img src={yourImage} alt="" />
  </div>
</Tooltip>
```
### Feel free to integrate this component into your project and customize it according to your needs.
