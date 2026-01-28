import { CheckCircle2, Clock, Phone } from "lucide-react";
import React from "react";

const CallList = () => {
  const calls = [
    {
      id: 1,
      phone: "+1 (555) 345-6789",
      time: "08:42 AM",
      duration: "5:23",
      status: "AI Resolved",
      outcome: "Quote Provided",
      tag: "Screen",
      active: false,
    },
    {
      id: 2,
      phone: "+1 (555) 345-6789",
      time: "08:42 AM",
      duration: "5:23",
      status: "Warm Transfer",
      outcome: "Escalated to technician",
      tag: "Software",
      active: false,
    },
    {
      id: 3,
      phone: "+1 (555) 345-6789",
      time: "08:42 AM",
      duration: "5:23",
      status: "Appointment",
      outcome: "Appointment Booked",
      tag: "Battery",
      active: false,
    },
    {
      id: 4,
      phone: "+1 (555) 345-6789",
      time: "08:42 AM",
      duration: "5:23",
      status: "AI Resolved",
      outcome: "Quote Provided",
      tag: "Screen",
      active: false,
    },
    {
      id: 5,
      phone: "+1 (555) 345-6789",
      time: "08:42 AM",
      duration: "5:23",
      status: "Warm Transfer",
      outcome: "Escalated to technician",
      tag: "Software",
      active: false,
    },
    {
      id: 6,
      phone: "+1 (555) 345-6789",
      time: "08:42 AM",
      duration: "5:23",
      status: "Appointment",
      outcome: "Appointment Booked",
      tag: "Battery",
      active: false,
    },
  ];
  return (
    <div className="rounded-xl border border-slate-800 bg-[#0F172B80] ">
      <section>
        <h2 className="text-2xl font-md mb-6 text-white p-4">Call List</h2>
        <div className="w-1 bg-400/20"></div>
        <div className="space-y-1   overflow-hidden">
          {calls.map((call) => (
            <div
              key={call.id}
              className="p-4 border-b border-slate-800 hover:bg-slate-800/50 cursor-pointer transition-colors"
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-600/20 p-2 rounded-lg">
                    <Phone size={18} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">{call.phone}</p>
                    <p className="text-xs text-slate-500">
                      2025-12-16 • {call.time}
                    </p>
                  </div>
                </div>
                <span
                  className={`text-[10px] px-2 py-1 rounded-full border ${
                    call.status === "AI Resolved"
                      ? "text-emerald-400 border-emerald-900/50 bg-emerald-950/30"
                      : call.status === "Warm Transfer"
                        ? "text-orange-400 border-orange-900/50 bg-orange-950/30"
                        : "text-blue-400 border-blue-900/50 bg-blue-950/30"
                  }`}
                >
                  {call.status}
                </span>
              </div>

              <div className="flex items-center gap-4 text-xs text-slate-400">
                <div className="flex items-center gap-1">
                  <Clock size={14} /> {call.duration}
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 size={14} /> {call.outcome}
                </div>
                <span className="bg-blue-900/40 text-blue-300 px-2 py-0.5 rounded italic">
                  {call.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CallList;
