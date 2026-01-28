"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Phone, Calendar, Settings, LogOut, Zap } from "lucide-react";

const DashboardSideBarContent = ({ navItems }) => {
  const pathname = usePathname();

  // Mapping specific icons based on the UI image provided
  const getIcon = (title) => {
    const iconMap = {
      "dashboard overview": <Home size={22} />,
      "call logs": <Phone size={22} />,
      appointments: <Calendar size={22} />,
      settings: <Settings size={22} />,
    };
    return iconMap[title.toLowerCase()] || <Home size={22} />;
  };

  return (
    <aside className="flex flex-col h-screen w-64 bg-[#111B3C] border-r border-white/5 text-slate-300">
      {/* Logo Section */}
      <div className="flex items-center justify-center py-8">
        <div className="relative group">
          {/* Inner Cyan Glow */}
          <div className="absolute -inset-1 bg-cyan-400 rounded blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-gradient-to-br from-cyan-400 to-cyan-500 p-2 rounded-lg">
            <Zap className="text-slate-900 fill-slate-900" size={24} />
          </div>
        </div>
      </div>

      {/*  Navigation Items */}
      <nav className="flex-1 px-3 space-y-1">
        {navItems[0]?.items.map((item, index) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={index}
              href={item.href}
              className={`flex items-center gap-4 px-4 py-3.5 rounded-md transition-all duration-300 group ${
                isActive
                  ? "bg-[#1e293b]/50 text-white shadow-[0_0_15px_rgba(59,130,246,0.1)] border border-blue-500/20"
                  : "hover:bg-white/5 hover:text-white"
              }`}
            >
              <span
                className={`${isActive ? "text-blue-400" : "text-slate-400 group-hover:text-white"}`}
              >
                {getIcon(item.title)}
              </span>
              <span className="text-[15px] font-medium tracking-wide">
                {item.title}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* 3. Bottom Logout */}
      <div className="p-4 mt-auto">
        <button className="flex items-center gap-4 px-4 py-4 w-full text-red-500 hover:bg-red-500/5 rounded-xl transition-all group">
          <LogOut
            size={22}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span className="text-[15px] font-bold">Log Out</span>
        </button>
      </div>
    </aside>
  );
};

export default DashboardSideBarContent;
