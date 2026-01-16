import mongoose from "mongoose";

const HotelSchema = new mongoose.Schema({
  hotelKey: { type: String, unique: true }, // sync key
  name: String,
  city: String,
  country: String,
  pricePerNight: Number,
  currency: String,
  rating: Number,
  image: String,
  maxGuests: Number
});

export default mongoose.model("Hotel", HotelSchema);
