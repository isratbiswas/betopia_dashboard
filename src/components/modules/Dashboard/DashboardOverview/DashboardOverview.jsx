import React from "react";
import DashboardOverviewCard from "./DashboardverviewCard";
import DashboardOverviewChart from "./DashboardOverviewChart";
import DashboardActivity from "./DashboardActivity";
import DashboardRepairRequest from "./DashboardRepairRequest";

const DashboardOverview = () => {
  return (
    <div>
      <DashboardOverviewCard />
      <DashboardOverviewChart />
      <div className="flex mt-6 gap-6 flex-col">
        <DashboardActivity />
        <DashboardRepairRequest />
      </div>
    </div>
  );
};

export default DashboardOverview;
