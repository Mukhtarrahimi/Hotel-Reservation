import React from "react";
import Hero from "../components/Hero";
import HotelList from "../components/HotelList";
import Facility from '../components/Facility'

function HomePage() {
  return (
    <div>
      <Hero />
      <HotelList />
      <Facility/>
    </div>
  );
}

export default HomePage;
