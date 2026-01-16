import mongoose from "mongoose";

const ReservationSchema = new mongoose.Schema({
  hotelId: String,

  hotelName: String,
  hotelCity: String,
  hotelCountry: String,
  hotelImage: String,
  pricePerNight: Number,
  currency: String,
  maxGuests: Number,

  userEmail: String,
  adults: Number,
  children: Number,
  checkIn: String,
  checkOut: String,

  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Reservation", ReservationSchema);
