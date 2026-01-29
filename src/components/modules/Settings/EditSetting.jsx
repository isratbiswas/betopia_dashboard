"use client";

import Image from "next/image";
import { Edit } from "lucide-react";

const EditSetting = () => {
  return (
    <div className="min-h-screen  text-white p-8">
      <div className="flex gap-10 border-b border-white/10 mb-8 pb-4">
        <button className="text-lg font-medium text-white border-b-2 border-blue-500 pb-4 -mb-[18px]">
          Profile
        </button>
        <button className="text-lg font-medium text-slate-400 hover:text-white transition-colors">
          Password Settings
        </button>
      </div>

      <div className="w-full">
        <h3 className="text-gray-100 mb-6 text-[20px] font-normal leading-[150%] tracking-normal">
          Profile Image
        </h3>
        <div className="relative w-24 h-24 mb-12">
          <div className="relative w-full h-full rounded-full overflow-hidden ">
            <Image
              src="/avatar.png"
              fill
              alt="Profile"
              className="object-cover"
            />
          </div>

          <button className="absolute bottom-0 right-0 bg-[#7AA3CC] p-1.5 rounded-lg  shadow-lg hover:bg-blue-600 transition-colors">
            <Edit size={18} className="text-white" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl">
          <div className="flex flex-col gap-3">
            <label className="text-slate-200 text-xl font-lg">Full Name</label>
            <input
              type="text"
              placeholder="Jane D."
              className="bg-[#111c3a] border border-green-600/20 rounded-lg px-4 py-3 text-slate-200 outline-none focus:border-green-800/50 transition-all"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-slate-200 text-xl font-lg">Email</label>
            <input
              type="email"
              placeholder="jane@gmail.com"
              className="bg-[#111c3a] border border-green-600/20  rounded-lg px-4 py-3 text-slate-300 outline-none focus:border-blue-500/50 transition-all"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-slate-200 text-xl font-lg">Store Name</label>
            <input
              type="text"
              placeholder="Ubreakfix Store"
              className="bg-[#111c3a] border border-green-600/20  rounded-lg px-4 py-3 text-slate-300 outline-none focus:border-blue-500/50 transition-all"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label className="text-slate-200 text-xl font-lg">
              Store Address
            </label>
            <input
              type="text"
              placeholder="123 Main Street, New York"
              className="bg-[#111c3a] border border-green-600/20  rounded-lg px-4 py-3 text-slate-300 outline-none focus:border-blue-500/50 transition-all"
            />
          </div>
        </div>

        <div className="mt-16 flex justify-center w-full max-w-5xl">
          <button className="w-full md:w-80 bg-[#00C950] hover:bg-[#00a846] text-xl text-white font-bold py-3 rounded-xl shadow-[0_0_20px_rgba(0,200,83,0.3)] tracking-normal transition-all leading-[150%]">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditSetting;
