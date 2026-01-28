"use client";
import { Copy } from "lucide-react";
import React, { useState } from "react";
const AppointmentTable = () => {
  const [bookingLink] = useState("https://techstore.com/book?id=store123");

  const appointments = [
    {
      name: "Jane.D",
      phone: "01960685765",
      mail: "admin@gmail.com",
      device: "Apple/Iphone 13pro",
      repair: "Screen",
      date: "02/06/2026",
      slot: "1",
      time: "09:00",
    },
    {
      name: "Jane.D",
      phone: "01960685765",
      mail: "admin@gmail.com",
      device: "Apple/Iphone 13pro",
      repair: "Screen",
      date: "02/06/2026",
      slot: "1",
      time: "10:00",
    },
    {
      name: "Jane.D",
      phone: "01960685765",
      mail: "admin@gmail.com",
      device: "Apple/Iphone 13pro",
      repair: "Screen",
      date: "02/06/2026",
      slot: "1",
      time: "11:00",
    },
    {
      name: "Jane.D",
      phone: "01960685765",
      mail: "admin@gmail.com",
      device: "Apple/Iphone 13pro",
      repair: "Screen",
      date: "02/06/2026",
      slot: "1",
      time: "12:00",
    },
    {
      name: "Jane.D",
      phone: "01960685765",
      mail: "admin@gmail.com",
      device: "Apple/Iphone 13pro",
      repair: "Screen",
      date: "02/06/2026",
      slot: "1",
      time: "02:00",
    },
    {
      name: "Jane.D",
      phone: "01960685765",
      mail: "admin@gmail.com",
      device: "Apple/Iphone 13pro",
      repair: "Screen",
      date: "02/06/2026",
      slot: "1",
      time: "03:00",
    },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(bookingLink);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="w-full space-y-8 p-4 md:p-6 ">
      {/* --- NEW BOOKING LINK SECTION --- */}
      <section
        style={{
          background: "linear-gradient(180deg, #1A1A2E 0%, #16213E 100%)",
        }}
        className="space-y-3 rounded-lg"
      >
        <h3 className="text-gray-300 text-lg font-thin ml-5 p-2">
          Booking Link
        </h3>
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="relative w-full mb-8 ml-6 ">
            <input
              type="text"
              readOnly
              value={bookingLink}
              className="w-full bg-[#0F172A] border border-emerald-900/50 text-gray-300 px-4 py-3 rounded-xl focus:outline-none"
            />
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center  mb-8 whitespace-nowrap 
            bg-blue-800/10 hover:bg-white/20 
             text-white px-6 py-3 rounded-xl 
            border border-white/30 
  shadow-[inset_0_0_20px_rgba(255,255,255,0.5)] 
  hover:shadow-[inset_0_0_30px_rgba(255,255,255,0.7)]
  transition-all duration-300 
  active:scale-95 mr-6"
          >
            <Copy size={26} className="text-white" />
            <span className="font-medium">Copy Link</span>
          </button>
        </div>
      </section>
      {/* -------------------------------- */}

      {/* EXISTING TABLE SECTION */}
      <div className="overflow-x-auto rounded-xl border border-slate-800 bg-[#111B3B]">
        <table className="w-full text-left border-collapse min-w-[1000px]">
          <thead>
            <tr className="border-b border-blue-800/50 text-gray-200 text-sm">
              <th className="px-6 py-4 font-medium">Client Name</th>
              <th className="px-6 py-4 font-medium">Client Phone</th>
              <th className="px-6 py-4 font-medium">Client mail</th>
              <th className="px-6 py-4 font-medium">Device</th>
              <th className="px-6 py-4 font-medium">Repair Type</th>
              <th className="px-6 py-4 font-medium">Date</th>
              <th className="px-6 py-4 font-medium">Slot no</th>
              <th className="px-6 py-4 font-medium text-right">Start Time</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-blue-800/40">
            {appointments.map((apt, index) => (
              <tr
                key={index}
                className="hover:bg-slate-800/30 transition-colors text-slate-300 text-sm"
              >
                <td className="px-6 py-4 text-blue-400 font-medium cursor-pointer hover:underline">
                  {apt.name}
                </td>
                <td className="px-6 py-4">{apt.phone}</td>
                <td className="px-6 py-4 font-light">{apt.mail}</td>
                <td className="px-6 py-4">{apt.device}</td>
                <td className="px-6 py-4">{apt.repair}</td>
                <td className="px-6 py-4">{apt.date}</td>
                <td className="px-6 py-4">{apt.slot}</td>
                <td className="px-6 py-4 text-right tabular-nums">
                  {apt.time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppointmentTable;
