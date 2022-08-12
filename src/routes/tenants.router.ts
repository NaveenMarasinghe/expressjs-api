import express, { Request, Response } from "express";
import TenantsController from "../controllers/tenants.controller";

const tenantsRouter = express.Router();
const tenantsController = new TenantsController();

tenantsRouter.get("/", (req: Request, res: Response) => {
  res.json(tenantsController.getAllTenants());
});

tenantsRouter.get("/:code", (req: Request, res: Response) => {
  const { code } = req.params;
  res.json(tenantsController.getTenantByCode(code));
});

tenantsRouter.post("/add", (req: Request, res: Response) => {
  if (!req.body) throw new Error("Tenant data not found");
  res.json(tenantsController.addNewTenant(req.body));
});

tenantsRouter.put("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  res.json(tenantsController.updateTenant(id, req.body));
});

tenantsRouter.delete("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  res.json(tenantsController.deleteTenant(id));
});

export default tenantsRouter;
