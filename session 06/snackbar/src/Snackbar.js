import React, { useEffect } from "react";
import "./Snackbar.css";

const Snackbar = ({ message, type, show, duration, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  return (
    <div className={`snackbar ${show ? "show" : ""} ${type}`}>{message}</div>
  );
};

export default Snackbar;
