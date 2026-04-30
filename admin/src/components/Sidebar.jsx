import React from "react";
import { NavLink } from "react-router-dom";
import { IoMdAddCircleOutline, IoIosLogOut } from "react-icons/io";
import { MdFormatListBulletedAdd, MdChecklistRtl } from "react-icons/md";

function Sidebar({ setToken }) {
  const linkClass =
    "flex items-center gap-4 px-6 py-3 rounded-xl transition-all duration-300 text-gray-600 hover:bg-blue-600 hover:text-white";

  return (
    <div className="w-[22%] min-h-screen bg-white shadow-lg flex flex-col">
      {/* Header */}
      <div className="mt-6 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-700">
          Nigar Hotel
        </h2>
      </div>

      {/* Menu */}
      <div className="flex flex-col gap-3 pt-8 px-3">
        <NavLink to="/add" className={linkClass}>
          <IoMdAddCircleOutline className="text-2xl" />
          <p className="hidden md:block text-sm font-medium">Add Rooms</p>
        </NavLink>

        <NavLink to="/list" className={linkClass}>
          <MdFormatListBulletedAdd className="text-2xl" />
          <p className="hidden md:block text-sm font-medium">Room List</p>
        </NavLink>

        <NavLink to="/reservation" className={linkClass}>
          <MdChecklistRtl className="text-2xl" />
          <p className="hidden md:block text-sm font-medium">Reservation</p>
        </NavLink>
      </div>

      {/* Logout */}
      <div className="mt-auto px-3 pb-6">
        <button className="flex items-center gap-4 px-6 py-3 w-full rounded-xl text-gray-600 hover:bg-red-500 hover:text-white transition-all duration-300">
          <IoIosLogOut className="text-2xl" />
          <p className="hidden md:block text-sm font-medium">Logout</p>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;