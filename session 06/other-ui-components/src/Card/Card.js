import React from "react";
import "./Card.css";

const Card = ({ title, content }) => {
  return (
    <div className="card">
      <div className="card-title">{title}</div>
      <div className="card-content">{content}</div>
    </div>
  );
};

export default Card;
