import {
  Bell,
  ChevronLeft,
  ChevronRight,
  Download,
  Edit2,
  Filter,
  GraduationCap,
  Plus,
  Search,
  ShieldCheck,
  Trash2,
} from "lucide-react";
import type { ReactNode } from "react";

const stats = [
  { title: "TOTAL USERS", value: "1,284", meta: "+12%" },
  { title: "ACTIVE NOW", value: "432", live: true },
  { title: "PENDING INVITES", value: "18" },
  { title: "NEW TRAINEES", value: "54" },
];

const users = [
  {
    name: "Alex Rivera",
    email: "alex.rivera@o2dashboard.com",
    role: "Admin",
    status: "Active",
    joinDate: "Oct 24, 2023",
    avatar: "from-blue-600 to-violet-600",
  },
  {
    name: "Maya Chen",
    email: "maya.chen@o2dashboard.com",
    role: "Student",
    status: "Active",
    joinDate: "Nov 12, 2023",
    avatar: "from-cyan-600 to-green-600",
  },
  {
    name: "Lucas Knight",
    email: "lucas.knight@o2dashboard.com",
    role: "Student",
    status: "Inactive",
    joinDate: "Dec 21, 2023",
    avatar: "from-slate-600 to-slate-900",
  },
  {
    name: "Jordan Smyth",
    email: "jordan.s@o2dashboard.com",
    role: "Student",
    status: "Pending",
    joinDate: "Jan 14, 2024",
    avatar: "from-amber-500 to-red-600",
  },
  {
    name: "Elena Rodriguez",
    email: "elena.r@o2dashboard.com",
    role: "Admin",
    status: "Active",
    joinDate: "Feb 02, 2024",
    avatar: "from-pink-600 to-violet-600",
  },
];

const statusStyles = {
  Active: "text-green-700 before:bg-green-500",
  Inactive: "text-slate-500 before:bg-slate-400",
  Pending: "text-amber-700 before:bg-amber-500",
};

