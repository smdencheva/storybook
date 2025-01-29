import React, { useState } from "react";
import styles from "./MyForm.module.css";

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Form data submitted: ${JSON.stringify(formData)}`);
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <label htmlFor="name" className={styles.label}>
        Name:
      </label>
      <input
        id="name"
        name="name"
        type="text"
        className={styles.input}
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter your name"
      />

      <label htmlFor="email" className={styles.label}>
        Email:
      </label>
      <input
        id="email"
        name="email"
        type="email"
        className={styles.input}
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
      />

      <button type="submit" className={styles.submitButton}>
        Submit
      </button>
    </form>
  );
};

export default MyForm;
