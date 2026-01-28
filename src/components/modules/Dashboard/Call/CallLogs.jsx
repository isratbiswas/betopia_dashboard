import React from "react";
import CallLogHeader from "./CallLogHeader";
import CallList from "./CallList";
import CallDetails from "./CallDetails";

const CallLogs = () => {
  return (
    <div>
      <div className="">
        <CallLogHeader />
        <div className="min-h-screen  text-slate-200 p-8 font-sans">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            <CallList />
            <CallDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallLogs;
