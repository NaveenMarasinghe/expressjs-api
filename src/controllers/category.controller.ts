import { Body, Delete, Get, Post, Put, Route } from "tsoa";
import { ICategories } from "../interfaces/ICategories";
import categories from "../mocks/categories.json";
import { CategoriesService } from "../services/categories.service";

@Route("api/categories")
export default class CategoriesController {
  categoriesDataSource;
  categoryService;

  constructor() {
    this.categoriesDataSource = categories;
    this.categoryService = new CategoriesService(this.categoriesDataSource);
  }

  @Get("/")
  public getAllCategories(): ICategories[] {
    return this.categoryService.getAllCategories();
  }

  @Get("/:id")
  public getCategoryById(id: string): ICategories[] {
    return this.categoryService.getCategoryById(id);
  }

  @Route("/add")
  @Post()
  public addNewCategory(@Body() data: ICategories): ICategories[] {
    return this.categoryService.addNewCategory(data);
  }

  @Put("/:id")
  public updateCategory(id: string, @Body() data: ICategories) {
    return this.categoryService.updateCategory(id, data);
  }

  @Delete("/:id")
  public deleteCategory(id: string) {
    return this.categoryService.deleteCategory(id);
  }
}
