import React, { useState, useEffect } from "react";
import styles from "./Autocomplete.module.css";

type AutocompleteProps = {
  suggestions: string[];
  onChange: (val: string) => void;
};

export function Autocomplete({ suggestions, onChange }: AutocompleteProps) {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState<string[]>([]);

  useEffect(() => {
    const lowerQuery = query.toLowerCase();
    setFiltered(
      suggestions.filter((s) => s.toLowerCase().includes(lowerQuery))
    );
  }, [query, suggestions]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    onChange(val);
  };

  return (
    <div className={styles.autocompleteContainer}>
      <input
        className={styles.autocompleteInput}
        type="text"
        value={query}
        onChange={handleChange}
      />
      {filtered.length > 0 && (
        <ul className={styles.suggestionList}>
          {filtered.map((item) => (
            <li
              key={item}
              className={styles.suggestionItem}
              onClick={() => {
                setQuery(item);
                onChange(item);
                setFiltered([]);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
