import find from "../helpers/find.helper";
import { IProduct } from "../interfaces/IProduct";

export class ProductsService {
  datasource: IProduct[];

  constructor(datasource: IProduct[]) {
    this.datasource = datasource;
  }

  getAllProducts() {
    return find<IProduct>({ dataset: this.datasource });
  }

  getProductById(id: string) {
    return find<IProduct, number>({
      dataset: this.datasource,
      key: "id",
      value: +id,
    });
  }
}
