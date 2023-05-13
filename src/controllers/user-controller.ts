import { Request, Response } from "express";
import { prisma } from "../index";

export const getAllUsers = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();

  res.status(200).json({
    status: "success",
    data: users,
  });
};

export const createUser = async (req: Request, res: Response) => {
  const { rfid, uname, sid, vmodel, phone } = req.body;

  const newUser = await prisma.user.create({
    data: {      
      rfid: rfid,
      uname: uname,
      sid: sid,
      vmodel: vmodel,
      phone: phone,
    },
  });

  res.status(201).json({
    status: "success",
    data: newUser,
  });
};

export const getUserById = async (req: Request, res: Response) => {
  const { uid } = req.params;
  const user = await prisma.user.findFirst({
    where: {
      uid: parseInt(uid),
    },
  });

  res.status(200).json({
    status: "success",
    user,
  });
};
