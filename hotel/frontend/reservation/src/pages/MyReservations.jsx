import { useEffect, useState } from "react";
import { API } from "../api";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function MyReservations() {
  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("user"));
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!user) {
      alert("Please login first");
      navigate("/home");
      return;
    }

    API.get(`/reservations/${user.email}`)
      .then(res => setData(res.data));
  }, []);

  const cancel = async (id) => {
    try {
      const res = await API.delete(`/reservations/${id}`);
      alert(res.data.message);
      setData(data.filter(r => r._id !== id));
    } catch {
      alert("Cancellation failed");
    }
  };

  return (
    <>
      <Navbar />
      <div className="page">
        <h2>My Bookings</h2>

        {data.map(r => (
          <div className="booking-card" key={r._id}>
            <div className="booking-image">
              <img src={r.hotelImage} alt={r.hotelName} />
            </div>

            <h3>{r.hotelName}</h3>
            <p>{r.hotelCity}, {r.hotelCountry}</p>
            <p>{r.checkIn} → {r.checkOut}</p>
            <p className="price">
              {r.currency}{r.pricePerNight} / night
            </p>

            <button
              style={{ marginTop: "10px" }}
              onClick={() => cancel(r._id)}
            >
              Cancel Reservation
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
