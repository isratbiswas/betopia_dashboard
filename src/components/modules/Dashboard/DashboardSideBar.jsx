import { getCommonNavItems } from "@/lib/navItems.config";
import DashboardSideBarContent from "./DashboardSideBarContent";

const DashboardSideBar = () => {
  const navItems = getCommonNavItems();
  return (
    <div>
      <DashboardSideBarContent navItems={navItems} />
    </div>
  );
};

export default DashboardSideBar;
