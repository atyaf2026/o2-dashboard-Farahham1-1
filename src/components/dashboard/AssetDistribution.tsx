import {
  AlertCircle,
  Cloud,
  Database,
  Download,
  Filter,
  MoreVertical,
  Network,
  Server,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const assets = [
  {
    name: "Main DB Cluster (NA-Z1)",
    category: "Database",
    owner: "John Doe",
    initials: "JD",
    status: "Operational",
    statusClass: "bg-green-100 text-green-700",
    dotClass: "bg-green-500",
    date: "Oct 22, 2023",
    icon: Database,
    iconClass: "bg-indigo-100 text-indigo-600",
  },
  {
    name: "Static CDN Assets (EU-W)",
    category: "Storage",
    owner: "M. Alhalabi",
    initials: "MA",
    status: "Active",
    statusClass: "bg-blue-100 text-blue-700",
    dotClass: "bg-blue-500",
    date: "Oct 18, 2023",
    icon: Cloud,
    iconClass: "bg-blue-100 text-blue-600",
  },
  {
    name: "Legacy Auth Gateway",
    category: "Infrastructure",
    owner: "Sarah K.",
    initials: "SK",
    status: "Maintenance",
    statusClass: "bg-amber-100 text-amber-700",
    dotClass: "bg-amber-500",
    date: "Oct 15, 2023",
    icon: Network,
    iconClass: "bg-amber-100 text-amber-600",
  },
  {
    name: "Redis Cache Node Z4",
    category: "Performance",
    owner: "System",
    initials: "ST",
    status: "Degraded",
    statusClass: "bg-red-100 text-red-700",
    dotClass: "bg-red-500",
    date: "Oct 14, 2023",
    icon: AlertCircle,
    iconClass: "bg-red-100 text-red-600",
  },
];

export default function AssetDistribution() {
  return (
    <div
      dir="ltr"
      className="w-full rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden"
    >
      {/* باقي الكود كما هو تماماً.. */}
      <div className="flex items-start justify-between px-7 pt-6 pb-5">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Asset Distribution
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Detailed inventory and status across geographic regions
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-md border border-gray-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-600">
            <Filter size={14} />
            Filter
          </button>

          <button className="flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-xs font-semibold text-white">
            <Download size={14} />
            Export CSV
          </button>
        </div>
      </div>

      <table className="w-full border-t border-gray-100 text-left">
        <thead>
          <tr className="bg-slate-50 text-[11px] font-bold uppercase tracking-wide text-slate-400">
            <th className="px-7 py-4">Asset Name</th>
            <th className="px-4 py-4">Category</th>
            <th className="px-4 py-4">Owner</th>
            <th className="px-4 py-4">Status</th>
            <th className="px-4 py-4">Date</th>
            <th className="px-6 py-4 text-right">Actions</th>
          </tr>
        </thead>

        <tbody>
          {assets.map((asset) => {
            const Icon = asset.icon;

            return (
              <tr key={asset.name} className="border-t border-gray-100">
                <td className="px-7 py-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-7 w-7 items-center justify-center rounded-md ${asset.iconClass}`}
                    >
                      <Icon size={15} />
                    </div>
                    <span className="max-w-[190px] text-sm font-bold leading-tight text-slate-900">
                      {asset.name}
                    </span>
                  </div>
                </td>

                <td className="px-4 py-4 text-sm text-slate-600">
                  {asset.category}
                </td>

                <td className="px-4 py-4">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-200 text-[10px] font-bold text-slate-600">
                      {asset.initials}
                    </span>
                    <span className="text-sm text-slate-600">{asset.owner}</span>
                  </div>
                </td>

                <td className="px-4 py-4">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold ${asset.statusClass}`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${asset.dotClass}`} />
                    {asset.status}
                  </span>
                </td>

                <td className="px-4 py-4 text-sm leading-tight text-slate-500">
                  {asset.date}
                </td>

                <td className="px-6 py-4 text-right">
                  <button className="text-slate-400">
                    <MoreVertical size={17} />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flex items-center justify-between border-t border-gray-100 px-7 py-4">
        <p className="text-xs text-slate-500">Showing 4 of 24 assets</p>

        <div className="flex items-center gap-3 text-xs font-semibold text-slate-500">
          <ChevronLeft size={15} className="text-slate-300" />
          <span className="rounded-md border border-gray-200 bg-white px-2 py-1 text-slate-900">
            1
          </span>
          <span>2</span>
          <span>3</span>
          <ChevronRight size={15} />
        </div>
      </div>
    </div>
  );
}
