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

export default productRouter;
