import React from "react";
import { Phone, Bot, MoveRight, Calendar, PhoneOff, Clock } from "lucide-react";

const DashboardOverviewCard = () => {
  const stats = [
    {
      title: "Total Calls Today",
      value: "127",
      trend: "+12%",
      trendUp: true,
      icon: <Phone size={20} className="text-white" />,
      iconBg: "bg-cyan-500",
    },
    {
      title: "AI-Handled Calls",
      value: "98",
      trend: "+77%",
      trendUp: true,
      icon: <Bot size={20} className="text-white" />,
      iconBg: "bg-magenta-500 bg-gradient-to-br from-purple-500 to-pink-500",
    },
    {
      title: "Warm Transfer",
      value: "23",
      trend: "+18%",
      trendUp: true,
      icon: <MoveRight size={20} className="text-white" />,
      iconBg: "bg-gradient-to-br from-orange-400 to-red-600",
    },
    {
      title: "Appointments Booked",
      value: "34",
      trend: "+8%",
      trendUp: true,
      icon: <Calendar size={20} className="text-white" />,
      iconBg: "bg-emerald-500",
    },
    {
      title: "Missed/Failed Calls",
      value: "6",
      trend: "-3%",
      trendUp: false,
      icon: <PhoneOff size={20} className="text-white" />,
      iconBg: "bg-rose-500",
      active: true, // This card has the light blue border in your image
    },
    {
      title: "Avg Call Duration",
      value: "3:42",
      trend: "+15%",
      trendUp: true,
      icon: <Clock size={20} className="text-white" />,
      iconBg: "bg-indigo-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 w-full">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`relative p-6 rounded-2xl bg-[#111827] border-2 transition-all hover:scale-[1.02] ${
            stat.active
              ? "border-slate-500 shadow-lg shadow-blue-900/20"
              : "border-slate-800/50"
          }`}
        >
          <div className="flex justify-between items-start">
            <div className="space-y-4">
              <p className="text-slate-400 text-sm font-medium">{stat.title}</p>
              <div className="space-y-1">
                <h3 className="text-4xl font-semibold text-white tracking-tight">
                  {stat.value}
                </h3>
                <p
                  className={`text-sm font-bold ${stat.trendUp ? "text-emerald-500" : "text-rose-500"}`}
                >
                  {stat.trend}
                </p>
              </div>
            </div>

            {/* Icon Container */}
            <div className={`p-3 rounded-xl shadow-lg ${stat.iconBg}`}>
              {stat.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardOverviewCard;
