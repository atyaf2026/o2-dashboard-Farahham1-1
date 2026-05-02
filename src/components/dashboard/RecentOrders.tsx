import { ShoppingBag, MoreHorizontal } from "lucide-react";

const orders = [
  { id: "#3492", time: "2 minutes ago", amount: "$240.00", status: "Paid", color: "text-green-600 bg-green-50" },
  { id: "#3491", time: "1 hour ago", amount: "$1,100.00", status: "Pending", color: "text-amber-600 bg-amber-50" },
  { id: "#3490", time: "3 hours ago", amount: "$84.50", status: "Paid", color: "text-green-600 bg-green-50" },
  { id: "#3489", time: "Yesterday", amount: "$34.00", status: "Canceled", color: "text-gray-600 bg-gray-50" },
];

export default function RecentOrders() {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm h-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-semibold text-gray-900">Recent Orders</h2>
        <button className="text-sm text-indigo-600 hover:text-indigo-800">View all</button>
      </div>
      
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="flex items-center justify-between group">
            <div className="flex items-center gap-3">
              {/* أيقونة الحقيبة على الجنب */}
              <div className="p-2 bg-gray-50 rounded-lg text-gray-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                <ShoppingBag size={20} />
              </div>
              <div>
                <p className="font-medium text-sm text-gray-900">Order {order.id}</p>
                <p className="text-xs text-gray-400">{order.time}</p>
              </div>
            </div>
            
            <div className="text-right">
              <p className="font-semibold text-sm">{order.amount}</p>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${order.color}`}>
                {order.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}