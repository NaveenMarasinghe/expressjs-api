import find from "../helpers/find.helper";
import { addToJson, updateJson, deleteJson } from "../helpers/jsonFile.helper";
import { IUser } from "../interfaces/IUser";

export class UsersService {
  datasource: IUser[];
  jsonFileLocation: string;

  constructor(datasource: IUser[]) {
    this.datasource = datasource;
    this.jsonFileLocation = "../mocks/users.json";
  }

  getAllUsers() {
    return find<IUser>({ dataset: this.datasource });
  }

  getUserById(id: string) {
    return find<IUser, number>({
      dataset: this.datasource,
      key: "id",
      value: +id,
    });
  }

  addNewUser(data: IUser) {
    return addToJson({ dataset: data, dataFile: this.jsonFileLocation });
  }

  updateUser(id: string, data: IUser) {
    return updateJson({
      id: parseInt(id),
      dataset: data,
      dataFile: this.jsonFileLocation,
    });
  }

  deleteUser(id: string) {
    return deleteJson({
      id: parseInt(id),
      dataFile: this.jsonFileLocation,
    });
  }
}
