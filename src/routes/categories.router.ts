import express, { Request, Response } from "express";
const data = require("../../db.json");

const categoriesRouter = express.Router();

categoriesRouter.get("/categories", (req: Request, res: Response) => {
  res.json(data.categories);
});

export default categoriesRouter;
