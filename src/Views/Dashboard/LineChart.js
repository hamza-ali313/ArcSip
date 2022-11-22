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
import Form from 'react-bootstrap/Form';
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
      <div className="setting">
        <div className="team-members">
          <h3>Team Members</h3>
          <Form.Select aria-label="Default select example" id="person">
            <option>You</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </div>
        <div className="date">
          <h3>Duration</h3>
          <Form.Select aria-label="Default select example" id="date">
            <option>Oct-19-2022 | jan-19-2022</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </div>
        <button className="download">Download Report</button>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
