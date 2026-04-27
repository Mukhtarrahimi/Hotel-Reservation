import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="flex flex-col gap-12 px-16 py-16 bg-black text-white">
      {/* Top Section */}
      <div className="grid place-content-center gap-6 text-center">
        <h2 className="text-4xl font-bold">Sign Up For Exclusive Offers</h2>
        <div className="flex items-center justify-center max-w-xl max-auto w-full">
          <input type="email" placeholder="Enter your email address" className="flex-row px-10 py-4 border-2 border-r-0 border-lime-500 rounded-l-full outline-none" />
          <button>Join Now</button>
        </div>
      </div>
      {/* Bottom Section */}
      <div>
        <div>
          <h2>NEGAR HOTEL</h2>
          <div>
            <FaFacebook />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
        <div>
          <ul>
            <li>HOME</li>
            <li>BOOKINGS</li>
            <li>ROOMS</li>
            <li>ABOUT</li>
            <li>CONTACTS</li>
          </ul>
        </div>
      </div>
      <p>@ 2026 NEGAR HOTELS. All rights reserved.</p>
    </div>
  );
}

export default Footer;
