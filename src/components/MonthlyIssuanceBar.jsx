import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
const MonthlyIssuanceBar = () => {
    const data = {
        labels: ['May', 'Jun',"Jul","Aug","Sep","Oct","Nov"],
        datasets: [
          {
            label: 'Cards Issued',
            data: [100, 80, 60, 40, 20],
            backgroundColor: '#3B82F6',
            borderWidth: 0,
          },
        ],
      };
    
      const options = {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
        },
        scales: {
          y: { beginAtZero: true },
        },
      };
  return (
    <>
     <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-bold text-lg mb-4">Monthly Card Issuance</h3>
      <Bar data={data} options={options} />
    </div>
    </>
  )
}

export default MonthlyIssuanceBar