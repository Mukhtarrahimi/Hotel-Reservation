import React from "react";
import {
  FaBath,
  FaCar,
  FaCocktail,
  FaConciergeBell,
  FaShuttleVan,
  FaSwimmingPool,
} from "react-icons/fa";

const services = [
  {
    icon: <FaShuttleVan size={32} />,
    title: "Pick Up & Drop",
    desc: "We'll pick up from airport while you comfy on your ride",
  },
  {
    icon: <FaCar size={32} />,
    title: "Parking Space",
    desc: "We'll pick up from airport while you comfy on your ride",
  },
  {
    icon: <FaCocktail size={32} />,
    title: "Welcome Drink",
    desc: "We'll pick up from airport while you comfy on your ride",
  },
  {
    icon: <FaBath size={32} />,
    title: "Hot & Cold Water",
    desc: "We'll pick up from airport while you comfy on your ride",
  },
  {
    icon: <FaConciergeBell size={32} />,
    title: "Full board",
    desc: "We'll pick up from airport while you comfy on your ride",
  },
  {
    icon: <FaSwimmingPool size={32} />,
    title: "Swimming Pool",
    desc: "We'll pick up from airport while you comfy on your ride",
  },
];

function Facility() {
  return <div>Facility</div>;
}

export default Facility;
