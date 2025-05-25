import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Legend,
  } from 'recharts';
  
  const data = [
    { name: 'May', Personalized: 12, Instant: 40 },
    { name: 'Jun', Personalized: 22, Instant: 50 },
    { name: 'Jul', Personalized: 8, Instant: 25 },
    { name: 'Aug', Personalized: 10, Instant: 40 },
    { name: 'Sep', Personalized: 12, Instant: 35 },
    { name: 'Oct', Personalized: 18, Instant: 62 },
    { name: 'Nov', Personalized: 10, Instant: 60 },
  ];
  
  export default function MonthlyIssuanceChart() {
    return (
      <div className="p-4 bg-white shadow rounded-lg">
        <h2 className="text-lg font-medium mb-4">Monthly Issuance</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} barGap={8}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend
              verticalAlign="bottom"
              height={36}
              iconType="circle"
              wrapperStyle={{ paddingTop: 10 }}
            />
            <Bar dataKey="Personalized" stackId="a" fill="#003087" />
            <Bar dataKey="Instant" stackId="a" fill="#DDEBFB" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
  