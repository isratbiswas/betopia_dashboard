import Appointments from "@/components/modules/Appointments/Appointments";
import dashboardData from "@/data/dashboard.json";

const AppointmentPage = () => {
  return (
    <div>
      <Appointments data={dashboardData} />
    </div>
  );
};

export default AppointmentPage;
