import React from "react";
import AppointmentCard from "./AppointmentCard";
import AppointmentTable from "./AppointmentTable";
import AppointmentPagination from "./AppointmentPegination";

const Appointments = ({ data }) => {
  return (
    <div className="min-h-screen ">
      <AppointmentCard />
      <AppointmentTable data={data} />
      <AppointmentPagination />
    </div>
  );
};

export default Appointments;
