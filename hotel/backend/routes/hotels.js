import express from "express";
import Hotel from "../models/Hotel.js";

const router = express.Router();

// GET ALL HOTELS
router.get("/", async (req, res) => {
  const hotels = await Hotel.find();
  res.json(hotels);
});

// GET HOTEL BY ID
router.get("/:id", async (req, res) => {
  const hotel = await Hotel.findById(req.params.id);
  res.json(hotel);
});

export default router;
