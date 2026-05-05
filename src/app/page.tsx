import StatCard from "@/components/dashboard/StatCard";
import SystemPerformanceChart from "@/components/dashboard/SystemPerformanceChart";
import SystemHealth from "@/components/dashboard/SystemHealth";
import UpcomingTasks from "@/components/dashboard/UpcomingTasks";
import PerformanceoverTime from "@/components/dashboard/Performanceovertime";
import RecentOrders from "@/components/dashboard/RecentOrders";
import AssetDistribution from "@/components/dashboard/AssetDistribution";

import {
  Activity,
  DollarSign,
  CheckCircle,
  TrendingUp,
} from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="mb-6" dir="ltr">
        <h1 className="text-2xl font-bold leading-tight text-slate-900">
          Welcome back, Farah
        </h1>
        <p className="mt-1 text-sm text-slate-600">
          Here is what's happening with your projects today.
        </p>
      </div>

      <div
        dir="ltr"
        className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[220px_220px_1fr]"
      >
        <div className="h-[140px]">
          <StatCard
            title="Total Revenue"
            value="$48,290.00"
            mainIcon={DollarSign}
            badge="+12.18%"
            showProgress={true}
            progressPercentage={60}
          />
        </div>

        <div className="h-[140px]">
          <StatCard
            title="Active Sessions"
            value="1,284"
            mainIcon={Activity}
            topRightIcon={CheckCircle}
            topRightText="Active"
            footerText="42 users online now"
            footerIcon={TrendingUp}
          />
        </div>

        <div className="h-[140px]">
          <SystemPerformanceChart />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_1fr]">
        <SystemHealth />
        <UpcomingTasks />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-[1.45fr_0.7fr]" dir="ltr">
        <PerformanceoverTime />
        <RecentOrders />
      </div>

      <div className="mt-6 w-full">
        <AssetDistribution />
      </div>
    </main>
  );
}

