import React, { useState } from "react";

// Tooltip Component
const Tooltip = ({ tooltipText, position }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const tooltipStyle = {
    position: "absolute",
    bottom: "100%", // Positioned above the element by default
    left: "50%",
    transform: "translateX(-50%) translateY(-5px)", // Centered horizontally, slightly above
    opacity: 0.9,
    padding: "5px",
    backgroundColor: "black",
    color: "white",
    borderRadius: "4px",
    textAlign: "center",
    width: "200px",
    zIndex: 10,
  };

  // Adjust the position based on the passed prop
  if (position === "right") {
    tooltipStyle.left = "100%";
    tooltipStyle.transform = "translateX(10px)"; // Adjust as needed for spacing
  } else if (position === "left") {
    tooltipStyle.right = "100%";
    tooltipStyle.left = "auto"; // Remove left positioning to avoid conflicts
    tooltipStyle.transform = "translateX(-10px)"; // Adjust as needed for spacing
  } else if (position === "top") {
    tooltipStyle.bottom = "100%";
    tooltipStyle.transform = "translateX(-50%) translateY(-10px)"; // Adjust as needed for spacing
  } else if (position === "bottom") {
    tooltipStyle.top = "100%";
    tooltipStyle.bottom = "auto"; // Remove bottom positioning to avoid conflicts
    tooltipStyle.transform = "translateX(-50%) translateY(10px)"; // Adjust as needed for spacing
  }

  return (
    <div
      style={{ display: "inline-block", position: "relative" }}
      className="cursor-pointer"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <p className="flex h-4 w-4 items-center justify-center rounded-full bg-gray-400 text-xs text-white">
        i
      </p>
      {showTooltip && <div style={tooltipStyle}>{tooltipText}</div>}
    </div>
  );
};
export default Tooltip
