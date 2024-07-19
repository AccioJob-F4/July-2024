import React, { useState } from "react";
import "./Tooltip.css";

const Tooltip = ({ children, text }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && <div className="tooltip">{text}</div>}
    </div>
  );
};

export default Tooltip;
