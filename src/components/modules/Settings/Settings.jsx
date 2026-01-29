"use client";

import Image from "next/image";
import Link from "next/link";

const Settings = ({ data }) => {
  return (
    <div className="min-h-screen  text-white p-4 sm:p-8">
      <div className="flex  sm:flex-row gap-4 sm:gap-8   sm:mb-4 mb-8 pb-4">
        <button className="text-lg font-medium text-white  pb-4 pb-2 sm:pb-4 -mb-[18px]">
          Profile
        </button>
        <button className="text-lg font-medium text-slate-400 hover:text-white transition-colors">
          Password Settings
        </button>
      </div>

      <div className="max-w-2xl">
        <h3 className="text-slate-400 mb-6 text-sm uppercase tracking-wider">
          Profile Image
        </h3>

        <div className="flex items-center gap-6 mb-12">
          <div className="relative w-24 h-24 rounded-full overflow-hidden ">
            <Image
              src={data.user.profileImage}
              fill
              alt="Profile"
              className="object-cover"
            />
          </div>
          <button
            className="px-6 py-2 mt-14 mr-10 rounded-full 
    border border-white/70  
    bg-blue-800/10 
    text-xs font-semibold whitespace-nowrap
    shadow-[0_0_15px_rgba(255,255,255,0.6),inset_0_0_20px_rgba(255,255,255,0.4)]
    hover:shadow-[0_0_20px_rgba(255,255,255,0.8),inset_0_0_30px_rgba(255,255,255,0.7)]  
    hover:bg-white/20 
    transition-all duration-300 
    active:scale-95"
          >
            <Link href="/editProfile">Edit Profile</Link>
          </button>
        </div>

        {/* Info Fields */}
        <div className="space-y-0 text-slate-300">
          <div className="flex  border-b border-blue-800/30 pb-4">
            <span className="w-1/3 font-semibold text-slate-400">
              Full Name:
            </span>
            <span className="w-2/3">{data.user.fullName}</span>
          </div>
          <div className="flex py-4 border-b border-blue-800/30">
            <span className="w-1/3 font-semibold text-slate-400">Email:</span>
            <span className="w-2/3">{data.user.email}</span>
          </div>
          <div className="flex py-4 border-b border-blue-800/30">
            <span className="w-1/3 font-semibold text-slate-400">
              Store Name:
            </span>
            <span className="w-2/3">{data.user.storeName}</span>
          </div>
          <div className="flex py-4">
            <span className="w-1/3 font-semibold text-slate-400">
              Store Address:
            </span>
            <span className="w-2/3 leading-relaxed">
              {data.user.storeAddress}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
