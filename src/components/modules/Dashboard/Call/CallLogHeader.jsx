"use client";

import React from "react";
import { Search, ChevronDown } from "lucide-react";

const CallLogHeader = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-20 w-full py-4">
      {/* Search Bar  */}
      <div className="relative w-full md:flex-1">
        <span className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <Search className="text-slate-400" size={20} />
        </span>
        <input
          type="text"
          placeholder="Search by phone number, issue type..."
          className="w-full bg-[#0a1128] border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-slate-300 placeholder:text-slate-500 outline-none focus:border-blue-500/40 transition-all shadow-sm"
        />
      </div>

      {/* Filter Dropdowns */}
      <div className="flex items-center gap-8 w-full md:w-auto">
        {/* All Type Dropdown */}
        <div className="relative flex-1 md:flex-none">
          <select className="appearance-none w-full md:w-40 bg-[#0a1128] border border-white/10 rounded-xl py-3.5 px-5 text-slate-300 outline-none cursor-pointer focus:border-blue-500/40 transition-all">
            <option>All Type</option>
          </select>
          <ChevronDown
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            size={16}
          />
        </div>

        {/* All Issues Dropdown */}
        <div className="relative flex-1 md:flex-none">
          <select className="appearance-none w-full md:w-40 bg-[#0a1128] border border-white/10 rounded-xl py-3.5 px-5 text-slate-300 outline-none cursor-pointer focus:border-blue-500/40 transition-all">
            <option>All Issues</option>
          </select>
          <ChevronDown
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            size={16}
          />
        </div>

        {/* Date Dropdown */}
        <div className="relative flex-1 md:flex-none">
          <select className="appearance-none w-full md:w-40 bg-[#0a1128] border border-white/10 rounded-xl py-3.5 px-5 text-slate-300 outline-none cursor-pointer focus:border-blue-500/40 transition-all">
            <option>Today</option>
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
