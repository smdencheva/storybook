import React, { useState } from "react";
import styles from "./Tabs.module.css";

type TabsProps = {
  children: React.ReactNode;
  defaultIndex?: number;
};

type TabProps = {
  label: string;
  children: React.ReactNode;
};

export function Tabs({ children, defaultIndex = 0 }: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  const tabs = React.Children.toArray(children).filter(
    (child: any) => child.type === Tab
  );

  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabList}>
        {tabs.map((child: any, i: number) => {
          const isActive = i === activeIndex;
          const buttonClass = isActive
            ? `${styles.tabButton} ${styles.tabButtonActive}`
            : styles.tabButton;

          return (
            <button
              key={i}
              className={buttonClass}
              onClick={() => setActiveIndex(i)}
            >
              {child.props.label}
            </button>
          );
        })}
      </div>

      <div className={styles.tabPanel}>{tabs[activeIndex]}</div>
    </div>
  );
}

export function Tab({ label, children }: TabProps) {
  return <>{children}</>;
}
