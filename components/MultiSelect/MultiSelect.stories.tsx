import React, { useState } from "react";
import { MultiSelect } from "./MultiSelect";

export default {
  title: "Components/MultiSelect",
  component: MultiSelect,
};

export const Basic = () => {
  const [selectedFruits, setSelectedFruits] = useState<string[]>([]);

  return (
    <div style={{ padding: "1rem" }}>
      <h3>MultiSelect Example</h3>
      <MultiSelect
        options={["Apple", "Banana", "Cherry", "Mango", "Orange"]}
        selected={selectedFruits}
        onChange={setSelectedFruits}
      />
      <p>Selected: {selectedFruits.join(", ") || "None"}</p>
    </div>
  );
};

export const PreselectedValues = () => {
  const [selectedFruits, setSelectedFruits] = useState(["Banana", "Orange"]);

  return (
    <div style={{ padding: "1rem" }}>
      <h3>MultiSelect with Preselected Values</h3>
      <MultiSelect
        options={["Apple", "Banana", "Cherry", "Mango", "Orange"]}
        selected={selectedFruits}
        onChange={setSelectedFruits}
      />
      <p>Selected: {selectedFruits.join(", ")}</p>
    </div>
  );
};
