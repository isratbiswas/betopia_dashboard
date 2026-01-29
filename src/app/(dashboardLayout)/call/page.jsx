import CallLogs from "@/components/modules/Call/CallLogs";
import data from "@/data/dashboard.json";

const page = async () => {
  return (
    <div>
      <CallLogs data={data} />
    </div>
  );
};

export default page;
