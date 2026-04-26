import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="flex justify-between p-[2rem] bg-black text-white">
        <Link to="/">
          <div>
            <h2 className="font-bold text-2xl">
              NIGAR <span className="text-lime-400">HOTEL</span>
            </h2>
          </div>
        </Link>
        <div>
          <ul className="flex justify-between gap-8">
            <li className="font-bold text-lg cursor-pointer hover:text-lime-400">
              BOOKING
            </li>
            <li className="font-bold text-lg cursor-pointer hover:text-lime-400">
              ROOMS
            </li>
            <li className="font-bold text-lg cursor-pointer hover:text-lime-400">
              ABOUT US
            </li>
            <li className="font-bold text-lg cursor-pointer hover:text-lime-400">
              CONTACTS
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
