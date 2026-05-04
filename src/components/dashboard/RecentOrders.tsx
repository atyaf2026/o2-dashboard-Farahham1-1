import { ShoppingBag } from "lucide-react";

const orders = [
  {
    id: "#3492",
    time: "2 minutes ago",
    price: "$242.22",
    status: "Paid",
    statusClass: "bg-green-100 text-green-600",
  },
  {
    id: "#3491",
    time: "1 hour ago",
    price: "$1,122.22",
    status: "Pending",
    statusClass: "bg-yellow-100 text-yellow-600",
  },
  {
    id: "#3492",
    time: "3 hours ago",
    price: "$84.52",
    status: "Paid",
    statusClass: "bg-green-100 text-green-600",
  },
  {
    id: "#3489",
    time: "Yesterday",
    price: "$342.22",
    status: "Canceled",
    statusClass: "bg-slate-100 text-slate-400",
  },
];

export default function RecentOrders() {
  return (
    <div
      dir="ltr"
      className="h-full rounded-xl border border-gray-200 bg-white p-7 shadow-sm"
    >
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-slate-900">
          Recent Orders
        </h2>

        <button className="text-sm font-medium text-indigo-600">
          View all
        </button>
      </div>

      <div className="space-y-5">
        {orders.map((order, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-400">
              <ShoppingBag size={19} strokeWidth={2} />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-sm font-bold leading-tight text-slate-900">
                Order {order.id}
              </p>
              <p className="mt-1 text-xs text-slate-500">
                {order.time}
              </p>
            </div>

            <div className="text-right">
              <p className="text-sm font-bold leading-tight text-slate-900">
                {order.price}
              </p>
              <span
                className={`mt-1 inline-flex rounded-full px-2 py-0.5 text-[10px] font-bold ${order.statusClass}`}
              >
                {order.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 h-[128px] overflow-hidden rounded-lg bg-slate-300">
        <div className="h-full w-full bg-[linear-gradient(58deg,transparent_0%,transparent_42%,rgba(255,255,255,0.14)_42%,rgba(255,255,255,0.14)_43%,transparent_43%),linear-gradient(58deg,transparent_0%,transparent_66%,rgba(255,255,255,0.12)_66%,rgba(255,255,255,0.12)_67%,transparent_67%)]" />
      </div>
    </div>
  );
}
