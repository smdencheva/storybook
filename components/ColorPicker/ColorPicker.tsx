import React from "react";
import styles from "./ColorPicker.module.css";

type ColorPickerProps = {
  value: string;
  onChange: (newColor: string) => void;
};

export function ColorPicker({ value, onChange }: ColorPickerProps) {
  return (
    <div className={styles.colorPickerContainer}>
      <input
        className={styles.colorInput}
        type="color"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <input
        className={styles.textInput}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default ColorPicker;
