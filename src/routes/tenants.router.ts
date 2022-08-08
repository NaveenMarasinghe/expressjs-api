import express, { Request, Response } from "express";
const data = require("../../db.json");

const tenantsRouter = express.Router();

tenantsRouter.get("/", (req: Request, res: Response) => {
  res.json(data.tenants);
});

export default tenantsRouter;
