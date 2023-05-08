import { Request, Response } from "express";
import { prisma } from "../index";

export const handleData = async (req: Request, res: Response) => {
  console.log(req.query);

  res.status(200).json({
    status: "success",
  });
};
