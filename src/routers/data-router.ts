import express from "express";
import { handleData } from "./../controllers/data-controller";

const dataRouter = express.Router();

dataRouter.route('/').get(handleData)

export default dataRouter;
