import React from "react";
import { roomData } from "../assets/asset";
import { useParams } from "react-router-dom";
import {
  FaConciergeBell,
  FaSwimmingPool,
  FaWifi,
  FaUtensils,
  FaTv,
} from "react-icons/fa";

function HotelDetails() {
  const { id } = useParams();
  const room = roomData.find((room) => {
    return room.id === parseInt(id);
  });
  return (
    <div>
      {/* Left side */}
      <div>
        <div>
          <h1>{room.name}</h1>
          <p>${room.price}</p>
        </div>
        <img src={room.image} alt="" />
        <div>
          <h2>Amenities</h2>
          <div>
            <div>
              <FaWifi /> Wi-Fi
            </div>
            <div>
              <FaTv /> Cable TV
            </div>
            <div>
              <FaUtensils /> Resturant
            </div>
            <div>
              <FaSwimmingPool /> Pool
            </div>
            <div>
              <FaConciergeBell /> Room Service
            </div>
          </div>
          <div>
            <h2>Room DEscription</h2>
            <p>{room.description}</p>
            <p>{room.description}</p>
            <p>{room.description}</p>
            <p>{room.description}</p>
          </div>
        </div>
      </div>
      {/* Right side */}
      <div>
        <h2>Book Your Stay</h2>
        <form action="">
          <input type="text" name="" placeholder="Name" />
          <input type="email" name="" placeholder="Email" />
          <input type="tel" name="" placeholder="Phone Number" />
          <div>
            <label htmlFor="date">Check-In</label>
            <input type="date" name="" id="" />
          </div>
          <div>
            <label htmlFor="">Check-Out</label>
            <input type="date" name="" id="" />
          </div>
          <div>
            <label htmlFor="">Number of Guests</label>
            <select name="" id="">
              {[
                ...Array(3)
                  .keys()
                  .map((i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1} Guest(s)
                    </option>
                  )),
              ]}
            </select>
          </div>
          <button type="submit">Book Now</button>
        </form>
      </div>
    </div>
  );
}

export default HotelDetails;
