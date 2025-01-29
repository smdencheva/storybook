import React, { useState, useRef } from "react";

type MultiSelectProps = {
  options: string[];
  selected: string[];
  onChange: (newSelected: string[]) => void;
};

export function MultiSelect({ options, selected, onChange }: MultiSelectProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleCheckboxChange = (value: string) => {
    let newSelected;
    if (selected.includes(value)) {
      newSelected = selected.filter((v) => v !== value);
    } else {
      newSelected = [...selected, value];
    }
    onChange(newSelected);
  };

  return (
    <div
      ref={containerRef}
      style={{ position: "relative", display: "inline-block" }}
    >
      <div
        onClick={() => setOpen(!open)}
        style={{
          fontFamily: "Inter, sans-serif",
          border: "1px solid #ccc",
          padding: "8px",
          borderRadius: "4px",
          cursor: "pointer",
          minWidth: "120px",
        }}
      >
        {selected.length > 0 ? selected.join(", ") : "Select..."}
      </div>
      {open && (
        <div
          style={{
            fontFamily: "Inter, sans-serif",
            position: "absolute",
            top: "2.2rem",
            left: 0,
            border: "1px solid #ccc",
            background: "#fff",
            borderRadius: "4px",
            padding: "8px",
            zIndex: 999,
          }}
        >
          {options.map((opt) => (
            <label key={opt} style={{ display: "block", margin: "4px 0" }}>
              <input
                type="checkbox"
                checked={selected.includes(opt)}
                onChange={() => handleCheckboxChange(opt)}
              />
              {opt}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

export default MultiSelect;
