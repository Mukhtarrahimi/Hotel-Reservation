import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div>
      {/* Top Section */}
      <div>
        <h2>Sign Up For Exclusive Offers</h2>
        <div>
          <input type="email" placeholder="Enter your email address" />
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
