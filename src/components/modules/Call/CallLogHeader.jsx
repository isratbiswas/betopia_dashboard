"use client";

import { Search, ChevronDown } from "lucide-react";

const CallLogHeader = () => {
  return (
    <div className="w-full rounded-2xl p-5 md:p-2 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between ">
      <div className="relative w-full lg:w-[400px] xl:w-[780px]">
        <span className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <Search className="text-slate-400" size={18} />
        </span>

        <input
          type="text"
          placeholder="Search by phone number, issue type..."
          className="w-full bg-[#0a1128] border border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm text-slate-200 placeholder:text-slate-500 outline-none focus:border-blue-500/40 focus:ring-2 focus:ring-blue-500/10 transition-all"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex gap-3 w-full lg:w-auto">
        <div className="relative">
          <select className="appearance-none w-full lg:w-40 bg-[#0a1128] border border-white/10 rounded-xl py-3 px-4 text-sm text-slate-300 outline-none cursor-pointer focus:border-blue-500/40 focus:ring-2 focus:ring-blue-500/10 transition-all">
            <option>All Types</option>
            <option>Incoming</option>
            <option>Outgoing</option>
          </select>

          <ChevronDown
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            size={16}
          />
        </div>

        <div className="relative">
          <select className="appearance-none w-full lg:w-40 bg-[#0a1128] border border-white/10 rounded-xl py-3 px-4 text-sm text-slate-300 outline-none cursor-pointer focus:border-blue-500/40 focus:ring-2 focus:ring-blue-500/10 transition-all">
            <option>All Issues</option>
            <option>Screen</option>
            <option>Battery</option>
            <option>Software</option>
          </select>

          <ChevronDown
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            size={16}
          />
        </div>

        <div className="relative">
          <select className="appearance-none w-full lg:w-40 bg-[#0a1128] border border-white/10 rounded-xl py-3 px-4 text-sm text-slate-300 outline-none cursor-pointer focus:border-blue-500/40 focus:ring-2 focus:ring-blue-500/10 transition-all">
            <option>Today</option>
            <option>This Week</option>
            <option>This Month</option>
          </select>

          <ChevronDown
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            size={16}
          />
        </div>
      </div>
    </div>
  );
};

export default CallLogHeader;
