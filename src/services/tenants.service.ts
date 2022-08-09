import find from "../helpers/find.helper";
import { addToJson, updateJson, deleteJson } from "../helpers/jsonFile.helper";
import { ITenant } from "../interfaces/ITenant";

export class TenantsService {
  datasource: ITenant[];

  constructor(datasource: ITenant[]) {
    this.datasource = datasource;
  }

  getAllTenants() {
    return find<ITenant>({ dataset: this.datasource });
  }

  getProductByCode(code: string) {
    return find<ITenant, string>({
      dataset: this.datasource,
      key: "code",
      value: code,
    });
  }

  addNewTenant(data: ITenant) {
    return addToJson({ dataset: data });
  }

  updateTenant(id: string, data: ITenant) {
    return updateJson({ id: id, dataset: data });
  }

  deleteTenant(id: string, data: ITenant) {
    return deleteJson({ id: id, dataset: data });
  }
}
