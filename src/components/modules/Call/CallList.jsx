import { CheckCircle2, Clock, Phone } from "lucide-react";
import React from "react";

const CallList = ({ data }) => {
  return (
    <div className="bg-[#0b1426]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg flex flex-col h-full">
      <div className="flex items-center justify-between p-4 md:p-5 border-b border-blue-800/40">
        <h2 className="text-lg md:text-xl font-semibold text-white">
          Call List
        </h2>
        <span className="text-xs text-slate-400">
          {data.callList.length} Records
        </span>
      </div>

      <div className="flex-1 overflow-y-auto divide-y divide-white/5">
        {data.callList.map((call) => (
          <div
            key={call.id}
            className="
              p-4 md:p-5
              hover:bg-white/5
              transition
              cursor-pointer
              group
            "
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="bg-blue-500/10 p-2 rounded-xl shrink-0">
                  <Phone size={18} className="text-blue-400" />
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-medium text-white truncate">
                    {call.phoneNumber}
                  </p>

                  <p className="text-xs text-slate-500 truncate">
                    {call.timestamp}
                  </p>
                </div>
              </div>

              <span
                className={`
                  text-[11px] px-2.5 py-1 rounded-full border whitespace-nowrap
                  ${
                    call.status === "AI Resolved"
                      ? "text-emerald-400 border-emerald-500/20 bg-emerald-500/10"
                      : call.status === "Warm Transfer"
                        ? "text-orange-400 border-orange-500/20 bg-orange-500/10"
                        : "text-blue-400 border-blue-500/20 bg-blue-500/10"
                  }
                `}
              >
                {call.status}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-slate-400">
              <div className="flex items-center gap-1">
                <Clock size={13} />
                {call.duration}
              </div>

              <div className="flex items-center gap-1">
                <CheckCircle2 size={13} />
                {call.outcome}
              </div>

              <span className="bg-blue-500/10 text-blue-300 px-2 py-0.5 rounded-lg text-[11px]">
                {call.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CallList;
