import React from "react";
import AppointmentCard from "./AppointmentCard";
import AppointmentTable from "./AppointmentTable";
import AppointmentPagination from "./AppointmentPegination";

const Appointments = () => {
  return (
    <div className="min-h-screen ">
      <AppointmentCard />
      <AppointmentTable />
      <AppointmentPagination />
    </div>
  );
};

export default Appointments;
