import { useState } from "react";
import { API } from "../api";
import { useNavigate } from "react-router-dom";

export default function ReservationForm({ hotel }) {
  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("user"));

  const [form, setForm] = useState({
    adults: 1,
    children: 0,
    checkIn: "",
    checkOut: ""
  });

  const submit = async () => {
    // 🔒 HARD LOGIN CHECK
    if (!user || !user.email) {
      alert("Please login to reserve a hotel");
      navigate("/login");
      return;
    }

    const totalGuests =
      Number(form.adults) + Number(form.children);

    if (totalGuests > hotel.maxGuests) {
      alert(`Maximum ${hotel.maxGuests} guests allowed`);
      return;
    }

    try {
      const res = await API.post("/reservations", {
        hotelId: hotel._id,
        userEmail: user.email,
        adults: form.adults,
        children: form.children,
        checkIn: form.checkIn,
        checkOut: form.checkOut
      });

      alert(res.data.message);
      navigate("/home"); // ✅ SUCCESS REDIRECT
    } catch (err) {
      alert(err.response?.data?.message || "Reservation failed");
      navigate("/home"); // ✅ FAILURE REDIRECT
    }
  };

  return (
    <div className="reserve-box">
      <h3>Reserve Your Stay</h3>

      <p><b>Max Guests:</b> {hotel.maxGuests}</p>

      <label>Adults</label>
      <input
        type="number"
        min="1"
        max={hotel.maxGuests}
        value={form.adults}
        onChange={e => {
          const adults = Number(e.target.value);
          setForm({
            ...form,
            adults,
            children: Math.min(
              form.children,
              hotel.maxGuests - adults
            )
          });
        }}
      />

      <label>Children</label>
      <input
        type="number"
        min="0"
        max={hotel.maxGuests - form.adults}
        value={form.children}
        onChange={e =>
          setForm({
            ...form,
            children: Number(e.target.value)
          })
        }
      />

      <label>Check-in</label>
      <input
        type="date"
        value={form.checkIn}
        onChange={e =>
          setForm({ ...form, checkIn: e.target.value })
        }
      />

      <label>Check-out</label>
      <input
        type="date"
        value={form.checkOut}
        onChange={e =>
          setForm({ ...form, checkOut: e.target.value })
        }
      />

      <button onClick={submit}>Confirm Booking</button>
    </div>
  );
}
