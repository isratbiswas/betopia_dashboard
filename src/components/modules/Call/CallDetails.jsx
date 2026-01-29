import { FileText, PlayCircle } from "lucide-react";
import React from "react";

const CallDetails = () => {
  return (
    <div className="bg-[#0b1426]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg flex flex-col h-full">
      <div className="p-4 md:p-5 border-b border-blue-800/40">
        <h2 className="text-lg md:text-xl font-normal text-white">
          Call Details
        </h2>
      </div>

      <div className="flex-1 p-4 md:p-6 overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6">
          {[
            { label: "Phone Number", value: "+1 (555) 123-4567" },
            { label: "Duration", value: "4:32" },
            { label: "Date & Time", value: "2025-12-16 • 10:45 AM" },
            { label: "Issue Type", value: "Screen" },
          ].map((item, idx) => (
            <div key={idx}>
              <p className="text-xs text-slate-500 mb-1">{item.label}</p>
              <p className="text-sm md:text-base font-medium text-white">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mb-5">
          <p className="text-xs text-slate-500 mb-2">Call Type</p>
          <span className="inline-block bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-lg text-xs font-medium">
            AI Resolved
          </span>
        </div>

        <div className="mb-6">
          <p className="text-xs text-slate-500 mb-1">Outcome</p>
          <p className="text-sm md:text-base text-white">Quote Provided</p>
        </div>

        <button
          className="
    w-full
    bg-[linear-gradient(90deg,rgba(173,70,255,0.2)_0%,rgba(246,51,154,0.2)_100%)]
    hover:bg-[linear-gradient(90deg,rgba(173,70,255,0.3)_0%,rgba(246,51,154,0.3)_100%)]
    border border-purple-500/20
    text-purple-300
    py-3
    rounded-xl
    flex items-center justify-center gap-2
    transition
    mb-6
  "
        >
          <PlayCircle size={18} />
          Play Audio Recording
        </button>

        <div>
          <div className="flex items-center gap-2 mb-3 text-slate-400">
            <FileText className="text-[#51A2FF]" size={20} />
            <span className="text-sm font-medium text-gray-200">
              Conversation Transcript
            </span>
          </div>

          <div className="space-y-4  rounded-lg bg-[#1D293D] max-h-[300px] overflow-y-auto pr-2">
            <div className="ml-7 mt-2">
              <p className="text-emerald-400 text-xs font-semibold mb-1">
                AI Assistant
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Thank you for calling UBreakiFix! How can I help you today?
              </p>
            </div>

            <div className="ml-7 mt-2">
              <p className="text-blue-400 text-xs font-semibold mb-1">
                Customer
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Hi, my iPhone 13 screen is cracked. How much would it cost to
                repair?
              </p>
            </div>

            <div className="ml-7 mt-2">
              <p className="text-emerald-400 text-xs font-semibold mb-1">
                AI Assistant
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                The price for iPhone 13 screen repair is $199 including parts,
                labor and warranty. Would you like to book an appointment?
              </p>
            </div>

            <div className="ml-7 mt-2 mb-6 ">
              <p className="text-blue-400 text-xs font-semibold mb-1">
                Customer
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Yes please! What time slots are available?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallDetails;
