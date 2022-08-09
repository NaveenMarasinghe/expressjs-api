import express, { Request, Response } from "express";
import { ProductsService } from "../services/products.service";
import products from "../mocks/products.json";

const productRouter = express.Router();

const productsDataSource = products;

const productsService = new ProductsService(productsDataSource);

productRouter.get("/", (req: Request, res: Response) => {
  res.json(productsService.getAllProducts());
});

productRouter.get("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  res.json(productsService.getProductById(id));
});

productRouter.post("/AddNewProduct", (req: Request, res: Response) => {
  if (!req.body) throw new Error("Product data not found");
  res.json(productsService.addNewProduct(req.body));
});

productRouter.put("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  res.json(productsService.updateProduct(id, req.body));
});

productRouter.delete("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  res.json(productsService.deleteProduct(id, req.body));
});

export default productRouter;
