import { FileText, PlayCircle } from "lucide-react";
import React from "react";

const CallDetails = () => {
  return (
    <section className="bg-[#0F172B80] rounded-xl border border-slate-800 p-6 ">
      <h2 className="text-2xl font-semibold mb-8">Call Details</h2>

      <div className="grid grid-cols-2 gap-y-6 mb-8">
        <div>
          <label className="block text-slate-500 text-sm mb-1">
            Phone Number
          </label>
          <p className="text-lg font-medium">+1 (555) 123-4567</p>
        </div>
        <div>
          <label className="block text-slate-500 text-sm mb-1">Duration</label>
          <p className="text-lg font-medium">4:32</p>
        </div>
        <div>
          <label className="block text-slate-500 text-sm mb-1">
            Date & Time
          </label>
          <p className="text-md">2025-12-16 10:45 AM</p>
        </div>
        <div>
          <label className="block text-slate-500 text-sm mb-1">
            Issue Type
          </label>
          <p className="text-md">Screen</p>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-slate-500 text-sm mb-2">Call Type</label>
        <span className="bg-emerald-950/30 text-emerald-400 border border-emerald-900/50 px-3 py-1 rounded-lg text-sm">
          AI Resolved
        </span>
      </div>

      <div className="mb-8">
        <label className="block text-slate-500 text-sm mb-1">Outcome</label>
        <p className="text-lg">Quote provided</p>
      </div>

      <button className="w-full bg-purple-900/30 hover:bg-purple-900/50 text-purple-300 border border-purple-800/50 py-3 rounded-xl flex items-center justify-center gap-2 transition-all mb-10">
        <PlayCircle size={20} />
        Play Audio Recording
      </button>

      {/* TRANSCRIPT SECTION */}
      <div>
        <div className="flex items-center gap-2 mb-4 text-slate-400">
          <FileText size={18} />
          <span className="font-medium">Conversation Transcript</span>
        </div>
        <div className="space-y-4 text-sm max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
          <div className="space-y-1">
            <p className="text-emerald-500 font-bold">AI Assistant:</p>
            <p className="text-slate-300">
              Thank you for calling UBreakiFix! How can I help you today?
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-blue-500 font-bold">Customer:</p>
            <p className="text-slate-300">
              Hi, my iPhone 13 screen is cracked. How much would it cost to
              repair?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallDetails;
