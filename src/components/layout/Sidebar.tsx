"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  House,
  BarChart2,
  Users,
  FileText,
  Settings,
  LifeBuoy,
  LogOut,
} from "lucide-react";

const mainLinks = [
  { label: "Home", href: "/", icon: House },
  { label: "Analytics", href: "/analytics", icon: BarChart2 },
  { label: "Users", href: "/users", icon: Users },
  { label: "Reports", href: "/reports", icon: FileText },
  { label: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      dir="ltr"
      className="sticky top-0 z-50 hidden h-screen w-[220px] flex-shrink-0 flex-col border-r border-gray-200 bg-white md:flex"
    >
      <div className="px-5 pb-8 pt-7 text-lg font-bold text-indigo-600">
        O2 Dashboard
      </div>

      <nav className="flex-1 space-y-2 px-3">
        {mainLinks.map(({ label, href, icon: Icon }) => {
          const isActive = href === "/" ? pathname === href : pathname.startsWith(href);

          return (
            <Link
              key={href}
              href={href}
              className={`flex h-11 items-center justify-between rounded-xl px-4 text-sm font-medium transition ${
                isActive
                  ? "bg-indigo-50 text-indigo-600"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <span>{label}</span>
              <Icon size={18} />
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-gray-200 px-3 pb-5 pt-4">
        <button className="flex h-11 w-full items-center justify-between rounded-xl px-4 text-sm font-medium text-slate-600 transition hover:bg-slate-50" type="button">
          <span>Support</span>
          <LifeBuoy size={18} />
        </button>

        <button className="mt-2 flex h-11 w-full items-center justify-between rounded-xl px-4 text-sm font-medium text-red-600 transition hover:bg-red-50" type="button">
          <span>Logout</span>
          <LogOut size={18} />
        </button>

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
