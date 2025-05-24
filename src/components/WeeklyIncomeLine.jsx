import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const WeeklyIncomeLine = () => {
    const data = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
          {
            label: 'Income (₦)',
            data: [50000, 75000, 65000, 90000],
            borderColor: '#8B5CF6',
            backgroundColor: 'rgba(139, 92, 246, 0.1)',
            tension: 0.3,
            fill: true,
          },
        ],
      };
    
      const options = {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
        },
      };
  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-bold text-lg mb-4">Weekly Income</h3>
      <Line data={data} options={options} />
    </div>
    
    </>
  )
}

export default WeeklyIncomeLine