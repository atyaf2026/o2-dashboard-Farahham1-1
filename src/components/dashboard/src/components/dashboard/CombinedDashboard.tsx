import { ShoppingBag } from "lucide-react";

// بيانات الطلبات
const orders = [
  { id: "#3492", time: "2 minutes ago", amount: "$240.00", status: "Paid" },
  { id: "#3491", time: "1 hour ago", amount: "$1,100.00", status: "Pending" },
  { id: "#3490", time: "3 hours ago", amount: "$84.50", status: "Paid" },
];

export default function CombinedDashboard() {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* القسم الأول: الرسم البياني */}
      <div>
        <h2 className="font-semibold text-gray-900 mb-6">Performance Over Time</h2>
        <div className="flex items-end justify-between gap-2 h-48 w-full border-b border-gray-100 pb-4">
           {[40, 60, 30, 85, 45, 60, 50, 90].map((h, i) => (
             <div key={i} className="w-full bg-indigo-500 rounded-t-sm" style={{ height: `${h}%` }} />
           ))}
        </div>
      </div>

      {/* القسم الثاني: قائمة الطلبات */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-semibold text-gray-900">Recent Orders</h2>
          <button className="text-sm text-indigo-600">View all</button>
        </div>
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-50 rounded-lg text-gray-400">
                  <ShoppingBag size={18} />
                </div>
                <div>
                  <p className="font-medium text-sm">Order {order.id}</p>
                  <p className="text-xs text-gray-400">{order.time}</p>
                </div>
              </div>
              <p className="font-semibold text-sm">{order.amount}</p>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}