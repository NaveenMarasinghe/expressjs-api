import express, { Request, Response } from "express";

const tenantsRouter = express.Router();

tenantsRouter.get("/", (req: Request, res: Response) => {
  res.json("return tenant data");
});

export default tenantsRouter;
