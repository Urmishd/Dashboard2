import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js/auto";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Revenue() {
    const data = {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            label: "Sales",
            data: [
              12000, 19000, 15000, 18000, 22000, 20000, 25000, 18000, 20000, 28000,
              25000, 30000,
            ],
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      };
    
      const options = {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "Total Revenue",
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Revenue (USD)",
            },
          },
          x: {
            title: {
              display: true,
              text: "Month",
            },
          },
        },
      };
     
  return (
    <>
 
        <div className="">
          <Bar data={data} options={options}  />
        </div>

    
    </>
  )
}

export default Revenue