import express, { Request, Response } from "express";
import CategoriesController from "../controllers/category.controller";

const categoriesRouter = express.Router();
const categoriesController = new CategoriesController();

categoriesRouter.get("/", (req: Request, res: Response) => {
  res.json(categoriesController.getAllCategories);
});

categoriesRouter.get("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  res.json(categoriesController.getCategoryById(id));
});

categoriesRouter.post("/add", (req: Request, res: Response) => {
  if (!req.body) throw new Error("Category data not found");
  res.json(categoriesController.addNewCategory(req.body));
});

categoriesRouter.put("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  res.json(categoriesController.updateCategory(id, req.body));
});

categoriesRouter.delete("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  res.json(categoriesController.deleteCategory(id));
});

export default categoriesRouter;
