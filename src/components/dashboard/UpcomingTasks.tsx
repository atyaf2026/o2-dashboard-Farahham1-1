'use client';

import { Clock, MoreHorizontal } from 'lucide-react';

export default function UpcomingTasks() {
  const tasks = [
    {
      title: 'Review quarterly projections',
      due: 'Due in 2 hours',
      priority: 'HIGH',
      priorityColor: 'text-red-600',
      priorityBg: 'bg-red-50',
      borderColor: 'border-red-200',
    },
    {
      title: 'Sync with marketing team',
      due: 'Tomorrow at 10:00 AM',
      priority: 'MEDIUM',
      priorityColor: 'text-yellow-600',
      priorityBg: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
    },
    {
      title: 'Update system documentation',
      due: 'Friday, Oct 24',
      priority: 'MEDIUM',
      priorityColor: 'text-yellow-600',
      priorityBg: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
    },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
      {/* Header - تبديل الترتيب */}
      <div className="px-5 pt-5 pb-3">
        <div className="flex items-center justify-between">
          {/* الأيقونة أصبحت على الشمال */}
          <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
            <MoreHorizontal className="w-5 h-5 text-gray-500" />
          </button>
          {/* العنوان أصبح على اليمين */}
          <div className="text-right">
            <h3 className="font-semibold text-gray-900 text-base">Upcoming Tasks</h3>
            <p className="text-xs text-gray-400 mt-0.5">Deadlines & priorities</p>
          </div>
        </div>
      </div>

      {/* Tasks List - تبديل الترتيب */}
      <div className="px-5 pb-5">
        <div className="space-y-4">
          {tasks.map((task, idx) => (
            <div key={idx} className="flex items-center justify-between">
              {/* الـ Chip أصبح على الشمال */}
              <div className={`px-2.5 py-1 rounded-full ${task.priorityBg} border ${task.borderColor}`}>
                <span className={`text-xs font-semibold ${task.priorityColor}`}>{task.priority}</span>
              </div>

              {/* المحتوى أصبح على اليمين */}
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <h4 className="text-sm font-medium text-gray-800">{task.title}</h4>
                  <div className="flex items-center gap-2 mt-1 justify-end">
                    <span className="text-xs text-gray-500">{task.due}</span>
                    <Clock className="w-3 h-3 text-gray-400" />
                  </div>
                </div>
                <div className="w-4 h-4 border border-gray-300 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}