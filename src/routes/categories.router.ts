import express, { Request, Response } from "express";
import { CategoriesService } from "../services/categories.service";
import categories from "../mocks/categories.json";

const categoriesRouter = express.Router();

const categoriesDataSource = categories;

const categoriesService = new CategoriesService(categoriesDataSource);

categoriesRouter.get("/", (req: Request, res: Response) => {
  res.json(categoriesService.getAllCategories());
});

categoriesRouter.get("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  res.json(categoriesService.getCategoryById(id));
});

categoriesRouter.post("/add", (req: Request, res: Response) => {
  if (!req.body) throw new Error("Category data not found");
  res.json(categoriesService.addNewCategory(req.body));
});

categoriesRouter.put("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  res.json(categoriesService.updateCategory(id, req.body));
});

categoriesRouter.delete("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  res.json(categoriesService.deleteCategory(id));
});

export default categoriesRouter;
