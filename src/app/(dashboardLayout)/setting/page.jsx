import Settings from "@/components/modules/Settings/Settings";
import data from "@/data/dashboard.json";

const page = async () => {
  return (
    <div className="">
      <Settings data={data} />
    </div>
  );
};

export default page;
