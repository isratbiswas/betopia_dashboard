"use client";
import dynamic from "next/dynamic";

const DashboardOverviewChart = dynamic(
  () => import("./DashboardOverviewChartInner"),
  { ssr: false },
);

export default DashboardOverviewChart;
