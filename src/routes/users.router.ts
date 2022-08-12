import express, { Request, Response } from "express";
import UsersController from "../controllers/users.controller";

const userRouter = express.Router();
const usersController = new UsersController();

userRouter.get("/", (req: Request, res: Response) => {
  res.json(usersController.getAllUsers);
});

userRouter.get("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  res.json(usersController.getUserById(id));
});

userRouter.post("/add", (req: Request, res: Response) => {
  if (!req.body) throw new Error("Product data not found");
  res.json(usersController.addNewUser(req.body));
});

userRouter.put("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  res.json(usersController.updateUser(id));
});

userRouter.delete("/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  res.json(usersController.deleteUser(id));
});

export default userRouter;
