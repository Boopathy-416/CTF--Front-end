import React, { useRef } from "react";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function YearlyCollection() {
  const chartRef = useRef(null);

  const years = ["2021", "2022", "2023"];
  const data = {
    labels: years,
    datasets: [
      {
        label: "Yearly Collection",
        data: [60000, 150000, 200000],
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.5)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => {
            return value >= 1000 ? "$" + value / 1000 + "k" : "$" + value;
          },
        },
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm" ref={chartRef}>
      <h2 className="text-2xl font-semibold mb-4">Yearly Collection</h2>
      <Line data={data} options={options} height={180} />
    </div>
  );
}
