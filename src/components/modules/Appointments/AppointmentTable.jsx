"use client";

import { Copy } from "lucide-react";
import React, { useState } from "react";

const AppointmentTable = ({ data }) => {
  const [bookingLink] = useState("https://techstore.com/book?id=store123");

  const appointments = data?.appointments || [];

  const handleCopy = () => {
    navigator.clipboard.writeText(bookingLink);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="w-full space-y-6 p-4 md:p-3 mt-3">
      <section
        style={{
          background: "linear-gradient(180deg, #1A1A2E 0%, #16213E 100%)",
        }}
        className="space-y-4 rounded-xl border border-blue-900/50 p-4 sm:p-6"
      >
        <h3 className="text-gray-300 text-base sm:text-lg font-medium">
          Booking Link
        </h3>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
          <div className="relative flex-grow">
            <input
              type="text"
              readOnly
              value={bookingLink}
              className="w-full bg-[#0F172A] border border-emerald-900/50 text-gray-300 px-4 py-3 rounded-xl focus:outline-none text-sm sm:text-base overflow-ellipsis"
            />
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center justify-center gap-2 whitespace-nowrap bg-blue-800/10 hover:bg-blue-800/20 text-white px-6 py-3 rounded-xl border border-white/20 shadow-[inset_0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[inset_0_0_30px_rgba(255,255,255,0.6)] transition-all duration-300 active:scale-[0.98] sm:active:scale-95 text-sm sm:text-base font-medium"
          >
            <Copy size={18} className="sm:w-5 sm:h-5" />
            <span>Copy Link</span>
          </button>
        </div>
      </section>

      <div className="overflow-x-auto rounded-xl border border-blue-800/30 p-3 mt-7 bg-[#111B3B]">
        <table className="w-full min-w-[900px] text-left border-collapse">
          <thead>
            <tr className="border-b  border-blue-800/30 text-gray-200 text-sm">
              <th className="px-6 py-4">Client Name</th>
              <th className="px-6 py-4">Phone</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Device</th>
              <th className="px-6 py-4">Repair</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Slot</th>
              <th className="px-6 py-4 text-right">Time</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-blue-800/40">
            {appointments.length === 0 ? (
              <tr>
                <td colSpan="8" className="text-center py-10 text-slate-400">
                  No Appointments Found
                </td>
              </tr>
            ) : (
              appointments.map((apt, index) => (
                <tr
                  key={index}
                  className="hover:bg-slate-800/30 transition text-slate-300 text-sm"
                >
                  <td className="px-6 py-4 text-blue-400 font-medium hover:underline cursor-pointer">
                    {apt.name}
                  </td>
                  <td className="px-6 py-4">{apt.phone}</td>
                  <td className="px-6 py-4">{apt.mail}</td>
                  <td className="px-6 py-4">{apt.device}</td>
                  <td className="px-6 py-4">{apt.repair}</td>
                  <td className="px-6 py-4">{apt.date}</td>
                  <td className="px-6 py-4">{apt.slot}</td>
                  <td className="px-6 py-4 text-right tabular-nums">
                    {apt.time}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppointmentTable;
