"use client";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", calls: 45 },
  { name: "Tue", calls: 62 },
  { name: "Wed", calls: 58 },
  { name: "Thu", calls: 75 },
  { name: "Fri", calls: 92 },
  { name: "Sat", calls: 95 },
  { name: "Sun", calls: 55 },
];

const DashboardOverviewChart = () => {
  return (
    <div className="bg-[#0b1426] rounded-md p-6 mt-6 rounded-xl font-sans text-white border-1 border-blue-800/30">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <div>
          <h2 style={{ margin: 0, fontSize: "18px", fontWeight: "500" }}>
            Call Trends - This Week
          </h2>
          <p
            style={{ margin: "4px 0 0 0", fontSize: "14px", color: "#8a94a6" }}
          >
            Total: 472 calls
          </p>
        </div>
        <select
          style={{
            backgroundColor: "#1a2236",
            color: "white",
            border: "1px solid #303a4e",
            borderRadius: "6px",
            padding: "4px 12px",
          }}
        >
          <option>This Week</option>
        </select>
      </div>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 0, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorCalls" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#1f2937"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#8a94a6", fontSize: 12 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#8a94a6", fontSize: 12 }}
              ticks={[0, 25, 50, 75, 100]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1a2236",
                border: "none",
                borderRadius: "8px",
              }}
              itemStyle={{ color: "#fff" }}
            />
            <Area
              type="monotone"
              dataKey="calls"
              stroke="#3b82f6"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorCalls)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardOverviewChart;
