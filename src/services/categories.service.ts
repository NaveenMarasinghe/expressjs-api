import find from "../helpers/find.helper";
import { addToJson, updateJson, deleteJson } from "../helpers/jsonFile.helper";
import { ICategories } from "../interfaces/ICategories";

export class CategoriesService {
  datasource: ICategories[];
  jsonFileLocation: string;

  constructor(datasource: ICategories[]) {
    this.datasource = datasource;
    this.jsonFileLocation = "../mocks/categories.json";
  }

  getAllCategories() {
    return find<ICategories>({ dataset: this.datasource });
  }

  getCategoryById(id: string) {
    return find<ICategories, number>({
      dataset: this.datasource,
      key: "id",
      value: +id,
    });
  }

  addNewCategory(data: ICategories) {
    return addToJson({ dataset: data, dataFile: this.jsonFileLocation });
  }

  updateCategory(id: string, data: ICategories) {
    return updateJson({
      id: id,
      dataset: data,
      dataFile: this.jsonFileLocation,
    });
  }

  deleteCategory(id: string) {
    return deleteJson({
      id: id,
      dataFile: this.jsonFileLocation,
    });
  }
}
