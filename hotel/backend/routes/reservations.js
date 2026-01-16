import express from "express";
import Reservation from "../models/Reservation.js";
import Hotel from "../models/Hotel.js";

const router = express.Router();

/* ================= CREATE ================= */
router.post("/", async (req, res) => {
  try {
    const {
      hotelId,
      userEmail,
      adults,
      children,
      checkIn,
      checkOut
    } = req.body;

    if (!userEmail)
      return res.status(401).json({ message: "Login required" });

    const hotel = await Hotel.findById(hotelId);
    if (!hotel)
      return res.status(404).json({ message: "Hotel not found" });

    const totalGuests = Number(adults) + Number(children);
    if (totalGuests > hotel.maxGuests) {
      return res.status(400).json({
        message: `Maximum ${hotel.maxGuests} guests allowed`
      });
    }

    await Reservation.create({
      hotelId,
      hotelName: hotel.name,
      hotelCity: hotel.city,
      hotelCountry: hotel.country,
      hotelImage: hotel.image,
      pricePerNight: hotel.pricePerNight,
      currency: hotel.currency,
      maxGuests: hotel.maxGuests,
      userEmail,
      adults,
      children,
      checkIn,
      checkOut
    });

    res.json({ message: "Reservation successful" });
  } catch {
    res.status(500).json({ message: "Reservation failed" });
  }
});

/* ================= READ ================= */
router.get("/:email", async (req, res) => {
  const data = await Reservation.find({
    userEmail: req.params.email
  }).sort({ createdAt: -1 });

  res.json(data);
});

/* ================= UPDATE ================= */
router.put("/:id", async (req, res) => {
  try {
    await Reservation.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.json({ message: "Reservation updated" });
  } catch {
    res.status(400).json({ message: "Update failed" });
  }
});

/* ================= DELETE ================= */
router.delete("/:id", async (req, res) => {
  try {
    await Reservation.findByIdAndDelete(req.params.id);
    res.json({ message: "Reservation cancelled" });
  } catch {
    res.status(400).json({ message: "Cancellation failed" });
  }
});

export default router;
