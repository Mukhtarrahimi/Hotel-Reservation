import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
export const backendUrl = "https://localhost:5000";
import Login from "./components/Login";

function App() {
  const [token, setToken] = useState("");
  return (
    <div>
      {!token ? (
        <Login />
      ) : (
        <>
          <div>
            <Sidebar />
            <div>
              <Routes>
                <Route path="/add" element={AddHotel} />
                <Route path="/list" element={ListHotel} />
                <Route path="/reservation" element={Reservation} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
