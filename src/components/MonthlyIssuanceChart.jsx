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
        <h2 className="text-[18px] font-[500] mb-4 text-[#121212]  ">Monthly Issuance</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} barGap={8}>
            <XAxis dataKey="name" className='text-[#667085] font-[400] text-[11.76px] ' />
            <YAxis ticks={[0, 20, 40, 60, 80, 100]} domain={[0, 100]} />
            <Tooltip />
            <Legend
              verticalAlign="bottom"
              height={36}
              iconType="circle"
              wrapperStyle={{ paddingTop: 10 }}
              
            />
            <Bar dataKey="Personalized" stackId="a" fill="#014DAF"  />
            <Bar dataKey="Instant"  stackId="a" fill="#CCE2FF"  radius={[8, 8, 0, 0]}/>
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
  