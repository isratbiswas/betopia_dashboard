const DashboardActivity = ({ data }) => {
  return (
    <div className="bg-[#0b1426] rounded-xl p-6 text-white font-sans flex-1 min-h-[400px] border-1 border-blue-800/30">
      <h2 className="text-[20px] mb-6 font-medium">Recent Activity</h2>

      {data.activities.map((item) => (
        <div
          key={item.id}
          className="bg-white/[0.03] rounded-lg p-4 mb-3 flex items-start gap-3"
        >
          <span
            className="h-2 w-2 rounded-full mt-[6px] flex-shrink-0"
            style={{ backgroundColor: item.status }}
          />

          <div>
            <div className="text-sm mb-1 text-slate-200">{item.text}</div>
            <div className="text-xs text-slate-500">{item.time}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardActivity;
