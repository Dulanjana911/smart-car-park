import { Request, Response } from "express";
import { prisma } from "../index";

export const handleData = async (req: Request, res: Response) => {
  
  const rfidRaw = req.query.rfid as string;
  const rfid = rfidRaw.replace(/-/g, ""); 
  
  const readerId = req.query.reader as string; 
  console.log(rfid,readerId);
  


  res.status(200).json({
    status: "success",
  });
};
