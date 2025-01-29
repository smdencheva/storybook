import React, { useState } from "react";
import styles from "./Rating.module.css";

type RatingProps = {
  maxStars?: number;
  value: number;
  onChange: (val: number) => void;
};

export function Rating({ maxStars = 5, value, onChange }: RatingProps) {
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);

  return (
    <div className={styles.ratingContainer}>
      {Array.from({ length: maxStars }, (_, i) => {
        const starIndex = i + 1;
        const isFilled = hoveredStar
          ? starIndex <= hoveredStar
          : starIndex <= value;

        const starClass = isFilled
          ? `${styles.star} ${styles.starFilled}`
          : styles.star;

        return (
          <span
            key={starIndex}
            className={starClass}
            onMouseEnter={() => setHoveredStar(starIndex)}
            onMouseLeave={() => setHoveredStar(null)}
            onClick={() => onChange(starIndex)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                onChange(starIndex);
              }
            }}
          >
            ★
          </span>
        );
      })}
    </div>
  );
}

export default Rating;
