import { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string;
  trend: string; // النص الأخضر
  icon: ReactNode;
}

export default function StatCard({ title, value, trend, icon }: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500 font-medium">{title}</p>
          <h3 className="text-2xl font-bold mt-1 text-gray-900">{value}</h3>
          <p className="text-sm text-green-600 font-medium mt-1">{trend}</p>
        </div>
        <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg">
          {icon}
        </div>
      </div>
    </div>
  );
}