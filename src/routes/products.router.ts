import express, { Request, Response } from "express";
const data = require("../../db.json");

const productRouter = express.Router();

productRouter.get("/", (req: Request, res: Response) => {
  res.json(data.items);
});

export default productRouter;
