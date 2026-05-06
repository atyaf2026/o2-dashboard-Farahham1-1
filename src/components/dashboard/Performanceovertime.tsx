"use client";

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { ChevronDown } from "lucide-react";

const data = [
  { value: 28 },
  { value: 34 },
  { value: 44 },
  { value: 58 },
  { value: 65 },
  { value: 62 },
  { value: 51 },
  { value: 44 },
  { value: 40 },
  { value: 45 },
  { value: 66 },
];

export default function PerformanceOverTime() {
  return (
    <div dir="ltr" className="rounded-xl border border-gray-200 bg-white p-7 shadow-sm">
      <div className="mb-7 flex items-start justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            Performance Over Time
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Transaction volume compared to last month
          </p>
        </div>

        <button className="flex items-center gap-3 rounded-md border border-gray-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
          Monthly
          <ChevronDown size={16} className="text-slate-500" />
        </button>
      </div>

      <div className="h-[246px] rounded-lg bg-slate-50 px-0 py-8">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 8 }}>
            <defs>
              <linearGradient id="performanceFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#5b57ff" stopOpacity={0.22} />
                <stop offset="100%" stopColor="#5b57ff" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              vertical={false}
              stroke="#e8edf5"
              strokeDasharray="2 4"
            />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#514bff"
              strokeWidth={2}
              fill="url(#performanceFill)"
              dot={false}
              activeDot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 border-t border-gray-100 pt-5">
        <div className="grid grid-cols-4 text-center">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">
              Users
            </p>
            <p className="mt-2 text-base font-bold text-slate-900">2.4k</p>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">
              Click Rate
            </p>
            <p className="mt-2 text-base font-bold text-slate-900">18.2%</p>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">
              Bounce
            </p>
            <p className="mt-2 text-base font-bold text-slate-900">24%</p>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-wide text-slate-400">
              Goal
            </p>
            <p className="mt-2 text-base font-bold text-indigo-600">Reached</p>
          </div>
        </div>
      </div>
    </div>
  );
}
