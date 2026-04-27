import React, { useContext } from "react";
import { RoomContext } from "../context/RoomContext";
import { Link } from "react-router-dom";
import { FaBath, FaBed, FaUserFriends, FaWifi } from "react-icons/fa";

const amenitiesList = [
  { label: "1-2 Persons", icon: <FaUserFriends className="text-gray-600" /> },
  { label: "Bathtub", icon: <FaBath className="text-gray-600" /> },
  { label: "King Size Bed", icon: <FaBed className="text-gray-600" /> },
  { label: "Free Wifi", icon: <FaWifi className="text-gray-600" /> },
];

function HotelList() {
  const { rooms } = useContext(RoomContext);
  console.log("rooms", rooms);

  return (
    <div>
      <div>
        <h2>
          Book your stay and <br /> relax in luxury
        </h2>
        <div>
          {rooms && rooms.length > 0 ? (
            rooms.map((room, index) => {
              const { id, image, name, price } = room;
              return (
                <div key={index}>
                  <Link to={`/room/${id}`}>
                    <img src={image} alt="" />
                  </Link>
                  <div>
                    <h3>{image}</h3>
                    <p>${price}</p>
                    <div>
                      {amenitiesList.map((amenity, idx) => (
                        <div key={idx}>
                          {amenity.icon} <span>{amenity.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p>No rooms available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default HotelList;
