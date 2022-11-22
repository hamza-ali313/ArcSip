import React from "react";
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
import { Line } from "react-chartjs-2";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const LineChart = () => {
  const labels = [
    "2022-10-19",
    "2022-10-19",
    "2022-10-19",
    "2022-10-19",
    "2022-10-19",
    "2022-10-19",
  ];

  const data = {
    labels: labels,
    datasets: [
       
      {
        // backgroundColor: "# 3D39DA",
        label: "inbound calls",
        borderColor: "#5CCE4A",
        tension: 0.4,
        data: [0, 10, 5, 2, 20, 30, 45],
      },
      {
        // backgroundColor: "#EDAD57",
        label: "outbound calls",
        borderColor: "#EDAD57",
        tension: 0.4,
        data: [4, 17, 7, 7, 23, 34, 49],
      },
      {
        // backgroundColor:  "#5CCE4A",
        label: "Missed calls",
        borderColor: "#3D39DA",
        tension: 0.4,
        data: [25, 31, 39, 31, 39, 31, 39],
      },
    ],
  };
  const options = {
    datasets:{
        line:{
            showLine:false,
        },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          borderDash: [9],
        },
      },
    },

    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#fff",
        titleColor: "#000",
        bodyColor: "#000",
        callbacks: {},
      },
    },
  };
  return (
    <div className="line-chart">
      <Line data={data} options={options} />
      <div className="view-details">
        <DropdownButton id="dropdown-basic-button" title="View Details">
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
};

export default LineChart;
