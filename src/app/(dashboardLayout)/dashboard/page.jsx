import DashboardOverview from "@/components/modules/DashboardOverview/DashboardOverview";
import dashboardData from "@/data/dashboard.json";

const DashboardPage = () => {
  return (
    <div className="">
      <DashboardOverview data={dashboardData} />
    </div>
  );
};

export default DashboardPage;
