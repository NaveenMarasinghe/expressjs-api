import { Body, Delete, Get, Post, Put, Route, Tags } from "tsoa";
import { IProduct } from "../interfaces/IProduct";
import products from "../mocks/products.json";
import { ProductsService } from "../services/products.service";

@Route("api/v1/products")
@Tags("Products")
export default class ProductsController {
  productsDataSource;
  productsService;

  constructor() {
    this.productsDataSource = products;
    this.productsService = new ProductsService(this.productsDataSource);
  }

  @Get("/")
  public getAllProducts(): IProduct[] {
    return this.productsService.getAllProducts();
  }

  @Get("/:id")
  public getProductById(id: string): IProduct[] {
    return this.productsService.getProductById(id);
  }

  @Post("/")
  public addNewProduct(@Body() data: any) {
    return this.productsService.addNewProduct(data);
  }

  @Put("/:id")
  public updateProduct(id: string, @Body() data: IProduct) {
    return this.productsService.updateProduct(id, data);
  }

  @Delete("/:id")
  public deleteProduct(id: string) {
    return this.productsService.deleteProduct(id);
  }
}
