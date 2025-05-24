import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const CardStatusPie = () => {
    const data = {
        labels: ['Active', 'Expired', 'Blocked', 'Pending'],
        datasets: [
          {
            data: [65, 15, 10, 10],
            backgroundColor: ['#10B981', '#EF4444', '#F59E0B', '#3B82F6'],
            hoverOffset: 4,
          },
        ],
      };
  return (
    <>
     <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-bold text-lg mb-4">Card Status Distribution</h3>
      <div className="h-64">
        <Pie data={data} />
      </div>
    </div>
    </>
  )
}

export default CardStatusPie