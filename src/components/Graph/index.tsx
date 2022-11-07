import React from "react";
import { SalesRecord } from "types";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Scale,
} from "chart.js";
import { Line } from "react-chartjs-2";

import "components/Graph/index.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

export const options = {
  responsive: true,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: "Retail Sales",
    },
  },
  scales: {
    y: {
      type: "linear" as const,
      display: true,
      position: "left" as const,
      a: 1000,
    },
    y1: {
      type: "linear" as const,
      display: true,
      position: "right" as const,
      scale: 10,

      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const labels = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

function Graph({ salesData }: { salesData: SalesRecord[] }) {
  const data = {
    labels,
    datasets: [
      {
        label: "Retail Sales",
        data: salesData.map((record) => record.retailSales),
        borderColor: "rgb(12, 141, 192)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        yAxisID: "y",
      },
      {
        label: "Wholesale Sales",
        data: salesData.map((record) => record.wholesaleSales),
        borderColor: "rgb(161, 161, 161)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        yAxisID: "y1",
        scale: 2,
      },
    ],
  };

  return (
    <div className="graph">
      <Line options={options} data={data} />
    </div>
  );
}

export default Graph;
