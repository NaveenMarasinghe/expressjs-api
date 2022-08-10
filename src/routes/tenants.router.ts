import express, { Request, Response } from "express";
import { TenantsService } from "../services/tenants.service";
import tenants from "../mocks/tenants.json";

const tenantsRouter = express.Router();

const tenantsDataSource = tenants;

const tenantsService = new TenantsService(tenantsDataSource);

tenantsRouter.get("/", (req: Request, res: Response) => {
  res.json(tenantsService.getAllTenants());
});

tenantsRouter.get("/:code", (req: Request, res: Response) => {
  const { code } = req.params;
  res.json(tenantsService.getTenantByCode(code));
});

tenantsRouter.post("/add", (req: Request, res: Response) => {
  if (!req.body) throw new Error("Tenant data not found");
  res.json(tenantsService.addNewTenant(req.body));
});

tenantsRouter.put("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  res.json(tenantsService.updateTenant(id, req.body));
});

tenantsRouter.delete("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  res.json(tenantsService.deleteTenant(id));
});

export default tenantsRouter;
