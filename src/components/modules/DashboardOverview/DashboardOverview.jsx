import React from "react";
import DashboardOverviewCard from "./DashboardverviewCard";
import DashboardOverviewChart from "./DashboardOverviewChart";
import DashboardActivity from "./DashboardActivity";
import DashboardRepairRequest from "./DashboardRepairRequest";

const DashboardOverview = ({ data }) => {
  return (
    <div>
      <DashboardOverviewCard data={data} />
      <DashboardOverviewChart />
      <div className="flex flex-col gap-6 mt-6 lg:flex-row lg:items-stretch">
        <div className="flex-1 h-full">
          <DashboardActivity data={data} />
        </div>

        <div className="flex-1 h-full">
          <DashboardRepairRequest />
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
