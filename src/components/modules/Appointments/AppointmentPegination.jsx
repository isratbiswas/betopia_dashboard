import { ChevronLeft, ChevronRight } from "lucide-react";

const AppointmentPagination = () => {
  const currentPage = 2;
  const pages = [1, 2, 3, 4, 5, "...", 11];

  return (
    <div className="w-full flex justify-center py-6 px-4">
      <nav className="flex flex-wrap items-center gap-2 justify-center">
        <button
          className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-slate-500 
                     hover:text-white hover:bg-blue-500 transition-colors duration-200"
        >
          <ChevronLeft size={18} />
          Previous
        </button>

        <div className="flex flex-wrap items-center gap-1">
          {pages.map((page, index) => {
            if (page === "...") {
              return (
                <span
                  key={index}
                  className="px-3 py-2 text-gray-400 text-sm font-medium"
                >
                  ...
                </span>
              );
            }

            const isActive = page === currentPage;

            return (
              <button
                key={index}
                className={`w-10 h-10 flex items-center justify-center rounded-lg text-sm font-medium transition-all duration-200
                          ${
                            isActive
                              ? "bg-blue-500 text-white shadow-lg shadow-blue-300/40 scale-105"
                              : "text-blue-500 hover:bg-blue-100 hover:text-blue-600"
                          }`}
              >
                {page}
              </button>
            );
          })}
        </div>

        <button
          className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-slate-500 
                     hover:text-white hover:bg-blue-500 transition-colors duration-200"
        >
          Next
          <ChevronRight size={18} />
        </button>
      </nav>
    </div>
  );
};

export default AppointmentPagination;
