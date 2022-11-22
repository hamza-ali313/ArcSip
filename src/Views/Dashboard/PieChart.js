import React, { useState, useCallback, useRef, useEffect } from "react";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

Chart.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ["Outbound", "Inbound", "Missed"],
    datasets: [
      {
        label: "# of Votes",
        data: [3, 3, 3],
        backgroundColor: ["#3D39DA", "#EDAD57", "#5CCE4A"],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        maxHeight: 50,
        maxWidth: 50,
        labels: {
          usePointStyle: true,
          font: {
            size: 15,
            weight: "bold",
          },
          color: "#000",
        },
        maxHeight: 34,
        maxWeight: 14,
      },
    },
  };
  return (
    <div className="pie">
      <div className="title">
        <h3>Call Log Total</h3>
      </div>
      <Pie data={data} options={options} className="pie-chart" />
    </div>
  );
};

export default PieChart;
