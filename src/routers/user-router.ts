import express from "express";
import { getAllUsers,createUser} from "./../controllers/user-controller";

const userRouter = express.Router();

userRouter.route('/').get(getAllUsers).post(createUser);

export default userRouter;
