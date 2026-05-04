"use client";

export default function SystemPerformanceChart() {
  // بيانات تجريبية للأعمدة
  const data = [40, 60, 30, 80, 50, 90, 40, 70, 50, 90, 60, 30, 70, 45, 80, 60, 40];

  return (
    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm h-full flex flex-col justify-between">
      {/* العنوان والتبديل */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xs font-semibold text-gray-700">System Performance</h3>
          <p className="text-[10px] text-gray-400">99.9% Uptime</p>
        </div>
        <div className="flex bg-gray-100 p-0.5 rounded-md">
          <button className="px-2 py-0.5 text-[9px] font-bold bg-white shadow-sm rounded text-gray-800">24h</button>
          <button className="px-2 py-0.5 text-[9px] font-medium text-gray-400">7d</button>
        </div>
      </div>

      {/* الرسم البياني (البارات) */}
      <div className="flex items-end gap-1 h-12 mt-2">
        {data.map((height, index) => (
          <div
            key={index}
            className={`w-full rounded-t-sm ${
              index % 2 === 0 ? "bg-indigo-500" : "bg-gray-200"
            }`}
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    </div>
  );
}