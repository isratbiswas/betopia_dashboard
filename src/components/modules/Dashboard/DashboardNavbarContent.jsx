"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import { BellIcon } from "lucide-react";
const DashboardNavbarContent = ({ navItems }) => {
  const pathname = usePathname();
  const activeItem = navItems[0]?.items.find((item) => item.href === pathname);
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#111B3C] shadow-sm">
      <div className="flex items-center justify-between h-20 px-6 md:px-8">
        {/* Left: Page Title */}
        <h1 className="text-white text-2xl font-semibold tracking-tight">
          {activeItem?.title || "Dashboard"}
        </h1>

        {/* Right: Icons & Profile */}
        <div className="flex items-center gap-6">
          {/* Notification Bell */}
          <button className="relative text-white hover:text-gray-200 transition-colors">
            <BellIcon size={24} strokeWidth={2} />
            {/* Notification dot */}
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-blue-800"></span>
          </button>

          {/* User Avatar */}
          <div className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-white/20">
            <Image
              src="/nav.jpg"
              alt="User Avatar"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbarContent;
