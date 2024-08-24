import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { ChartOptions } from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export default function LineChartHour() {
  const data = {
    labels: [
      "00:00",
      "01:00",
      "02:00",
      "03:00",
      "04:00",
      "05:00",
      "06:00",
      "07:00",
      "08:00",
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
      "23:00",
    ],
    datasets: [
      {
        label: "Grafik",
        data: [
          5, 10, 8, 12, 15, 20, 25, 18, 22, 30, 35, 40, 45, 50, 55, 60, 65, 70,
          75, 80, 60, 25, 18, 22, 30, 35
        ],
        fill: false,
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.1, // Mengatur kelengkungan garis
      },
    ],
  };

  // Opsi untuk chart
  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false, 
    
    scales: {
      x: {
        title: {
          display: true,
          text: "Jam",
        },
      },
      y: {
        title: {
          display: true,
          text: "",
        },
        beginAtZero: true, // Memulai sumbu Y dari 0
      },
    },
  };

  return (
    <div style={{ height: '300px', width: '100%' }}>
      <Line data={data} options={options} />
    </div>
  );
}
