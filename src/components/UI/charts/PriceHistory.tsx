"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, ChartProps } from "react-chartjs-2";

const PriceHistory = ({
  subscriptionPrices,
}: {
  subscriptionPrices: {
    pricePerMonth: number;
    createdAt: string;
  }[];
}) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    // Tooltip,
    // Legend,
  );
  const data = {
    labels: subscriptionPrices.map((subscriptionPrice) =>
      new Date(subscriptionPrice.createdAt).toLocaleDateString("sv"),
    ),
    datasets: [
      {
        label: "Dataset 1",
        data: subscriptionPrices.map(
          (subscriptionPrice) => subscriptionPrice.pricePerMonth,
        ),
        backgroundColor: "white",
        borderRadius: 16,
      },
    ],
  };

  return (
    <div className="w-full">
      <Bar
        data={data}
        options={{
          plugins: {},
          scales: {
            x: {
              grid: {
                display: false,
                // tickColor: "transparent"
              },
              border: {
                display: false,
              },
            },
            y: {
              // display: false, // Hide the y-axis
              border: {
                display: false,
              },
              beginAtZero: true,
              grid: {
                display: false,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default PriceHistory;
