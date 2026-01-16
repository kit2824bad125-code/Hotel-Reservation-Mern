import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { API } from "../api";
import Navbar from "../components/Navbar";

export default function Hotels() {
  const { country } = useParams();
  const navigate = useNavigate();
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    API.get("/hotels").then(res => {
      setHotels(res.data.filter(h => h.country === country));
    });
  }, [country]);

  return (
    <>
      <Navbar />
      <div className="hotel-grid">
        {hotels.map(h => (
          <div className="hotel-card" key={h._id}
               onClick={() => navigate(`/hotel/${h._id}`)}>
            <img src={h.image || "https://via.placeholder.com/400"} />
            <h3>{h.name}</h3>
            <p>{h.city}</p>
            <p>⭐ {h.rating}</p>
            <p className="price">
              {h.currency}{h.pricePerNight}/night
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
