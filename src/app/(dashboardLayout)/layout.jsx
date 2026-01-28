import DashboardNavbar from "@/components/modules/Dashboard/DashboardNavbar";
import DashboardSideBar from "@/components/modules/Dashboard/DashboardSideBar";

const DashboardLayout = async ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Sidebar */}
      <aside className="hidden md:flex w-64 flex-col border-r bg-card">
        <DashboardSideBar />
      </aside>

      {/* Right / Main Area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top Navbar */}

        <DashboardNavbar />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-[#0f172a] p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
