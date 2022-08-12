import { Body, Delete, Get, Post, Put, Route } from "tsoa";
import { ICategories } from "../interfaces/ICategories";
import categories from "../mocks/categories.json";
import { CategoriesService } from "../services/categories.service";

@Route("api/products")
export default class CategoriesController {
  categoriesDataSource;
  productsService;

  constructor() {
    this.categoriesDataSource = categories;
    this.productsService = new CategoriesService(this.categoriesDataSource);
  }

  @Get("/")
  public getAllProducts(): ICategories[] {
    return this.productsService.getAllCategories();
  }

  @Get("/:id")
  public getProductById(id: string): ICategories[] {
    return this.productsService.getCategoryById(id);
  }
  @Route("/add")
  @Post()
  public addNewProduct(@Body() data: ICategories): ICategories[] {
    return this.productsService.addNewCategory(data);
  }

  @Put("/:id")
  public updateProduct(id: string, data: ICategories) {
    return this.productsService.updateCategory(id, data);
  }

  @Delete("/:id")
  public deleteProduct(id: string) {
    return this.productsService.deleteCategory(id);
  }
}
