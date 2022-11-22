import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  brands,
  solid,
  regular,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import Form from 'react-bootstrap/Form';

Chart.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ["No Call Activity"],
    datasets: [
      {
        label: "# of Votes",
        data: [6, 3],
        backgroundColor: ["#eeeeee", "#f6f6f6"],
        borderColor: ["#eeeeee", "#f6f6f6"],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    plugins: {
      tooltip: {
        enabled: false,
      },
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
        <h3>Team/Number Analytics</h3>
        <div className="pie-btns">
          <button className="call">Call Analytics</button>
          <button className="missed-call">Missed Call Analytics</button>
        </div>
      </div>
      <div className="justCallNumber">
        <div className="callNumber">
          <h3>Just Call Number</h3>
          <Form.Select aria-label="Default select example" id="callNumber">
            <option>(123)-456-789-123</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </div>
        <button className="download">Download Report</button>
      </div>
      <Pie data={data} options={options} className="pie-chart" />
    </div>
  );
};

export default PieChart;
