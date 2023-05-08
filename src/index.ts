import express, { Request, Response } from "express";
import { Prisma, PrismaClient } from "@prisma/client";
import dataRouter from "./routers/data-router";
const cors = require("cors");
export const prisma = new PrismaClient();

const app = express();

//! Global Midlleware
app.use(cors());
app.use(express.json());

//! Mount Routers
app.use("/data", dataRouter);

const port = process.env.PORT || 8000;

const server = app.listen(port, () =>
  console.log(`HTTPS Server Ready`)
);
