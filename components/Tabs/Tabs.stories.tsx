import React from "react";
import { Tabs, Tab } from "./Tabs";

export default {
  title: "Components/Tabs",
  component: Tabs,
  Tab,
};

export const BasicTabs = () => (
  <Tabs defaultIndex={0}>
    <Tab label="Tab One">
      <h3>Content One</h3>
      <p>This is tab one content.</p>
    </Tab>
    <Tab label="Tab Two">
      <h3>Content Two</h3>
      <p>This is tab two content.</p>
    </Tab>
    <Tab label="Tab Three">
      <h3>Content Three</h3>
      <p>This is tab three content.</p>
    </Tab>
  </Tabs>
);
