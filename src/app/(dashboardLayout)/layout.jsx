import DashboardNavbar from "@/components/modules/Shared/DashboardNavbar";
import DashboardSideBar from "@/components/modules/Shared/DashboardSideBar";
import DashboardPage from "./dashboard/page";

const DashboardLayout = async ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/*  Sidebar */}
      <aside className="hidden md:flex w-64 flex-col border-r bg-card">
        <DashboardSideBar />
      </aside>
      <div className="flex flex-1 flex-col overflow-hidden">
        {/*  Navbar */}
        <DashboardNavbar />
        {/* Main Content */}
        <main
          style={{
            background:
              "linear-gradient(118.53deg, #020618 -34.38%, #162456 54.59%, #0F172B 143.57%)",
          }}
          className="flex-1 overflow-y-auto p-4 md:p-6"
        >
          {children ? children : <DashboardPage />}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
