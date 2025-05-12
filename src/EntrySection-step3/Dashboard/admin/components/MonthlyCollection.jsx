import React, { useRef } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function MonthlyCollection() {
  const chartRef = useRef(null);

  const months = ["J", "F", "M", "A", "M", "J", "J", "A","S","O","N", "D"];

  const data = {
    labels: months,
    datasets: [
      {
        label: "Monthly Collection",
        data: [10000, 15000, 18000, 16000, 20000, 15000, 22000, 18000, 30000, 18000, 16000, 20000,],
        backgroundColor: "rgba(19, 130, 246, 0.8)",
        borderRadius: 1,
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
          callback: (value) => "$" + value / 1000 + "k",
        },
      },
    },
  };

  return (
    <div className="bg-transaprent p-4 " ref={chartRef}>
      <h2 className="text-2xl font-semibold mb-4">Monthly Collection</h2>
      <Bar data={data} options={options} height={180} />
    </div>
  );
}
