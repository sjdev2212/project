import express from "express";
import {
    createHotel,
    deleteHotel,
    getHotel,
    getHotels,
    updateHotel,
  } from "../controllers/hotel.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();




//Create
router.post("/",verifyAdmin, createHotel);    
//update
router.put("/:id",verifyAdmin, updateHotel);
//delete
router.delete("/:id", verifyAdmin, deleteHotel);

//getone
router.get ("/:id",verifyUser, getHotel);
//get all 
router.get("/", verifyUser, getHotels); 


   
export default router;