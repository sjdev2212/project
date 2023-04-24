import express from "express";
import {
    getUser,
    getUsers,
    updateUser,
    deleteUser
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

//authenticating
//router.get("/authenticate", verifyToken, (req, res) => {
//    res.send('authenticated');
//});
//router.get("/checkuser/:id", verifyUser, (req, res) => {
//
  //  res.send('user verified');
//});
//router.get("/checkadmin/:id", verifyAdmin, (req, res) => {
  //  res.send('admin verified');
//});

  

//UPDATE
router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

//GET
router.get("/:id", verifyUser, getUser);

//GET ALL
router.get("/", verifyAdmin, getUsers);

export default router;