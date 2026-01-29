"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Phone, Calendar, Settings, LogOut, X, Zap } from "lucide-react";

const DashboardMobileSidebar = ({ navItems, isOpen, onClose }) => {
  const pathname = usePathname();
  const getIcon = (title) => {
    const iconMap = {
      "dashboard overview": <Home size={20} />,
      "call logs": <Phone size={20} />,
      appointments: <Calendar size={20} />,
      settings: <Settings size={20} />,
    };

    return iconMap[title.toLowerCase()] || <Home size={20} />;
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
      ></div>

      <aside className="fixed top-0 left-0 h-full w-[260px] bg-[#111B3C] z-50 flex flex-col animate-slideIn">
        <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-b from-green-400 to-cyan-400 p-2 rounded-lg mr-1">
              <Zap size={18} className="text-slate-900" />
            </div>
          </div>

          <button onClick={onClose}>
            <X className="text-white" />
          </button>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems[0]?.items.map((item, index) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={index}
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-4 px-4 py-3 rounded-md transition-all ${
                  isActive
                    ? "bg-[#1e293b]/60 text-white border border-blue-500/30"
                    : "text-slate-300 hover:bg-white/5"
                }`}
              >
                <span className={isActive ? "text-blue-400" : "text-slate-400"}>
                  {getIcon(item.title)}
                </span>

                <span className="text-sm font-medium">{item.title}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          <button className="flex items-center gap-3 text-red-500 w-full py-3 px-3 rounded-lg hover:bg-red-500/10">
            <LogOut size={20} />
            <span className="font-semibold text-sm">Log Out</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default DashboardMobileSidebar;
