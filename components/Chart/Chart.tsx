import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { decodeAction } from "next/dist/server/app-render/entry-base";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type MyChartProps = {
  labels: string[];
  dataPoints: number[];
};

export function MyChart({ labels, dataPoints }: MyChartProps) {
  const data = {
    labels,
    datasets: [
      {
        label: "Example Dataset",
        data: dataPoints,
        borderColor: "blue",
        backgroundColor: "blue",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={data} options={options} />;
}

export default MyChart;
