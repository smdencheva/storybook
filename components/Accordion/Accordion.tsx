import React, { useState, ReactNode } from "react";
import styles from "./Accordion.module.css";

export interface AccordionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.accordion}>
      <button className={styles.header} onClick={toggleAccordion}>
        <span>{title}</span>
        <span className={`${styles.icon} ${isOpen ? styles.open : ""}`}>
          {isOpen ? "-" : "+"}
        </span>
      </button>
      {isOpen && <div className={styles.content}>{children}</div>}
    </div>
  );
};

export default Accordion;
