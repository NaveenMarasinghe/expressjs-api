import path from "path";
import { IProduct } from "../interfaces/IProduct";

interface IAddToJsonOptions {
  dataset: any;
  id?: string;
}

export class InvalidDatasetError extends Error {
  message = "Dataset cannot be undefined";

  constructor() {
    super();
    super.message = this.message;
  }
}

export function addToJson(options: IAddToJsonOptions) {
  const fs = require("fs");
  const { dataset } = options;
  if (!dataset) throw new InvalidDatasetError();

  const data = fs.readFileSync(
    path.resolve(path.resolve(__dirname, "../mocks/products.json"))
  );
  var dataObject = JSON.parse(data);

  dataObject.push(dataset);

  const newData = JSON.stringify(dataObject);
  fs.writeFile(
    path.resolve(__dirname, "../mocks/products.json"),
    newData,
    (err: any) => {
      if (err) throw err;
    }
  );
}

export function updateJson(options: IAddToJsonOptions) {
  const fs = require("fs");
  const { id, dataset } = options;
  if (!dataset) throw new InvalidDatasetError();

  const data = fs.readFileSync(
    path.resolve(path.resolve(__dirname, "../mocks/products.json"))
  );
  var dataObject = JSON.parse(data);

  const updatedData = dataObject.map((data: IProduct) =>
    data.id.toString() == id ? { ...dataset } : data
  );

  const newData = JSON.stringify(updatedData);
  fs.writeFile(
    path.resolve(__dirname, "../mocks/products.json"),
    newData,
    (err: any) => {
      if (err) throw err;
    }
  );
}

export function deleteJson(options: IAddToJsonOptions) {
  const fs = require("fs");
  const { id, dataset } = options;
  if (!dataset) throw new InvalidDatasetError();

  const data = fs.readFileSync(
    path.resolve(path.resolve(__dirname, "../mocks/products.json"))
  );
  var dataObject = JSON.parse(data);

  const updatedData = dataObject.filter(
    (data: IProduct) => data.id.toString() !== id
  );

  const newData = JSON.stringify(updatedData);
  fs.writeFile(
    path.resolve(__dirname, "../mocks/products.json"),
    newData,
    (err: any) => {
      if (err) throw err;
    }
  );
}
