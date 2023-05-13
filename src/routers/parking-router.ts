import express from "express";
import { getAllParkings } from "../controllers/parking-controller";

const parkingRouter = express.Router();

parkingRouter.route("/").get(getAllParkings);

export default parkingRouter;
