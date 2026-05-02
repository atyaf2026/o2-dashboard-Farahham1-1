import DashboardLayout from '@/components/layout/DashboardLayout';
import StatCard from '@/components/dashboard/StatCard';
import { Users, DollarSign } from 'lucide-react';

export default function Home() {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-2xl font-bold">لوحة التحكم</h1>
        <p className="text-gray-600">نظرة عامة على البيانات</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="إجمالي المستخدمين" value="1,234" icon={<Users size={20} />} />
        <StatCard title="المبيعات" value="$5,678" icon={<DollarSign size={20} />} />
      </div>
    </DashboardLayout>
  );
}