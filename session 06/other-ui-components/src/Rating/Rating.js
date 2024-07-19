import React, { useState } from "react";
import "./Rating.css";

const Rating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);

  return (
    <div className="rating">
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          className={`star ${index < rating ? "filled" : ""}`}
          onClick={() => setRating(index + 1)}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default Rating;
