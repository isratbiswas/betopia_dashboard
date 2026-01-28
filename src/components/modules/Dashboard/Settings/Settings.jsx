"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Settings = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-8">
      {/* Tabs Header */}
      <div className="flex gap-10 border-b border-white/10 mb-8 pb-4">
        <button className="text-lg font-medium text-white border-b-2 border-blue-500 pb-4 -mb-[18px]">
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

        {/*  Profile Image & Edit Button */}
        <div className="flex items-center gap-6 mb-12">
          <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-blue-500/30">
            <Image src="/nav.jpg" fill alt="Profile" className="object-cover" />
          </div>
          <button className="px-6 py-2 rounded-full border border-blue-400/50 bg-blue-500/10 text-xs font-semibold shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:bg-blue-500/20 transition-all">
            <Link href="/editProfile">Edit Profile</Link>
          </button>
        </div>

        {/* Info Fields */}
        <div className="space-y-0 text-slate-300">
          <div className="flex py-4 border-b border-white/5">
            <span className="w-1/3 font-semibold text-slate-400">
              Full Name:
            </span>
            <span className="w-2/3">Jane D.</span>
          </div>
          <div className="flex py-4 border-b border-white/5">
            <span className="w-1/3 font-semibold text-slate-400">Email:</span>
            <span className="w-2/3">jane@gmail.com</span>
          </div>
          <div className="flex py-4 border-b border-white/5">
            <span className="w-1/3 font-semibold text-slate-400">
              Store Name:
            </span>
            <span className="w-2/3">Ubreakfix Store</span>
          </div>
          <div className="flex py-4">
            <span className="w-1/3 font-semibold text-slate-400">
              Store Address:
            </span>
            <span className="w-2/3 leading-relaxed">
              123 Main Street, New York, NY 10001
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
