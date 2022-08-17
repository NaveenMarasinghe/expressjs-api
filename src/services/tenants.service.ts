import { connected } from "process";
import find from "../helpers/find.helper";
import { addToJson, updateJson, deleteJson } from "../helpers/jsonFile.helper";
import { ITenant } from "../interfaces/ITenant";

export class TenantsService {
  datasource: ITenant[];
  jsonFileLocation: string;

  constructor(datasource: ITenant[]) {
    this.datasource = datasource;
    this.jsonFileLocation = "../mocks/tenants.json";
  }

  getAllTenants() {
    return find<ITenant>({ dataset: this.datasource });
  }

  getTenantByCode(code: string) {
    return find<ITenant, string>({
      dataset: this.datasource,
      key: "code",
      value: code,
    });
  }

  addNewTenant(data: ITenant) {
    return addToJson({ dataset: data, dataFile: this.jsonFileLocation });
  }

  updateTenant(id: string, data: ITenant) {
    return updateJson({
      id: parseInt(id),
      dataset: data,
      dataFile: this.jsonFileLocation,
    });
  }

  deleteTenant(id: string) {
    return deleteJson({
      id: parseInt(id),
      dataFile: this.jsonFileLocation,
    });
  }
}
