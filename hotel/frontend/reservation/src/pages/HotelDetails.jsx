import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../api";
import Navbar from "../components/Navbar";
import ReservationForm from "../components/ReservationForm";

export default function HotelDetails() {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    API.get(`/hotels/${id}`).then(res => setHotel(res.data));
  }, [id]);

  if (!hotel) return null;

  return (
    <>
      <Navbar />
      <div className="details">
        <img src={hotel.image || "https://via.placeholder.com/600"} />
        <div className="info">
          <h2>{hotel.name}</h2>
          <p>{hotel.city}, {hotel.country}</p>
          <p><b>Accommodation:</b> {hotel.accommodation}</p>
          <p><b>Services:</b> {hotel.services}</p>
          <p><b>Amenities:</b> {hotel.amenities}</p>
          <h3 className="price">
            {hotel.currency}{hotel.pricePerNight}/night
          </h3>
        </div>

        <ReservationForm hotel={hotel} />
      </div>
    </>
  );
}
