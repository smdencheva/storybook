import React, { useState } from "react";
import Rating from "./Rating";

export default {
  title: "Components/Rating",
  component: Rating,
};

export const Basic = () => {
  const [rating, setRating] = useState(3);

  return (
    <div style={{ padding: "1rem" }}>
      <h3>Star Rating Example</h3>
      <Rating value={rating} onChange={(val) => setRating(val)} maxStars={5} />
      <p>Current rating: {rating}</p>
    </div>
  );
};

export const TenStars = () => {
  const [rating, setRating] = useState(7);

  return (
    <div style={{ padding: "1rem" }}>
      <h3>Ten-Star Rating</h3>
      <Rating value={rating} onChange={setRating} maxStars={10} />
      <p>Current rating: {rating}</p>
    </div>
  );
};
