import React, { useState } from "react";
import { ColorPicker } from "./ColorPicker";

export default {
  title: "Components/ColorPicker",
  component: ColorPicker,
};

export const Basic = () => {
  const [color, setColor] = useState("#ff0000");

  return (
    <div style={{ padding: "1rem" }}>
      <h3>Color Picker</h3>
      <ColorPicker value={color} onChange={setColor} />
      <p>Selected color: {color}</p>
    </div>
  );
};
