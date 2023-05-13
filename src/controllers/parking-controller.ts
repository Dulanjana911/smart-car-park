import { Request, Response } from "express";
import { prisma } from "../index";

export const getAllParkings = async (req: Request, res: Response) => {
  const parkings = await prisma.parking.findMany({
    include: {
      user:true,
    },
  });

  res.status(200).json({
    status: "success",
    data: parkings,
  });
};
