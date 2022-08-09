import find from "../helpers/find.helper";
import { addToJson, updateJson, deleteJson } from "../helpers/jsonFile.helper";
import { IProduct } from "../interfaces/IProduct";

export class ProductsService {
  datasource: IProduct[];
  jsonFileLocation: string;

  constructor(datasource: IProduct[]) {
    this.datasource = datasource;
    this.jsonFileLocation = "../mocks/products.json";
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

  addNewProduct(data: IProduct) {
    return addToJson({ dataset: data, dataFile: this.jsonFileLocation });
  }

  updateProduct(id: string, data: IProduct) {
    return updateJson({
      id: id,
      dataset: data,
      dataFile: this.jsonFileLocation,
    });
  }

  deleteProduct(id: string, data: IProduct) {
    return deleteJson({
      id: id,
      dataset: data,
      dataFile: this.jsonFileLocation,
    });
  }
}
