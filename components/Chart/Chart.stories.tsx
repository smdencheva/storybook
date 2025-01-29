import React from "react";
import { MyChart } from "./Chart";

export default {
  title: "Components/MyChart",
  component: MyChart,
};

export const BasicLineChart = () => {
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const dataPoints = [12, 19, 3, 5, 2, 10];

  return (
    <div style={{ width: "500px", margin: "0 auto" }}>
      <MyChart labels={labels} dataPoints={dataPoints} />
    </div>
  );
};
