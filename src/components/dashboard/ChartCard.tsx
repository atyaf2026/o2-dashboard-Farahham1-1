"use client";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 4000 }, { name: 'Feb', value: 3000 }, { name: 'Mar', value: 5000 },
  { name: 'Apr', value: 2780 }, { name: 'May', value: 6890 },
];

export default function ChartCard() {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-[350px]">
      <h3 className="font-bold mb-6 text-gray-800">الأداء العام</h3>
      <ResponsiveContainer width="100%" height="80%">
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="value" stroke="#2563eb" fill="#dbeafe" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}