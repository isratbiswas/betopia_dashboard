import React from "react";
import { Calendar, CheckCircle2, AlertCircle } from "lucide-react";

const AppointmentCard = () => {
  const stats = [
    {
      title: "Total Booked",
      value: "34",
      subtext: "+8 this week",
      subtextColor: "text-emerald-500",
      icon: <Calendar className="text-blue-400" size={20} />,
    },
    {
      title: "AI Booked",
      value: "28",
      subtext: "82% of total",
      subtextColor: "text-slate-500",
      icon: <CheckCircle2 className="text-emerald-500" size={20} />,
    },
    {
      title: "Pending",
      value: "3",
      subtext: "Awaiting confirmation",
      subtextColor: "text-slate-500",
      icon: <AlertCircle className="text-yellow-500" size={20} />,
    },
  ];

  return (
    <div className="flex flex-wrap gap-6 p-6 ">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`flex-1 min-w-[280px] p-6 rounded-2xl bg-[#0F172B] border-1 border-blue-900/60 transition-all hover:border-blue-600/80 shadow-lg  hover:shadow-blue-500/10" :
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            {stat.icon}
            <span className="text-slate-400 font-medium">{stat.title}</span>
          </div>

          <div className="space-y-1">
            <h3 className="text-4xl font-semibold text-white tracking-tight">
              {stat.value}
            </h3>
            <p className={`text-sm font-medium ${stat.subtextColor}`}>
              {stat.subtext}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppointmentCard;
