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
import { Bar } from "react-chartjs-2";

const PriceHistory = ({
  subscriptionPrices,
}: {
  subscriptionPrices: {
    pricePerMonth: number;
    createdAt: string;
  }[];
}) => {
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title);
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

  const priceOnTop = {
    id: "customLabels",
    afterDraw: (chart: ChartJS) => {
      const ctx = chart.ctx;
      const meta = chart.getDatasetMeta(0);
      const dataset = meta.data;

      dataset.forEach((bar: any, index) => {
        const value = bar.$context.raw as string;
        const x = bar.x;
        const y = bar.y;
        ctx.fillText(value, x - 5, y - 5); // Adjust the position of the label
      });
    },
  };

  return (
    <div className="w-full">
      <Bar
        data={data}
        options={{
          scales: {
            x: {
              grid: {
                display: false,
              },
              border: {
                display: false,
              },
            },
            y: {
              display: false, // Hide the y-axis
              offset: true,
              beginAtZero: true,
              ticks: {
                font: {
                  size: 16,
                },
              },
            },
          },
        }}
        plugins={[priceOnTop]}
      />
    </div>
  );
};

export default PriceHistory;
