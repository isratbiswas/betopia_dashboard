import React from "react";

const DashboardRepairRequest = () => {
  const requests = [
    { label: "Screen Repair", count: 156 },
    { label: "Battery Replacement", count: 89 },
    { label: "Back Glass Repair", count: 67 },
    { label: "Software Issues", count: 45 },
  ];

  const maxVal = 200;

  return (
    <div className="bg-[#0b1426] rounded-xl p-6 text-white font-sans flex-1 min-h-[400px] border-1 border-blue-800/50">
      <h2 className="text-[20px] mb-6 font-medium">Top Repair Requests</h2>

      {requests.map((item, index) => (
        <div key={index} className="mb-5">
          <div className="flex justify-between mb-2 text-sm">
            <span className="text-slate-200">{item.label}</span>
            <span className="text-[#8a94a6]">{item.count} requests</span>
          </div>

          <div className="h-2 bg-white/[0.05] rounded overflow-hidden">
            <div
              className="h-full rounded bg-gradient-to-r from-blue-500 to-cyan-500"
              style={{
                width: `${(item.count / maxVal) * 100}%`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardRepairRequest;