export default function UsersManagement() {
  return (
    <section className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm" dir="ltr">
      <div className="flex h-16 items-center justify-between gap-4 border-b border-slate-200 bg-white/80 px-6 backdrop-blur">
        <label className="relative w-full max-w-md">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            className="h-10 w-full rounded-lg border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm text-slate-900 outline-none transition focus:border-indigo-200 focus:ring-4 focus:ring-indigo-100"
            placeholder="Search for users, roles, or status..."
            type="search"
          />
        </label>

        <div className="flex shrink-0 items-center gap-3">
          <button className="grid h-9 w-9 place-items-center rounded-full text-slate-500 transition hover:bg-slate-50" type="button">
            <Bell className="h-4 w-4" />
          </button>
          <button className="inline-flex h-9 items-center gap-2 rounded-lg bg-indigo-600 px-4 text-sm font-medium text-white transition hover:bg-indigo-700" type="button">
            <Plus className="h-3.5 w-3.5" />
            Invite User
          </button>
        </div>
      </div>

      <div className="bg-slate-50 px-6 py-7">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-['Manrope'] text-[30px] font-bold leading-[38px] text-slate-950">
              Users Management
            </h2>
            <p className="mt-1 text-base text-slate-600">
              Manage trainee accounts, roles, and platform permissions.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button className="inline-flex h-10 items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-50" type="button">
              <Filter className="h-4 w-4" />
              Filter
            </button>
            <button className="inline-flex h-10 items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-50" type="button">
              <Download className="h-4 w-4" />
              Export
            </button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <article key={stat.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase text-slate-600">{stat.title}</p>
              <div className="mt-2 flex items-end gap-2">
                <strong className="font-['Manrope'] text-2xl font-semibold leading-8 text-slate-950">
                  {stat.value}
                </strong>
                {stat.meta ? <span className="pb-1 text-xs font-semibold text-green-600">{stat.meta}</span> : null}
                {stat.live ? <span className="mb-3 h-2 w-2 rounded-full bg-green-500" /> : null}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[920px] border-collapse">
              <thead className="bg-slate-50/70">
                <tr className="border-b border-slate-100 text-left text-xs font-semibold uppercase text-slate-600">
                  <th className="px-6 py-4">User</th>
                  <th className="px-6 py-4">Role</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Join Date</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.email} className="group border-b border-slate-100 last:border-b-0 hover:bg-slate-50/60">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <span className={`grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br ${user.avatar} text-xs font-bold text-white`}>
                          {user.name
                            .split(" ")
                            .map((part) => part[0])
                            .join("")}
                        </span>
                        <span>
                          <span className="block text-sm font-semibold text-slate-950">{user.name}</span>
                          <span className="block text-xs font-semibold text-slate-500">{user.email}</span>
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={
                          user.role === "Admin"
                            ? "rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-700"
                            : "rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-slate-600"
                        }
                      >
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center gap-1.5 text-sm font-medium before:h-1.5 before:w-1.5 before:rounded-full ${
                          statusStyles[user.status as keyof typeof statusStyles]
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">{user.joinDate}</td>
                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-2 opacity-0 transition group-hover:opacity-100">
                        <button className="grid h-8 w-8 place-items-center rounded-lg text-slate-500 hover:bg-white hover:text-slate-900" type="button">
                          <Edit2 className="h-4 w-4" />
                        </button>
                        <button className="grid h-8 w-8 place-items-center rounded-lg text-slate-500 hover:bg-white hover:text-red-600" type="button">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between gap-4 border-t border-slate-100 bg-slate-50/40 px-6 py-4">
            <p className="text-sm text-slate-600">Showing 1 to 5 of 1,284 users</p>
            <div className="flex items-center gap-2">
              <button className="grid h-8 w-8 place-items-center rounded-lg border border-slate-200 bg-white text-slate-400 opacity-60" type="button">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button className="h-8 w-8 rounded-lg bg-indigo-600 text-sm font-medium text-white" type="button">1</button>
              <button className="h-8 w-8 rounded-lg text-sm font-medium text-slate-600 hover:bg-white" type="button">2</button>
              <button className="h-8 w-8 rounded-lg text-sm font-medium text-slate-600 hover:bg-white" type="button">3</button>
              <span className="px-1 text-slate-400">...</span>
              <button className="h-8 w-10 rounded-lg text-sm font-medium text-slate-600 hover:bg-white" type="button">257</button>
              <button className="grid h-8 w-8 place-items-center rounded-lg border border-slate-200 bg-white text-slate-600" type="button">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">
          <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-['Manrope'] text-xl font-semibold text-slate-950">Role Permissions</h3>
            <div className="mt-4 space-y-4">
              <PermissionRow icon={<ShieldCheck className="h-5 w-5 text-indigo-600" />} title="Administrator" />
              <PermissionRow icon={<GraduationCap className="h-5 w-5 text-slate-600" />} title="Standard Student" />
            </div>
          </article>

          <article className="flex min-h-[206px] flex-col justify-between rounded-xl bg-indigo-600 p-6 text-white shadow-sm">
            <div>
              <h3 className="font-['Manrope'] text-xl font-semibold">Invite your entire cohort</h3>
              <p className="mt-2 max-w-2xl text-sm leading-5 text-indigo-100">
                Import users directly from CSV or sync with your existing learning management system.
              </p>
            </div>
            <button className="mt-6 w-fit rounded-lg bg-white px-6 py-2.5 text-sm font-bold text-indigo-600 transition hover:bg-indigo-50" type="button">
              Bulk Upload Users
            </button>
          </article>
        </div>
      </div>
    </section>
  );
}

function PermissionRow({ icon, title }: { icon: ReactNode; title: string }) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-slate-50 p-3">
      <span className="inline-flex items-center gap-3 text-sm font-medium text-slate-950">
        {icon}
        {title}
      </span>
      <button className="text-sm font-semibold text-indigo-600 transition hover:text-indigo-700" type="button">
        Edit Policy
      </button>
    </div>
  );
}
