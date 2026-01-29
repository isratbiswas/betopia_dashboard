"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Phone, Calendar, Settings, LogOut, Zap } from "lucide-react";

const DashboardSideBarContent = ({ navItems }) => {
  const pathname = usePathname();

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
      <div className="flex items-center justify-center py-8">
        <div className="relative group">
          <div className="absolute -inset-1 bg-cyan-400 rounded blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-gradient-to-b from-green-400 to-cyan-400 p-2 rounded-lg">
            <Zap className="text-slate-900 " size={24} />
          </div>
        </div>
      </div>

      <nav className="flex-1 px-3 space-y-4">
        {navItems[0]?.items.map((item, index) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={index}
              href={item.href}
              className={`flex items-center gap-4 px-3 py-2 rounded-2xl transition-all duration-300 group
    ${
      isActive
        ? "bg-blue-800/20 text-white  border border-white/70    whitespace-nowrap  transition-all duration-300 active:scale-9 shadow-[0_0_15px_rgba(255,255,255,0.6),inset_0_0_20px_rgba(255,255,255,0.4)] border border-blue-500/30 scale-105"
        : "hover:bg-white/5 hover:text-white"
    }
  `}
            >
              <span
                className={`transition-transform duration-300 text-white
      ${isActive ? "text-white scale-110" : "text-slate-400 group-hover:text-white"}
    `}
              >
                {getIcon(item.title)}
              </span>

              <span
                className={`text-[16px] font-medium tracking-wide transition-colors duration-300
      ${isActive ? "text-white font-semibold" : "text-white group-hover:text-white"}
    `}
              >
                {item.title}
              </span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 mt-auto">
        <button className="flex items-center gap-4 px-4 py-4 w-full  hover:bg-red-500/5 rounded-xl transition-all group">
          <LogOut
            size={22}
            className="group-hover:-translate-x-1 transition-transform text-red-500"
          />
          <span className="text-[15px] font-bold text-red-500">Log Out</span>
        </button>
      </div>
    </aside>
  );
};

export default DashboardSideBarContent;
