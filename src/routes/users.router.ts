import express, { Request, Response } from "express";
const data = require("../mocks/users.json");

const userRouter = express.Router();

userRouter.get("/", (req: Request, res: Response) => {
  const { email, password } = req.query;

  try {
    if (!email || !password) throw new Error("Invalid credentials");

    const user = data.users.find(
      (o: any) => o.email === email && o.password === password
    );
    console.log(user);
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

userRouter.post("/", (req: Request, res: Response) => {
  try {
    console.log(req.body);
    res.json({ message: "User added", user: req.body });
  } catch (err) {
    res.status(500).json(err);
  }
});

export default userRouter;
