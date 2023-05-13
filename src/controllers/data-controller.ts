import { Request, Response } from "express";
import { prisma } from "../index";

export const handleData = async (req: Request, res: Response) => {
  
  const rfidRaw = req.query.rfid as string;
  const rfid = rfidRaw.replace(/-/g, ""); 

  const readerId = req.query.reader as string; 
  const action = readerId === "0" ? "entry" : "exit"  

  console.log(rfid,action);
  
  const newParking = await prisma.parking.create({
    data: {      
      rfid: rfid,
      action:action
    },
  });

  const userData = prisma.user.findFirst({
    where:{
      rfid:newParking.rfid
    }
  });

  const data = {
    event:newParking,
    userData:userData
  }

  console.log(data);
  

  res.status(200).json({
    status: "success",
    data:data
  });
};
