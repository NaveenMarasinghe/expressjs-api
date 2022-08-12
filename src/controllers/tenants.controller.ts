import { Delete, Get, Post, Put, Route } from "tsoa";
import { ITenant } from "../interfaces/ITenant";
import tenants from "../mocks/tenants.json";
import { TenantsService } from "../services/tenants.service";

@Route("api/tenants")
export default class TenantsController {
  tenantDataSource;
  tenantsService;

  constructor() {
    this.tenantDataSource = tenants;
    this.tenantsService = new TenantsService(this.tenantDataSource);
  }

  @Get("/")
  public getAllProducts(): ITenant[] {
    return this.tenantsService.getAllTenants();
  }

  @Get("/:id")
  public getProductById(id: string): ITenant[] {
    return this.tenantsService.getTenantByCode(id);
  }

  @Route("/add")
  @Post()
  public addNewProduct(data: ITenant): ITenant[] {
    return this.tenantsService.addNewTenant(data);
  }

  @Put("/:id")
  public updateProduct(id: string, data: ITenant) {
    return this.tenantsService.updateTenant(id, data);
  }

  @Delete("/:id")
  public deleteProduct(id: string) {
    return this.tenantsService.deleteTenant(id);
  }
}
