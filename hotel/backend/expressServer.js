import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path"; 

import authRoutes from "./routes/auth.js";
import hotelRoutes from "./routes/hotels.js";
import reservationRoutes from "./routes/reservations.js";

import Hotel from "./models/Hotel.js";
import hotelSeed from "./hotelSeed/index.js";

const app = express();


app.use(cors());
app.use(express.json());


app.use(
  "/images",
  express.static(path.join(process.cwd(), "images"))
);


mongoose
  .connect("mongodb://127.0.0.1:27017/easyreserve")
  .then(async () => {
    console.log("MongoDB Connected");
    await syncHotels();
  })
  .catch(err => console.error(err));


async function syncHotels() {
  for (const hotel of hotelSeed) {
    await Hotel.updateOne(
      { hotelKey: hotel.hotelKey },
      { $set: hotel },
      { upsert: true }
    );
  }
  console.log("Hotels synced with database");
}


app.use("/api", authRoutes);
app.use("/api/hotels", hotelRoutes);
app.use("/api/reservations", reservationRoutes);


app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});
