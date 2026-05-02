import { House, BarChart2, Users, FileText, Settings, LifeBuoy, LogOut, ChevronUp } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col h-screen sticky top-0">
      
      {/* 1. الشعار */}
      <div className="p-6 font-bold text-xl text-indigo-600">O2 Dashboard</div>

      {/* 2. قائمة التنقل الرئيسية (Navigation) */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        
        {/* العنصر النشط (Active) - Home */}
        <div className="flex items-center gap-3 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg font-medium cursor-pointer">
          <House size={20} />
          <span>Home</span>
        </div>

        {/* Analytics */}
        <div className="flex items-center gap-3 px-4 py-2 text-zinc-600 hover:bg-zinc-50 rounded-lg cursor-pointer transition-colors">
          <BarChart2 size={20} />
          <span>Analytics</span>
        </div>

        {/* Users */}
        <div className="flex items-center gap-3 px-4 py-2 text-zinc-600 hover:bg-zinc-50 rounded-lg cursor-pointer transition-colors">
          <Users size={20} />
          <span>Users</span>
        </div>

        {/* Reports */}
        <div className="flex items-center gap-3 px-4 py-2 text-zinc-600 hover:bg-zinc-50 rounded-lg cursor-pointer transition-colors">
          <FileText size={20} />
          <span>Reports</span>
        </div>

        {/* Settings */}
        <div className="flex items-center gap-3 px-4 py-2 text-zinc-600 hover:bg-zinc-50 rounded-lg cursor-pointer transition-colors">
          <Settings size={20} />
          <span>Settings</span>
        </div>
        
      </nav>

      {/* 3. الجزء السفلي (الحساب والدعم) */}
      <div className="border-t border-gray-200 p-4 space-y-2">
        
        {/* Support Link */}
        <div className="flex items-center gap-3 px-4 py-2 text-zinc-600 hover:bg-zinc-50 rounded-lg cursor-pointer transition-colors">
          <LifeBuoy size={20} />
          <span>Support</span>
        </div>

        {/* Logout Link */}
        <div className="flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg cursor-pointer transition-colors">
          <LogOut size={20} />
          <span>Logout</span>
        </div>

        {/* User Profile Card */}
        <div className="flex items-center gap-3 p-3 bg-zinc-50 rounded-xl mt-4 border border-zinc-100 cursor-pointer">
          <img 
            src="/images/farah.jpg"
            alt="farahham1" 
            className="w-10 h-10 rounded-full border-2 border-white shadow-inner"
          />
          <div className="flex-1">
            <h4 className="font-semibold text-zinc-900 text-sm">farahham1</h4>
            <p className="text-xs text-zinc-500">farahhusam56@gmail.com</p>
          </div>
          <ChevronUp size={18} className="text-zinc-400" />
        </div>
      </div>
    </aside>
  );
}