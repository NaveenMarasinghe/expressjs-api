import express, { Request, Response } from "express";

const categoriesRouter = express.Router();

categoriesRouter.get("/categories", (req: Request, res: Response) => {
  res.json("category data");
});

export default categoriesRouter;
