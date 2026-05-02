"use client";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: 'Jan', val: 400 }, { name: 'Feb', val: 300 },
  { name: 'Mar', val: 600 }, { name: 'Apr', val: 800 },
  { name: 'May', val: 500 }, { name: 'Jun', val: 900 },
];

export default function PerformanceChart() {
  return (
    <div className="h-[250px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#888" fontSize={12} />
          <YAxis stroke="#888" fontSize={12} />
          <Tooltip />
          <Line type="monotone" dataKey="val" stroke="#6366f1" strokeWidth={3} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}