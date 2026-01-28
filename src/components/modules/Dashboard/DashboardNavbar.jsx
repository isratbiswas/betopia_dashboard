import { getCommonNavItems } from "@/lib/navItems.config";
import DashboardNavbarContent from "./DashboardNavbarContent";

const DashboardNavbar = () => {
  const navItems = getCommonNavItems;
  return (
    <div>
      <DashboardNavbarContent navItems={navItems} />
    </div>
  );
};

export default DashboardNavbar;
