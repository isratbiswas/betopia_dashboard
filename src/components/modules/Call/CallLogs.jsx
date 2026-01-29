import React from "react";
import CallLogHeader from "./CallLogHeader";
import CallList from "./CallList";
import CallDetails from "./CallDetails";

const CallLogs = ({ data }) => {
  return (
    <div>
      <div className="">
        <CallLogHeader />

        <div
          className="
        flex flex-col 
        gap-8 
        p-4 md:p-2 mt-4 
        text-slate-200 
        font-sans
        lg:flex-row
        lg:items-stretch
      "
        >
          <div className="flex-1">
            <CallList data={data} />
          </div>

          <div className="flex-1">
            <CallDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallLogs;
