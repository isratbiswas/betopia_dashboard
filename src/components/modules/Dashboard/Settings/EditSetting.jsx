"use client";

import Image from "next/image";
import { Edit, Pencil } from "lucide-react"; // Install lucide-react if you haven't

const EditSetting = () => {
  return (
    <div className="min-h-screen  text-white p-8">
      {/* 1. Tabs Header */}
      <div className="flex gap-10 border-b border-white/10 mb-8 pb-4">
        <button className="text-lg font-medium text-white border-b-2 border-blue-500 pb-4 -mb-[18px]">
          Profile
        </button>
        <button className="text-lg font-medium text-slate-400 hover:text-white transition-colors">
          Password Settings
        </button>
      </div>

      <div className="w-full">
        {/* 2. Profile Image Section */}
        <h3 className="text-slate-400 mb-6 text-sm font-medium">
          Profile Image
        </h3>
        <div className="relative w-24 h-24 mb-12">
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-blue-500/30">
            <Image src="/nav.jpg" fill alt="Profile" className="object-cover" />
          </div>
          {/* Edit Icon Overlay */}
          <button className="absolute bottom-0 right-0 bg-gray-500 p-1.5 rounded-lg border-2 border-[#0a1128] shadow-lg hover:bg-blue-600 transition-colors">
            <Edit size={18} className="text-white" />
          </button>
        </div>

        {/* 3. Input Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl">
          {/* Full Name */}
          <div className="flex flex-col gap-3">
            <label className="text-slate-200 font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Jane D."
              className="bg-[#111c3a] border border-white/10 rounded-lg px-4 py-3 text-slate-300 outline-none focus:border-blue-500/50 transition-all"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-3">
            <label className="text-slate-200 font-medium">Email</label>
            <input
              type="email"
              placeholder="jane@gmail.com"
              className="bg-[#111c3a] border border-white/10 rounded-lg px-4 py-3 text-slate-300 outline-none focus:border-blue-500/50 transition-all"
            />
          </div>

          {/* Store Name */}
          <div className="flex flex-col gap-3">
            <label className="text-slate-200 font-medium">Store Name</label>
            <input
              type="text"
              placeholder="Ubreakfix Store"
              className="bg-[#111c3a] border border-white/10 rounded-lg px-4 py-3 text-slate-300 outline-none focus:border-blue-500/50 transition-all"
            />
          </div>

          {/* Store Address */}
          <div className="flex flex-col gap-3">
            <label className="text-slate-200 font-medium">Store Address</label>
            <input
              type="text"
              placeholder="123 Main Street, New York"
              className="bg-[#111c3a] border border-white/10 rounded-lg px-4 py-3 text-slate-300 outline-none focus:border-blue-500/50 transition-all"
            />
          </div>
        </div>

        {/*  Action Button */}
        <div className="mt-16 flex justify-center w-full max-w-5xl">
          <button className="w-full md:w-80 bg-[#00c853] hover:bg-[#00a846] text-white font-bold py-3 rounded-xl shadow-[0_0_20px_rgba(0,200,83,0.3)] transition-all">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditSetting;
