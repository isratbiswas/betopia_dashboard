"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Bell, Menu } from "lucide-react";
import DashboardMobileSidebar from "./DashboardMobileSidebar";

const DashboardNavbarContent = ({ navItems }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const activeItem = navItems[0]?.items.find((item) => item.href === pathname);
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#111B3C] shadow-sm">
      <div className="flex items-center justify-between h-20 px-6 md:px-8">
        <h1 className="font-inter font-normal lg:text-[30px] leading-[36px] tracking-[0px] text-white sm:text-base sm:font-thin">
          {activeItem?.title == "Call Logs"
            ? "Call Logs & History"
            : activeItem?.title || "Dashboard"}
        </h1>

        <div className="flex items-center gap-6">
          <button className="relative text-white hover:text-gray-200 transition-colors">
            <Bell size={24} strokeWidth={2} />

            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-blue-800"></span>
          </button>

          <div className="relative w-10 h-10 overflow-hidden rounded-full ">
            <Image
              src="/avatar.png"
              alt="User Avatar"
              fill
              className="object-cover"
            />
          </div>
          <DashboardMobileSidebar
            navItems={navItems}
            isOpen={open}
            onClose={() => setOpen(false)}
          />

          <button
            className="text-white md:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu />
          </button>
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbarContent;
