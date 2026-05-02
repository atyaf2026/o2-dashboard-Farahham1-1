import StatCard from "@/components/dashboard/StatCard";
import PerformanceChart from "@/components/dashboard/PerformanceChart";
import { DollarSign, Users, Activity, Filter, Download } from "lucide-react";
import RecentOrders from "@/components/dashboard/RecentOrders";

export default function Page() {
  // بيانات وهمية للرسم البياني الصغير داخل البطاقة
  const barData = [40, 70, 45, 90, 55, 80, 60];

  return (
    <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-900">Welcome back, Farah</h1>

      {/* البطاقات العلوية */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* بطاقة System Performance المدمج بها الرسم البياني */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm text-gray-500">System Performance</p>
              <h3 className="text-2xl font-bold mt-1">99.9%</h3>
            </div>
            <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
              <Activity size={20} />
            </div>
          </div>
          {/* الرسم البياني الصغير */}
          <div className="flex items-end justify-between gap-1 h-12 w-full">
            {barData.map((h, i) => (
              <div key={i} className="w-full bg-indigo-500 rounded-t-sm" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>

        <StatCard title="Active Sessions" value="1,284" trend="42 users online now" icon={<Users size={20} />} />
        <StatCard title="Total Revenue" value="$48,290.00" trend="+12% from last month" icon={<DollarSign size={20} />} />
      </div>

      {/* 2. الرسم البياني الرئيسي + الطلبات */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h2 className="font-semibold mb-6">Performance Over Time</h2>
          <PerformanceChart />
        </div>
        <div className="lg:col-span-1">
          <RecentOrders />
        </div>
      </div>

      {/* 3. صحة النظام + المهام */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h2 className="font-semibold mb-4">System Health</h2>
          <p className="text-sm text-gray-400">Real-time status monitor</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h2 className="font-semibold mb-4">Upcoming Tasks</h2>
          <p className="text-sm text-gray-400">Deadlines & priorities</p>
        </div>
      </div>
    </div>
  );
}