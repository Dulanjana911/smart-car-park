import { Request, Response } from "express";
import { prisma } from "../index";

export const handleData = async (req: Request, res: Response) => {
  try {
    const rfidRaw = req.query.rfid as string;
    const rfid = rfidRaw.replace(/-/g, "");

    const readerId = req.query.reader as string;
    const action = readerId === "0" ? "entry" : "exit";

    console.log(rfid, action);

    const newParking = await prisma.parking.create({
      data: {
        rfid: rfid,
        time: new Date(),
        action: action,
      },
    });

    res.status(200).json({
      status: "success",
      data: newParking,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      data: {},
    });
  }
};
