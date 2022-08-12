import { Body, Delete, Get, Post, Put, Route } from "tsoa";
import { IUser } from "../interfaces/IUser";
import users from "../mocks/users.json";
import { UsersService } from "../services/users.service";

@Route("api/users")
export default class UsersController {
  usersDataSource;
  usersService;

  constructor() {
    this.usersDataSource = users;
    this.usersService = new UsersService(this.usersDataSource);
  }

  @Get("/")
  public getAllUsers(): IUser[] {
    return this.usersService.getAllUsers();
  }

  @Get("/:id")
  public getUserById(id: string): IUser[] {
    return this.usersService.getUserById(id);
  }

  @Route("/add")
  @Post()
  public addNewUser(@Body() data: IUser): IUser[] {
    return this.usersService.addNewUser(data);
  }

  @Put("/:id")
  public updateUser(id: string, @Body() data: IUser) {
    return this.usersService.updateUser(id, data);
  }

  @Delete("/:id")
  public deleteUser(id: string) {
    return this.usersService.deleteUser(id);
  }
}
