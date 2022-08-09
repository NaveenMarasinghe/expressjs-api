import express, { Request, Response } from "express";
import { TenantsService } from "../services/tenants.service";
import tenants from "../mocks/tenants.json";

const productRouter = express.Router();

const tenantsDataSource = tenants;

const tenantsService = new TenantsService(tenantsDataSource);

productRouter.get("/", (req: Request, res: Response) => {
  res.json(tenantsService.getAllTenants());
});

productRouter.get("/:code", (req: Request, res: Response) => {
  const { code } = req.params;
  res.json(tenantsService.getProductByCode(code));
});

productRouter.post("/AddNewProduct", (req: Request, res: Response) => {
  if (!req.body) throw new Error("Product data not found");
  res.json(tenantsService.addNewTenant(req.body));
});

productRouter.put("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  res.json(tenantsService.updateTenant(id, req.body));
});

productRouter.delete("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  res.json(tenantsService.deleteTenant(id, req.body));
});

export default productRouter;
