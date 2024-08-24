import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Mendaftarkan elemen-elemen yang diperlukan untuk Doughnut Chart
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    datasets: [
      {
        label: 'Pesan',
        data: [45, 8, 23],
        backgroundColor: [
          '#4FBEAB',
          '#F3F5F8',
          '#3366FF'
        ],
        hoverOffset: 1
      }
    ]
  };


  return <Doughnut width={150} height={150} data={data} />;
};

export default DoughnutChart;