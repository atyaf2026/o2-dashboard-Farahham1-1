import {
  House,
  BarChart2,
  Users,
  FileText,
  Settings,
  LifeBuoy,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside
      dir="ltr"
      // قمنا بإزالة fixed ووضعنا flex-shrink-0 لضمان ثبات العرض
      className="sticky top-0 z-50 hidden h-screen w-[220px] flex-shrink-0 flex-col border-r border-gray-200 bg-white md:flex"
    >
      <div className="px-5 pt-7 pb-8 text-lg font-bold text-indigo-600">
        O2 Dashboard
      </div>

      <nav className="flex-1 px-3 space-y-2">
        <div className="flex h-11 items-center justify-between rounded-xl bg-indigo-50 px-4 text-sm font-medium text-indigo-600">
          <span>Home</span>
          <House size={18} />
        </div>

        <div className="flex h-11 items-center justify-between rounded-xl px-4 text-sm font-medium text-slate-600">
          <span>Analytics</span>
          <BarChart2 size={18} />
        </div>

        <div className="flex h-11 items-center justify-between rounded-xl px-4 text-sm font-medium text-slate-600">
          <span>Users</span>
          <Users size={18} />
        </div>

        <div className="flex h-11 items-center justify-between rounded-xl px-4 text-sm font-medium text-slate-600">
          <span>Reports</span>
          <FileText size={18} />
        </div>

        <div className="flex h-11 items-center justify-between rounded-xl px-4 text-sm font-medium text-slate-600">
          <span>Settings</span>
          <Settings size={18} />
        </div>
      </nav>

      <div className="border-t border-gray-200 px-3 pt-4 pb-5">
        <div className="flex h-11 items-center justify-between rounded-xl px-4 text-sm font-medium text-slate-600">
          <span>Support</span>
          <LifeBuoy size={18} />
        </div>

        <div className="mt-2 flex h-11 items-center justify-between rounded-xl px-4 text-sm font-medium text-red-600">
          <span>Logout</span>
          <LogOut size={18} />
        </div>

        <div className="mt-5 flex h-[64px] items-center gap-2 rounded-xl border border-gray-100 bg-slate-50 px-3">
          <div className="min-w-0 flex-1">
            <h4 className="truncate text-xs font-bold text-slate-900">
              farahham1
            </h4>
            <p className="truncate text-[10px] text-slate-500">
              farahhusam56@gmail.com
            </p>
          </div>

          <img
            src="/images/farah.jpg"
            alt="farahham1"
            className="h-9 w-9 rounded-full object-cover"
          />
        </div>
      </div>
    </aside>
  );
}
