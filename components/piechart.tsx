// components/PieChartCard.tsx
import { FC } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";

// Register chart components
ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartCardProps {
  malePercentage?: number;
  femalePercentage?: number;
  totalExpense?: number;
}

const PieChartCard: FC<PieChartCardProps> = ({
  malePercentage = 60, // Default to 60% male
  femalePercentage = 40, // Default to 40% female
  totalExpense = 136, // Default total expense
}) => {
  const data: ChartData<"doughnut"> = {
    labels: ["Male", "Female"],
    datasets: [
      {
        label: "Expense Distribution",
        data: [malePercentage, femalePercentage],
        backgroundColor: ["#4F46E5", "#FBBF24"], // Blue and yellow colors
        borderWidth: 4,
        borderJoinStyle: "round",
        borderRadius: 10,

        // cutout: '70%', // Creates the hole in the middle
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the default chart legend
      },
    },
  };

  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-max h-max">
      {/* Chart */}
      <div className="relative w-52 h-52">
        <Doughnut data={data} options={options} />
        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-gray-500 text-sm">Total Expense</span>
          <span className="text-3xl font-bold">{totalExpense}</span>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-4 flex justify-center space-x-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-blue-600"></div>
          <span className="text-sm text-gray-600">Male</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <span className="text-sm text-gray-600">Female</span>
        </div>
      </div>
    </div>
  );
};

export default PieChartCard;
