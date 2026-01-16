import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Hotels from "./pages/Hotels";
import HotelDetails from "./pages/HotelDetails";
import MyReservations from "./pages/MyReservations";
import About from "./pages/About";

export default function App() {

  // ✅ CLEAR SESSION ON APP LOAD
  useEffect(() => {
    sessionStorage.removeItem("user");
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/hotels/:country" element={<Hotels />} />
        <Route path="/hotel/:id" element={<HotelDetails />} />
        <Route path="/reservations" element={<MyReservations />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
