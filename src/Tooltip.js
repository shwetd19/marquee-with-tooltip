// Tooltip.js
import React, { useRef, useState, useEffect } from "react";
import "./Tooltip.css";

const Tooltip = ({ text, children }) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [showTooltip, setShowTooltip] = useState(false);
  const triggerRef = useRef(null);

  const handleMouseMove = (e) => {
    const { top, left, height, width } =
      triggerRef.current.getBoundingClientRect();
    const newPosition = {
      top: e.clientY - top - height / 5,
      left: e.clientX - left - width / 1.8,
    };

    setPosition(newPosition);
  };

  const handleMouseEnter = () => {
    setShowTooltip(true);
    document.body.classList.add('body-no-cursor');
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
    document.body.classList.remove('body-no-cursor');
  };

  useEffect(() => {
    if (showTooltip) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [showTooltip]);

  return (
    <div className="tooltip-wrapper">
      <div
        className="tooltip-trigger"
        ref={triggerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
      {showTooltip && (
        <div
          className="tooltip body-no-cursor" // Apply body-no-cursor class dynamically
          style={{
            transform: `translate(${position.left}px, ${position.top}px)`,
          }}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
