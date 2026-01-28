import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AppointmentPagination = () => {
  const currentPage = 2;
  const pages = [1, 2, 3, 4, 5, "...", 11];

  return (
    <div className="w-full flex items-center justify-center py-6">
      <nav className="flex items-center gap-2">
        {/* Previous Button */}
        <button className="flex items-center gap-1 px-3 py-2 text-slate-500 hover:text-blue-400 transition-colors text-sm font-medium">
          <ChevronLeft size={18} />
          <span>Previous</span>
        </button>

        {/* Page Numbers */}
        <div className="flex items-center gap-1">
          {pages.map((page, index) => {
            if (page === "...") {
              return (
                <span key={index} className="px-3 py-2 text-blue-500">
                  ...
                </span>
              );
            }

            const isActive = page === currentPage;

            return (
              <button
                key={index}
                className={`w-10 h-10 flex items-center justify-center rounded-md text-sm font-medium transition-all ${
                  isActive
                    ? "bg-[#A5C5FF] text-[#1A1A2E] shadow-lg shadow-blue-500/20"
                    : "text-blue-500 hover:bg-white/5"
                }`}
              >
                {page}
              </button>
            );
          })}
        </div>

        {/* Next Button */}
        <button className="flex items-center gap-1 px-3 py-2 text-blue-500 hover:text-blue-300 transition-colors text-sm font-medium">
          <span>Next</span>
          <ChevronRight size={18} />
        </button>
      </nav>
    </div>
  );
};

export default AppointmentPagination;
