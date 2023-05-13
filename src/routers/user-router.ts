import express from "express";
import { getAllUsers,createUser,updateUser,deleteUser } from "./../controllers/user-controller";

const dataRouter = express.Router();

dataRouter.route('/').get(getAllUsers).post(createUser).put(updateUser).delete(deleteUser);

export default dataRouter;
