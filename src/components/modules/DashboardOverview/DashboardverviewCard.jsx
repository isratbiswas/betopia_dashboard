import { Phone, Bot, MoveRight, Calendar, PhoneOff, Clock } from "lucide-react";
import React from "react";

const DashboardOverviewCard = ({ data }) => {
  const iconMap = {
    PhoneCall: Phone,
    Robot: Bot,
    Transfer: MoveRight,
    Calendar: Calendar,
    Alert: PhoneOff,
    Clock: Clock,
  };

  return (
    <div className="w-full ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {data.stats.map((stat, index) => (
          <div
            key={index}
            className="relative p-6 rounded-2xl bg-[#0b1426] via-gray-800 to-gray-900 
                       border border-blue-900/40 shadow-xl transition-transform duration-300 
                       hover:scale-105 hover:shadow-2xl flex flex-col justify-between"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </p>
                <h3 className="mt-2 text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                  {stat.value}
                </h3>
              </div>

              <div
                className={`p-3 rounded-xl shadow-lg flex items-center justify-center ${stat.iconBg}`}
              >
                {React.createElement(iconMap[stat.icon], {
                  size: 24,
                  className: "text-white",
                })}
              </div>
            </div>

            <p
              className={`mt-4 text-sm font-medium ${
                stat.trendTrue ? "text-emerald-400" : "text-rose-400"
              }`}
            >
              {stat.trend}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardOverviewCard;
